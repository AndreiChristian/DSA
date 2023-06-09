class LinkedList2 {
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

const linkedList2 = new LinkedList2();
linkedList2.prepend(5);
linkedList2.append(2);
linkedList2.append(3);

linkedList2.prepend(4);
linkedList2.prepend(1);

console.log(linkedList2.getValues());
