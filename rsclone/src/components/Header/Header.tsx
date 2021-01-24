import React from 'react';

import Burger from '@/components/Burger/Burger';
import style from '@/components/Header/Header.scss';
import Search from '@/components/Header/Search/Search';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import HomeHeaderIcon from '@/components/icons/Home';

const Header = () => (
  <header className={style.header}>

    <div className={style.header__icons_wrapper}>
      <Burger />
      <div className={style.header__icon}>
        <a className={style.header__link} href="https://rs.school/js/">
          <HomeHeaderIcon className={styles.size_xs} />
        </a>
      </div>
      <Search />
    </div>

    <div className={style.header__title_wrapper}>
      <h1 className={style.header__title}>Trello 2.0</h1>
    </div>
    <div className={style.header__button_wrapper}>
      <button type="button" className={style.header__button}>Your boards</button>
    </div>
  </header>
);

export default Header;
