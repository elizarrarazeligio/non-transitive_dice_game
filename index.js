const Table = require("./components/Table");
const WinProbability = require("./components/WinProbability");
const FairNumber = require("./components/FairNumber");
const RandomKey = require("./components/RandomKey");
const crypto = require("node:crypto");

const dices = process.argv.slice(2).map((dice) => dice.split(","));

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

const key = new RandomKey();
key
  .generateKey()
  .then((key) => {
    const hmac = new FairNumber(key);
    console.log(`hmac: ${hmac.generateHmac("3")}`);
    return key;
  })
  .then((key) => {
    console.log(`key: ${key}`);
  });

table.showTable();
