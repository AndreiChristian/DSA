function linearSearch(array: any[], t: any): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) {
      return i;
    }
  }

  return -1;
}
