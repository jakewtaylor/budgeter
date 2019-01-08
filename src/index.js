import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { disableBodyScroll } from 'body-scroll-lock';

import App from './components/App';
import store from './redux';

import './index.css';

// Get our container div
const container = document.getElementById('root');

// Apply body-scroll-lock package to this target.
// This prevents scrolling on the <body /> but allows it
// on our container - improving native feel.
disableBodyScroll(container);

// If we're in fullscreen iOS mode, add a class to the
// container so we can do some specific styling.
if (window.navigator.standalone) {
    container.classList.add('ios-standalone');
}

// Render the app.
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), container);
