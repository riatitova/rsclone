import React from 'react';
// import { useDrop, useDrag } from 'react-dnd';
import { connect } from 'react-redux';

import { CardContainer } from '@/assets/stylesheets/styles';
// import { DragItem } from '@/components/context/DragItem';
// import { moveTask } from '@/store/actions/actions';

interface ColumnProps {
  text: string;
  // index: number;
  // taskId: string;
  // columnId: string;
  isPreview?: boolean;
  // boardId: string;
}

// interface DispatchProps {
//   onMoveTask: (dragIndex: number, hoverIndex: number, sourceColumn: string,
// 		 targetColumn: string, boardId: string) => void;
// }

type Props = ColumnProps;

const ColumnCard = (props: Props) => (
  // const ref = useRef<HTMLDivElement>(null);

  // const [, drop] = useDrop({
  //   accept: 'CARD',
  //   hover(item: DragItem) {
  //     if (item.type === 'CARD') {
  //       if (item.id === props.taskId) {
  //         return;
  //       }

  //       const dragIndex = item.index;
  //       const hoverIndex = props.index;
  //       const sourceColumn = item.columnId;
  //       const targetColumn = props.columnId;

  //       // dispatch({
  //       //   type: 'MOVE_TASK',
  //       //   payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
  //       // });
  //       props.onMoveTask(dragIndex, hoverIndex, sourceColumn, targetColumn, props.boardId);
  //       item.index = hoverIndex;
  //       item.columnId = targetColumn;
  //     }
  //   },
  // });

  // const item: DragItem =  {
  //   type: 'COLUMN', boardId: props.boardId,  id: props.taskId, index: props.index,
  //   text: props.text,
  // };

  // const [, drag] = useDrag({
  //   item,
  // });

  // drag(drop(ref));

  <CardContainer isPreview={props.isPreview} isHidden={false}>
    {props.text}
  </CardContainer>
);
// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//   onMoveTask: (dragIndex: number, hoverIndex: number, sourceColumn: string,
// 		 targetColumn: string, boardId: string) =>
//     dispatch(moveTask({dragIndex, hoverIndex, sourceColumn, targetColumn, boardId})),
// });

export default connect()(ColumnCard);
