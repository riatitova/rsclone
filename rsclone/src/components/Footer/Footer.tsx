import React from 'react';

import style from '@/components/Footer/Footer.scss';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import ManFooterIcon1 from '@/components/icons/ManIcon1';
import ManFooterIcon2 from '@/components/icons/ManIcon2';
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
          <ManFooterIcon1 className={styles.size_xs} />
        </a>
      </div>
      <div className={style.footer__icon}>
        <a className={style.footer__link} href="https://github.com/grntea">
          <WomanFooterIcon2 className={styles.size_xs} />
        </a>
      </div>
      <div className={style.footer__icon}>
        <a className={style.footer__link} href="https://github.com/tritonJS826">
          <ManFooterIcon2 className={styles.size_xs} />
        </a>
      </div>
    </div>
    <div className={style.footer__logo}>
      <span>2021</span>
      <a className={style.footer__link} href="https://rs.school/js/">
        <RSSFooterIcon className={`${styles.size_sm} ${style.footer__icon} ${style.footer__icon_rs}`} />
      </a>
    </div>
  </footer>
);

export default Footer;
