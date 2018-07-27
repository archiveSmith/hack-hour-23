/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  // create a empty string to hold results, to be returned.
  let result = '';
  // hold input value in a variable, to be mutated
  let input = n;
  // create variables holding string values of space & *
  const ast = '*';
  const space = ' ';
  // loop until input number to concat ast to result
  for (let i = 1; i <= n; i++) {
    // concat asterick to empty string, n++ at a time & add empty spaces to fill up space
    result += space.repeat(input - 1) + ast.repeat(i) + '\n'
    // decrement input number in each iteration
    input--
  }
  return result;
}

module.exports = drawStairs;
