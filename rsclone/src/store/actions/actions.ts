import { Dispatch } from 'react';

import {
  IPayload,
  IMoveColumn,
  IMoveTask,
  ISetDraggedItem,
  IDeleteTask,
  IDeleteColumn,
  IDeleteBoard,
  IChangeText,
  IAddBoard,
  IBoardsIds,
  IBoardList,
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
  DELETE_TASK,
  DELETE_COLUMN,
  DELETE_BOARD,
  CHANGE_TEXT,
  SET_AUTH_TRUE,
  SET_AUTH_FALSE,
  SET_DISABLE_FALSE,
  SET_DISABLE_TRUE,
  TOGGLE_DISABLE,
  SET_USER_NAME,
  SET_USER_PASSWORD,
  SET_USER_ID,
  SET_USER_BOARDS,
  GET_BOARD,
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

function addBoard(obj: IAddBoard) {
  return {
    type: ADD_BOARD,
    payload: obj,
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

function deleteTask(obj: IDeleteTask) {
  return {
    type: DELETE_TASK,
    payload: obj,
  };
}

function deleteColumn(obj: IDeleteColumn) {
  return {
    type: DELETE_COLUMN,
    payload: obj,
  };
}

function deleteBoard(obj: IDeleteBoard) {
  return {
    type: DELETE_BOARD,
    payload: obj,
  };
}

function changeText(obj: IChangeText) {
  return {
    type: CHANGE_TEXT,
    payload: obj,
  };
}

function setAuthTrue() {
  return {
    type: SET_AUTH_TRUE,
  };
}

function setAuthFalse() {
  return {
    type: SET_AUTH_FALSE,
  };
}

function setDisableTrue() {
  return {
    type: SET_DISABLE_TRUE,
  };
}

function setDisableFalse() {
  return {
    type: SET_DISABLE_FALSE,
  };
}

function toggleDisable() {
  return {
    type: TOGGLE_DISABLE,
  };
}
function setUserName(userName: string) {
  return {
    type: SET_USER_NAME,
    payload: {
      userName,
    },
  };
}

function setUserPassword(userPassword: string) {
  return {
    type: SET_USER_PASSWORD,
    payload: {
      userPassword,
    },
  };
}

function setUserId(userId: string) {
  return {
    type: SET_USER_ID,
    payload: {
      userId,
    },
  };
}

function setUserBoards(userBoards: IBoardsIds[]) {
  return {
    type: SET_USER_BOARDS,
    payload: {
      userBoards,
    },
  };
}

function getBoard(userBoards: IBoardList) {
  return {
    type: GET_BOARD,
    payload: userBoards,
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
  deleteTask,
  deleteColumn,
  deleteBoard,
  changeText,
  setAuthTrue,
  setAuthFalse,
  setDisableTrue,
  setDisableFalse,
  toggleDisable,
  setUserId,
  setUserPassword,
  setUserName,
  setUserBoards,
  getBoard,
};
