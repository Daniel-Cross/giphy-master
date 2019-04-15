import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
	const { gif } = props;
	return (
		<div id="Result">
			<img src={gif} alt="gif" />
		</div>
	);
};

Result.propTypes = {
	gif: PropTypes.string.isRequired,
};

export default Result;
