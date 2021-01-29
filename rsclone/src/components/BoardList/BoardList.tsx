import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Board from '@/components/Board';
import { IBoardList } from '@/constants';
import { addBoard } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

import { StyledBoardList,
  StyledAddBoardBlock,
  StyledBoardInputWrapper,
  StyledBoardLink,
} from './BoardList.styled';
// import style from './BoardList.scss'

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
    <StyledBoardList>
      <Router>
        {props.boards?.map(value => (
          <StyledBoardLink key={value.boardId}>
            <Link key={value.boardId} to={`${match.url}/board_${value.boardId}`}>
              {value.boardName}
            </Link>
          </StyledBoardLink>
        ))}

        <Switch>
          {/*  <Route path={`${match.url}/boardList`}>
              {props.boards?.map(value => (
                <Link key={value.boardId} to={`${match.url}/board_${value.boardId}`}>
                  {value.boardName}
                </Link>
              ))}
            </Route>*/}

          {props.boards?.map(value => (
            <Route key={value.boardId} path={`${match.url}/board_${value.boardId}`}>
              <Board boardID={value.boardId} />
            </Route>
          ))}
        </Switch>
      </Router>
      <StyledAddBoardBlock>
        Add board
        <StyledBoardInputWrapper>
          <input
            className="input"
            type="text"
            placeholder="Enter board title.."
            value={boardName}
            onChange={changeName}
          />
          <button
            type='submit'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            onClick={props.onAddBoard.bind(this, boardName)}
          >
            +
          </button>
        </StyledBoardInputWrapper>
      </StyledAddBoardBlock>
    </StyledBoardList>
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
