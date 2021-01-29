import React, { useState, useRef } from 'react';

import Burger from '@/components/Burger/Burger';
import style from '@/components/Header/Header.scss';
import Menu from '@/components/Menu';
import Search from '@/components/Search/Search';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import HomeHeaderIcon from '@/components/icons/Home';

import useOnClickOutside from './hook';
import {Link} from "react-router-dom";
// import { IMenuToggle } from '@/constants';

function Header() {

  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <header className={style.header}>

      <div className={style.header__icons_wrapper}>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>

        <div className={style.header__icon}>
          <Link to="/" className={style.header__link}>
            <HomeHeaderIcon className={styles.size_sm} />
          </Link>
        </div>

        <Search />
      </div>

      <div className={style.header__title_wrapper}>
        <h1 className={style.header__title}>Trello 2.0</h1>
      </div>
      <div className={style.header__button_wrapper}>
        <Link to="/boardList" className={style.header__button}>Your boards</Link>
      </div>
    </header>
  );
}

export default Header;
