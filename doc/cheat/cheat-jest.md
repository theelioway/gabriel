# Cheat jest

```
//
let config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "testPathIgnorePatterns": [
    "test_generated", "anotherfolder"
  ]
}
// jest.config.js
module.exports = config

// jest.config.js
package.json
"jest": config,
```
