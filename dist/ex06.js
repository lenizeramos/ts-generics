"use strict";
// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.
const createPair = (input1, input2) => {
    return [input1, input2];
};
console.log(createPair(1, 2));
console.log(createPair("1", 2));
console.log(createPair({ name: "Alice" }, [1, 2])); // Output: [{ name: "Alice" }, [1, 2]]
