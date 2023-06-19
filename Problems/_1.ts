// invert a binary tree

interface Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
}

const reverseTree = (node: Node<number> | null): Node<number> | null => {
  if (!node) {
    return null;
  }

  const left = reverseTree(node.left);
  const right = reverseTree(node.right);

  node.right = left;
  node.left = right;

  return node;
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

const reversedTree = reverseTree(tree);

console.log(reversedTree);
