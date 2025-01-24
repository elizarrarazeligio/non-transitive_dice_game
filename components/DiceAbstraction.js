const { Random, dice } = require("random-js");
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

  async _userSelection(quest, arr, sel, value = 0) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i} - ${arr[i].length != 1 ? arr[i] : i}`);
    }
    this.showOptions();
    sel = await quest.question("Your selection: ");
    this.handleOptions(sel);
    value && (value = arr[sel]);
    return [sel, value];
  }

  async userDice({ sel, dice }, diceArr, quest) {
    console.log("Choose your dice:");
    [sel, dice] = await this._userSelection(quest, diceArr, sel, dice);
    console.log(`You choose the [${dice}] dice.`);
    return [sel, dice];
  }

  computerDice({ sel, dice }, diceArr) {
    sel = this.randomNumber(0, diceArr.length - 1);
    dice = diceArr[sel];
    console.log(`My move is to choose the [${dice}] dice.`);
    return [sel, dice];
  }

  newDices(diceArr, player) {
    return diceArr.filter((dice) => dice != player.dice);
  }

  async diceThrow({ dice, res }, { hmac }, quest) {
    console.log(
      `I selected a random value in the range 0 - ${dice.length - 1}.`
    );
    console.log(`(HMAC: ${hmac})`);
    console.log(`Add your number modulo ${dice.length}`);
    [res] = await this._userSelection(quest, dice, res);
    return res;
  }
}

module.exports = DiceAbstraction;
