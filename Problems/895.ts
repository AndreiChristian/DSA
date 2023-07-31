class FreqStack {

  private map:Map<number,number> = new Map<number,number>();
  private maxValue = 0;
  private maxValueCount = 0;

  constructor() {
    
  }

  push(val: number): void {
    if(this.map.has(val)){
      this.map.get(val) = this.map.get(val) + 1
  }

  pop(): number {

  }
}

