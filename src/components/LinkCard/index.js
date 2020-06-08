import React from 'react';
import cn from 'classnames'
import Toggle from 'react-toggle'

import { ReactComponent as Trash } from '../../assets/trash-solid.svg'
import 'react-toggle/style.css'
import styles from './style.module.css'

const LinkCard = () => {
  return (
    <div className={styles.card}>
      <input
        className={cn(styles.input, styles.input_title)}
        placeholder="title"
        type="text"
        name="title"
        id="" />
      <input
        className={cn(styles.input, styles.input_url)}
        placeholder="website"
        type="url"
        name="url"
        id=""
      />
      <Toggle name="toggle" className={styles.toggle} />
      <button className={styles.delete}>
        <Trash className={styles.icon} />
      </button>
    </div>
  );
}

export default LinkCard;