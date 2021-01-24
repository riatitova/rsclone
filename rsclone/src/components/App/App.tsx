import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BoardList from '@/components/BoardList';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/boardList">board list</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" />
        <Route path="/boardList">
          <BoardList />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default connect()(App);
