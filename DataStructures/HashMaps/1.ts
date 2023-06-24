class HashMap {
  private data: { key: string; value: any }[][];
  private size: number;
  private count: number;

  constructor(initialSize = 8) {
    this.data = new Array(initialSize);
    this.size = initialSize;
    this.count = 0;
  }

  private hash(key: string) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  set(key: string, value: any) {
    let index = this.hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    } else {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i].key === key) {
          this.data[index][i].value = value;
          return;
        }
      }
    }

    this.data[index].push({ key, value });
    this.count++;

    if (this.count / this.size > 0.8) {
      this.resize();
    }
  }

  get(key: string) {
    const index = this.hash(key);
    if (this.data[index]) {
      for (const item of this.data[index]) {
        if (item.key === key) {
          return item.value;
        }
      }
    }
    return undefined;
  }

  private resize() {
    const oldData = this.data;
    this.size *= 2;
    this.data = new Array(this.size);
    this.count = 0;

    for (const bucket of oldData) {
      if (bucket) {
        for (const item of bucket) {
          this.set(item.key, item.value);
        }
      }
    }
  }
}

const map = new HashMap(9);

map.set("apple", "A sweet fruit");
map.set("banana", "A yellow fruit");
map.set("C1", "An orange vegetable");
map.set("C2", "An orange vegetable");
map.set("C3", "An orange vegetable");
map.set("C4", "An orange vegetable");
map.set("C5", "An orange vegetable");
map.set("C6", "An orange vegetable");
map.set("C7", "An orange vegetable");
map.set("C7", "hello");

console.log(map.get("C7"));
