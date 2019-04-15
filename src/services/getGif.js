import axios from 'axios';

const getGifs = (query) => {
	if (!query) {
		return Promise.resolve([]);
	}

	return axios
		.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=ZExAa2YyotAK2uWFz9PKLWTuVImDDXkI`)
		.then(function(response) {
			const parsedData = response.data.data;
			console.log(parsedData);
			return parsedData;
		})
		.catch(function(error) {
			console.log(error);
		});
};

export default getGifs;
