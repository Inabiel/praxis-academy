let sisi = 4;
let alas = 5;
let tinggi = 9;
const pi = 3.14
let r = 6


//Luas & Keliling Kotak
let LuasKotak = sisi*sisi;
let KelilingKotak = sisi*2;

//Luas & Keliling Segitiga
let LuasSegitiga = 0.5 * alas * tinggi;
let KelilingSegitiga = alas + alas + alas

//Luas & Keliling Lingkaran
let LuasLingkaran = pi * (r**2)
let KelilingLingkaran = pi * 2 * r

console.log('Luas dari Bangun Kotak Adalah = ' + LuasKotak)
console.log('Keliling dari Bangun Kotak Adalah = '+KelilingKotak)
console.log('Luas dari Bangun Segitiga Adalah = ' + LuasSegitiga)
console.log('Keliling dari Bangun Segitiga Adalah = '+KelilingSegitiga)
console.log('Luas dari Bangun Lingkaran Adalah = ' + LuasLingkaran)
console.log('Keliling dari Bangun Lingkaran Adalah = '+KelilingLingkaran)