const fs = require("fs");

const fileName = "./input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const startTime = new Date();
  console.log("Calculating frequency...");

  getFrequencyThatHasBeenHitTwice();

  const endTime = new Date();
  console.log(`Done! (Finished in ${endTime - startTime} ms)`);
};

const getFrequencyThatHasBeenHitTwice = () => {
  const instructions = inputFile.toString().split(/^/m);

  let foundFrequency = false;
  let hitFrequencies = [0];
  let frequency = 0;

  while (!foundFrequency) {
    for (const instruction of instructions) {
      frequency = calculateNewFrequency(frequency, instruction);
      foundFrequency = hitFrequencies.includes(frequency);

      if (foundFrequency) {
        console.log(`Result: ${frequency}`);
        break;
      } else {
        hitFrequencies.push(frequency);
      }
    }
  }
};

const calculateNewFrequency = (frequency, instruction) => {
  let newFrequency = frequency;

  const method = instruction.slice(0, 1);
  const number = parseInt(instruction.slice(1));

  switch (method) {
    case "-":
      newFrequency = frequency - number;
      break;
    case "+":
      newFrequency = frequency + number;
      break;
    default:
      console.log("unknown method found..", number);
      break;
  }

  return newFrequency;
};

main();
