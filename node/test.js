var path = require("path");
var hello = "Hello from Node JS Variable!"
console.log (`Printing variable hello: ${hello}`);

console.log("Using PATH module:");
console.log(`Hello from file ${path.basename(__filename)}`);

console.log(`Process args: ${process.argv}`)
