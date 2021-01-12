import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';

import { CustomDragLayerContainer } from '@/assets/stylesheets/styles';
import Card from '@/components/Board/Card';
import Column from '@/components/Board/Column';

function getItemStyles(currentOffset: XYCoord | null) {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(), // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item.type === 'COLUMN' ? ( // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          <Column
            id={item.id} // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            text={item.text} // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            index={item.index} // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            isPreview
          />
        ) : (
          <Card
            columnId={item.columnId} // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            isPreview
            index={0}
            id={item.id} // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            text={item.text} // eslint-disable-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          />
        )}
      </div>
    </CustomDragLayerContainer>
  );
};
export default CustomDragLayer;
