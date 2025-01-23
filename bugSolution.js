function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return null; // Handle null and NaN values
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, NaN)); // Output: null
console.log(foo(NaN, 2)); // Output: null
console.log(foo(1, 'hello')); // Output: null