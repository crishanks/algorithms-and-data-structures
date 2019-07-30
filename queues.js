//with an array
const queue = [];

//with push and shift
queue.push('first')
queue.push('second')
queue.push('third')

queue.shift()

//with unshift and pop

queue.unshift('1')
queue.push('2')
queue.push('3')

queue.pop()


//with a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    
}