import React from 'react';

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


export default App;
