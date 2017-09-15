//dependencies

var express = require('express');

var path = require('path');

var app = express();

var routes = require('./routes/route.js');




// ..view engine

app.set('view engine', 'ejs');

app.set(path.join(__dirname, 'views'));




//static files

app.use('/cssfiles', express.static(path.join(__dirname, 'assets')));




//requests

app.get('/', routes.home);

app.get('/starwarsepisode/:episode_number?', routes.movie);

app.get('*', routes.not_found);




//server

app.listen(process.env.PORT || 8080);