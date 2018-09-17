'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000);
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let res = [];

  for(let i = x; i < z; i += x) {
    if(x % y !== 0) {
      res.push(i);
    } 
  }

  for(let i = y; i < z; i += y) {
    res.push(i);
  }

  return res.reduce((acc, curr) => acc + curr);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
