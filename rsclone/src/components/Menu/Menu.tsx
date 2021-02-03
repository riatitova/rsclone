import React from 'react';

import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import HomeHeaderIcon from '@/components/icons/Home';
import { IMenu } from '@/constants';

import StyledMenu, { IconWrapper } from './Menu.styled';

const Menu = ({ open }: IMenu) => (
  <StyledMenu open={open}>
    <a href="/">
      <IconWrapper>
        <HomeHeaderIcon className={styles.size_sm} />
      </IconWrapper>
      <div>Homepage</div>
    </a>

    <a href="/boardList">
      <span role="img" aria-label="Go to boards">
        {' '}
        &#x1f427;
      </span>
      Go to boards
    </a>
  </StyledMenu>
);

export default Menu;
