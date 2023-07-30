class SkiplistNode{

  val:number;
  right: SkiplistNode|null;
  down: SkiplistNode|null;

  constructor(val:number, right:SkiplistNode|null = null, down:SkiplistNode|null = null){
    this.val = val;
    this.down = down;
    this.right = right;
  }
}

class Skiplist {

  head:SkiplistNode|null;

  constructor() {
    this.head= new SkiplistNode(-Infinity);
  }

  search(target: number): boolean {
    let node = this.head;
    while(node){
      while(node.right && node.right.val < target){
        node = node?.right
      }
      if( node.right?.val === target) return true;
      node = node.down
    } 
    return false;
  }

  add(num: number): void {
    const stack:SkiplistNode[] = [];
    let node = this.head;
    while(node){
      while(node.right && node.right.val < num){
        node = node?.right;
      }
      stack.push(node)
      node = node.down;
    }

    let shouldInsertAbove = true;
    let downNode:SkiplistNode|null = null;
    while(shouldInsertAbove && stack.length){
      const leftNode = stack.pop() as SkiplistNode;
      leftNode.right = new SkiplistNode(num, leftNode.right, downNode)
      downNode = leftNode.right;
      shouldInsertAbove = Math.random() < 0.5
    }


    if(shouldInsertAbove){
      this.head = new SkiplistNode(-Infinity, new SkiplistNode(num,null,downNode),this.head) 
    }

  }

  erase(num: number): boolean {

    let node = this.head;
    let found = false;
    while(node){
      while(node.right && node.right.val){
        node = node?.right
      }
      if(node.right && node.right.val === num){
        found = true
        node.right = node.right.right;
    }
      node = node.down
    }
    return found

  }
}

const skiplist = new Skiplist();
skiplist.add(1);
skiplist.add(2);
skiplist.add(3);
skiplist.search(0); // return False
skiplist.add(4);
skiplist.search(1); // return True
skiplist.erase(0);  // return False, 0 is not in skiplist.
skiplist.erase(1);  // return True
skiplist.search(1); // return False, 1 has already been erased.
