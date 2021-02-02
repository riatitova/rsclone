import React from 'react';

import StyledMenu from './Menu.styled';

import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import HomeHeaderIcon from '@/components/icons/Home';

import { IMenu } from '@/constants';

const Menu = ({ open }: IMenu) => (
  <StyledMenu open={open}>
    <a href="/">
      <div>
        <HomeHeaderIcon className={styles.size_sm} />
      </div>
      <div>Homepage</div>
    </a>

    <a href="/boardList">
      <span role="img" aria-label="Go to boards">
        {' '}
        &#x1f427;
      </span>
      Go to boards
    </a>
    <a href="/boardList">
      <span role="img" aria-label="Create board">
        {' '}
        &#x1f506;
      </span>
      Create board
    </a>

  </StyledMenu>
);

export default Menu;
