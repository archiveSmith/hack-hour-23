/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  // guard cases
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return null;
  if (!arr1[0] && !arr2[0]) return [];

  // below checks one at a time. 
  const combinedArr = [arr1, arr2];
  return combinedArr.reduce((mergedArr, arr1, i) => {
    // check to see if both elements first exist
    if (arr1[i] && arr2[i]) {
      if (arr1[i] >= arr2[i]) {
        mergeArrays.push(arr1[i]);
        mergeArrays.push(arr2[i]);
      } else {
        mergeArrays.push(arr2[i]);
        mergeArrays.push(arr1[i]);
      }
    }
    if (!arr1[i]) mergeArrays.push(arr1[i]);
    if (!arr2[i]) mergeArrays.push(arr2[i]);
    return mergedArr;
  }, []);
}

// explore using recursion as another method. 
// const mergedArrays = (arr1, arr2) => {
//   // guard cases
//   if (!Array.isArray(arr1) && !Array.isArray(arr2)) return null;
//   if (!arr1[0] && !arr2[0]) return [];

//   // use recursion to continue through the array

// }

module.exports = mergeArrays;
