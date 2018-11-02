/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  heaps(0);
  function heaps(index) {
    calls++;
    //if index is out of arr, callback
    callback(arr);
    //from the index, iterate forward
    for (let j = index; j < arr.length; j += 1) {
      swap(arr, index, j)
      swaps++
      heaps(index + 1);
      swap(arr, index, j);
      swaps++
    }
  }
}
console.log(eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
}));
// [ 1, 2, 3 ]
// [ 1, 3, 2 ]
// [ 2, 1, 3 ]
// [ 2, 3, 1 ]
// [ 3, 1, 2 ]
// [ 3, 2, 1 ]


module.exports = eachPermutation;
