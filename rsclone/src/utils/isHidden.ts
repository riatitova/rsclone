import { DragItem } from '@/components/context/DragItem';

const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean =>
  Boolean(
    !isPreview && draggedItem && draggedItem.type === itemType && draggedItem.columnId === id
  );

export default isHidden;
