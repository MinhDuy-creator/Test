const path = require('path');
const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'public')))

//HTTP handle
app.use(morgan('combined'));

//Teamplate engine
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});
 
app.listen(3000);