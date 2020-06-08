import React from 'react';
import SettingsView from '../SettingsView/index';
import PreviewPane from '../PreviewPane/index';

import styles from './style.module.css'

const Layout = ({ children }) => {
  return (<div className={styles.layout}>
    <SettingsView />
    <PreviewPane />
  </div>);
}

export default Layout;