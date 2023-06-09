class TreeNode {
  value: any;
  parent: TreeNode | null;
  children: TreeNode[];

  constructor(parentNode: TreeNode | null = null, value: any) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value: any): { node: TreeNode; index: number } {
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
}

const fileSystem = new Tree("/");
const documentNode = fileSystem.root.addNode("/document");
const imagesNode = fileSystem.root.addNode("/images");

const dogNode = documentNode.node.addNode("/dogs");
const catNode = documentNode.node.addNode("/cats");
const foodNode = documentNode.node.addNode("/food");

console.log(foodNode);
