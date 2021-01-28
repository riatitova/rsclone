import React from 'react';

interface CardMenuProps {
  text: string;
  // taskId: string;
  // columnId: string;
}

type Props = CardMenuProps;

const CardMenu = (props: Props) => (
  <div className="card__menu">
    <h3 className="card__name">{props.text}</h3>
    <h3 className="card__list-name">list</h3>
    <div className="card__description">
      <h3>Description</h3>
      <input type="text" placeholder="Card description" />
    </div>
    <div className="card__date">
      <h3>Date: </h3>
      <span>{Date.now()}</span>
    </div>
    <button type='button'>Delete card</button>
  </div>
);

export default CardMenu;
