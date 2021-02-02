import React, { useRef, Dispatch, useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { connect } from 'react-redux';

import { CardContainer } from '@/assets/stylesheets/styles';
import { DragItem } from '@/components/context/DragItem';
import styles from '@/components/icons/BaseIcon/BaseIcon.scss';
import CardMenuIcon from '@/components/icons/TaskMenuIcon';
import { IBoardList } from '@/constants/index';
import { setDraggeditem, moveTask } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';
import isHidden from '@/utils/isHidden';

import CardMenu from './TaskMenu';

interface ColumnProps {
  taskText: string;
  taskDate?: Date;
  taskName: string;
  taskIndex: number;
  taskId: string;
  columnId: string;
  isPreview?: boolean;
  boardId: string;
}

interface DispatchProps {
  onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => void;
  onSetDraggedItem: (boardId: string, Drag: DragItem | undefined) => void;
}

interface HoverDrag {
  type: string;
  payload: {
    Drag: DragItem | undefined;
    boardId: string;
  };
}

interface StateProps {
  board: IBoardList[];
}

type Props = StateProps & ColumnProps & DispatchProps;

const ColumnCard = (props: Props) => {
  const board: IBoardList = props.board.filter((x: IBoardList) => x.boardId === props.boardId)[0];
  // console.log(board);

  const [showPopup, setShowPopup] = useState(false);
  function togglePopup() {
    setShowPopup(!showPopup);
  }

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: HoverDrag) {
      const newItem: DragItem | undefined = item.payload.Drag;

      if (newItem?.type === 'CARD') {
        if (newItem.cardId !== props.taskId) {
          const dragIndex = newItem.cardIndex;
          const hoverIndex = props.taskIndex;
          const sourceColumn = newItem.columnId;
          const targetColumn = props.columnId;

          props.onMoveTask(dragIndex, hoverIndex, sourceColumn, targetColumn, props.boardId);
          newItem.cardIndex = hoverIndex;
          newItem.columnId = targetColumn;
        }
      }
    },
  });

  const item: DragItem = {
    boardId: props.boardId,
    cardIndex: props.taskIndex,
    cardId: props.taskId,
    columnId: props.columnId,
    taskName: props.taskName,
    type: 'CARD',
  };

  const [, drag] = useDrag({
    item,
    begin: () => props.onSetDraggedItem(props.boardId, item),
    end: () => props.onSetDraggedItem(props.boardId, undefined),
  });

  drag(drop(ref));
  return (
    <CardContainer
      isPreview={props.isPreview}
      isHidden={isHidden(props.isPreview, board.draggedItem, 'CARD', props.taskId)}
      ref={ref}
    >
      {props.taskName}
      <CardMenuIcon className={styles.size_xs} onClick={togglePopup} />
      {showPopup ? (
        <CardMenu
          taskText={props.taskText}
          taskDate={props.taskDate}
          taskName={props.taskName}
          closePopup={togglePopup}
          taskId={props.taskId}
          columnId={props.columnId}
          boardId={props.boardId}
        />
      ) : null}
    </CardContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    board: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onMoveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
    boardId: string
  ) => dispatch(moveTask({ dragIndex, hoverIndex, sourceColumn, targetColumn, boardId })),
  onSetDraggedItem: (boardId: string, Drag: DragItem | undefined) =>
    dispatch(setDraggeditem({ boardId, Drag })),
});

export default connect<StateProps, DispatchProps, ColumnProps>(
  mapStateToProps,
  mapDispatchToProps
)(ColumnCard);
