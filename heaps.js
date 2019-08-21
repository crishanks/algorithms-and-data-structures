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

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let parentIndex = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      let leftChildIndex = 2 * (parentIndex - 1);
      let rightChildIndex = 2 * (parentIndex - 2);
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[parentIndex] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
  
}