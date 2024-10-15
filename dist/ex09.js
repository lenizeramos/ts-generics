"use strict";
// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.
class Stack {
    constructor() {
        this.array = [];
    }
    push(element) {
        this.array.push(element);
    }
    pop() {
        return this.array.pop();
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop());
const stringStack = new Stack();
stringStack.push("hey");
stringStack.push("you");
console.log(stringStack.pop());
const objStack = new Stack();
objStack.push({ name: "Aline" });
objStack.push({ name: "Bruna" });
console.log(objStack.pop());
