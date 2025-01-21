var AsciiTable = require("ascii-table");

const dices = process.argv.slice(2).map((dice) => dice.split(","));

console.log(dices);

const table = new AsciiTable("A Title");
table
  .setHeading("", "Name", "Age")
  .addRow(1, "Bob", 52)
  .addRow(2, "John", 34)
  .addRow(3, "Jim", 83);

console.log(table.toString());
