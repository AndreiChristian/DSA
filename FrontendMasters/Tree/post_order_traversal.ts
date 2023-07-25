import { BinaryNode } from "./pre_order_traversal";


function walk(current: BinaryNode | null, path:number[]):void{

  if (!current){
    return
  }

  walk(current.left, path)
  walk(current.right, path)

  path.push(current.value)

}

function post_order_traversal(head:BinaryNode):number[]{

  const path:number[] = []
  
  walk(head, path)

  return path

}


