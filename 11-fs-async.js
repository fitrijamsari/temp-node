// destructuring method
const { readFile, writeFile } = require("fs");

console.log("Start");

//callback, we will run only when certain functionality is complete
//example by eventlisterner, after click button then run callback function

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting the next task");
