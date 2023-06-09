class LinkedList3 {
  private head;
  private tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: any) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value: any) {
    const newNode = {
      value: value,
      next: null,
    };

    if (this.head) {
      newNode.next = this.head;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  deleteOne(value: any) {
    // checking if the node to delete is the first one

    if (!this.head) {
      return -1;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return this.head.value;
    }

    let previousNode = this.head;

    // checking if there is more than one value

    if (!previousNode.next) {
      return -1;
    }

    let currentNode = this.head.next;

    while (value !== currentNode.value && currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (value === currentNode.value) {
      previousNode.next = currentNode.next;
      return currentNode.value;
    }

    return -1;
  }

  deleteAll(value: any) {
    if (!this.head) {
      return -1;
    }

    while (this.head && this.head.next === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value == value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  toArray() {
    const elements: any[] = [];

    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }

  getValues() {
    const elements: any[] = [];

    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

const linkedList3 = new LinkedList3();
linkedList3.append(1);
linkedList3.append(3);
linkedList3.append(2);
linkedList3.prepend(5);
linkedList3.prepend(3);

// console.log(linkedList3.deleteOne(4));

linkedList3.deleteAll(1);

console.log(linkedList3.getValues());
