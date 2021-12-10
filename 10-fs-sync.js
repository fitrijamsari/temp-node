// const fs = require("fs");
// fs.readFileSync
// OR

// destructuring method
const { readFileSync, writeFileSync } = require("fs");

console.log("Start");
// read files
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// write file
// by default it will overwrite..but if using flag a it will append
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("Done with the task");
console.log("Start the next task");
