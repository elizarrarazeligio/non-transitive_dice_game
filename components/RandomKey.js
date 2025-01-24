const crypto = require("node:crypto");
const { subtle } = globalThis.crypto;

class RandomKey {
  constructor({ hmac }) {
    this._hmac = hmac;
  }

  async _generateKey() {
    const key = await subtle.generateKey(
      {
        name: "HMAC",
        hash: "SHA-256",
        length: 256,
      },
      true,
      ["sign", "verify"]
    );
    const keyObject = crypto.KeyObject.from(key);
    return keyObject.export().toString("hex");
  }

  async hmacKeyPair(value) {
    return await this._generateKey().then((key) => {
      let hmac = this._hmac(`${value}`, key);
      return [hmac, key];
    });
  }
}

module.exports = RandomKey;
