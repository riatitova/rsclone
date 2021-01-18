import React from 'react';
import styles from "@/components/icons/BaseIcon/BaseIcon.scss";
import style from '@/components/Footer/Footer.scss';

import RSSFooterIcon from "@/components/icons/RSSIcon";
import ManFooterIcon from "@/components/icons/ManIcon";
import WomanFooterIcon1 from '@/components/icons/WomanIcon1';
import WomanFooterIcon2 from '@/components/icons/WomanIcon2';


const Footer = () => {
  return (
    <footer className={style.footer}>

      <div className={style.footer_icons_wrapper}>
        <div className={style.footer_team}>DevTeam:</div>
        <div className={style.footer_icon}>
          <a className={style.footer_link} href="https://github.com/riatitova">
            <WomanFooterIcon1 className={`${styles.size_xs}`}/>
          </a>
        </div>
        <div className={style.footer_icon}>
          <a className={style.footer_link} href="https://github.com/KantyshVitali">
            <ManFooterIcon className={`${styles.size_xs}`}/>
          </a>
        </div>
        <div className={style.footer_icon}>
          <a className={style.footer_link} href="https://github.com/grntea">
            <WomanFooterIcon2 className={`${styles.size_xs}`}/>
          </a>
        </div>
      </div>
      <div className={style.footer_logo}>
        <a className={style.footer_link} href="https://rs.school/js/">
          <RSSFooterIcon className={`${styles.size_sm} ${style.footer_icon}`}/>
        </a>
      </div>
    </footer>
  )
};

export default Footer;
