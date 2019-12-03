const fs = require("fs");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const inputLines = inputFile.toString().split(/^/m);

  const startTime = new Date();
  console.log("Calculating the Manhatten distance");

  calculateManhattenDistance(inputLines);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculateManhattenDistance = paths => {
  const wirePath1 = getWirePath(paths[0].split(","));
  const wirePath2 = getWirePath(paths[1].split(","));
  const intersections = getIntersections(wirePath1, wirePath2);

  const distances = intersections.map(x => Math.abs(x.x) + Math.abs(x.y));
  const manhattenDistance = Math.min(...distances);

  console.log(`Result: ${manhattenDistance}`);
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

const getIntersections = (wirePath1, wirePath2) =>
  wirePath1.filter(p1 => wirePath2.find(p2 => p1.x === p2.x && p1.y === p2.y));

main();
