class Stack {
  constructor(private items: any[]) {
    this.items = items;
  }

  push(value: any) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const peronStack = new Stack([1, 2, 3]);

peronStack.push(4);

peronStack.pop();

console.log(peronStack.toArray());
