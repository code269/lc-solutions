/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let returnThis = [];
    //Linear search
    for (let i=1; i<n+1; i++) {
        if (i % 5 === 0 && i % 3 === 0) returnThis.push("FizzBuzz");
        else if (i % 3 === 0) returnThis.push("Fizz");
        else if (i % 5 === 0) returnThis.push("Buzz");
        else returnThis.push(i.toString());
    }
    return returnThis;
};
