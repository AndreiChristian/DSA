class LinkedList4 {
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

  find(value: any) {
    if (!this.head) {
      return -1;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next();
    }

    return -1;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode !== -1) {
      const newNode = {
        value: value,
        next: existingNode.next,
      };

      existingNode.next = newNode;
    } else {
      return -1;
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
