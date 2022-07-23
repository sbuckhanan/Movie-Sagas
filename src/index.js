import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
//? import store
import storeInstance from './redux/reducers/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={storeInstance}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
