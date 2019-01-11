import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';

import { Home } from '../../pages/Home';
import { AddTransaction } from '../../pages/AddTransaction';
import { AddJar } from '../../pages/AddJar';

const App = () => (
    <Router>
        <div className={styles.app}>
            <Route path="/" exact component={Home} />

            <Route path="/add-transaction" exact component={AddTransaction} />

            <Route path="/add-jar" exact component={AddJar} />
        </div>
    </Router>
);

export default App;
