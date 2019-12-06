const fs = require("fs");
const IntCodeComputer = require("./intCodeComputer");

const fileName = "input.txt";
const inputFile = fs.readFileSync(fileName);

const main = () => {
  const initialState = inputFile.toString().split(/,/m);

  const startTime = new Date();
  console.log("Calculating final state..");

  calculateFinalState(initialState);

  const endTime = new Date();
  console.log("Done! (Finished in " + (endTime - startTime) + "ms)");
};

const calculateFinalState = initialState => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const intCodeComputer = new IntCodeComputer(initialState, noun, verb);
      const result = intCodeComputer.run();

      if (result === 19690720) {
        console.log(`Result: ${100 * noun + verb}`);
        return;
      }
    }
  }
};

main();
