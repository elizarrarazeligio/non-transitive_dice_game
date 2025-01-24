const { Random } = require("random-js");
const random = new Random();

class DiceAbstraction {
  constructor({ help }) {
    this._help = help;
  }

  randomNumber(low, high) {
    return random.integer(low, high);
  }

  showOptions() {
    console.log("X - exit");
    console.log("? - help");
  }

  handleOptions(sel) {
    if (sel == "?") {
      this._help();
    }
    if (sel == "X") {
      process.exit();
    }
  }

  async userSelection({ sel, dice }, diceArr, quest) {
    console.log("Choose your dice:");
    for (let i = 0; i < diceArr.length; i++) {
      console.log(`${i} - ${diceArr[i]}`);
    }
    this.showOptions();
    this.handleOptions();
    sel = await quest.question("Your selection: ");
    dice = diceArr[sel];
    console.log(`You choose the [${dice}] dice.`);
    return [sel, dice];
  }

  computerSelection({ sel, dice }, diceArr) {
    sel = this.randomNumber(0, diceArr.length - 1);
    dice = diceArr[sel];
    console.log(`My move is to choose the [${dice}] dice.`);
    return [sel, dice];
  }

  newDices(diceArr, player) {
    return diceArr.filter((dice) => dice != player.dice);
  }
}

module.exports = DiceAbstraction;
