function labelToAnchor(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function labelFromCategory(category) {
  return String(category ?? "").trim();
}

function formatCategoryTitle(category) {
  return labelFromCategory(category).replace(/\w\S*/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
  );
}

export function getReferenceCategoryAnchor(label) {
  return labelToAnchor(labelFromCategory(label));
}

function groupByReferenceLabels(references) {
  const categoryMap = new Map();

  for (const reference of references) {
    const title = formatCategoryTitle(reference.category);
    const key = title.toLowerCase();

    if (!categoryMap.has(key)) {
      categoryMap.set(key, {
        key,
        title,
        anchor: getReferenceCategoryAnchor(title),
        references: [],
      });
    }

    categoryMap.get(key).references.push(reference);
  }

  return [...categoryMap.values()].map((group) => ({
    ...group,
    references: [...group.references].sort((a, b) =>
      a.title.localeCompare(b.title)
    ),
  }));
}

export function groupReferencesByCategory(categories, references) {
  if (references === undefined) {
    return groupByReferenceLabels(categories);
  }

  const categoryMap = new Map(
    categories.map((cat) => [
      cat.id,
      {
        key: cat.id,
        title: cat.label,
        anchor: getReferenceCategoryAnchor(cat.label),
        references: [],
      },
    ])
  );

  for (const reference of references) {
    const group = categoryMap.get(reference.category);
    if (group) {
      group.references.push(reference);
    }
  }

  return [...categoryMap.values()]
    .filter((group) => group.references.length > 0)
    .map((group) => ({
      ...group,
      references: [...group.references].sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
    }));
}
