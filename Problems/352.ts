class SummaryRanges {
  private stream: number[] = [];

  private insert(value: number) {
    let left = 0;
    let right = this.stream.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.stream[mid] === value) {
        return; // Value already in the stream, no need to insert
      }
      if (this.stream[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    this.stream.splice(left, 0, value);
  }

  private _generateIntervals() {
    const intervals: number[][] = [];
    if (this.stream.length === 0) return intervals;

    let start = this.stream[0];
    let end = this.stream[0];

    for (let i = 1; i < this.stream.length; i++) {
      if (this.stream[i - 1] + 1 === this.stream[i]) {
        end = this.stream[i]; // Extend current interval
      } else {
        intervals.push([start, end]); // Close current interval
        start = this.stream[i]; // Start new interval
        end = this.stream[i];
      }
    }
    intervals.push([start, end]); // Add last interval

    return intervals;
  }

  constructor() {}

  addNum(value: number): void {
    this.insert(value);
  }

  getIntervals(): number[][] {
    return this._generateIntervals();
  }
}

