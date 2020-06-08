import React from 'react';

import Button from '../Button';
import LinkCard from '../LinkCard';
import Navigation from '../Navigation';

import styles from './style.module.css'

const SettingsView = () => {
  return (
    <div className={styles.settings}>
      <Navigation />
      <div className={styles.links_container}>
        <Button className={styles.button}>Add New Link</Button>
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
}

export default SettingsView;