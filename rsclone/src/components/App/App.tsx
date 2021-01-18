import React from 'react';

import Board from '@/components/Board/Board';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TestIcon from '@/components/icons/TestIcon';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';

import {AppContainer, HeaderContainer, PageContainer} from '@/assets/stylesheets/styles';

const App = (): JSX.Element =>
  <PageContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <AppContainer>
      <Board />
    </AppContainer>
      <TestIcon className={styles.size_xs}/>
      <Footer />
  </PageContainer>;


export default App;
