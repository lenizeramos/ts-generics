"use strict";
// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.
const duplicateElements = (arr, n) => {
    return arr.flatMap((element) => Array(n).fill(element));
};
console.log(duplicateElements([1, 2, 3], 2)); // [1, 1, 2, 2, 3, 3]
console.log(duplicateElements(["blue", "pink"], 3)); // ["blue", "blue", "blue", "pink", "pink", "pink"]
console.log(duplicateElements([{ name: "Alice" }, { name: "Bob" }, { name: "Char" }], 2));
console.log(duplicateElements([true, false], 1)); // [true, false]
console.log(duplicateElements([], 5)); // []
