import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';

import { IBoardList } from '@/constants';
import { deleteTask, changeText } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

import style from './TaskMenu.scss';

interface CardMenuProps {
  taskDate?: Date;
  taskName: string;
  taskText: string;
  closePopup: () => void;
  taskId: string;
  columnId: string;
  boardId: string;
}

interface DispatchProps {
  onDeleteCard: (cardId: string, boardId: string, columnId: string) => void;
  onChangeText: (taskId: string, boardId: string, columnId: string, text: string) => void;
}

interface StateProps {
  // eslint-disable-next-line react/no-unused-prop-types
  board: IBoardList[];
}

type Props = StateProps & CardMenuProps & DispatchProps;

const TaskMenu: React.FC<Props> = (props: Props) => {
  const [text, setText] = useState(props.taskText);

  const deleteCardFunc = () => {
    props.onDeleteCard(props.taskId, props.boardId, props.columnId);
    props.closePopup();
  };

  const changeTextFunc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  const closePopupFunc = () => {
    props.onChangeText(props.taskId, props.boardId, props.columnId, text);
    props.closePopup();
  };

  return (
    <div className={style.popup}>
      <div className={style.card__menu_visible}>
        <h3 className={style.card__name}>
          Current task:
          {props.taskName}
        </h3>
        <div>
          <h3>Description: </h3>
          <textarea
            className={style.card__description}
            placeholder="Card Description"
            defaultValue={props.taskText}
            onChange={changeTextFunc}
          />
        </div>
        <div className={style.card__date}>
          <h4>Date: </h4>
          <span>{(props.taskDate || '').toString()}</span>
        </div>
        <div className={style.card__buttons}>
          <button type="button" className={style.card__button} onClick={deleteCardFunc}>
            Delete card
          </button>
          <button type="button" className={style.card__button} onClick={closePopupFunc}>
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
  onDeleteCard: (taskId: string, boardId: string, columnId: string) =>
    dispatch(deleteTask({ taskId, boardId, columnId })),
  onChangeText: (taskId: string, boardId: string, columnId: string, text: string) =>
    dispatch(changeText({ taskId, boardId, columnId, text })),
});

export default connect<StateProps, DispatchProps, CardMenuProps>(
  mapStateToProps,
  mapDispatchToProps
)(TaskMenu);
