const Table = require("../components/Table");
const WinProbability = require("../components/WinProbability");
const RandomKey = require("../components/RandomKey");
const UserInput = require("../components/UserInput");
const FairNumber = require("../components/FairNumber");
const DiceAbstraction = require("../components/DiceAbstraction");

const dices = process.argv.slice(2).map((dice) => dice.split(","));

const prob = new WinProbability();
const quest = new UserInput();
const hmac = new FairNumber();
const table = new Table({
  dices,
  probCalc: (dice, arr) => {
    let row = [dice.join()];
    for (let i = 0; i < dices.length; i++) {
      row.push(prob.countWins(dice, arr[i]));
    }
    return row;
  },
});
const game = new DiceAbstraction({ help: () => table.showTable() });
const key = new RandomKey({
  hmac: (value, key) => hmac.generateHmac(value, key),
});

module.exports = { key, dices, quest, game };
