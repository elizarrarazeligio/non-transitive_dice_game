const crypto = require("node:crypto");

class FairNumber {
  constructor(key) {
    this._key = key;
  }

  generateHmac(choice) {
    return crypto
      .createHmac("sha3-256", this._key)
      .update(choice)
      .digest("hex");
  }
}

module.exports = FairNumber;
