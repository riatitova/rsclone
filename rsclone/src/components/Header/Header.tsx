import React from 'react';
import style from "@/components/Header/Header.scss";
import styles from "@/components/icons/BaseIcon/BaseIcon.scss";
import HomeHeaderIcon from "@/components/icons/Home";
import SearchHeaderIcon from "@/components/icons/Search";
import Burger from "@/components/Burger/Burger";

const Header = () => {
  return (
    <header className={style.header}>
      <Burger />
      <div className={style.header__icon}>
        <a className={style.header__link} href="https://rs.school/js/">
          <HomeHeaderIcon className={styles.size_xs}/>
        </a>
      </div>
      <div>
        <input type="search" className={style.header__search} id="header_search" placeholder="Search..." />
        <button type="submit">
          <div className={style.header__icon}>
            <a className={style.header__link} href="https://rs.school/js/">
              <SearchHeaderIcon className={styles.size_xs}/>
            </a>
          </div>
        </button>
      </div>

      <div>RS Trello</div>
      <button>Go to</button>
    </header>
  )
};

export default Header;
