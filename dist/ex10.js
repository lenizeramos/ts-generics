"use strict";
// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.
function customMap(array, mapper) {
    const mapArray = [];
    for (const item of array) {
        mapArray.push(mapper(item));
    }
    return mapArray;
}
console.log(customMap([1, 2, 3, 4, 5], (num) => num * 2));
console.log(customMap(["Amanda", "Bea", "Carol"], (str) => str.length));
console.log(customMap([{ name: "Leni" }, { name: "Bianca" }], (obj) => obj.name.toUpperCase()));
