const pool = require('../db.conf')

const buatTableEmployee = async () => {
    return pool.query(`
create table if not exists employee (
    nim varchar not null primary key,
    nama varchar, 
    gender int not null,
    gaji int
)
`)
}

const tambahUser = async (user) => {
    return pool.query(`
insert into employee values(
    $1,
    $2,
    $3,
    $4
)
`,
        [user.nip, user.nama, user.gender, user.gaji])
}

const getUsers = async () => {
    try {
        return pool.query('select * from employee')
    } catch (e) {
        console.log(e)
    }
}
const getUsersById = async (id) => {
    try {
        return pool.query(`select * from employee where nip =  $1`, [id])
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getUsers,
    getUsersById,
    tambahUser,
}