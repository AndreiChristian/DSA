// invert a binary tree

interface Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
}

const reverseTree = (node: Node<number> | null) => {
  if (!node) {
    return null;
  }

  reverseTree(node.left);
  reverseTree(node.right);

  [node.right, node.left] = [node.left, node.right];
};

const tree: Node<number> = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

reverseTree(tree);

console.log(tree);
