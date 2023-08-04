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


function inOrder(node:TreeNode|null, prev:TreeNode|null ){

  if(node === null) return;

  inOrder(node.left,prev)

  prev!.right = node;
  node.left = null;
  prev = node;


}

function increasingBST(root: TreeNode | null): TreeNode | null {

  const dummy = new TreeNode(0);
  const prev = dummy;

  inOrder(root,prev)

  return dummy.right

}
