import { BinaryNode } from "./pre_order_traversal.ts";


function breadth_first_search(head:BinaryNode, needle:number):boolean{

  const queue = [head];

  while (queue.length >=0){

    const curr = queue.shift() as BinaryNode

    if (curr.value === needle){
      return true
    }

    curr.left && queue.push(curr.left)
    curr.right && queue.push(curr.right)

  }

}
