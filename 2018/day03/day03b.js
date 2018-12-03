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
  let uniqueClaimId;
  let canvas = {};

  for (var i = 0; i < 2; i++) {
    for (claim of claims) {
      let isOverlapping = false;

      const claimId = getClaimId(claim);
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
          } else if (i === 1 && canvas[posX][posY] === "notUnique") {
            isOverlapping = true;
          } else if (canvas[posX][posY] === "unique") {
            canvas[posX][posY] = "notUnique";
          }
        }
      }

      if (!isOverlapping) {
        uniqueClaimId = claimId;
      }
    }
  }

  console.log(`Result: ${uniqueClaimId}`);
};

const getClaimId = claim => {
  const splittedClaim = claim.split(" ");
  return splittedClaim[0].replace("#", "");
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
