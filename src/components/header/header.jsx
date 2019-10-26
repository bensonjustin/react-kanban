import React from 'react';
import styles from './header.module.css';

const Header = ({ active, set }) => {
  return (
    <header className={styles.header}>
      <h4>kanban</h4>
      <button onClick={() => set(true)}>New Task</button>
    </header>
  );
};
export default Header;
