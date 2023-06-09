class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  private head: ListNode | null;

  constructor() {
    this.head = null;
  }

  private getTailNode(): ListNode | null {
    if (!this.head) {
      return null;
    }

    let currentNode: ListNode | null = this.head;

    while (currentNode.next) {
      currentNode = currentNode?.next;
    }

    return currentNode;
  }

  private getNodeByValue(value: any): ListNode | null {
    if (!this.head) {
      return null;
    }

    let currentNode: ListNode | null = this.head;

    while (currentNode.next) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode?.next;
    }

    return null;
  }

  private getNodeByIndex(index: number): ListNode | null {
    if (!this.head || index > this.size()) {
      return null;
    }

    let i = 0;
    let currentNode: ListNode | null = this.head;

    while (i < index) {
      currentNode = currentNode!.next;
      i++;
    }

    return currentNode;
  }

  //   ****************************************

  isEmpty(): boolean {
    return this.head === null;
  }

  getTail(): any {
    const tailNode = this.getTailNode();

    if (tailNode) {
      return tailNode.value;
    } else {
      return null;
    }
  }

  append(value: any): void {
    const newNode: ListNode = new ListNode(value);

    const tailNode = this.getTailNode();
    if (tailNode) {
      tailNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  prepend(value: any): void {
    const newNode: ListNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAt(index: number, value: any): boolean | void {
    const newNode = new ListNode(value);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const nodeAtIndex = this.getNodeByIndex(index - 1);

      if (nodeAtIndex) {
        if (nodeAtIndex.next) {
          newNode.next = nodeAtIndex.next.next;
          nodeAtIndex.next = newNode;
        } else {
          nodeAtIndex.next = newNode;
        }
      } else {
        return false;
      }
    }
  }

  //   !
  insertBeforeValue() {}

  //   !
  insertAfterValue() {}

  //   !
  // Method to delete a node with a given value
  deleteByValue(value: any): void {
    // to be implemented
  }

  //   !
  deleteAll(): void {}

  // Method to delete a node at a specific index
  deleteByIndex(index: number): void {
    // to be implemented
  }

  deleteHead() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  deleteTail() {}

  // Method to find a node at a specific index
  findByIndex(index: number): any | null {
    const searchedNode = this.getNodeByIndex(index);

    if (searchedNode) {
      return searchedNode.value;
    } else {
      return null;
    }
  }

  // Method to check if a value is present in the linked list
  has(value: any): boolean {
    const searchedNode = this.getNodeByValue(value);

    if (searchedNode) {
      return true;
    } else {
      return false;
    }
  }

  // Method to convert the linked list to an array
  toArray(): any[] {
    // to be implemented
    if (!this.head) {
      return [];
    }

    let elements: any[] = [];
    let currentNode: ListNode | null = this.head;

    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return elements;
  }

  // Method to print all the values of the linked list
  print(): void {
    // to be implemented
    if (!this.head) {
      console.log("");
    }

    let elements: any[] = [];
    let currentNode: ListNode | null = this.head;

    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(elements);
  }

  //  !
  reverse() {
    let prev: ListNode | null = null;
    let current: ListNode | null = this.head;
    let next: ListNode | null = null;

    while (current !== null) {
      next = current.next; // remember the next node
      current.next = prev; // REVERSE! the current node
      prev = current; // advance prev one step
      current = next; // advance current one step
    }

    this.head = prev;
  }

  size(): number {
    if (!this.head) {
      return 0;
    }

    let size = 0;
    let currentNode: ListNode | null = this.head;

    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }

    return size;
  }

  // Advanced functionality

  //! Method to detect cycle in the linked list
  detectCycle(): boolean {
    // to be implemented
    return false;
  }

  //! Method to get the middle node of the linked list
  getMiddleNode(): ListNode | null {
    // to be implemented
    return null;
  }

  //! Method to remove duplicate nodes from the linked list
  removeDuplicates(): void {
    // to be implemented
  }
}

const list = new LinkedList();

console.log(list.isEmpty());

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);

list.append(10);
list.prepend(10);

console.log(list.toArray());

const error = list.insertAt(1, 100);

console.log(error);

list.insertAt(7, "abc");
list.insertAt(7, "abc");

console.log(list.toArray());

list.reverse();

console.log(list.toArray());
