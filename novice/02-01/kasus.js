const fs = require('fs')

let bacaFile = (nama) => {
    fs.readFile(`${nama}.txt`, (err, data) => {
        if (err) {
            return console.error(err)
        }
        console.log(`${data.toString()}`)
    })
}

let tambahIsiFile = (nama, data) => {
    fs.appendFile(`${nama}.txt`, data, (err, data) => {
        if (err) {
            return err
        }
        console.log('data telah ditambah ke file', nama)
    })
}

let tambahFile = (nama, data) => {
    fs.writeFile(`${nama}.txt`, data, (err, data) => {
        if (err) {
            return console.error(err)
        }
        console.log(`File ${nama}.txt telah dibuat`)
    })
}


tambahFile('kasus3', '')
tambahIsiFile('kasus3', 'kukukuntul')
bacaFile('kasus3')