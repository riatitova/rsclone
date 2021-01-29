export type CardDragItem = {
  boardId: string;
  cardIndex: number;
  cardId: string;
  columnId: string;
  text: string;
  type: 'CARD';
};

export type ColumnDragItem = {
  boardId: string;
  columnIndex: number;
  columnId: string;
  text: string;
  type: 'COLUMN';
};

export type DragItem = CardDragItem | ColumnDragItem;
