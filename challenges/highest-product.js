/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sortedArr = [array.shift()];
  array.forEach(num => {
    let index = sortedArr.length - 1;
    while (num > sortedArr[index]) {
      if (index >= 0) {
        index--
      } else {
        break
      }
    }
    sortedArr.splice(index + 1, 0, num)
  })
  return sortedArr[0] + sortedArr[1] + sortedArr[2]
}

module.exports = highestProduct;
