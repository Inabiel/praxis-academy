const hitung = (a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Number.isInteger(a) && Number.isInteger(b) ? resolve(a+b) : reject('a/b bukan Nomor')
        },2000)
    })
}

let nomor = hitung(15,9)
nomor.then((a)=> hitung(nomor + 10)).then((a)=> console.log(a)).catch((err) => console.log(err))
