import React from 'react';
import SettingsView from '../SettingsView/index';
import PreviewView from '../PreviewView/index';

import styles from './style.module.css'

const Layout = ({ children }) => {
  return (<div className={styles.layout}>
    <SettingsView />
    <PreviewView />
  </div>);
}

export default Layout;