import React, { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { connect } from 'react-redux';

import { CardContainer } from '@/assets/stylesheets/styles';
import { DragItem } from '@/components/context/DragItem';
import { setDraggeditem } from '@/store/actions/actions';

interface ColumnProps {
  text: string;
  taskIndex: number;
  taskId: string;
  columnId: string;
  isPreview?: boolean;
  boardId: string;
}

interface DispatchProps {
  // onMoveTask: (
  //   dragIndex: number,
  //   hoverIndex: number,
  //   sourceColumn: string,
  //   targetColumn: string,
  //   boardId: string
  // ) => void;
  onSetDraggedItem: (boardId: string, Drag: DragItem | undefined ) => void;  
}

interface HoverDrag {
  type: string;
  payload: {
    Drag: DragItem | undefined;
    boardId: string;
  };
}

type Props = ColumnProps & DispatchProps;

const ColumnCard = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: HoverDrag) {
      // console.log(item);
      
      const newItem: DragItem | undefined = item.payload.Drag;
      
      if (newItem?.type === 'CARD') {
        // console.log(newItem);
        // if (newItem.cardId === props.taskId) {
          
        // }
        // const dragIndex = newItem.cardIndex;
        // const hoverIndex = props.taskIndex;
        // const sourceColumn = newItem.columnId;
        // const targetColumn = props.columnId;

        // // dispatch({
        // //   type: 'MOVE_TASK',
        // //   payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        // // });
        // console.log(dragIndex, hoverIndex, sourceColumn, targetColumn );
        
        // props.onMoveTask(dragIndex, hoverIndex, sourceColumn, targetColumn, props.boardId);
        // newItem.cardIndex = hoverIndex;
        // newItem.columnId = targetColumn;
      }
    },
  });

  const item: DragItem =  {
    boardId: props.boardId,
    cardIndex: props.taskIndex,
    cardId: props.taskId,
    columnId: props.columnId,
    text: props.text,
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
      isHidden={false}
      ref={ref}
    >
      {props.text}
    </CardContainer>
  );
};

const mapDispatchToProps = () => ({
  // onMoveTask: (dragIndex: number, hoverIndex: number, sourceColumn: string,
  // 	 targetColumn: string, boardId: string) =>
  //   dispatch(moveTask({dragIndex, hoverIndex, sourceColumn, targetColumn, boardId})),
  onSetDraggedItem: (boardId: string, Drag: DragItem | undefined ) =>
    (setDraggeditem({boardId, Drag})),
});

export default connect<DispatchProps, ColumnProps>(mapDispatchToProps)(ColumnCard);
