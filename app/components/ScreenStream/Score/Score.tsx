import React from 'react';
import styles from './Score.css';

export default function Score() {
    return(
        <div className={styles.container}>
            <div className={styles.countdown_time}>
                <p>:30</p>
            </div>
            <div className={styles.score_pick}>
                <div className={styles.score}>
                    <p>0 - 0</p>
                </div>
                <div className={styles.pick}>
                    <p>ĐỘI ĐỎ CHỌN</p>
                </div>
            </div>
            <div className={styles.countdown_time}>
                <p>:25</p>
            </div>
        </div>
    );
}