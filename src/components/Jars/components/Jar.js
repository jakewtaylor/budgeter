import React from 'react';
import styles from '../Jars.module.css';

export const Jar = ({ id, name, value, target, color }) => (
    <div className={styles.jar} style={{ background: color }}>
        <p className={styles.jarSecondary}>{name}</p>
        <p className={styles.jarPrimary}>{value}</p>
        <p className={styles.jarSecondary}>of {target}</p>
    </div>
);
