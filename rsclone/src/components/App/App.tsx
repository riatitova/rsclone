import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  AppContainer,
  HeaderContainer,
  FooterContainer,
  PageContainer,
} from '@/assets/stylesheets/styles';
import BoardList from '@/components/BoardList';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const App = (): JSX.Element => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <PageContainer>
            <HeaderContainer>
              <Header />
            </HeaderContainer>

            <AppContainer>Home</AppContainer>

            <FooterContainer>
              <Footer />
            </FooterContainer>
          </PageContainer>
        </Route>
        <Route path="/boardList">
          <PageContainer>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <AppContainer>
              <BoardList />
            </AppContainer>
            <FooterContainer>
              <Footer />
            </FooterContainer>
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
