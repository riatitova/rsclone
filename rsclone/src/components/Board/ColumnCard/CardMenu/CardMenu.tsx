import React from 'react';

import style from '@/components/Board/ColumnCard/CardMenu/CardMenu.scss';

interface CardMenuProps {
  text: string;
  isVisible: boolean;
  // taskId: string;
  // columnId: string;
}

type Props = CardMenuProps;

const CardMenu:React.FC<Props> = (props: Props) => 
  // const [isVisible, setVisibility] = useState<boolean>();
  // setVisibility(props.isVisible);
  (
    <div className={style.popup}>
      <div className={props.isVisible ? style.card__menu_visible : style.card__menu}>
        <h3 className={style.card__name}>{props.text}</h3>
        <h3 className={style.card__list_name}>list</h3>
        <div>
          <h3>Description</h3>
          <textarea className={style.card__description} defaultValue="Card Description" />
        </div>
        <div className={style.card__date}>
          <h3>Date: </h3>
          <span>{Date()}</span>
        </div>
        <button type="button" className={style.card__button}>
          Delete card
        </button>
      </div>
    </div>
  )
;

export default CardMenu;
