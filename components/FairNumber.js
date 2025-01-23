const crypto = require("node:crypto");

class FairNumber {
  generateHmac(choice, key) {
    return crypto.createHmac("sha3-256", key).update(choice).digest("hex");
  }
}

module.exports = FairNumber;
