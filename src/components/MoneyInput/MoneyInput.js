import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const MoneyInput = ({ value, onChange, currencySymbol, className, autoFocus = false }) => {
    const inputMask = createNumberMask({
        prefix: currencySymbol,
        allowDecimal: true,
    });

    const handleChange = (e) => {
        let value = e.target.value
        value = value.replace(/[^0-9.]+/g, '');
        if (value) {
            value = parseInt(value, 10);
        } else {
            value = null;
            // value = 0;
        }

        console.log({ value });

        onChange(value);
    };

    return (
        <MaskedInput
            value={value}
            onChange={handleChange}
            mask={inputMask}
            pattern="\d*"
            className={className}
            placeholder={`${currencySymbol}0`}
            autoFocus={autoFocus}
            noValidate
        />
    );
}
