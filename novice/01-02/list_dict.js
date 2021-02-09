let scores = [10,20,30,40,50]
console.log(scores[0])
//Elemen Terakhir
console.log(scores[scores.length-1])
//Mencoba Mapping
let scores_exp = scores.map(exp => exp**2)
console.log(scores_exp)

//Object, Which is Key-Value data structure. It uses : not =. Its similar to Dict's Python, same.
let dictionary = {
    nama : 'Nabil',
    umur : 19,
    nomor : '0895367831730'
}

console.log(dictionary)
console.log(dictionary.nomor)

let pegawaibanyak = [
    {
        nama:'Uhsina',
        nim : '123'
    },    
    {
        nama:'Haunan',
        nim : '234'
    }
]

console.log(pegawaibanyak[0].nama)