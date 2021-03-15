const Express = require('express');
const Handlebars = require('express-handlebars');
const route = require('./routes')
const app = Express();
const bodyParser = require('body-parser')
const port = 3000;

app.set('view engine', 'hbs')
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', Handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partial/',
    extname: 'hbs'
}));

app.use('/', route)

app.use(Express.static('public'));

app.listen(port, () => ('App Berjalan'));

