const API_KEY = process.env.API_KEY;
export default {
	fetchTrending: {
		title: 'Trending',
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchTopRated: {
		title: 'Top Rated',
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	fetchComedyMovies: {
		title: 'Comedy',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
	},
	fetchHorrorMovies: {
		title: 'Horror',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
	},
	fetchRomanceMovies: {
		title: 'Romance',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
	},
	fetchMysteryMovies: {
		title: 'Mystery',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=0648`,
	},
	fetchSciFiMovies: {
		title: 'Sci-Fi',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=878`,
	},
	fetchWesternMovies: {
		title: 'Western',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=37`,
	},
	fetchAnimation: {
		title: 'Animation',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=16`,
	},
	fetchTv: {
		title: 'TV Movie',
		url: `/discover/movie?api_key=${API_KEY}&with_genre=10770`,
	},
};
