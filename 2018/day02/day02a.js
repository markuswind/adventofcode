const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Calculating checksum...");

  calculateChecksum(inputLines);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculateChecksum = boxIds => {
  let nrOfTwoMatches = 0;
  let nrOfThreeMatches = 0;

  for (const boxId of boxIds) {
    if (hasCountNrOfMatches(boxId, 2)) {
      nrOfTwoMatches++;
    }

    if (hasCountNrOfMatches(boxId, 3)) {
      nrOfThreeMatches++;
    }
  }

  console.log(`Result: ${nrOfTwoMatches * nrOfThreeMatches}`);
};

const hasCountNrOfMatches = (boxId, countToMatch) => {
  for (const charA of boxId) {
    let nrOfMatches = 0;

    for (const charB of boxId) {
      if (charA === charB) {
        nrOfMatches++;
      }
    }

    if (nrOfMatches === countToMatch) {
      return true;
    }
  }

  return false;
};

main();
