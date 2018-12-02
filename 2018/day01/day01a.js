const fs = require("fs");

const fileName = "./input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const startTime = new Date();
  console.log("Calculating frequency...");

  calculateFrequency();

  const endTime = new Date();
  console.log(`Done! (Finished in ${endTime - startTime} ms)`);
};

const calculateFrequency = () => {
  const instructions = inputFile.toString().split("\n");
  let frequency = 0;

  instructions.forEach(instruction => {
    const method = instruction.slice(0, 1);
    const number = parseInt(instruction.slice(1));

    switch (method) {
      case "-":
        frequency = frequency - number;
        break;
      case "+":
        frequency = frequency + number;
        break;
      default:
        console.log(`incorrect method found..`, method);
    }
  });

  console.log(`Result: ${frequency}`);
};

main();
