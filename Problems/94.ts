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

function traverse(node:TreeNode | null, stack:number[]){

  if(node === null){
    return
  }

  traverse(node.left,stack)
  stack.push(node.val)
  traverse(node.right,stack)

}

function inorderTraversal(root: TreeNode | null): number[] {

  if( root == null){
    return []
  }

  const stack:number[] = [] 

  traverse(root, stack)

  return stack

}
