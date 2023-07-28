function findCenter(edges: number[][]): number {

  const [node1,node2] = edges[0]
  const [node3,node4] = edges[1]  


  if(node1 === node3){
    return node1;
  } else if(node1 === node4){
    return node1;
  } else if(node2 === node4){
    return node2
  } else {
    return node2
  }
}

console.log(findCenter([[1,2],[2,3],[4,2]]))
console.log(findCenter([[1,2],[5,1],[1,3],[1,4]]))
