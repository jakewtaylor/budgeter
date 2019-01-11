import React, { useState } from 'react';
import OutlineHelpOutline from 'react-md-icon/dist/OutlineHelpOutline';

import { transactionCategories } from '../../data/transactionCategories';
import styles from './CategoryPicker.module.css';
import { classNames } from '../../helpers/classNames';

export const CategoryPicker = ({ value, onChange }) => {
    const [picking, setPicking] = useState(false);

    const showPicker = (e) => {
        e.preventDefault();
        setPicking(true);
    };

    const handleCategoryPick = category => (e) => {
        onChange(category.key);
        setPicking(false);
    };

    const category = value && transactionCategories.find(cat => cat.key === value);

    return (
        <>
            <div
                onClick={showPicker}
                className={classNames(styles.categoryPicker, !value && styles.categoryPicker_empty)}
                style={{ '--color': category ? category.color : null }}
            >
                {category ? (
                    <>
                        <category.Icon className={styles.categoryIcon} />
                        <p className={styles.categoryLabel}>{category.label}</p>
                    </>
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
                        <button
                            key={category.key}
                            className={styles.categoryContainer}
                            onClick={handleCategoryPick(category)}
                        >
                            <div className={styles.categoryCircle} style={{ '--color': category.color }}>
                                <category.Icon className={styles.categoryPickIcon} />
                                <p className={styles.categoryPickLabel}>{category.label}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}
