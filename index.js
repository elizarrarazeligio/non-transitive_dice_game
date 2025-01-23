const FairNumber = require("./components/FairNumber");
const { key, table, prob, dices } = require("./utils/constants.js");

key
  .generateKey()
  .then((key) => {
    const hmac = new FairNumber(key);
    console.log(`hmac: ${hmac.generateHmac("3")}`);
    return key;
  })
  .then((key) => {
    console.log(`key: ${key}`);
  });

table.showTable();
