class Fancy {

  private elements:number[];
  private MOD = Math.pow(10,9) + 7

   constructor() {
    this.elements = [];
   }

   append(val: number): void {
    this.elements.push(val);
   }

   addAll(inc: number): void {
    for(let i=0; i<this.elements.length; i++){
      this.elements[i]= (this.elements[i] + inc) % this.MOD
    }
   }

   multAll(m: number): void {
    for(let i=0; i<this.elements.length; i++){
      this.elements[i]= (this.elements[i] * m) % this.MOD;
    }
   }

   getIndex(idx: number): number {
    if(idx>=this.elements.length) return -1
    return this.elements[idx]
   }
}

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
