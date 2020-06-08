import React from 'react';
import cn from 'classnames'
import styles from './style.module.css'

const Button = ({ onClick, children, className }) => {
  return (<button className={cn(styles.button, className)}>{children}</button>);
}

export default Button;