class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  public insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: number) {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode | null, value: number): boolean {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  public min() {
    if (this.root === null) {
      return null;
    } else {
      return this.minHelper(this.root);
    }
  }

  private minHelper(node: TreeNode): number {
    if (node.left === null) {
      return node.value;
    } else {
      return this.minHelper(node.left);
    }
  }

  public max() {
    if (this.root === null) {
      return null;
    } else {
      return this.maxHelper(this.root);
    }
  }

  private maxHelper(node: TreeNode): number {
    if (node.right === null) {
      return node.value;
    } else {
      return this.maxHelper(node.right);
    }
  }

  print(): void {
    this.printHelper(this.root, "");
  }

  private printHelper(node: TreeNode | null, indent: string): void {
    if (node !== null) {
      console.log(indent + node.value);
      this.printHelper(node.left, indent + "  ");
      this.printHelper(node.right, indent + "  ");
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(20);
bst.insert(4);
bst.insert(7);
bst.insert(13);

// bst.print();

console.log(bst.search(1));
console.log(bst.search(20));

console.log(bst.max());
console.log(bst.min());
