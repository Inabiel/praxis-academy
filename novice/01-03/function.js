function pakaiReturn(){
    let a = 5
    return a
}

function tanpaReturn(){
    let a = 5
    console.log(a)
}

a = pakaiReturn()
b = tanpaReturn()
console.log(typeof(a))
console.log(typeof(b))



let perkalian_banyak = (...nums) => nums.reduce((a,b)=> a *= b)

console.log(perkalian_banyak(1,2,3,4,5,6))


///Arrow Function, lambda in python
////Studi Kasus 1
let pertambahan = (...nums) => nums.reduce((a,b) => a+b)

console.log(pertambahan(1,4,9,1))

//Studi Kasus 2
let cariPanjang = (arr) => {
    let detail = arr.map(arr => arr.length);
    let jelasArr = arr.map( (i,j)=>{
        return {'nama':i, 'panjang':detail[j]}
    }
    )
    return jelasArr
}

isiarray = [
    'Nasi Padang',
    'Nasi Goreng',
    'Bajigur'
]

for(let i of cariPanjang(isiarray)){
    console.log(`Nama nya adalah ${i.nama} dengan panjang ${i.panjang} karakter`)
}

///Kasus 3
let panjangKalimat = (arr, ...paramkata) => {
    let jml = 0
    let panjangKal = arr.map(arr => arr.split(' '))
    for(let i of panjangKal){
       for(let kata of i){
           if(kata == paramkata){
               jml +=1
           }
       }
    }
    return jml
}

let kalimat = [
    'Secangkir kopi di pagi hari',
    'Bicara Seputar Sana Sini',
    'Tak disadari ku lewati pagi tanpa arti',
    'Aku tak tahu yang engkau mau'
]

testing = panjangKalimat(kalimat, 'pagi')
console.log(testing)