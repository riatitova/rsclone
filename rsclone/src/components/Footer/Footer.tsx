import React from 'react';

import style from '@/components/Footer/Footer.scss';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import ManFooterIcon from '@/components/icons/ManIcon';
import RSSFooterIcon from '@/components/icons/RSSIcon';
import WomanFooterIcon1 from '@/components/icons/WomanIcon1';
import WomanFooterIcon2 from '@/components/icons/WomanIcon2';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footer__icons_wrapper}>
      <div className={style.footer__title}>DevTeam:</div>
      <div className={style.footer__icon}>
        <a className={style.footer__link} href="https://github.com/riatitova">
          <WomanFooterIcon1 className={styles.size_xs} />
        </a>
      </div>
      <div className={style.footer__icon}>
        <a className={style.footer__link} href="https://github.com/KantyshVitali">
          <ManFooterIcon className={styles.size_xs} />
        </a>
      </div>
      <div className={style.footer__icon}>
        <a className={style.footer__link} href="https://github.com/grntea">
          <WomanFooterIcon2 className={styles.size_xs} />
        </a>
      </div>
    </div>
    <div className={style.footer__logo}>
      <a className={style.footer__link} href="https://rs.school/js/">
        <RSSFooterIcon className={`${styles.size_sm} ${style.footer__icon}`} />
      </a>
    </div>
  </footer>
);

export default Footer;
