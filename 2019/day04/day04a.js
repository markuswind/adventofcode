const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Calculate password count..");

  calculatePasswordCount(inputLines[0]);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculatePasswordCount = range => {
  let passwordCount = 0;

  const start = parseInt(range.split("-")[0]);
  const end = parseInt(range.split("-")[1]);

  for (let password = start; password < end; password++) {
    const passwordString = password.toString();

    if (passwordString.length >= 6) {
      let hasAdjacentDigits = false;
      let isNeverDecreasing = true;

      for (let i in passwordString) {
        const nr = parseInt(passwordString[i]);
        const prevNr = parseInt(passwordString[i - 1]);

        if (nr === prevNr) hasAdjacentDigits = true;
        if (nr < prevNr) isNeverDecreasing = false;
        if (!isNeverDecreasing) break;
      }

      if (hasAdjacentDigits && isNeverDecreasing) {
        passwordCount++;
      }
    }
  }

  console.log(`Result: ${passwordCount}`);
};

main();
