import React, { Dispatch, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { connect } from 'react-redux';

import { ColumnContainer, ColumnTitle } from '@/assets/stylesheets/styles';
import AddNewItem from '@/components/Board/AddNewItem';
import ColumnTask from '@/components/Board/ColumnTask';
import { DragItem } from '@/components/context/DragItem';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import CrossIcon from '@/components/icons/CrossIcon';
import { IBoardList, IColumns } from '@/constants/index';
import { moveColumn, moveTask, setDraggeditem, deleteColumn } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

interface ColumnProps {
  boardId: string;
  columnName: string;
  index: number;
  columnId: string;
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
  onSetDraggedItem: (boardId: string, Drag: DragItem | undefined) => void;
  onDeleteColumn: (boardId: string, columnId: string) => void;
}

interface StateProps {
  board: IBoardList[];
}

type Props = StateProps & DispatchProps & ColumnProps;

interface HoverDrag {
  columnID: string;
  type: string;
  index: number;
  payload: {
    Drag: DragItem | undefined;
    boardId: string;
  };
}

const BoardColumn = (props: Props) => {
  const board: IBoardList = props.board.filter((x: IBoardList) => x.boardId === props.boardId)[0];
  const targetBoardColumn: IColumns = board.boardColumns[props.index];
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: HoverDrag) {
      const newItem: DragItem | undefined = item.payload.Drag;
      if (newItem?.type === 'COLUMN') {
        const dragIndex = newItem.columnIndex;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
          return;
        }

        props.onMoveColumn(dragIndex, hoverIndex, newItem.boardId);
        newItem.columnIndex = hoverIndex;
      } else if (newItem?.type === 'CARD') {
        const dragIndex = newItem.cardIndex;
        const hoverIndex = 0;
        const sourceColumn = newItem.columnId;
        const targetColumn = props.columnId;

        if (sourceColumn === targetColumn) {
          return;
        }

        props.onMoveTask(dragIndex, hoverIndex, sourceColumn, targetColumn, props.boardId);

        newItem.cardIndex = hoverIndex;
        newItem.columnId = targetColumn;
      }
    },
  });

  const item: DragItem = {
    type: 'COLUMN',
    boardId: props.boardId,
    columnId: props.columnId,
    columnIndex: props.index,
    columnName: props.columnName,
  };

  const [, drag] = useDrag({
    item,
    begin: () => props.onSetDraggedItem(props.boardId, item),
    end: () => props.onSetDraggedItem(props.boardId, undefined),
  });
  // useEffect(() => {
  //   preview(getEmptyImage());
  // }, [preview]);

  const deleteColumnFunc = () => {
    props.onDeleteColumn(props.boardId, props.columnId);
  };

  drag(drop(ref));
  return (
    <ColumnContainer isPreview={props.isPreview} ref={ref} isHidden={false}>
      <CrossIcon className={styles.size_l} onClick={deleteColumnFunc} />
      <ColumnTitle>{props.columnName}</ColumnTitle>
      {targetBoardColumn.columnTasks.map((task, index) => (
        <ColumnTask
          taskDate={task.taskDate}
          key={task.taskId}
          taskName={task.taskName}
          taskText={task.taskText}
          taskIndex={index}
          columnId={targetBoardColumn.columnId}
          taskId={task.taskId}
          boardId={props.boardId}
        />
      ))}
      <AddNewItem
        toggleButtonText="+add new task"
        functionName="addTask"
        columnId={props.columnId}
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
  onMoveColumn: (dragIndex: number, hoverIndex: number, boardId: string) =>
    dispatch(moveColumn({ dragIndex, hoverIndex, boardId })),
  onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => dispatch(moveTask({ dragIndex, hoverIndex, sourceColumn, targetColumn, boardId })),
  onSetDraggedItem: (boardId: string, Drag: DragItem | undefined) =>
    dispatch(setDraggeditem({ boardId, Drag })),
  onDeleteColumn: (boardId: string, columnId: string) =>
    dispatch(deleteColumn({ boardId, columnId })),
});

export default connect<StateProps, DispatchProps, ColumnProps>(
  mapStateToProps,
  mapDispatchToProps
)(BoardColumn);
