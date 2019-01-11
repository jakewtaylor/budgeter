import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Section, SectionTitle, BackButton } from '../../components/Layout';
import MoneyInput from '../../components/MoneyInput';
import styles from './AddJar.module.css';
import ColorPicker from '../../components/ColorPicker';

export const AddJar = () => {
    const [name, setName] = useState('');
    const [target, setTarget] = useState(0);
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('');

    const handleNameChange = e => setName(e.target.value);

    return (
        <Section>
            <SectionTitle>
                <BackButton />
                Add Jar
            </SectionTitle>

            <SectionTitle>Name</SectionTitle>
            <input
                className={styles.input}
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="e.g. New Car, Holiday"
                autoFocus
            />

            <SectionTitle>Target Amount</SectionTitle>
            <MoneyInput value={target} onChange={setTarget} className={styles.amountInput} />

            <SectionTitle>Existing Amount in Jar</SectionTitle>
            <MoneyInput value={value} onChange={setValue} className={styles.amountInput} />

            <SectionTitle>Color</SectionTitle>
            {/* <SketchPicker
                color={color}
                onChangeComplete={c => setColor(c.hex)}
                className={styles.colorPicker}
                disableAlpha
            /> */}
            <ColorPicker
                color={color}
                onChangeComplete={c => setColor(c.hex)}
            />

            <button className={styles.submitButton}>Create Jar</button>
        </Section>
    );
};
