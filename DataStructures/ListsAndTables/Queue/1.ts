class Queue {
  private items: any[];

  constructor(items: any) {
    this.items = items;
  }

  enqueue(value: any) {
    this.items.unshift(value);
  }

  dequeue(value: any) {
    return this.items.pop();
  }
}
