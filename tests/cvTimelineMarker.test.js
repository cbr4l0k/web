import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("cv timeline entries use a square marker instead of a circular one", () => {
  const cvEntry = readFileSync(new URL("../src/components/CVEntry.astro", import.meta.url), "utf8");

  assert.doesNotMatch(
    cvEntry,
    /rounded-full bg-\[var\(--color-bg\)\] border-2 border-\[var\(--color-muted\)\]/,
  );

  assert.match(
    cvEntry,
    /absolute -left-\[[0-9]+px\] top-[0-9.]+ h-3 w-3 bg-\[var\(--color-muted\)\]/,
  );
});
