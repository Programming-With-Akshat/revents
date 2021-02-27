import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import './app/layout/styles.css';

const rootElement = document.getElementById('root');

const render = () => {
	ReactDOM.render(
		<Router>
			<App />
		</Router>,
		rootElement
	);
};

if (module.hot) {
	module.hot.accept('./app/layout/App.js', () => {
		setTimeout(render);
	});
}

render();
reportWebVitals();
