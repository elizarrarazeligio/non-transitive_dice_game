const FairNumber = require("./components/FairNumber");
const { key, table, prob, dices } = require("./utils/constants.js");

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Question function
const question = (q) => {
  return new Promise((resolve) => {
    rl.question(q, (ans) => {
      // console.log(`answer: ${ans}`);
      resolve(ans);
    });
  });
};

// Main program
const main = async () => {
  console.log("Let's determine who makes the first move.");
  console.log("I selected a random value in the range of 0 - 1...");

  let HmacKey = await key.generateKey().then((key) => {
    const hmac = new FairNumber(key);
    console.log(`(HMAC: ${hmac.generateHmac("0")})`);
    console.log("Try to guess my selection.");
    console.log("0 - 0");
    console.log("1 - 1");
    console.log("X - exit");
    console.log("? - help");
    return key;
  });

  let sel1 = await question("Your selection: ");

  if (sel1 == "?") {
    table.showTable();
  }

  console.log("My selection: 0");
  console.log(`(KEY: ${HmacKey})`);

  rl.close();
};

main();
