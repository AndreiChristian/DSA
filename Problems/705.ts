class MyHashSet {  

    private set:number[];

    constructor() {
      this.set = []
    }

    add(key: number): void {
      if(!this.set.includes(key)){
        this.set.push(key);
      }
    }

    remove(key: number): void {

    this.set = this.set.filter(v=> v !== key);

    }

    contains(key: number): boolean {
      return this.set.includes(key);
    }
}

const myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
