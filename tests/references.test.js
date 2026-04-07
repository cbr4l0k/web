import test from "node:test";
import assert from "node:assert/strict";

import {
  getReferenceCategoryAnchor,
  groupReferencesByCategory,
} from "../src/utils/references.js";

test("groupReferencesByCategory normalizes category labels and sorts references by title", () => {
  const grouped = groupReferencesByCategory([
    {
      title: "Zeta",
      description: "desc",
      reference: "",
      category: "  math ",
    },
    {
      title: "Alpha",
      description: "desc",
      reference: "",
      category: "Math",
    },
  ]);

  assert.equal(grouped.length, 1);
  assert.equal(grouped[0].title, "Math");
  assert.equal(grouped[0].anchor, "math");
  assert.deepEqual(
    grouped[0].references.map((reference) => reference.title),
    ["Alpha", "Zeta"],
  );
});

test("getReferenceCategoryAnchor returns a stable anchor slug", () => {
  assert.equal(getReferenceCategoryAnchor("Applied Crypto"), "applied-crypto");
});
