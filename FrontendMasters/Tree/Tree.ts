interface BinaryNode {
  left: BinaryNode;
  right: BinaryNode;
  value: number;
}

function walk(curr: BinaryNode | null, path: number[]):void{
  // best case
  
  if (!curr){

    return ;

  }

  // pre
  
  path.push(curr.value);

  // recurs
    
  walk(curr.left, path)
  walk(curr.right, path)

  // post
  

} 

function pre_order_search(head: BinaryNode):number[] {

  const path:number[] = [];
  walk(head, path)
  return path

}
