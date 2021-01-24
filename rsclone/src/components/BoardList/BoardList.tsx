import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Board from '@/components/Board';
import { IBoardList } from '@/constants/index';
import { addBoard } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

interface DispatchProps {
  onAddBoard: (num: string) => void;
}

interface StateProps {
  boards: IBoardList[] | undefined;
}

type Props = StateProps & DispatchProps;

const BoardList = (props: Props) => {
  const match = useRouteMatch();

  const [boardName, setBoardName] = useState('');

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    setBoardName(event.currentTarget.value);
  };

  return (
    <div>
      <button
        type="button"
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        onClick={props.onAddBoard.bind(this, boardName)}
      >
        new board redux
      </button>
      <input type="text" value={boardName} onChange={changeName} />
      <Router>
        {props.boards?.map(value => (
          <Link key={value.boardId} to={`${match.url}/board_${value.boardId}`}>
            {value.boardName}
          </Link>
        ))}
        <Switch>
          {props.boards?.map(value => (
            <Route key={value.boardId} path={`${match.url}/board_${value.boardId}`}>
              <Board boardID={value.boardId} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    boards: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onAddBoard: (str: string) => dispatch(addBoard({ text: str })),
});

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(BoardList);
