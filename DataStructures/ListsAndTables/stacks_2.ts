import { LinkedList, ListNode } from "../LinkedLists";

class Stack {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  push(value: any) {
    this.list.append(value);
  }

  pop() {
    this.list.removeTail();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  toArray() {
    return this.list.toArray();
  }
}

const peronStack = new Stack();

peronStack.push(4);

peronStack.pop();

console.log(peronStack.toArray());
