import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './app/layout/styles.css';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

const store = configureStore();

const rootElement = document.getElementById('root');

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<ScrollToTop />
				<App />
			</Router>
		</Provider>,
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
