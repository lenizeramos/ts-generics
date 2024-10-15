"use strict";
// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.
const getFirstElement = (arr) => {
    if (arr.length === 0) {
        return `Array is empty`;
    }
    return arr[0];
};
console.log(getFirstElement(["blue", "pink", "red", "black"]));
console.log(getFirstElement([1, 2, 3, 4, 5]));
console.log(getFirstElement([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Char", age: 35 },
]));
console.log(getFirstElement([]));
