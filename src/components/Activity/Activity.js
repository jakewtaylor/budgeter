import React from 'react';
import { Link } from 'react-router-dom';
import { Transaction } from './components/Transaction';
import { ReactComponent as Add } from '../Icons/Add.svg';

import { Section, SectionTitle } from '../Layout';

export const Activity = ({ transactions }) => (
    <Section>
        <SectionTitle renderIcon={() => (
            <Link to="/add-transaction">
                <Add />
            </Link>
        )}>Activity</SectionTitle>

        {transactions.map(transaction => (
            <Transaction key={transaction.timestamp} {...transaction} />
        ))}
    </Section>
);
