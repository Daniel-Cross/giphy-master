import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import '../styles/Results.css';

const Results = (props) => {
	const { results } = props;
	return <div id="Results">{results.map((result) => <Result result={result} />)}</div>;
};

Results.propTypes = {
	results: PropTypes.array.isRequired,
};

export default Results;
