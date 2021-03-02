const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kantor_praxis',
    password: 'kunci87x',
    port: 5432,
})

const buatTableParts = async () => {
    return pool.query(`
    create table if not exists parts (
        kode_parts varchar not null primary key,
        nama_parts varchar, 
        harga int not null,
    )
    `)
}
const buatTableKendaraan = async () => {
    return pool.query(`
    create table if not exists kendaraan (
        nopol varchar not null primary key,
        warna varchar, 
        merek varchar not null,
        tahun int
    )
    `)
}
const buatTableMekanik = async () => {
    return pool.query(`
    create table if not exists mekanik (
        mekanik_id varchar not null primary key,
        nama_mekanik varchar, 
    )
    `)
}
const buatTableBonPembelian = async () => {
    return pool.query(`
    create table  if not existsbon_pembelian (
        no_faktur varchar,
        tanggal datetime,
        no_polisi char(10),
        mekanik_id char(5),
        potongan int,
        primary key (no_faktur),
        constraint FK_nopolisi foreign key (no_polisi) references kendaraan(nopol),
        constraint FK_mekanik foreign key (mekanik_id) references mekanik(mekanik_id)
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
    return pool.query('select * from employee')

}

pool.connect()
    .then(() => {
        return buatTable();
    })
    .then(() => {
        return tambahUser({
            nip: '124',
            nama: 'bambang',
            gender: 1,
            gaji: 1200
        });
    })
    .then(() => {
        return getUsers();
    }).then((res) => console.log(res.rows))
    .catch((e) => console.log(e))