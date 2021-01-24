import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Board from '@/components/Board/Board';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import {AppContainer, SmallContainer, PageContainer} from '@/assets/stylesheets/styles';

const App = (): JSX.Element =>
  <PageContainer>
    <SmallContainer>
      <Header />
    </SmallContainer>
    <AppContainer>
      <Board />
    </AppContainer>
    <SmallContainer>
      <Footer />
    </SmallContainer>
  </PageContainer>;



export default connect()(App);
