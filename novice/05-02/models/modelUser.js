const pool = require("../db.conf");

const buatTableUser = async () => {
  return pool.query(`
create table if not exists users (
    UUID uuid DEFAULT uuid_generate_v4 (),
    name varchar, 
    password varchar
)
`);
};
const tambahUser = async (user) => {
  return pool.query(
    `
        insert into users (name, password) 
        values(
            $1,
            $2)
        `,
    [user.name, user.password]
  );
};

const getUsers = async () => {
  try {
    return pool.query("select * from users");
  } catch (e) {
    console.log(e);
  }
};

const getUsersById = async (uuid) => {
  try {
    return pool.query(`select * from users where uuid =  $1`, [uuid]);
  } catch (e) {
    console.log(e);
  }
};
const updateData = async (nama) => {
  try {
    return pool.query(`update users set name = $1 where uuid = $2`, [
      nama.newUname,
      nama.uuid,
    ]);
  } catch (e) {
    console.log(e);
  }
};
const deleteUser = async (uuid) => {
  try {
    return pool.query(`delete from users where uuid=$1`, [uuid]);
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getUsers,
  getUsersById,
  tambahUser,
  updateData,
  deleteUser,
};
