import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IBoardList } from '@/constants';
import { addBoard } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

import {
  StyledBoardList,
  StyledAddBoardBlock,
  StyledBoardInputWrapper,
  StyledBoardLink,
} from './BoardList.styled';

const BoardList = () => {
  const dispatch = useDispatch();
  const boards: IBoardList[] = useSelector((state: RootState) => state.boardList?.boardList);

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
      {boards?.map(value => (
        <StyledBoardLink key={value.boardId}>
          <Link key={value.boardId} to={`/board_${value.boardId}`}>
            {value.boardName}
          </Link>
        </StyledBoardLink>
      ))}

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
            type="submit"
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
