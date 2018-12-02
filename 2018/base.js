const fs = require("fs");

const fileName = "";
const inputFile = fs.readFileSync(fileName);

const main = function() {
  const startTime = new Date();
  console.log("...");

  readInputFile();

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const readInputFile = function() {
  const lines = inputFile.toString().split("\n");
};

main();
