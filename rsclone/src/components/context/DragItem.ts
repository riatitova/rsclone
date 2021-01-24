export type CardDragItem = {
  boardId: string;
  index: number;
  id: string;
  columnId: string;
  text: string;
  type: 'CARD';
};

export type ColumnDragItem = {
  boardId: string;
  index: number;
  id: string;
  text: string;
  type: 'COLUMN';
};

export type DragItem = CardDragItem | ColumnDragItem;
