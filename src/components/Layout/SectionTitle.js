import React from 'react';
import styles from './Layout.module.css';

export const SectionTitle = ({ children }) => (
    <h2 className={styles.sectionTitle}>
        {children}
    </h2>
);
