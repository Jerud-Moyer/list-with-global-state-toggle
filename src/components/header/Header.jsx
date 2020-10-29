import React from 'react';
import { useThemeToggle } from '../../hooks/themes';
import styles from '../header/Header.css';


export default function Header() {
  const toggle = useThemeToggle();

  return (
    <div className={styles.Header}>
      <h1>BENDERdex</h1>
      <button  onClick={toggle}>Day / Night</button>
    </div>
  );
}
