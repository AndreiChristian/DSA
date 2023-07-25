function binarySearch(arr: any[], target: number): number {
  const mid = arr.length / 2;

  if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  } else if (arr[mid] < target) {
    return binarySearch(arr.slice(mid + 1, arr.length - 1), target);
  } else {
    return arr[mid];
  }
}
