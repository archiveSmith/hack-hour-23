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
  //knights can move +- 3 and +-1 or +-1 and +-3
  const arr = str.replace(/[^0-9]/g, ' ').split(' ').filter(numStr => numStr.length > 0).map(numStr => parseInt(numStr));
  
  let possibleMoves = 0;
  if (arr[0] + 2 <= 8 && arr[1] - 1 >= 1) possibleMoves += 1;
  if (arr[0] + 1 <= 8 && arr[1] - 2 >= 1) possibleMoves += 1;
  if (arr[0] - 1 >= 1 && arr[1] - 2 >= 1) possibleMoves += 1;
  if (arr[0] - 2 >= 1 && arr[1] - 1 >= 1) possibleMoves += 1;
  if (arr[0] - 2 >= 1 && arr[1] + 1 <= 8) possibleMoves += 1;
  if (arr[0] - 1 >= 1 && arr[1] + 2 <= 8) possibleMoves += 1;
  if (arr[0] + 1 <= 8 && arr[1] + 2 <= 8) possibleMoves += 1;
  if (arr[0] + 2 <= 8 && arr[1] + 1 <= 8) possibleMoves += 1;
  
  return possibleMoves;
}
console.log(knightjumps('(2 2)'))
module.exports = knightjumps;
