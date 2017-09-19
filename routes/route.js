var moviesJSON = require('../movies.json');


exports.home = function(req, res){

	var movies = moviesJSON.movies;

	res.render('index', {
		title: 'Star Wars Movies',
		movies: movies
	});
};

let Article = require('../models/article');

exports.articles = function(req, res){
	Article.find({}, function(err, articles){
		console.log(articles);
		res.render('articles');
	});
};


exports.articles_save = function(req, res){
	let article = new Article;

	article.title= req.body.name;
	article.author= req.body.city;
	article.body= req.body.state;

	article.save(function(err){
		if (err) {
			console.log(err);
		}else{
			res.redirect('/articles');
		}
	});
};



exports.movie = function(req, res){

	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	if (episode_number >= 1 && episode_number <= 6) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var mainCharacters = movie.main_characters;

		res.render('movie_single', {
			movies: movies,
			title: title,
			movie: movie,
			mainCharacters: mainCharacters
		});
	}
	else{
		res.send('movie not_found');
	}

};

exports.not_found = function(req, res){
	res.send('Not found');
};





