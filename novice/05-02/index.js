const Express = require("express");
const Handlebars = require("express-handlebars");
const routesPegawai = require("./routes/pegawaiRoutes");
const routesRole = require("./routes/roleRoutes");
const app = Express();
const bodyParser = require("body-parser");
const port = 3000;

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

app.use("/user", routesPegawai);
app.use("/role", routesRole);

app.listen(9999, () => {
  console.log("App work on Port 9999");
});
