import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import './app/layout/styles.css';

const rootElement = document.getElementById('root');

const render = () => {
	ReactDOM.render(<App />, rootElement);
};

if (module.hot) {
	module.hot.accept('./app/layout/App.js', () => {
		setTimeout(render);
	});
}

render();
reportWebVitals();
