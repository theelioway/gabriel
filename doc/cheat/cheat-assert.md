# assert

```javascript
const assert = require('assert');
import assert from "assert";

// Basic Equality Assertions
assert.strictEqual(actual, expected, message); // Check if actual === expected
assert.equal(actual, expected, message);       // Check if actual == expected (loose equality)

// Basic Inequality Assertions
assert.notStrictEqual(actual, expected, message); // Check if actual !== expected
assert.notEqual(actual, expected, message);       // Check if actual != expected (loose inequality)

// Truthiness and Falsiness Assertions
assert.ok(value, message);    // Check if value is truthy
assert.equal(value, true, message); // Check if value is true
assert.equal(value, false, message); // Check if value is false
assert.notOk(value, message); // Check if value is falsy
assert.equal(value, undefined, message); // Check if value is undefined
assert.equal(value, null, message);      // Check if value is null

// Object Property Assertions
assert.deepEqual(actual, expected, message);   // Check if objects have the same properties and values
assert.notDeepEqual(actual, expected, message); // Check if objects have different properties or values

// Array Assertions
assert.isArray(value, message);             // Check if value is an array
assert.notArray(value, message);            // Check if value is not an array
assert.deepEqual(actual, expected, message); // Check if arrays have the same elements

// Error Assertions
assert.throws(function, errorType, message); // Check if function throws a specific error
assert.doesNotThrow(function, errorType, message); // Check if function does not throw a specific error

// Custom Assertions
assert.fail(actual, expected, message, operator); // Fail with a custom message

// Custom Equality Function
assert.strictEqual(actual, expected, message, customEqualityFn); // Compare using a custom equality function

// Custom Error Handling
assert.throws(function, validateFn, message); // Check if function throws a specific error that passes validation

// Deep Strict Equality Assertions (Node.js v16+)
assert.deepStrictEqual(actual, expected, message);     // Check if objects have the same properties and values (strict)
assert.notDeepStrictEqual(actual, expected, message); // Check if objects have different properties or values (strict)
```