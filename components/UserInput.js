const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

class UserInput {
  question(q) {
    return new Promise((resolve) => {
      rl.question(q, (ans) => {
        resolve(ans);
      });
    });
  }
}

module.exports = UserInput;
