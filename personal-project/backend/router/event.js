const Router = require("express").Router;
const eventController = require("../controllers/v1/events");

const r = Router();

const { isAuthenticated } = require("../middleware/isAuthenticated");

r.get("/events", eventController.getAllEvent);
module.exports = r;
