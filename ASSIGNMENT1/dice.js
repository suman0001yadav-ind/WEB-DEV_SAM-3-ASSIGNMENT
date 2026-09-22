const crypto = require("crypto");

for (let i = 0; i < 5; i++) {
  console.log(crypto.randomInt(1, 7));
}