class IntCodeComputer {
  constructor(memory, noun, verb) {
    this.memory = memory.map(Number);
    this.memory[1] = noun || this.memory[1];
    this.memory[2] = verb || this.memory[2];
  }

  run() {
    let position = 0;
    let isRunning = true;

    while (isRunning) {
      const optCode = this.memory[position];
      const params = [
        this.memory[this.memory[position + 1]],
        this.memory[this.memory[position + 2]],
        this.memory[position + 3]
      ];

      position += 4;
      isRunning = this.runInstruction(optCode, params);
    }

    return this.memory[0];
  }

  runInstruction(optCode, params) {
    switch (optCode) {
      case 1:
        this.memory[params[2]] = params[0] + params[1];
        break;
      case 2:
        this.memory[params[2]] = params[0] * params[1];
        break;
      default:
        return false;
    }

    return true;
  }
}

module.exports = IntCodeComputer;
