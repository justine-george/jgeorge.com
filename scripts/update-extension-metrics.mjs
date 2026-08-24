// Scrapes Chrome Web Store user counts into src/data/extension-metrics.json.
//
// Run by .github/workflows/update-metrics.yml on a schedule. The workflow commits
// the result only when a count actually changes, so a run that finds nothing new
// is a no-op rather than a commit.
//
// Exits non-zero if any listing can't be read, so a broken scrape fails loudly in
// Actions instead of quietly leaving a stale number in place.

import { readFile, writeFile } from "node:fs/promises";

const METRICS_PATH = new URL("../src/data/extension-metrics.json", import.meta.url);
const STORE_URL = "https://chromewebstore.google.com/detail";
const REQUEST_TIMEOUT_MS = 20_000;

// The listing renders the count as plain text, e.g. "4,000 users". Class names on
// the surrounding elements are build-generated and rotate between Google deploys,
// so match the text rather than the markup. Larger listings render "10,000+ users".
const USER_COUNT_PATTERN = /([\d,]+)\+?\s*users/i;

async function fetchUserCount(extensionId) {
	const res = await fetch(`${STORE_URL}/${extensionId}`, {
		signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
		headers: { "accept-language": "en-US,en;q=0.9" },
	});

	if (!res.ok) {
		throw new Error(`${extensionId}: store returned ${res.status}`);
	}

	const match = USER_COUNT_PATTERN.exec(await res.text());

	if (!match) {
		throw new Error(`${extensionId}: no user count found — the listing markup may have changed`);
	}

	return Number(match[1].replaceAll(",", ""));
}

const metrics = JSON.parse(await readFile(METRICS_PATH, "utf-8"));
const today = new Date().toISOString().slice(0, 10);
let changed = false;

for (const [name, entry] of Object.entries(metrics)) {
	const users = await fetchUserCount(entry.extensionId);

	if (users === entry.users) {
		console.log(`${name}: ${users} users (unchanged)`);
		continue;
	}

	console.log(`${name}: ${entry.users} -> ${users} users`);
	entry.users = users;
	entry.updatedAt = today;
	changed = true;
}

if (changed) {
	await writeFile(METRICS_PATH, `${JSON.stringify(metrics, null, "\t")}\n`);
	console.log("Wrote src/data/extension-metrics.json");
} else {
	console.log("No changes.");
}
