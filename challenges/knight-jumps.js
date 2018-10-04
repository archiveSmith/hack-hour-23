// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  // edge cases
  if (typeof str !== 'string' || str.length < 5 || str.length > 5) return 0;
  const array = str.split('');
  const x = parseInt(array[1]);
  if (isNaN(x) || x < 1 || x > 8) return 0;
  const y = parseInt(array[array.length - 2]);
  if (isNaN(y) || y < 1 || y > 8) return 0;

  let count = 0;
  // left and right movement
  if (x + 2 <= 8) {
    if (y + 1 <= 8) count += 1;
    if (y - 1 > 0) count += 1;
  }
  if (x - 2 > 0) {
    if (y + 1 <= 8) count += 1;
    if (y - 1 > 0) count += 1;
  }

  // upward and downward movement
  if (y + 2 <= 8) {
    if (x + 1 <= 8) count += 1;
    if (x - 1 > 0) count += 1;
  }
  if (y - 2 > 0) {
    if (x + 1 <= 8) count += 1;
    if (x - 1 > 0) count += 1;
  }

  return count;
}

module.exports = knightjumps;
