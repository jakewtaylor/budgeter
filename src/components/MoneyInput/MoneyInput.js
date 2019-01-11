import React, { useRef } from 'react';
import accounting from 'accounting';

export const MoneyInput = ({ value, onChange, currencySymbol, className, autoFocus = false }) => {
    const inputRef = useRef(null);
    const maskRef = useRef(null);

    const formattedValue = accounting.formatMoney(parseFloat(value) / 100, currencySymbol);

    const handleMaskFocus = () => {
        maskRef.current.blur();
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        onChange(e.target.value.replace(/[^\d]*/g, ''));
    };

    return (
        <div style={{ position: 'relative' }}>
            <input
                ref={maskRef}
                type="text"
                className={className}
                pattern="\d*"
                readOnly
                value={formattedValue}
                onFocus={handleMaskFocus}
            />

            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                pattern="\d*"
                className={className}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0, caretColor: 'transparent' }}
                autoFocus={autoFocus}
            />
        </div>
    );
}
