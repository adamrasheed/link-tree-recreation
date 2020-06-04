import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './style.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink activeClassName={styles.active_link} className={styles.link} exact to="/">Links</NavLink>
      <NavLink activeClassName={styles.active_link} className={styles.link} to="/appearance">Appearance</NavLink>
    </div>
  );
}

export default Navigation;