# Unexpected NaN in JavaScript Addition with Null Checks

This repository demonstrates a common JavaScript pitfall: unexpected NaN (Not a Number) results when performing arithmetic operations with null or undefined values, even when explicit null checks are in place.

The `bug.js` file contains a function that attempts to add two numbers, handling null input gracefully. However, it fails silently when one of the inputs is NaN. The `bugSolution.js` demonstrates a safer approach using explicit NaN checks.

## Reproducing the Bug

1. Clone this repository.
2. Run `node bug.js`
3. Observe the unexpected NaN output.

## Solution

The solution file, `bugSolution.js`, demonstrates how to robustly handle both null and NaN values, providing more predictable and reliable results.

## Key Learning

This example highlights the importance of rigorous type checking and handling of edge cases (like NaN) in JavaScript to prevent unexpected behavior and runtime errors.  Always consider the potential for invalid data types and use techniques like `isNaN()` to ensure your code's robustness.