import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <nav>
        {/* logo to be added */}
        <ul className={styles.navList}>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
