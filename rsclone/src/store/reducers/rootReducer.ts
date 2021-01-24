import { combineReducers } from 'redux';

import boardList from '@/store/reducers/boardList';

const rootReducer = combineReducers({
  boardList,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
