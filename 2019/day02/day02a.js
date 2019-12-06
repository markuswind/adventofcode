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
  const intCodeComputer = new IntCodeComputer(initialState, 12, 2);
  const result = intCodeComputer.run();

  console.log(`Result: ${result}`);
};

main();
