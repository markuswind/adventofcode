const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Getting box full of prototype fabric...");

  getBoxFullOfProtoypeFabric(inputLines);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const getBoxFullOfProtoypeFabric = boxIds => {
  let result;

  while (!result) {
    for (let boxIdA of boxIds) {
      for (let boxIdB of boxIds) {
        let indexOfMismatch = 0;
        let nrOfMismatches = 0;

        for (let i = 0; i < boxIdA.length; i++) {
          if (boxIdA[i] !== boxIdB[i]) {
            indexOfMismatch = i;
            nrOfMismatches++;
          }
        }

        if (nrOfMismatches === 1) {
          result = boxIdA.replace(boxIdA[indexOfMismatch], "");
        }
      }
    }
  }

  console.log(`Result: ${result}`);
};

main();
