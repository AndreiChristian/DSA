export const createRandomArray = (length:number): number[] => {
  const array: number[] = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }

  return array;
};

//* Bubble Sort 
//* Selection Sort
// *Insertion Sort
// *Shell Sort
// Counting Sort
// Bucket Sort
// Radix Sort

// Moderate Difficulty:
// 8. Merge Sort

// Quick Sort
// Heap Sort
// Advanced Difficulty:
// 11. Tim Sort

// Intro Sort
// Smooth Sort
// Cycle Sort
// Cocktail Sort
// Comb Sort
// Gnome Sort
// Strand Sort
// Tournament Sort
// Sleep Sort