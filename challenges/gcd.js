/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    while(a > 0 && b > 0) {
        if(a < b){
            while(b >= a){
                b = b - a;
            }
        } else {
            while(a >= b){
                a = a - b;
            }
        }
    }

    return a || b;
}

module.exports = gcd;