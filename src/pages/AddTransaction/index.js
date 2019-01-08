import React, { useState } from 'react';
import { Section, SectionTitle, BackButton } from '../../components/Layout';
import MoneyInput from '../../components/MoneyInput';
import styles from './AddTransaction.module.css';
import { classNames } from '../../helpers/classNames';

export const AddTransaction = () => {
    const [type, setType] = useState('expense');
    const [amount, setAmount] = useState(null);

    console.log({ amount });

    const handleExpenseClick = () => setType('expense');
    const handleIncomeClick = () => setType('income');

    return (
        <Section>
            <SectionTitle>
                <BackButton />
                Create Transaction
            </SectionTitle>

            <MoneyInput value={amount} onChange={setAmount} className={styles.amountInput} autoFocus />

            <div className={styles.typeButtons}>
                <button onClick={handleExpenseClick} className={classNames(styles.typeButton, type === 'expense' && styles.typeButton_active)}>
                    Expense
                </button>

                <button onClick={handleIncomeClick} className={classNames(styles.typeButton, type === 'income' && styles.typeButton_active)}>
                    Income
                </button>
            </div>
        </Section>
    );
};
