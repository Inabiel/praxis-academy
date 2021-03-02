const {
    json
} = require('express');
const Express = require('express');
const Handlebars = require('express-handlebars');
const pool = require('./db.conf')
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

app.get('/alluser', async (req, res) => {
    let sql = 'select * from employee';
    try {
        let query = await pool.query(sql)
        res.render('main', {
            layout: 'index',
            employee: query.rows
        });
    } catch (e) {
        console.log(e)
    }
})

app.post('/adduser', (req, res) => {

})

app.listen(port, () => ('App Berjalan'));