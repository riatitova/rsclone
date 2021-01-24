import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {AppContainer, SmallContainer, PageContainer} from '@/assets/stylesheets/styles';
import BoardList from '@/components/BoardList';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const App = (): JSX.Element => (
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
        <Route exact path="/">
          <PageContainer>
            <SmallContainer>
              <Header />
            </SmallContainer>
          
            <SmallContainer>
              <Footer />
            </SmallContainer>
          </PageContainer>
        </Route>
        <Route path="/boardList">
          <PageContainer>
            <SmallContainer>
              <Header />
            </SmallContainer>
            <AppContainer>
              <BoardList />
            </AppContainer>
            <SmallContainer>
              <Footer />
            </SmallContainer>
          </PageContainer>
        </Route>
      </Switch>
    </div>
  </Router>
);
// <PageContainer>
//   <SmallContainer>
//     <Header />
//   </SmallContainer>
    
//   <SmallContainer>
//     <Footer />
//   </SmallContainer>
// </PageContainer>

export default connect()(App);
