import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/albums">
        <p>Albums</p>
      </Link>
      <Link to="/playlists">
        <p>Playlists</p>
      </Link>
    </div>
  );
};

export default NavBar;
