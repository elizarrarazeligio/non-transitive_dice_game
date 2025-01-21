const AsciiTable = require("ascii-table");

class Table {
  constructor(dices) {
    this.dices = dices;
  }

  _getTableInfo() {
    let h = ["User Dice"];
    let r = [];
    this.dices.map((i) => {
      h.push(i);
      r.push([i, "Hola", "Hola", "Hola"]);
    });
    return { h, r };
  }

  showTable() {
    const { h, r } = this._getTableInfo();
    const table = new AsciiTable().fromJSON({
      heading: h,
      rows: r,
    });

    console.log(this.dices);
    console.log(table.toString());
  }
}

module.exports = Table;
