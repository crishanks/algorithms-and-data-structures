//with an array
const queue = [];

//with push and shift
queue.push('first');
queue.push('second');
queue.push('third');

queue.shift();

//with unshift and pop
queue.unshift('1');
queue.push('2');
queue.push('3');

queue.pop();


//with a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size;
  }

  enqueue(val) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back =newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.front) return null;
    const originalFront = this.front;
    if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    this.size--;
    return originalFront.value;
  }
}

// Examples:
// Used to keep track of an order, and the first in must always be the first out
// processing tasks (who/what has been waiting the longest?), uploading resources, printing

// Big O:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)