const { bool } = require("random-js");
const { key, dices, quest, game } = require("./utils/constants.js");

const computer = {
  dice: [],
  sel1: 0,
  sel2: 0,
  throw: 0,
};

const user = {
  dice: [],
  sel1: 0,
  sel2: 0,
  throw: 0,
};

let fair = { key: "", hmac: "" };

// Main program
const main = async () => {
  // intro
  console.log("Let's determine who makes the first move.");
  computer.sel1 = game.randomNumber(0, 1);
  console.log("I selected a random value in the range of 0 - 1...");

  // HMAC - KEY generation
  [fair.hmac, fair.key] = await key.hmacKeyPair(computer.sel1);

  // Selection intro
  console.log(`(HMAC: ${fair.hmac})`);
  console.log("Try to guess my selection.");
  console.log("0 - 0");
  console.log("1 - 1");
  game.showOptions();

  // First selection loop
  do {
    user.sel1 = await quest.question("Your selection: ");
    game.handleOptions(user.sel1);
  } while (user.sel1 != 1 && user.sel1 != 0);

  // Show selection and key
  console.log(`My selection: ${computer.sel1}`);
  console.log(`(KEY: ${fair.key})`);

  // Dice selection
  if (computer.sel1 === user.sel1) {
    [user.sel2, user.dice] = await game.userSelection(user, dices, quest);
    [computer.sel2, computer.dice] = game.computerSelection(
      computer,
      game.newDices(dices, user)
    );
  } else {
    [computer.sel2, computer.dice] = game.computerSelection(computer, dices);
    [user.sel2, user.dice] = await game.userSelection(
      user,
      game.newDices(dices, computer),
      quest
    );
  }

  quest.close();
};

main();
