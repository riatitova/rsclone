import { AuthActionType } from '../../constants/index';
import {
  SET_AUTH_TRUE,
  SET_AUTH_FALSE,
  SET_USER_NAME,
  SET_USER_PASSWORD,
  SET_USER_ID,
  SET_USER_BOARDS,
} from '../actions/actionTypes';

const initialState = {
  isAuth: false,
  name: null,
  password: null,
  id: null,
  boards: null,
};

const authorization = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case SET_AUTH_TRUE: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case SET_AUTH_FALSE: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case SET_USER_NAME: {
      return {
        ...state,
        name: action.payload.userName,
      };
    }
    case SET_USER_PASSWORD: {
      return {
        ...state,
        password: action.payload.userPassword,
      };
    }
    case SET_USER_ID: {
      return {
        ...state,
        id: action.payload.userId,
      };
    }

    case SET_USER_BOARDS: {
      return {
        ...state,
        boards: action.payload.userBoards,
      };
    }
    default:
      return state;
  }
  return state;
};

export default authorization;
