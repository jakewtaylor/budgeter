import React from 'react';
import styles from './Layout.module.css';

export const Section = ({ children }) => (
    <div className={styles.section}>
        {children}
    </div>
);
