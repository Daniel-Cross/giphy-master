import axios from 'axios';

const getGifs = (query) => {
	if (!query) {
		return Promise.resolve([]);
	}

	return axios
		.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=ZExAa2YyotAK2uWFz9PKLWTuVImDDXkI`)
		.then(function(response) {
			const parsedData = response.data.data;
			const thumbnails = parsedData.map((thumbnail) => thumbnail.images.fixed_height_small_still.url);
			const full = parsedData.map((full) => full.images.original.url);
			const results = {
				full: full,
				thumbnail: thumbnails,
			};
			console.log(results);
			return results;
		})
		.catch(function(error) {
			console.log(error);
		});
};

export default getGifs;
