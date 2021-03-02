const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kantor_praxis',
    password: 'kunci87x',
    port: 5432,
})

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
/*
pool.connect()
    .then(() => {
        return getUsers();
    }).catch((e) => console.log(e))
*/
module.exports = pool;