function foo(a, b) {
  // Type checking before performing the addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    console.error('Invalid input types: Both arguments must be numbers.');
    return NaN; // Handle invalid input
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input types: Both arguments must be numbers. NaN