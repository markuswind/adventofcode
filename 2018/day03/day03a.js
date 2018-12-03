const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = function() {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Calculating overlapping squares...");

  calculateOverlappingSquares(inputLines);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculateOverlappingSquares = claims => {
  let overlappingSquares = 0;
  let canvas = {};

  for (claim of claims) {
    const { x, y } = getCoordinates(claim);
    const { width, height } = getDimensions(claim);

    for (let xBlock = 0; xBlock < width; xBlock++) {
      const posX = xBlock + parseInt(x) + 1;

      for (let yBlock = 0; yBlock < height; yBlock++) {
        const posY = yBlock + parseInt(y) + 1;

        if (!canvas[posX]) {
          canvas[posX] = {};
          canvas[posX][posY] = "unique";
        } else if (!canvas[posX][posY]) {
          canvas[posX][posY] = "unique";
        } else if (canvas[posX][posY] === "unique") {
          canvas[posX][posY] = "notUnique";
          overlappingSquares++;
        }
      }
    }
  }

  console.log(`Result: ${overlappingSquares}`);
};

const getCoordinates = claim => {
  const splittedClaim = claim.split(" ");
  const coordinates = splittedClaim[2].replace(":", "");
  const commaIndex = coordinates.indexOf(",");

  return {
    x: coordinates.substring(0, commaIndex),
    y: coordinates.substring(commaIndex + 1, coordinates.length)
  };
};

const getDimensions = claim => {
  const dimensions = claim.split(" ")[3];
  const xIndex = dimensions.indexOf("x");

  return {
    width: dimensions.substring(0, xIndex),
    height: dimensions.substring(xIndex + 1, dimensions.length)
  };
};

main();
