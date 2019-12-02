const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = function() {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Calculating required fuel...");

  calculateRequiredFuel(inputLines);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculateRequiredFuel = masses => {
  let sum = 0;

  for (mass of masses) {
    sum += Math.floor(mass / 3) - 2;
  }

  console.log(`Result: ${sum}`);
};

main();
