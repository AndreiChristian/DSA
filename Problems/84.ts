function largestRectangleArea(heights: number[]): number {

  let maxArea = 0;
  const stack:number[] = [];

  for(let i=0; i<= heights.length; i++){

    const currentHeight = i < heights.length ? heights[i] : -1

    while(stack.length >0 && currentHeight <= heights[stack[stack.length - 1]] ){
      const height = heights[stack.pop()!]
      const width = stack.length === 0 ? i : i - stack[stack.length -1] -1
      maxArea = Math.max(maxArea, width * height)
    }

    stack.push(i)

  }

  return maxArea

}
