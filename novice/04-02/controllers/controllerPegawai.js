const bcrypt = require()
const pegawaiModel = require('../models/pegawais');


const apiUsers = async (req, res) => {
    try {
        const employees = await pegawaiModel.getUsers();
        return res.json(employees.rows)
    } catch (e) {
        console.log(e)
    }
}
const allUser = async (req, res) => {
    try {
        const employees = await pegawaiModel.getUsers();
        res.render('main', {
            layout: 'index',
            employee: employees.rows
        });
    } catch (e) {
        console.log(e)
    }
}

const getUserByIDNum = async (req, res) => {
    try {
        let id = req.params.id
        const getUser = await pegawaiModel.getUsersById(id);
        console.log(getUser)
        res.render('main', {
            layout: 'index',
            emp: getUser.rows
        })
    } catch (e) {
        console.log(e)
    }
}

const addUser = async (req, res) => {
    try {
        let {
            nip,
            nama,
            gender,
            gaji
        } = req.body;

        const tambahUser = await pegawaiModel.tambahUser({
            nip,
            nama,
            gender,
            gaji
        })

        return res.send({
            "nip": nip,
            "nama": nama,
            "gender": gender,
            "gaji": gaji
        }).status(200)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    allUser,
    getUserByIDNum,
    apiUsers,
    addUser
}