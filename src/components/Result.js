import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Result.css';

const Result = (props) => {
	const { result } = props;
	const { thumbnail } = props.result;
	return (
		<div id="Result">
			<img src={thumbnail} alt="gif" />
		</div>
	);
};

Result.propTypes = {
	result: PropTypes.string.isRequired,
};

export default Result;
