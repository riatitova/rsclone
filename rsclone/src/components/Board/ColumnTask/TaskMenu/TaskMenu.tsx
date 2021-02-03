import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';

import { IDisable } from '@/constants';
import {
  deleteTask,
  changeText,
  setDisableTrue,
  setDisableFalse,
  toggleDisable,
} from '@/store/actions/actions';
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
  onSetToggle: () => void;
}

interface StateProps {
  // eslint-disable-next-line react/no-unused-prop-types
  isDisable: IDisable;
}

type Props = StateProps & CardMenuProps & DispatchProps;

const TaskMenu: React.FC<Props> = (props: Props) => {
  const [text, setText] = useState(props.taskText);

  const deleteCardFunc = () => {
    props.onDeleteCard(props.taskId, props.boardId, props.columnId);
    props.closePopup();
    props.onSetToggle();
  };

  const changeTextFunc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  const closePopupFunc = () => {
    props.onChangeText(props.taskId, props.boardId, props.columnId, text);
    props.closePopup();
    props.onSetToggle();
  };

  return (
    <div className={style.popup}>
      <div className={style.card__menu_visible}>
        <h3 className={style.card__name}>
          <span>Current task:</span>
          {props.taskName}
        </h3>
        <div className={style.card__description}>
          <h3>Description: </h3>
          <textarea
            className={style.card__description_content}
            placeholder="Card Description"
            defaultValue={props.taskText}
            onChange={changeTextFunc}
          />
        </div>
        <div className={style.card__date}>
          <h4>Date: </h4>
          <span>{(props.taskDate || '').toLocaleString()}</span>
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

const mapStateToProps = (state: RootState) => ({
  isDisable: state.disableDnd,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onDeleteCard: (taskId: string, boardId: string, columnId: string) =>
    dispatch(deleteTask({ taskId, boardId, columnId })),
  onChangeText: (taskId: string, boardId: string, columnId: string, text: string) =>
    dispatch(changeText({ taskId, boardId, columnId, text })),
  onSetDisableTrue: () => dispatch(setDisableTrue()),
  onSetDisableFalse: () => dispatch(setDisableFalse()),
  onSetToggle: () => dispatch(toggleDisable()),
});

export default connect<StateProps, DispatchProps, CardMenuProps>(
  mapStateToProps,
  mapDispatchToProps
)(TaskMenu);
