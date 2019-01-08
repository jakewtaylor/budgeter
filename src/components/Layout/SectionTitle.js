import React from 'react';
import styles from './Layout.module.css';

export const SectionTitle = ({ children, renderIcon }) => (
    <div className={styles.sectionTitleContainer}>
        <h2 className={styles.sectionTitle}>
            {children}
        </h2>

        <div>
            {renderIcon && renderIcon()}
        </div>
    </div>
);
