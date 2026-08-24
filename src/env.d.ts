/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@pagefind/default-ui" {
	declare class PagefindUI {
		constructor(arg: unknown);
	}
}

interface ImportMetaEnv {
	readonly WEBMENTION_API_KEY: string;
	readonly PUBLIC_POSTHOG_KEY: string;
	readonly PUBLIC_POSTHOG_HOST: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// Defined by PostHog.astro, which is absent in dev builds and whenever no project
// key is configured — hence both being optional.
//
// __loadPostHog injects and initialises the SDK. It is only called once consent has
// been given, so that no PostHog cookie is set and no request is made before then.
interface Window {
	__loadPostHog?: () => void;
	posthog?: {
		opt_out_capturing?: () => void;
	};
}
