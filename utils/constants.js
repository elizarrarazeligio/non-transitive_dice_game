const Table = require("../components/Table");
const WinProbability = require("../components/WinProbability");
const RandomKey = require("../components/RandomKey");
const UserInput = require("../components/UserInput");

const dices = process.argv.slice(2).map((dice) => dice.split(","));
const key = new RandomKey();
const prob = new WinProbability();
const table = new Table({
  dices,
  probCalc: (dice, arr) => {
    let pr = [dice.join()];
    for (let i = 0; i < dices.length; i++) {
      pr.push(prob.countWins(dice, arr[i]));
    }
    return pr;
  },
});

module.exports = { key, table, prob, dices };
