class LinkedList {
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

  toArray() {
    const elements: any[] = [];

    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
const elements = linkedList.toArray();
console.log(elements);

