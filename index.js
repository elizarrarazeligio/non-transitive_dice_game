const { key, dices, quest, game, computer, user, fair } = require("./utils/constants.js");

// Main program
const main = async () => {
  // intro
  console.log("Let's determine who makes the first move.");
  console.log("I selected a random value in the range of 0 - 1...");

  // HMAC - KEY generation for computer selection
  computer.sel1 = game.randomNumber(0, 1);
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
    [user.sel2, user.dice] = await game.userDice(user, dices, quest);
    [computer.sel2, computer.dice] = game.computerDice(computer, game.newDices(dices, user));
  } else {
    [computer.sel2, computer.dice] = game.computerDice(computer, dices);
    [user.sel2, user.dice] = await game.userDice(user, game.newDices(dices, computer), quest);
  }

  // Dice throws
  // HMAC - KEY generation for computer selection
  for (let i = 1; i <= 2; i++) {
    console.log(`It's time for ${i%2 == 0 ? "your":"my" } throw.`)

    // Dice abstraction and HMAC - Key fairness generation
    computer.throw = game.randomNumber(0, computer.dice.length -1);
    [fair.hmac, fair.key] = await key.hmacKeyPair(computer.throw);
    user.throw = await game.diceThrow(user, fair, quest);
    console.log(`My number is ${computer.throw}`);
    console.log(`(KEY: ${fair.key})`);

    // Throws result
    let throwRes = (computer.throw + user.throw) % 6;
    (i%2 == 0 ? (user.diceValue = user.dice[throwRes]) : (computer.diceValue = computer.dice[throwRes]))
    console.log(`The result is ${computer.throw} + ${user.throw} = ${(throwRes)} (mod 6)`);
    console.log(`${i%2 == 0 ? "Your" : "My"} throw is ${i%2 == 0 ? user.diceValue : computer.diceValue}.`)
  }

  if(user.diceValue > computer.diceValue) {
    console.log(`You win (${user.diceValue} > ${computer.diceValue})`)
  } else if (user.diceValue < computer.diceValue) {
    console.log(`You loose (${user.diceValue} < ${computer.diceValue})`)
  } else {
    console.log(`Tie (${user.diceValue} = ${computer.diceValue})`)
  }

  quest.close();
};

main();