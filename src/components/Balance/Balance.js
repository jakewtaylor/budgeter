import React from 'react';
import styles from './Balance.module.css';

import { Section, SectionTitle } from '../Layout';

export const Balance = ({ balance }) => (
    <Section>
        <SectionTitle>Balance</SectionTitle>
        <p className={styles.balance}>{balance}</p>
    </Section>
);
