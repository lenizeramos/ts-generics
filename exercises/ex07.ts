// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

const filterByType = <T, U>(arr: T[], type: U): U[] => {
  let aarray: U[] = [];
  arr.forEach((element) => {
    if (typeof element === type) {
      aarray.push(element as U);
    }
  });
  return aarray;
};

console.log(filterByType([1, 4, "6", "hey"], "number"));
