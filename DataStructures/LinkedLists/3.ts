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

  delete(value: any) {
    // checking if the node to delete is the first one
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

console.log(linkedList3.delete(4));

console.log(linkedList3.getValues());
