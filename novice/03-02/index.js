const crypto = require("crypto-js");
let code = "aaaaa;19.01.4419;15974-33";
let key = "927b0701266413ac10b52019349808de927b0701266413ac";
console.log(
  crypto.TripleDES.encrypt(
    crypto.enc.Utf8.parse(code),
    crypto.enc.Hex.parse(key),
    { mode: crypto.mode.ECB, padding: crypto.pad.Pkcs7 }
  ).toString()
);
