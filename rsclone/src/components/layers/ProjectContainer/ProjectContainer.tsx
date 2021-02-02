import React from 'react';

import {
  AppContainer,
  HeaderContainer,
  FooterContainer,
  PageContainer,
} from '@/assets/stylesheets/styles';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

interface IElements {
  children?: JSX.Element;
}

const ProjectContainer = (props: IElements): JSX.Element => (
  <PageContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <AppContainer>{props.children}</AppContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </PageContainer>
);

export default ProjectContainer;
