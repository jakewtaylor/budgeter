import React from 'react';
import styles from './App.module.css';

import Balance from '../Balance';
import Jars from '../Jars';

const App = () => (
    <div className={styles.app}>
        <Balance />
        <Jars />
    </div>
)

export default App;
