import React from 'react';

import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import PlayingBar from './components/PlayingBar/PlayingBar';

import styles from './App.css';

const App: React.FC = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <TopBar />
      <NavBar />
      <div className={styles.mainViewContainer}>{children}</div>
      <PlayingBar />
    </div>
  );
};

export default App;
