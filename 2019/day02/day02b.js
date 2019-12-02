const fs = require("fs");

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
      let values = initialState.map(x => parseInt(x));
      let position = 0;

      values[1] = noun;
      values[2] = verb;

      while (position !== -1) {
        const optCode = values[position];
        const savePosition = values[position + 3];

        const value1 = values[values[position + 1]];
        const value2 = values[values[position + 2]];

        switch (optCode) {
          case 1:
            values[savePosition] = value1 + value2;
            break;
          case 2:
            values[savePosition] = value1 * value2;
            break;
          default:
            position = -1;
            break;
        }

        position = position === -1 ? position : position + 4;
      }

      if (values[0] === 19690720) {
        console.log(`Result: ${100 * noun + verb}`);
        return;
      }
    }
  }
};

main();
