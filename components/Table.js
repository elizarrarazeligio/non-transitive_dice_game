const AsciiTable = require("ascii-table");

class Table {
  constructor({ dices, probCalc }) {
    this._dices = dices;
    this._probCalc = probCalc;
  }

  _getTableInfo() {
    let h = ["User Dice"];
    let r = [];
    this._dices.map((dice, i, arr) => {
      h.push(dice);
      r.push(this._probCalc(dice, arr));
    });
    return { h, r };
  }

  showTable() {
    const { h, r } = this._getTableInfo();
    const table = new AsciiTable().fromJSON({
      heading: h,
      rows: r,
    });

    console.log(table.toString());
  }
}

module.exports = Table;
