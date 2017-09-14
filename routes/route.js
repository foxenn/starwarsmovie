
var moviesJSON = require('../movies.json');


exports.home = function(req, res){

	var movies = moviesJSON.movies;

	res.render('index', {
		title: 'Star Wars Movies',
		movies: movies
	});
};


exports.movie = function(req, res){

	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	var movie = movies[episode_number];

	var title = movie.title;

	res.render('movie_single', {
		movies: movies,
		title: title
	});
	
};

exports.not_found = function(req, res){
	res.send('Not found');
};