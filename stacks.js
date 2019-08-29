let stack = [];

//with push and pop
stack.push("google")
stack.push("instagram")
stack.push("youtube")

stack.pop()
stack.push("amazon")
stack.pop()


//with unshift and shift
stack.unshift('create new file')
stack.unshift('resized file')
stack.unshift('cloned out wrinkle')

stack.shift()

//with a singly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.bottom = null;
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const originalTop = this.top;
      this.top = newNode;
      this.top.next = originalTop;
    }
    return ++this.size;
  }

  pop() {
    if (!this.top) return null;
    const originalTop = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return originalTop.value;
  }

}

// Examples:
// Used to add and remove from the beginning
// Call Stack, undo/redo, routing (previous page, next page)

// Big O:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)