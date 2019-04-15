import axios from 'axios';

const getGifs = (query) => {
	if (!query) {
		return Promise.resolve([]);
	}
	axios
		.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=ZExAa2YyotAK2uWFz9PKLWTuVImDDXkI`)
		.then((response) => {
			const parsedData = response.data.data.map((gif) => gif.embed_url);
			return parsedData;
		})
		.catch((error) => {
			console.log(error);
		});
};

export default getGifs;
