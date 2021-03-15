const modelUser = require("../models/modelUser");
const bcrypt = require("bcrypt");

const allUser = async (req, res) => {
  try {
    const users = await modelUser.getUsers();
    res.render("userview", {
      users: users.rows,
    });
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async (req, res) => {
  try {
    let { name, pw } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(pw, salt).toString();
    const query = await modelUser.tambahUser({
      name,
      password,
    });
    res.redirect("/user/");
  } catch (e) {
    console.log(e);
  }
};

const changeName = async (req, res) => {
  let { newUname, uuid } = req.body;
  try {
    await modelUser.updateData({
      uuid,
      newUname,
    });
    res.redirect("/user/");
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (req, res) => {
  let uuid = req.params.uuid;
  try {
    await modelUser.deleteUser(uuid);
    res.redirect("/user/");
  } catch (e) {
    console.log(e);
  }
};

const formInsert = (req, res) => {
  res.render("addUser");
};

const formGanti = async (req, res) => {
  let uid = req.params.uuid;
  try {
    const users = await modelUser.getUsersById(uid);
    res.render("changePass", {
      user: users.rows[0],
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  allUser,
  insertUser,
  formInsert,
  insertUser,
  formGanti,
  changeName,
  deleteUser,
};
