import { BinaryNode } from "./pre_order_traversal";

function walk(curr:BinaryNode | null,path:number[]):void{

 if (!curr){
    return
  }

  // recurse
  // pre

  walk(curr.left,path)

  path.push(curr.value) 

  walk(curr.right,path)

  // recurse
  // post

}

function in_order_traversal(head:BinaryNode):number[]{

  const path:number[] = []
  walk(head, path)
  return path

}
