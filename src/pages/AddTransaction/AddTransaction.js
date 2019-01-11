import React, { useState } from 'react';
import { Section, SectionTitle, BackButton } from '../../components/Layout';
import MoneyInput from '../../components/MoneyInput';
import { CategoryPicker } from '../../components/CategoryPicker';
import styles from './AddTransaction.module.css';
import { classNames } from '../../helpers/classNames';
import { ReactComponent as Income } from '../../components/Icons/Income.svg';
import { ReactComponent as Expense } from '../../components/Icons/Expense.svg';

export const AddTransaction = ({ addTransaction, history }) => {
    const [type, setType] = useState('expense');
    const [amount, setAmount] = useState(0);
    const [label, setLabel] = useState('');
    const [category, setCategory] = useState(null);

    const handleExpenseClick = () => setType('expense');
    const handleIncomeClick = () => setType('income');

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const handleSubmit = () => {
        if (amount && label) {
            addTransaction(
                (type === 'expense' ? -amount : amount) / 100,
                label,
            );
            history.goBack();
        }
    };

    return (
        <Section>
            <SectionTitle>
                <BackButton />
                Create Transaction
            </SectionTitle>

            <MoneyInput value={amount} onChange={setAmount} className={styles.amountInput} autoFocus />

            <div className={styles.typeButtons}>
                <button onClick={handleExpenseClick} className={classNames(styles.typeButton, type === 'expense' && styles.typeButton_active)}>
                    <Expense className={styles.icon} />
                    Expense
                </button>

                <button onClick={handleIncomeClick} className={classNames(styles.typeButton, type === 'income' && styles.typeButton_active)}>
                    <Income className={styles.icon} />
                    Income
                </button>
            </div>


            <SectionTitle>Label</SectionTitle>
            <input
                className={styles.input}
                type="text"
                value={label}
                onChange={handleLabelChange}
                placeholder="e.g. Starbucks, Amazon, Uber"
            />

            <SectionTitle>Category</SectionTitle>
            <CategoryPicker value={category} onChange={setCategory} />

            <button className={styles.submitButton} onClick={handleSubmit}>
                Create Transaction
            </button>
        </Section>
    );
};
