import React from 'react';

import PreviewPhone from '../PreviewPhone';

import styles from './style.module.css'

const link = `https://adamrasheed.com`

const PreviewPane = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.header_title}>
          <strong>My Linktree:</strong> <a href={link} target="_blank" rel="noopener noreferrer" >{link}</a>
        </p>
        <button className={styles.button}>Copy</button>
      </div>

      <div className={styles.preview_wrapper}>
        <PreviewPhone />
      </div>
    </div>);
}

export default PreviewPane;