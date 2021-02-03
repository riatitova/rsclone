import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Board from '@/components/Board';
import BoardList from '@/components/BoardList';
import { IBoardList } from '@/constants';
import { RootState } from '@/store/reducers/rootReducer';

import Authorization from '../Autharisation';
import ProjectContainer from '../layers/ProjectContainer';

interface StateProps {
  board: IBoardList[];
}

const App = (props: StateProps): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/authorization">
        <Authorization />
      </Route>
      <Route path="/">
        <ProjectContainer />
        <Route path="/boardList">
          <BoardList />
        </Route>
        {props.board.map(value => (
          <Route key={value.boardId} path={`/board_${value.boardId}`}>
            <Board boardID={value.boardId} />
          </Route>
        ))}
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    board: boardList,
  };
};

export default connect<StateProps>(mapStateToProps)(App);
