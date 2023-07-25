function peakIndexInMountainArray(arr: number[]): number {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] < arr[middle + 1]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
}

const arr1 = [0,1,0];
const arr2 = [0,2,1,0];
const arr3 = [0,10,5,2,0];

console.log(peakIndexInMountainArray(arr1));  // Output: 1
console.log(peakIndexInMountainArray(arr2));  // Output: 1
console.log(peakIndexInMountainArray(arr3));  // Output: 1
