import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { searchSuccess } from './services/actions';
import { createLogger } from 'redux-logger';

const store = createStore(reducer, applyMiddleware(createLogger()));

const results = [
	{
		key: 1,
		full: 'https://media2.giphy.com/media/f1fpMxNfg8GQw/giphy.gif',
		thumbnail: 'https://media2.giphy.com/media/f1fpMxNfg8GQw/100_s.gif',
	},
	{
		key: 2,
		full: 'https://media3.giphy.com/media/Gp32KJtqe08Lu/giphy.gif',
		thumbnail: 'https://media3.giphy.com/media/Gp32KJtqe08Lu/100_s.gif',
	},
];

window.setTimeout(() => {
	store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
