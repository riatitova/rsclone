import { combineReducers } from 'redux';

import boardList from '@/store/reducers/boardList';

import authorization from './authorization';

const rootReducer = combineReducers({
  boardList,
  authorization,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
