import React from 'react';
import styles from './ScreenStream.css';
import { Link } from 'react-router-dom';
import Score from './Score/Score';
import Hero from './Hero/Hero';
import Next from './Next/Next';
import Ban from './Ban/Ban';
import ControlButton from './Control_Button/ControlButton';
import routes from '../../constants/routes.json';

export default function ScreenStream() {
  let right = true;
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
      <div className={styles.ban_group}>
      <div className={styles.first_ban}>
        <Ban/>
        <Ban/>
        <Ban/>
      </div>
      <div className={styles.second_ban}>
      <Ban/>
      <Ban/>
      </div>
      </div>
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
      <div className={styles.next_and_switch}>
        <Next/>
      </div>
    </div>
    <div className={styles.red_team}>
      <div>
      <Hero right={right}/>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
      </div>
      <div className={styles.ban_group}>
      <div className={styles.first_ban}>
        <Ban/>
        <Ban/>
        <Ban/>
      </div>
      <div className={styles.second_ban}>
      <Ban/>
      <Ban/>
      </div>
      </div>
    </div>
    </div>
    );
}
