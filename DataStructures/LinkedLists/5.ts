export class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  private head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: any) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode: ListNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  prepand(value: any) {
    const newNode = new ListNode(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  deleteOne(value: any) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }

      currentNode = currentNode.next;
    }
    return;
  }

  isEmpty() {
    return this.head !== null;
  }

  deleteAll(value: any): void {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current!.next) {
      if (current!.next.value === value) {
        current!.next = current!.next.next;
      } else {
        current = current!.next;
      }
    }
  }

  removeTail() {
    if (!this.head) {
      return;
    }

    let currentNode: ListNode | null = this.head;

    while (currentNode!.next!.next) {
      currentNode = currentNode!.next;
    }

    currentNode!.next = null;
  }

  toArray(): any[] {
    const result: any[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
