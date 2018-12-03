const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = function() {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Getting unique claim id...");
  console.log(`Result: ${getUniqueClaimId(inputLines)}`);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const getUniqueClaimId = claims => {
  const canvas = getFilledCanvas(claims);

  for (claim of claims) {
    let isOverlapping = false;

    const claimId = getClaimId(claim);
    const { x, y } = getCoordinates(claim);
    const { width, height } = getDimensions(claim);

    for (let xBlock = 0; xBlock < width; xBlock++) {
      const posX = xBlock + parseInt(x) + 1;

      for (let yBlock = 0; yBlock < height; yBlock++) {
        const posY = yBlock + parseInt(y) + 1;

        if (canvas[posX][posY] === "notUnique") {
          isOverlapping = true;
        }
      }
    }

    if (!isOverlapping) {
      return claimId;
    }
  }

  return;
};

const getFilledCanvas = claims => {
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
        }
      }
    }
  }

  return canvas;
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
