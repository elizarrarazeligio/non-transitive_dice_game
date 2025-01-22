const crypto = require("node:crypto");
const { subtle } = globalThis.crypto;

class RandomKey {
  async generateKey() {
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
}

module.exports = RandomKey;
