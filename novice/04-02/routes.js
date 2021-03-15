const Router = require('express').Router;
const pegawaiController = require('./controllers/controllerPegawai')

const r = Router();


r.get('/users', pegawaiController.apiUsers)
r.get('/alluser', pegawaiController.allUser)
r.post('/users', pegawaiController.addUser)
r.get('/user/:id', pegawaiController.getUserByIDNum)
module.exports = r;