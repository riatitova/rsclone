import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import style from '@/components/Board/ColumnCard/CardMenu/CardMenu.scss';
import { IBoardList } from '@/constants/index';
import { deleteCard } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

interface CardMenuProps {
  text: string;
  closePopup: () => void;
  cardId: string;
  columnId: string;
  boardId: string;
}

interface DispatchProps {
  onDeleteCard: (cardId: string, boardId: string, columnId: string) => void;
}

interface StateProps {
  // eslint-disable-next-line react/no-unused-prop-types
  board: IBoardList[];
}

type Props = StateProps & CardMenuProps & DispatchProps;

const CardMenu: React.FC<Props> = (props: Props) => {
  const deleteCardFunc = () => {
    props.onDeleteCard(props.cardId, props.boardId, props.columnId);
    props.closePopup();
  };

  return (
    <div className={style.popup}>
      <div className={style.card__menu_visible}>
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
          <button type="button" className={style.card__button} onClick={deleteCardFunc}>
            Delete card
          </button>
          <button type="button" className={style.card__button} onClick={props.closePopup}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    board: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onDeleteCard: (cardId: string, boardId: string, columnId: string) =>
    dispatch(deleteCard({ cardId, boardId, columnId })),
});

export default connect<StateProps, DispatchProps, CardMenuProps>(
  mapStateToProps,
  mapDispatchToProps
)(CardMenu);
