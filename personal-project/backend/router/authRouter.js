const Router = require("express").Router;
const authController = require("../controllers/authController");
const {
  userValidationRules,
  loginValidationRules,
  validate,
} = require("../middleware/validator");
const roleController = require("../controllers/roleController");

const r = Router();

r.post(
  "/register",
  userValidationRules(),
  validate,
  authController.verifySignUp
);

r.post("/login", loginValidationRules(), validate, authController.verifyLogIn);
r.post("/setrole", roleController.editRole);
r.post("/setdesc", roleController.editDeskripi);

module.exports = r;
