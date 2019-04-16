import { connect } from 'react-redux';
import Results from './Results';

function mapStateToProps(state) {
	return {
		results: state.search.results,
	};
}

export default connect(mapStateToProps)(Results);
