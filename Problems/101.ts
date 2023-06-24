`
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


`;

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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  return isMirror(root.left, root.right);
}

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1 === null || node2 === null) {
    return false;
  }

  return (
    node1.val === node2.val &&
    isMirror(node1.left, node2.right) &&
    isMirror(node1.right, node2.left)
  );
}
