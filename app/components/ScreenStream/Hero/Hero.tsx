import React from 'react';
import styles from './Hero.css';

export default function Hero() {
    return(
        <div className={styles.container}>
            <div className={styles.hero_image}>
            </div>
            <div className={styles.hero_name}>
                League Of Legends
            </div>
        </div>
    );
}