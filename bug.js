function foo(a, b) {
  if (a === null || b === null) {
    return null; // This handles null values correctly
  }
  return a + b; // This will throw an error if a or b is NaN
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, NaN)); // Output: NaN