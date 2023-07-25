function cartesianProduct(set1: Set<number>, set2: Set<number>): Set<number> {
  const newSet = new Set<any>();

  for (const i of set1.values()) {
    for (const j of set2.values()) {
      newSet.add({ i, j });
    }
  }

  return newSet;
}
