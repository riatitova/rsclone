import { combineReducers } from 'redux';

import boardList from '@/store/reducers/boardList';

import authorization from './authorization';
import disableDnd from './disable-dnd';

const rootReducer = combineReducers({
  boardList,
  authorization,
  disableDnd,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
