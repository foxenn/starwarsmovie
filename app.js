//dependencies

var express = require('express');

var path = require('path');

var app = express();

var routes = require('./routes/route.js');

//database

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sampleapp');

let db = mongoose.connection;

db.on('error', function(err){
	console.log(err);
});

db.once('open', function(){
	console.log('connection with mongodb');
});


// ..view engine

app.set('view engine', 'ejs');

app.set(path.join(__dirname, 'views'));




//static files

app.use('/cssfiles', express.static(path.join(__dirname, 'assets')));


let Article = require('./models/article');


//requests

app.get('/', routes.home);

app.get('/starwarsepisode/:episode_number?', routes.movie);

app.get('/articles', routes.articles );

app.post('/articles', function(req, res){

	


});

//server

// app.listen(process.env.PORT || 8080);

app.listen(8080, function(err){
	if(err) throw err;
	console.log('server started on port 8080');
});