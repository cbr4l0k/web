function normalizeCategory(category) {
  const normalized = String(category ?? "")
    .trim()
    .replace(/\s+/g, " ");

  return normalized || "Unsorted";
}

function toTitleCase(value) {
  return value.replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

function formatCategoryTitle(category) {
  return category === category.toLowerCase()
    ? toTitleCase(category)
    : category;
}

export function getReferenceCategoryAnchor(category) {
  return normalizeCategory(category)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function groupReferencesByCategory(references) {
  const grouped = new Map();

  for (const reference of references) {
    const normalizedCategory = normalizeCategory(reference.category);
    const key = normalizedCategory.toLowerCase();

    if (!grouped.has(key)) {
      grouped.set(key, {
        key,
        title: formatCategoryTitle(normalizedCategory),
        anchor: getReferenceCategoryAnchor(normalizedCategory),
        references: [],
      });
    }

    grouped.get(key).references.push(reference);
  }

  return [...grouped.values()]
    .map((group) => ({
      ...group,
      references: [...group.references].sort((left, right) =>
        left.title.localeCompare(right.title),
      ),
    }))
    .sort((left, right) => left.title.localeCompare(right.title));
}
