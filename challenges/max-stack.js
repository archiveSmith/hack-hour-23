/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.stack = [];
  this.max;

  this.push = function(n) {
    // places a value to the position of length
    this.stack[length] = n;
    // increments length by 1
    this.length++
    // sets new value at length to undefined
    this.stack[length] = undefined;
    //setMax
    if (n > this.max) {
      this.max = n;
    }
    // returns length
    return length;
  }

  this.pop = function() {
    // saves the value at the index of length - 1 to a holder variable
    let temp = this.stack[length-1] 
    // changes the value at the index of length to undefined
    this.stack[length-1] = undefined;
    // decrements length
    this.length--

    return temp;
  }

  this.getMax = function() {
    if (this.length > 0) return this.max;
    else return undefined;
  }

}

module.exports = Stack;