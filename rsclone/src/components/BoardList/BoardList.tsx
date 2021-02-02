import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import CrossIcon from '@/components/icons/CrossIcon';
import { IBoardList, cardColors } from '@/constants';
import { addBoard, deleteBoard } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

import {
  StyledBoardList,
  StyledAddBoardBlock,
  StyledBoardInputWrapper,
  BlockWrapper,
  CrossIconWrapper,
  CardBgColors,
} from './BoardList.styled';

interface DispatchProps {
  onAddBoard: (boardName: string, boardColor: string) => void;
  onDeleteBoard: (boardId: string) => void;
}

interface StateProps {
  boards: IBoardList[];
}

type Props = StateProps & DispatchProps;

const BoardList = (props: Props) => {
  const [boardName, setBoardName] = useState('');
  const [boardColor, setBoardColor] = useState('');

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    setBoardName(event.currentTarget.value);
  };

  const onAddBoardFunc = () => {
    props.onAddBoard(boardName, boardColor);
    setBoardName('');
  };

  const deleteBoardFunc = (boardId: string) => {
    props.onDeleteBoard(boardId);
  };

  return (
    <StyledBoardList>
      {props.boards?.map(value => (
        <BlockWrapper key={value.boardId} className={boardColor}>
          <CrossIconWrapper>
            <CrossIcon className={styles.size_l} onClick={() => deleteBoardFunc(value.boardId)} />
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
          <CardBgColors>
            {cardColors.map(color => (
              <div key={color} className={color} onClick={() => setBoardColor(color)} />
            ))}
          </CardBgColors>
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
    boards: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onAddBoard: (boardName: string, boardColor: string) => dispatch(addBoard(boardName, boardColor)),
  onDeleteBoard: (boardId: string) => dispatch(deleteBoard({ boardId })),
});

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(BoardList);
