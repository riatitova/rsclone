import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const BoardList = () => {
  const dispatch = useDispatch();
  const boards: IBoardList[] = useSelector((state: RootState) => state.boardList?.boardList);

  const match = useRouteMatch();

  const [boardName, setBoardName] = useState('');

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    setBoardName(event.currentTarget.value);
  };

  const onAddBoard = (str: string) => {
    dispatch(addBoard({ text: str }));
    setBoardName('');
  };

  return (
    <StyledBoardList>
      <Router>
        {boards?.map(value => (
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

          {boards?.map(value => (
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
            onClick={onAddBoard.bind(this, boardName)}
          >
            +
          </button>
        </StyledBoardInputWrapper>
      </StyledAddBoardBlock>
    </StyledBoardList>
  );
};

export default BoardList;
