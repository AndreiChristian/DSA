/*
c. Find the Kth largest element in a number stream
Design a class to efficiently find the Kth largest element in a stream of numbers. The class should have the following
two things:

The constructor of the class should accept an integer array containing initial
numbers from the stream and an integer K.

The class should expose a function add(int num) which will store
the given number and return the Kth largest number
*/

class KthLargest{

  private elements:number[];
  k:number;

  constructor(elements:number[],k:number){
    this.elements = elements.sort((a,b)=> a- b)
    this.k = k;
  }

  private binarySearch(n:number):number{
    let left = 0;
    let right = this.elements.length -1;

    while(left<=right){
      const mid = Math.floor((left + right)/2)
      if(this.elements[mid] === n){
       return mid; 
      }
      if(this.elements[mid] < n){
        left = mid + 1; 
      } else {
        right = mid -1;
      }
    }
    return left;
  }

  add(n:number){
    const index = this.binarySearch(n);

    this.elements.splice(index,0,n);
  }

  getKthLargest():number{
    if(this.k>=this.elements.length) return -1;
    return this.elements[this.k -1]
  }

}

const project = new KthLargest([4, 1, 3, 12, 7, 14],3);
console.log(project.getKthLargest())




