import { Dispatch } from 'react';

import {
  IPayload,
  IMoveColumn,
  IMoveTask,
  ISetDraggedItem,
  IDeleteCard,
  IDeleteColumn,
} from '@/constants/index';
import {
  ADD,
  SUB,
  ADD_NUMBER,
  ADD2,
  ADD_BOARD,
  ADD_COLUMN,
  ADD_TASK,
  MOVE_COLUMN,
  MOVE_TASK,
  SET_DRAGGED_ITEM,
  DELETE_CARD,
  DELETE_COLUMN,
} from '@/store/actions/actionTypes';

function add() {
  return {
    type: ADD,
  };
}

function sub() {
  return {
    type: SUB,
  };
}

function addNumber(num: number) {
  return {
    type: ADD_NUMBER,
    payload: num,
  };
}

function add2(num: number) {
  return {
    type: ADD2,
    payload: num,
  };
}

function asyncAdd(num: number) {
  return (dispatch: Dispatch<any>) => {
    setTimeout(() => {
      dispatch(addNumber(num));
    }, 2000);
  };
}

function addBoard(str: IPayload) {
  return {
    type: ADD_BOARD,
    payload: str,
  };
}

function addColumn(obj: IPayload) {
  return {
    type: ADD_COLUMN,
    payload: obj,
  };
}

function addTask(obj: IPayload) {
  return {
    type: ADD_TASK,
    payload: obj,
  };
}

function moveColumn(obj: IMoveColumn) {
  return {
    type: MOVE_COLUMN,
    payload: obj,
  };
}

function moveTask(obj: IMoveTask) {
  return {
    type: MOVE_TASK,
    payload: obj,
  };
}

function setDraggeditem(obj: ISetDraggedItem) {
  return {
    type: SET_DRAGGED_ITEM,
    payload: obj,
  };
}

function deleteCard(obj: IDeleteCard) {
  return {
    type: DELETE_CARD,
    payload: obj,
  };
}

function deleteColumn(obj: IDeleteColumn) {
  return {
    type: DELETE_COLUMN,
    payload: obj,
  };
}

export {
  add,
  sub,
  addNumber,
  add2,
  asyncAdd,
  addBoard,
  addColumn,
  addTask,
  moveColumn,
  moveTask,
  setDraggeditem,
  deleteCard,
  deleteColumn,
};
