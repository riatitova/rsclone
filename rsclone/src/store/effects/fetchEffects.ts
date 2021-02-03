import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { IResponseCreateUser, IBoardsIds, IBoardList } from '../../constants';
import PATH from '../../constants/PATH';
import { getRequest, postRequest, putRequest, deleteRequest } from '../../utils/fetchUtils';
import {
  setUserId,
  setUserPassword,
  setUserName,
  setUserBoards,
  getBoard,
} from '../actions/actions';

export const createUser = (
  name: string,
  password: string
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  // console.log('starting create user');
  try {
    const body = JSON.stringify({ name, password });
    const response: IResponseCreateUser = await postRequest(PATH.createUser, body);

    // console.log('response', response);

    const userName = response.name;
    const userPassword = response.password;
    const userId = response.id;
    const userBoards = response.boardsIds;

    dispatch(setUserId(userId));
    dispatch(setUserPassword(userPassword));
    dispatch(setUserName(userName));
    dispatch(setUserBoards(userBoards));
    // console.log(response);
  } catch (e) {
    // console.log(e);
  }
};

// export const deleteUser = (name: string, password: string, id: string): ThunkAction<Promise<void>
// , {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//   console.log('starting delete user');
//   try {
//     const response: any = await deleteRequest(PATH.deleteUser);

//     console.log('response', response);

//     // const userName = response.name;
//     // const userPassword = response.password;
//     // const userId = response.id;
//     // const userBoards = response.boardsIds;

//     // dispatch(setUserId(userId));
//     // dispatch(setUserPassword(userPassword));
//     // dispatch(setUserName(userName));
//     // dispatch(setUserBoards(userBoards));
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const updateUserData = (
  name: string,
  password: string,
  id: string,
  boardsIds: IBoardsIds
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  try {
    const body = JSON.stringify({ name, password, id, boardsIds });
    // eslint-disable-next-line
    const response = await putRequest(PATH.updateUserData, body);

    // заглушка
    dispatch(setUserId('заглушка'));
  } catch (e) {
    // console.log(e);
  }
};

export const getUserData = (
  name: string,
  password: string
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  try {
    const queryString = `${PATH.getUserData}&name=${name}&password=${password}`;
    // eslint-disable-next-line
    const response = await getRequest(queryString);

    // dispatch(action);
    // заглушка
    dispatch(setUserId('заглушка'));
  } catch (e) {
    // console.log(e);
  }
};

export const createBoard = (
  name: string,
  password: string,
  boardData: IBoardList
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  try {
    const body = JSON.stringify({ name, password, boardData });
    // eslint-disable-next-line
    const response: IResponseCreateUser = await postRequest(PATH.createBoard, body);

    // console.log('response', response);
    // заглушка
    dispatch(setUserId('заглушка'));
    // dispatch(action); creating link
  } catch (e) {
    // console.log(e);
  }
};

export const deleteBoard = (
  name: string,
  password: string,
  boardId: string
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  try {
    const queryString = `${PATH.deleteBoard}&name=${name}&password=${password}&id=${boardId}`;
    // eslint-disable-next-line
    const response = await deleteRequest(queryString);

    // dispatcj (action)  delet board in redux
    // заглушка
    dispatch(setUserId('заглушка'));
  } catch (e) {
    // console.log(e);
  }
};

export const updateBoard = (
  name: string,
  password: string,
  boardData: string
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  try {
    const body = JSON.stringify({ name, password, boardData });
    // eslint-disable-next-line
    const response: IResponseCreateUser = await putRequest(PATH.updateUserData, body);

    // dispatcj (action)  update board in redux
    // заглушка
    dispatch(setUserId('заглушка'));
  } catch (e) {
    // console.log(e);
  }
};

export const getBoardById = (
  name: string,
  password: string,
  boardId: string
): ThunkAction<
Promise<void>,
Record<string, unknown>,
Record<string, unknown>,
AnyAction
> => async (
  dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>
): Promise<void> => {
  try {
    const queryString = `${PATH.getUserData}&name=${name}&password=${password}&boardId=${boardId}`;
    // eslint-disable-next-line
    const response: IBoardList = await getRequest(queryString);

    // insert this board into redux
    dispatch(getBoard(response));
  } catch (e) {
    // console.log(e);
  }
};
