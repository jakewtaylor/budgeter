import React from 'react';
import styles from '../Activity.module.css';

export const Transaction = ({ label, amount, valueString, moment }) => (
    <div className={styles.transaction}>
        <div>
            <p className={styles.transactionLabel}>{label}</p>
            <p className={styles.transactionTimestamp}>{moment.format('Do MMMM YYYY')}</p>
        </div>

        <p className={styles.transactionValue} data-value={amount}>{valueString}</p>
    </div>
);
