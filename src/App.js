import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			submit: false,
		};
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState((state) => ({
			submit: !state.submit,
		}));
	};

	render() {
		return (
			<div id="App">
				<SearchForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					search={this.state.search}
				/>
			</div>
		);
	}
}

export default App;
