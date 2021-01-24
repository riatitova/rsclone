import React from 'react';

import style from '@/components/Header/Search/Search.scss';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import SearchHeaderIcon from '@/components/icons/Search';

const Search = () => (
  <div className={style.search__wrapper}>
    <i className={style.search__icon}>
      <SearchHeaderIcon className={styles.size_xs} />
    </i>

    <input
      type="search"
      className={style.search__input}
      placeholder="Search..."
      // onChange={() => console.log('change')}
    />
  </div>
);

export default Search;
