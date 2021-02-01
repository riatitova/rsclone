import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';
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

interface DispatchProps {
  onAddBoard: (text: string) => void;
}

interface StateProps {
  board: IBoardList[];
}

type Props = StateProps & DispatchProps;

const BoardList = (props: Props) => {
  const boards = props.board;

  const [boardName, setBoardName] = useState('');

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    setBoardName(event.currentTarget.value);
  };

  const onAddBoardFunc = () => {
    props.onAddBoard(boardName);
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
          <button type="submit" onClick={onAddBoardFunc}>
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
    board: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onAddBoard: (text: string) => dispatch(addBoard({ text })),
});

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(BoardList);
