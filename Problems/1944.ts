function canSeePersonsCount(heights: number[]): number[] {
  const answer: number[] = [];
  
  for (let i = 0; i < heights.length; i++) {
    let canSee = 0;
    
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] > heights[i]) {
        canSee++;
        break;
      } else if (heights[j] < heights[i]) {
        canSee++;
      }
    }

    answer.push(canSee);
  }

  return answer;
}


console.log([10,6,8,5,11,9])
console.log(canSeePersonsCount([10,6,8,5,11,9]))

console.log([5,1,2,3,10])
console.log(canSeePersonsCount( [5,1,2,3,10]))
