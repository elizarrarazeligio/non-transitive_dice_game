const {
  key,
  table,
  prob,
  dices,
  quest,
  hmac,
} = require("./utils/constants.js");

// Main program
const main = async () => {
  console.log("Let's determine who makes the first move.");
  console.log("I selected a random value in the range of 0 - 1...");

  let HmacKey = await key.generateKey().then((key) => {
    console.log(`(HMAC: ${hmac.generateHmac("0", key)})`);
    console.log("Try to guess my selection.");
    console.log("0 - 0");
    console.log("1 - 1");
    console.log("X - exit");
    console.log("? - help");
    return key;
  });

  let sel1 = await quest.question("Your selection: ");

  if (sel1 == "?") {
    table.showTable();
  }

  console.log("My selection: 0");
  console.log(`(KEY: ${HmacKey})`);
};

main();
