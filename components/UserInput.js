const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

class UserInput {
  question(q) {
    return new Promise((resolve) => {
      rl.question(q, (ans) => {
        resolve(isNaN(ans) ? ans : parseInt(ans));
      });
    });
  }

  close() {
    rl.close();
  }
}

module.exports = UserInput;
