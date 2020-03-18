import React from 'react';
import styles from './Hero.css';

type Props = {
    right: Boolean;
}
export default function Hero(props= Props) {
    const {right} = props
    console.log('aaaaaaaaaa',right);
    return(
        <div className={styles.container}>
            <div className={right == true ? 'nulllll' : '{`${styles.hero} ${styles.right}`}'}>
            <div className={styles.hero_image}>
            </div>
            <div className={styles.hero_name}>
                League Of Legends
            </div>
            </div>
        </div>
    );
}