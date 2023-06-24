class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // pass down a sum with 0, let it incremenent a long the way, if the sum is tagrte, return true

  return false;
}

function isTarget(node: TreeNode, targetSum: number, sum: number): boolean {
  if (node.left === null && node.right === null) {
    if (sum === targetSum) {
      return true;
    } else {
      return false;
    }
  } else {
    sum = sum + node.val;

    node.left && isTarget(node.left, targetSum, sum);
    node.right && isTarget(node.right, targetSum, sum);

    node.left = node.right;
  }

  return false;
}
