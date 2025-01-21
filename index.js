const Table = require("./components/Table");
const WinProbability = require("./components/WinProbability");

const dices = process.argv.slice(2);
const table = new Table(dices);
const prob = new WinProbability();

table.showTable();
console.log(prob.countWins([1, 1, 6, 6, 8, 8], [2, 2, 4, 4, 9, 9]));
