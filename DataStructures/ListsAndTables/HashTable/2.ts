class HashTable {
  private buckets: any[];
  size: number;

  constructor() {
    this.size = 1000;
    this.buckets = Array(1000).fill(null);
  }

  hash(key: any) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % 100;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }
}
