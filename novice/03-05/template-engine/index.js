const Express = require('express');
const Handlebars = require('express-handlebars')

const app = Express();
const port = 3000;

app.set('view engine', 'hbs')
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', Handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partial/',
    extname: 'hbs'
}));

app.use(Express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {
        layout: 'index'
    });
})
const lst = {
    name: 'Nabiel',
    skills = ['NOde']
}

app.listen(port, () => ('App Berjalan'));