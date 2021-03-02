const router = require('express').Router;
const path = require('path');
const r = router()

r.get('/', (req, res) => {
    res.send('Hello, world!')
})


r.get('/tentang-kita', (req, res) => {
    res.send('dsadsadaAAAAAAAAAAAAAa')
})

r.get('/cv', (req, res) => {
    res.sendFile(path.resolve('public/CV.html'));
});

r.get('/:hitungan/:angka1/:angka2', (req, res) => {
    const hitung = req.params.hitungan;
    const angka1 = parseInt(req.params.angka1);
    const angka2 = parseInt(req.params.angka2);
    let hasil;
    if (!angka1 || !angka2) {
        res.send('Angka tidak Boleh 0!')
    }
    switch (hitung) {
        case 'kali':
            hasil = angka1 * angka2;
            break;
        case 'tambah':
            hasil = angka1 + angka2
            break
        case 'bagi':
            hasil = angka1 / angka2;
            break
        case 'kurang':
            hasil = angka1 - angka2;
            break;
        default:
            hasil = 'Operator tidak valid';
            break
    }
    res.send(`${hasil}`)
})
module.exports = r;