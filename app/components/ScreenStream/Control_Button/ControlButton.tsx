import React from 'react';
import styles from './ControlButton.css';

export default function ControlButton() {
    return(
        <button className={styles.btn}>
          <p>Play</p>
        </button>
    );
}