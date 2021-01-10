import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Albums from '../views/Albums/Albums';
import Playlists from '../views/Playlists/Playlists';
import App from '../App';

const AppRouter: React.FC = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/albums" component={Albums} />
        <Route path="/playlists" component={Playlists} />
      </Switch>
    </App>
  </Router>
);

export default AppRouter;
