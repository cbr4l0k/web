const FILE_PREFIX_PATTERN = /\/(\d+)_.*\.mdx?$/;

export function getButterEveryWeekOrderKey(path) {
  const match = path.match(FILE_PREFIX_PATTERN);

  if (!match) {
    throw new Error(`Butter Every Week partial is missing a numeric prefix: ${path}`);
  }

  return Number.parseInt(match[1], 10);
}

export function sortButterEveryWeekPaths(paths) {
  return [...paths].sort(
    (left, right) => getButterEveryWeekOrderKey(right) - getButterEveryWeekOrderKey(left),
  );
}
