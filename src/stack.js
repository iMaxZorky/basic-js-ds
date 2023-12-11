const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.value = []
  }
  push(element) {
    this.value.push(element)
  }

  pop() {
    return this.value.pop()
  }

  peek() {
    let vLength = this.value.length
    let peekIndex = vLength - 1
    return this.value[peekIndex];
  }
}

module.exports = {
  Stack
};
