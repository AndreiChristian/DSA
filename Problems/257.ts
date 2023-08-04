class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function traverse(node:TreeNode , currentPath:number[], paths:string[]){

  if(node.left === null && node.right === null ){
    paths.push(currentPath.join("->"));
    return
  }

  currentPath.push(node.val)

  node.left && traverse(node.left, currentPath.slice(), paths) 
  node.right && traverse(node.right, currentPath.slice(), paths) 

  

}

function binaryTreePaths(root: TreeNode | null): string[] {

  if(root === null) return [];

  const paths:string[] = [];

  traverse(root, [], paths);

  return paths;

}
