import React from 'react';
import style from "@/components/Header/Header.scss";
import styles from "@/components/icons/BaseIcon/BaseIcon.scss";
import HomeHeaderIcon from "@/components/icons/Home";
import Search from "@/components/Header/Search/Search";
import Burger from "@/components/Burger/Burger";

const Header = () => {
  return (
    <header className={style.header}>

      <div className={style.header__icons_wrapper}>
        <Burger />
        <div className={style.header__icon}>
          <a className={style.header__link} href="https://rs.school/js/">
            <HomeHeaderIcon className={styles.size_xs}/>
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
};

export default Header;
