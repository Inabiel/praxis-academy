const express = require('express');
const app = express();
const route = require('../02-03/route')

app.use(express.static('public'));
app.use('/', route)
app.use('/cv', route)
app.use('/hitungan', route)
app.listen(3000);