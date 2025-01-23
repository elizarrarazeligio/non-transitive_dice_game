const readline = require("readline");
const util = require("util");
const rl = readline.createInterface(process.stdin, process.stdout);

class UserInput {
  async _question(hind) {
    return new Promise((r) => {
      rl.question("Your value:", r);
    });
  }

  async main() {
    console.log("Start");
    const value = await _question("Your value:");
    console.log("Your value is " + value);
    console.log("Finish");
    rl.close();
  }
}

module.exports = UserInput;
