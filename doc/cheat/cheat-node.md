# Cheat node fs

```
let fs = require("fs")
```

## Read File

```
let filePath = "./path/to/file.ext"

fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  let fileContents = data
  // ... continue
});


let fileContents = fs.readSync(filePath, 'utf8')
```

You can use the fs.readdir or fs.readdirSync methods.

```


const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

fs.readdirSync

const testFolder = './tests/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});

var glob = require("")

// options is optional
glob("**/*.js", options, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})
```
