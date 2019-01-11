import React from 'react';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';
import styles from './ColorPicker.module.css';
import { classNames } from '../../helpers/classNames';

const Pointer = () => (
    <div className={styles.pointer} />
);

const ColorPicker = (props) => (
    <div>
        <div className={styles.sliderContainer}>
            <Hue {...props} pointer={Pointer} />
        </div>

        <div className={classNames(styles.sliderContainer, styles.sliderContainer_large)}>
            <Saturation {...props} pointer={Pointer} />
        </div>
    </div>
);

export default CustomPicker(ColorPicker);
