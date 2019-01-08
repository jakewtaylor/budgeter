import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Layout.module.css';
import { ReactComponent as Back } from '../Icons/Back.svg';

export const BackButton = withRouter(({ history }) => {
    const handleClick = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <button onClick={handleClick} className={styles.backButton}>
            <Back />
        </button>
    );
});
