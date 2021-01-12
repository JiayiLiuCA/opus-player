import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Albums from './views/Albums/Albums';
import Playlists from './views/Playlists/Playlists';
import App from './App';

const Root: React.FC = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/albums" exact component={Albums} />
        <Route path="/playlists" exact component={Playlists} />
        {/* Default Route */}
        <Route path="/" component={Albums} />
      </Switch>
    </App>
  </Router>
);

export default Root;
