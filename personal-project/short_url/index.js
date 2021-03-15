const Express = require("express");
const Bp = require("body-parser");
const Hb = require("express-handlebars");

const app = Express();

app.engine(
  "hbs",
  Handlebars({
    extname: "hbs",
    defaultLayout: false,
  })
);

app.set("view engine", "hbs");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(9999, () => {
  console.log("App work on Port 9999");
});
