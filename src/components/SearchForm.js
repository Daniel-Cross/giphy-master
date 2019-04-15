import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
	const { handleChange, search, handleSubmit } = props;
	return (
		<div id="SearchForm">
			<form action="submit" onSubmit={handleSubmit}>
				<input type="text" placeholder="Kittens..." onChange={handleChange} value={search} name="search" />
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
