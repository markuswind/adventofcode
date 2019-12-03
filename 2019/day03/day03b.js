const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Calculating the Manhatten distance");

  calculateFewestCombinedSteps(inputLines);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculateFewestCombinedSteps = paths => {
  const wirePath1 = getWirePath(paths[0].split(","));
  const wirePath2 = getWirePath(paths[1].split(","));

  const intersectionSteps = getInterctionSteps(wirePath1, wirePath2);
  const fewestCombinedSteps = Math.min(...intersectionSteps);

  console.log(`Result: ${fewestCombinedSteps}`);
};

const getWirePath = instructions => {
  const wirePath = [{ x: 0, y: 0 }];

  instructions.map(instruction => {
    const direction = instruction.substring(0, 1);
    const number = parseInt(instruction.substring(1).replace("\n", ""));

    for (let index = 0; index < number; index++) {
      const { x, y } = wirePath[wirePath.length - 1];

      switch (direction) {
        case "U":
          wirePath.push({ x, y: y + 1 });
          break;
        case "R":
          wirePath.push({ x: x + 1, y });
          break;
        case "D":
          wirePath.push({ x, y: y - 1 });
          break;
        case "L":
          wirePath.push({ x: x - 1, y });
          break;
        default:
          break;
      }
    }
  });

  return wirePath.splice(1);
};

const getInterctionSteps = (wirePath1, wirePath2) => {
  const intersectionSteps = [];

  wirePath1.map((location1, index1) => {
    const index2 = wirePath2.findIndex(
      location2 => location2.x === location1.x && location2.y === location1.y
    );

    if (index2 !== -1) {
      intersectionSteps.push(index1 + index2 + 2);
    }
  });

  return intersectionSteps;
};

main();
