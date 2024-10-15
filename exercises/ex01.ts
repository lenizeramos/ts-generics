// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

const concatSum = <T, S>(input1: T, input2: S): number |string => {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + " " + input2;
  }
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return `Error: inputs must be either both strings or both numbers.`;
};

console.log(concatSum("hey", "Leni"));
console.log(concatSum(15, 20));
console.log(concatSum("hey", 20));