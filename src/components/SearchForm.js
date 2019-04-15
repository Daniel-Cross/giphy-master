import React from 'react';

const SearchForm = (props) => {
	const { handleChange, search, handleSubmit } = props;
	return (
		<div id="SearchForm">
			<form action="submit" onSubmit={handleSubmit}>
				<input type="text" placeholder="Kittens..." onChange={handleChange} value={search} />
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default SearchForm;
