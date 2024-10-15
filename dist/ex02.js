"use strict";
// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.
const identify = (data) => {
    return data;
};
console.log(identify("Elisson"));
console.log(identify(27));
console.log(identify({ name: "Ale", age: 33 }));
console.log(identify(["blue", "pink", 19, 25, true]));
console.log(identify(() => { }));
