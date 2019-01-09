import React, { useState } from 'react';
import OutlineHelpOutline from 'react-md-icon/dist/OutlineHelpOutline';

import { transactionCategories } from '../../data/transactionCategories';
import styles from './CategoryPicker.module.css';
import { classNames } from '../../helpers/classNames';

export const CategoryPicker = ({ value, onChange }) => {
    const [picking, setPicking] = useState(true);

    const showPicker = (e) => {
        e.preventDefault();
        setPicking(true);
    };

    return (
        <>
            <div onClick={showPicker} className={classNames(styles.categoryPicker, !value && styles.categoryPicker_empty)}>
                {value ? (
                    <p>{value}</p>
                ) : (
                    <>
                        <OutlineHelpOutline className={styles.categoryIcon} />
                        <p className={styles.categoryLabel}>Please Choose</p>
                    </>
                )}
            </div>

            {picking && (
                <div className={styles.picker}>
                    {transactionCategories.map(category => (
                        <div key={category.key}>
                            <category.Icon className={styles.categoryPickIcon} />
                            <p>{category.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
