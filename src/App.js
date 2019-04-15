import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import getGifs from './services/getGif';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			results: [],
			submit: false,
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		const { search } = this.state;
		e.preventDefault();

		getGifs(search).then((data) => {
			this.setState({
				results: data,
			});
		});
	};

	render() {
		return (
			<div id="App">
				<SearchForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					search={this.state.search}
				/>
				<Results />
			</div>
		);
	}
}

export default App;
