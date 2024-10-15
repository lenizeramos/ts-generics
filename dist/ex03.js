"use strict";
// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.
const reverseArray = (arr) => {
    let reverse = arr.reverse();
    return reverse;
};
console.log(reverseArray(["blue", "pink", "red", "black"]));
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Char", age: 35 },
]));
