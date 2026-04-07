import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("layout surfaces use the page background instead of the white surface token", () => {
  const baseLayout = readFileSync(new URL("../src/layouts/BaseLayout.astro", import.meta.url), "utf8");
  const globalStyles = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");

  assert.match(
    baseLayout,
    /background:var\(--color-bg\)/,
    "footer should use the page background token",
  );

  assert.match(
    globalStyles,
    /@media \(max-width: 768px\) \{[\s\S]*?\.sidebar \{[\s\S]*?background: var\(--color-bg\);/,
    "mobile sidebar should use the page background token",
  );
});
