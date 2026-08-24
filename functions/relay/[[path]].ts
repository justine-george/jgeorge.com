// Cloudflare Pages Function: first-party reverse proxy for PostHog.
//
// PostHog's ingestion domains are on every ad blocker's list, so requests to them
// are dropped before they leave the browser — including on the owner's own machine.
// Serving them from /relay/ on this domain makes them same-origin: there is no
// third-party hostname left for a blocklist to match.
//
// This only ever carries traffic for visitors who accepted cookies.
// src/components/PostHog.astro does not load the SDK otherwise, so for everyone
// else there is nothing to proxy.
//
// The path is deliberately not "ph", "analytics", "tracking" or "telemetry" —
// PostHog's proxy docs list those as terms blockers pattern-match on the path
// alone, regardless of which domain serves them.

// US cloud. An EU project would use eu.i.posthog.com / eu-assets.i.posthog.com.
const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";

// The JS bundles (array.js, recorder.js, and the per-key config under /array/)
// come from the asset host. Everything else — /e/, /s/, /flags/ — is ingestion.
const ASSET_PREFIXES = ["static", "array"];

// Hand-rolled rather than pulling in @cloudflare/workers-types for one file.
interface RelayContext {
	request: Request;
	params: { path?: string[] };
}

// Cloudflare's fetch accepts a `cf` object that standard RequestInit doesn't know about.
type ProxyInit = RequestInit & { cf?: { cacheTtl: number; cacheEverything: boolean } };

export const onRequest = async ({ request, params }: RelayContext): Promise<Response> => {
	const segments = params.path ?? [];
	const isAsset = segments.length > 0 && ASSET_PREFIXES.includes(segments[0] as string);

	const upstream = new URL(`https://${isAsset ? ASSET_HOST : API_HOST}/${segments.join("/")}`);
	upstream.search = new URL(request.url).search;

	const headers = new Headers(request.headers);
	// Cookies set on this domain (the consent choice, the theme) are none of PostHog's
	// business, and a same-origin proxy would otherwise hand them over automatically.
	// PostHog's own identifiers ride in the request body, so dropping these costs nothing.
	headers.delete("cookie");

	const init: ProxyInit = {
		method: request.method,
		headers,
		// A GET or HEAD with a body is a TypeError.
		body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
	};

	// Bundles are versioned and safe to hold at the edge. Events never are — a cached
	// capture response would be indistinguishable from a dropped one.
	if (isAsset) {
		init.cf = { cacheTtl: 3600, cacheEverything: true };
	}

	return fetch(upstream.toString(), init);
};
