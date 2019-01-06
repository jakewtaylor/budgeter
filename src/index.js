import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './redux';

import './index.css';
import { createTransaction } from './redux/actions/transactions';
import { createJar } from './redux/actions/jars';

store.dispatch(createTransaction(1600, 'Monthly Income', +(new Date())));
store.dispatch(createTransaction(-14.99, 'Spotify', +(new Date())));

store.dispatch(createJar('New Car', 1200, 200, '#4592F7'));
store.dispatch(createJar('Holiday', 600, 400, '#53B351'));
store.dispatch(createJar('Big Shed', 1500, 450, '#c83c3c'));
store.dispatch(createJar('Oof', 2000, 50, '#7d3cc8'));

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
