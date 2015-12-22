var fs = require('fs');

var fileLocation = process.argv[2].toString();
var file = fs.readFileSync(fileLocation);
var fileString = file.toString();
var hello = fileString.split('\n');
console.log(hello.length -1);