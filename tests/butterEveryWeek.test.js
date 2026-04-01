import test from "node:test";
import assert from "node:assert/strict";

import {
  getButterEveryWeekOrderKey,
  sortButterEveryWeekPaths,
} from "../src/utils/butterEveryWeek.js";

test("getButterEveryWeekOrderKey extracts the numeric prefix from a partial path", () => {
  assert.equal(
    getButterEveryWeekOrderKey("/src/partials/butter_every_week/043_long-run-batch.mdx"),
    43,
  );
});

test("getButterEveryWeekOrderKey throws when the filename has no numeric prefix", () => {
  assert.throws(
    () => getButterEveryWeekOrderKey("/src/partials/butter_every_week/intro.mdx"),
    /numeric prefix/i,
  );
});

test("sortButterEveryWeekPaths sorts higher numeric prefixes first", () => {
  assert.deepEqual(
    sortButterEveryWeekPaths([
      "/src/partials/butter_every_week/001_first.mdx",
      "/src/partials/butter_every_week/043_latest.mdx",
      "/src/partials/butter_every_week/010_middle.mdx",
    ]),
    [
      "/src/partials/butter_every_week/043_latest.mdx",
      "/src/partials/butter_every_week/010_middle.mdx",
      "/src/partials/butter_every_week/001_first.mdx",
    ],
  );
});
