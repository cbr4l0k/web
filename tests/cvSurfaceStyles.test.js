import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("cv surfaces do not use bordered card classes", () => {
  const cvEntry = readFileSync(new URL("../src/components/CVEntry.astro", import.meta.url), "utf8");
  const cvProject = readFileSync(new URL("../src/components/CVProject.astro", import.meta.url), "utf8");
  const cvPublication = readFileSync(new URL("../src/components/CVPublication.astro", import.meta.url), "utf8");
  const mePage = readFileSync(new URL("../src/pages/me.astro", import.meta.url), "utf8");

  assert.doesNotMatch(cvEntry, /rounded-lg border border-\[var\(--color-border\)\]/);
  assert.doesNotMatch(cvProject, /rounded-lg border border-\[var\(--color-border\)\]/);
  assert.doesNotMatch(cvPublication, /rounded-lg border border-\[var\(--color-border\)\]/);
  assert.doesNotMatch(mePage, /border border-\[var\(--color-border\)\] rounded-lg/);
});
