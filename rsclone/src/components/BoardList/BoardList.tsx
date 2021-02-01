import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import CrossIcon from '@/components/icons/CrossIcon';
import { IBoardList } from '@/constants';
import { addBoard, deleteBoard } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

import {
  StyledBoardList,
  StyledAddBoardBlock,
  StyledBoardInputWrapper,
  BlockWrapper,
  CrossIconWrapper,
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

  const onDeleteBoard = (boardId: string) => {
    dispatch(deleteBoard({ boardId }));
  };

  return (
    <StyledBoardList>
      {boards?.map(value => (
        <BlockWrapper key={value.boardId}>
          <CrossIconWrapper>
            <CrossIcon className={styles.size_l} onClick={() => onDeleteBoard(value.boardId)} />
          </CrossIconWrapper>
          <Link key={value.boardId} to={`/board_${value.boardId}`}>
            {value.boardName}
          </Link>
        </BlockWrapper>
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
          {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
          <button type='submit' onClick={onAddBoard.bind(this, boardName)}>
            +
          </button>
        </StyledBoardInputWrapper>
      </StyledAddBoardBlock>
    </StyledBoardList>
  );
};

export default BoardList;
