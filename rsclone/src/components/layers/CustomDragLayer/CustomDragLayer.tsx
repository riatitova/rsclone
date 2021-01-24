import React from 'react';
import { useDragLayer } from 'react-dnd';

import { CustomDragLayerContainer } from '@/assets/stylesheets/styles';

// function getItemStyles(currentOffset: XYCoord | null) {
//   if (!currentOffset) {
//     return {
//       display: 'none',
//     };
//   }

//   const { x, y } = currentOffset;

//   const transform = `translate(${x}px, ${y}px)`;
//   return {
//     transform,
//     WebkitTransform: transform,
//   };
// }

const CustomDragLayer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isDragging } = useDragLayer(monitor => ({
    item: monitor.getItem(), // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return <CustomDragLayerContainer />;
};
export default CustomDragLayer;
