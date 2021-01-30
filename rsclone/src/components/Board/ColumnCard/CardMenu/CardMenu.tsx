import React from 'react';

import style from '@/components/Board/ColumnCard/CardMenu/CardMenu.scss';

interface CardMenuProps {
  text: string;
  isVisible: boolean;
  closePopup: () => void;
  
  // taskId: string;
  // columnId: string;
}

type Props = CardMenuProps;

const CardMenu: React.FC<Props> = (props: Props) => (
  <div className={style.popup}>
    <div className={props.isVisible ? style.card__menu_visible : style.card__menu}>
      <h3 className={style.card__name}>
        Current task:
        {props.text}
      </h3>
      <div>
        <h3>Description: </h3>
        <textarea className={style.card__description} placeholder="Card Description" />
      </div>
      <div className={style.card__date}>
        <h3>Date: </h3>
        <span>{Date()}</span>
      </div>
      <div className={style.card__buttons}>
        <button type="button" className={style.card__button}>
          Delete card
        </button>
        <button type="button" className={style.card__button} onClick={props.closePopup}>
          Close
        </button>
      </div>
    </div>
  </div>
);
export default CardMenu;
