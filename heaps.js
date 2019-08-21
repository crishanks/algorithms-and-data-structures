class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIndex = this.values.length - 1;
    const element = this.values[childIndex];
    while(childIndex > 0) {
      let parentIndex = Math.floor((childIndex-1)/2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[childIndex] = parent;
      childIndex = parentIndex;
    }
  }
  
}