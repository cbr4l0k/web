function labelToAnchor(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function groupReferencesByCategory(categories, references) {
  const categoryMap = new Map(
    categories.map((cat) => [
      cat.id,
      { key: cat.id, title: cat.label, anchor: labelToAnchor(cat.label), references: [] },
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
