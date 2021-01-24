import React, { Dispatch, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { connect } from 'react-redux';

import { ColumnContainer, ColumnTitle } from '@/assets/stylesheets/styles';
import AddNewItem from '@/components/Board/AddNewItem';
import ColumnCard from '@/components/Board/ColumnCard';
import { DragItem } from '@/components/context/DragItem';
import { IBoardList, IColumns } from '@/constants/index';
import { moveColumn, moveTask } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

interface ColumnProps {
  boardId: string;
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

interface DispatchProps {
  // onAddBoard: (num: string) => void;
  onMoveColumn: (dragIndex: number, hoverIndex: number, boardId: string) => void;
  onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => void;
  // onSetDraggedItem: (boardId: string, Drag: DragItem | undefined ) => void;
}

interface StateProps {
  board: IBoardList[];
}

type Props = StateProps & DispatchProps & ColumnProps;

const BoardColumn = (props: Props) => {
  const board: IBoardList = props.board.filter((x: IBoardList) => x.boardId === props.boardId)[0];
  const column: IColumns = board.boardColumns[props.index];
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
          return;
        }

        props.onMoveColumn(dragIndex, hoverIndex, item.boardId);
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = props.id;

        if (sourceColumn === targetColumn) {
          return;
        }

        props.onMoveTask(dragIndex, hoverIndex, sourceColumn, targetColumn, props.boardId);

        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  const item: DragItem = {
    type: 'COLUMN',
    boardId: props.boardId,
    id: props.id,
    index: props.index,
    text: props.text,
  };

  const [, drag] = useDrag({
    item,
  });
  // useEffect(() => {
  //   preview(getEmptyImage());
  // }, [preview]);

  drag(drop(ref));
  return (
    <ColumnContainer isPreview={props.isPreview} ref={ref} isHidden={false}>
      <ColumnTitle>{props.text}</ColumnTitle>
      {column.columnTasks?.map(task => (
        <ColumnCard
          key={task.taskId}
          text={task.taskName}
          // index={index}
          // columnId={column.columnId}
          // taskId={task.taskId}
          // boardId={props.boardId}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        functionName="addTask"
        columnId={props.id}
        boardId={props.boardId}
        dark
      />
    </ColumnContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    board: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  // onAddBoard: (str: string) => dispatch(addBoard({text: str})),
  onMoveColumn: (dragIndex: number, hoverIndex: number, boardId: string) =>
    dispatch(moveColumn({ dragIndex, hoverIndex, boardId })),
  onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => dispatch(moveTask({ dragIndex, hoverIndex, sourceColumn, targetColumn, boardId })),
  // onSetDraggedItem: (boardId: string, Drag: DragItem | undefined ) =>
  //   dispatch(setDraggeditem({boardId, Drag})),
});

export default connect<StateProps, DispatchProps, ColumnProps>(
  mapStateToProps,
  mapDispatchToProps
)(BoardColumn);
