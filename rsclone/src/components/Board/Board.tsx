import React from 'react';
import { connect } from 'react-redux';

import { AppContainer } from '@/assets/stylesheets/styles';
import AddNewItem from '@/components/Board/AddNewItem';
// import style from '@/components/Board/Board.scss';
import Column from '@/components/Board/Column';
import CustomDragLayer from '@/components/layers/CustomDragLayer';
import { IBoardList, IColumns } from '@/constants/index';
import { RootState } from '@/store/reducers/rootReducer';

interface IBoardProps {
  boardID: string;
}

interface StateProps {
  board: IBoardList[];
}

type Props = StateProps & IBoardProps;

const Board = (props: Props) => {
  const board: IBoardList = props.board.filter((x: IBoardList) => x.boardId === props.boardID)[0];
  const columns: IColumns[] = board.boardColumns;
  return (
    <AppContainer>
      <CustomDragLayer />
      {columns.map((list: IColumns, index: number) => (
        <Column
          columnId={list.columnId}
          columnName={list.columnName}
          key={list.columnId}
          index={index}
          boardId={props.boardID}
        />
      ))}
      <AddNewItem
        toggleButtonText="+add new list"
        boardId={props.boardID}
        functionName="addColumn"
      />
    </AppContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    board: boardList,
  };
};

export default connect<StateProps, IBoardProps>(mapStateToProps)(Board);
