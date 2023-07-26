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

function traverse( node: TreeNode| null, count:number ):number{

    if(node === null){

      return count

    }

    count ++

    const leftDepth = traverse(node.left, count)
    const rightDepth = traverse(node.right, count)

    return Math.max(leftDepth, rightDepth)

}

function maxDepth(root: TreeNode | null): number {

 if (root === null){

    return 0

    } 


  return traverse(root, 0)

}
