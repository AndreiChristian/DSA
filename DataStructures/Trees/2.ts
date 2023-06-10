class TreeNode {
  value: any;
  parent: TreeNode | null;
  children: TreeNode[];

  constructor(parentNode: TreeNode | null = null, value: any) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value: string): { node: TreeNode; index: number } {

    const segments: string[] = value.split("/");

    

    const node: TreeNode = new TreeNode(null, value);
    this.children.push(node);
    return { node: node, index: this.children.length - 1 };
  }

  remove(index: number) {
    this.children.splice(index, 1);
  }
}

class Tree {
  root: TreeNode;

  constructor(rootValue: any) {
    this.root = new TreeNode(null, rootValue);
  }

  add(path: string) {
    this.root.addNode(path);
  }

  remove(path: string) {}
}
