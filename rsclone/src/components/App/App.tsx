import React from 'react';

import Board from '@/components/Board/Board';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import {AppContainer, HeaderContainer, PageContainer} from '@/assets/stylesheets/styles';

const App = (): JSX.Element =>
  <PageContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <AppContainer>
      <Board />
    </AppContainer>
    <HeaderContainer>
      <Footer />
    </HeaderContainer>
  </PageContainer>;


export default App;
