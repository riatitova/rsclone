import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hook';
import style from "@/components/Header/Header.scss";
import styles from "@/components/icons/BaseIcon/BaseIcon.scss";
import HomeHeaderIcon from "@/components/icons/Home";
import Search from "@/components/Search/Search";
import Burger from "@/components/Burger/Burger";
import Menu from "@/components/Menu";


function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <header className={style.header}>

      <div className={style.header__icons_wrapper}>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className={style.header__icon}>
          <a className={style.header__link} href="https://rs.school/js/">
            <HomeHeaderIcon className={styles.size_sm}/>
          </a>
        </div>
        <Search />
      </div>

      <div className={style.header__title_wrapper}>
        <h1 className={style.header__title}>Trello 2.0</h1>
      </div>
      <div className={style.header__button_wrapper}>
        <button className={style.header__button}>Your boards</button>
      </div>
    </header>
  )
}

export default Header;
