const crypto = require("crypto-js");

let nim = "19.01.4419";
let secKey = "927b0701266413ac10b52019349808de927b0701266413ac";

let e = crypto.enc.Hex.parse(secKey);
n = function (t) {
  for (
    var e = t.charAt(0) + t.charAt(4) + t.charAt(6) + t.charAt(8),
      n = new Intl.DateTimeFormat("id", { day: "2-digit", hourl2: !1 }).format(
        new Date()
      ),
      o = Number(n) * Number(e),
      r = o.toString() + e,
      l = r.length,
      c = 0,
      i = 0;
    i < l;
    i++
  )
    c += Number(r.charAt(i));
  return o + "-" + c;
};

console.log(n(nim));
