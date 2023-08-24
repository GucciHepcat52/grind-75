var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const poppedElement = this.stack.pop();

  if (poppedElement === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// class MinStack() {
//     constructor() {
//         this.stack = [];
//         this.minStack = [];
//     }

//     push(val) {
//         this.stack.push(val);

//         if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//             this.minStack.push(val);
//         }
//     }

//     pop() {
//         const poppedElement = this.stack.pop();

//         if (poppedElement === this.minStack[this.minStack.length - 1]) {
//             this.minStack.pop()
//         }
//     }

//     top() {
//         return this.stack[this.stack.length - 1];
//     }

//     getMin() {
//         return this.stack[this.stack.length - 1];
//     }
// }
