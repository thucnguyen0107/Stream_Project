import React from 'react';
import styles from './ScreenStream.css';
import { Link } from 'react-router-dom';
import Score from './Score/Score';
import Hero from './Hero/Hero';
import ControlButton from './Control_Button/ControlButton';
import routes from '../../constants/routes.json';

export default function ScreenStream() {
  return (
    
    <div className={styles.container}>
      <Link to={routes.HOME}>
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    <Score/>
    <div className={styles.blue_team}>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
    </div>
    <div className={styles.middle}>
      <div className={styles.control_btn_group}>
        <div>
        <ControlButton/>
        <ControlButton/>
        </div>
        <div>
        <ControlButton/>
        <ControlButton/>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    <div className={styles.red_team}>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
    </div>
    </div>
    );
}
