import React from 'react';

import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import PlayingBar from './components/PlayingBar/PlayingBar';

import styles from './App.css';

interface Props {
  children: any;
}

const App: React.FC<Props> = ({ children }) => {
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
