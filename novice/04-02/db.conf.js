const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kantor_praxis',
    password: 'kunci87x',
    port: 5432,
})



/*
pool.connect()
    .then(() => {
        return getUsers();
    }).catch((e) => console.log(e))
*/
module.exports = pool;