const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, world!')
})


app.get('/tentang-kita', (req, res) => {
    res.send('dsadsadaAAAAAAAAAAAAAa')
})

app.get('/cv', (req, res) => {
    res.sendFile(path.resolve('public/CV.html'));
});

app.listen(3000, () => {
    console.log('Aplikasi Berjalan di port 3000')
});