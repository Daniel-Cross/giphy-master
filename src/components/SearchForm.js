import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';

const SearchForm = (props) => {
	const { handleChange, search, handleSubmit, name } = props;
	return (
		<div id="SearchForm">
			<form action="submit" onSubmit={handleSubmit}>
				<input type="text" placeholder="Kittens..." onChange={handleChange} value={search} name={name} />
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

SearchForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default SearchForm;
