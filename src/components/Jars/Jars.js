import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Jars.module.css';
import { Jar } from './components/Jar';
import { ReactComponent as Transfer } from '../Icons/Transfer.svg';

import { Section, SectionTitle } from '../Layout';

export const Jars = ({ jars }) => (
    <Section>
        <SectionTitle renderIcon={() => (
            <Link to="/transfer">
                <Transfer />
            </Link>
        )}>Jars</SectionTitle>

        <div className={styles.jarsContainer}>
            <div className={styles.jars}>
                <div className={styles.jarSpacer}></div>

                {jars.map(jar => (
                    <Jar key={jar.id} {...jar} />
                ))}

                <div className={styles.jarSpacer}></div>
            </div>
        </div>
    </Section>
);
