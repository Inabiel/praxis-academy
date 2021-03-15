const Router = require("express").Router;
const userController = require("../controllers/userController");

const r = Router();

r.get("/", userController.allUser);
r.get("/adduser", userController.formInsert);
r.get("/changeuser/:uuid", userController.formGanti);
r.post("/changeuser/:uuid", userController.changeName);
r.get("/deleteuser/:uuid", userController.deleteUser);
r.post("/adduser", userController.insertUser);
module.exports = r;
