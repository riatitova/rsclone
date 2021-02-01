import { Dispatch } from 'react';

import { DragItem } from '@/components/context/DragItem';
import {
  ADD_BOARD,
  MOVE_COLUMN,
  ADD_TASK,
  ADD_COLUMN,
  SET_DRAGGED_ITEM,
  MOVE_TASK,
  DELETE_CARD,
  DELETE_COLUMN,
  DELETE_BOARD,
} from '@/store/actions/actionTypes';

interface IState {
  counter1?: IProps1;
  boardList?: IProps2;
  boards?: IBoards;
}

interface IBoards {
  boardList?: number;
  onAddBoard?: Dispatch<number>;
}

interface IBoardList {
  boardId: string;
  boardName?: string;
  draggedItem: DragItem | undefined;
  boardColumns: IColumns[];
}

interface IColumns {
  columnId: string;
  columnName: string;
  columnTasks: IBoardTasks[];
}

interface IBoardTasks {
  taskId: string;
  taskName: string;
}

interface IPayload {
  text: string;
  boardId?: string;
  columnId?: string;
}

interface IMoveColumn {
  dragIndex: number;
  hoverIndex: number;
  boardId: string;
}

interface IMoveTask {
  dragIndex: number;
  hoverIndex: number;
  sourceColumn: string;
  targetColumn: string;
  boardId: string;
}
interface ISetDraggedItem {
  Drag: DragItem | undefined;
  boardId: string;
}

interface IDeleteCard {
  boardId: string;
  columnId: string;
  cardId: string;
}

interface IDeleteColumn {
  boardId: string;
  columnId: string;
}

interface IDeleteBoard {
  boardId: string;
}

type ActionType =
  | {
    type: typeof ADD_BOARD;
    payload: { text: string };
  }
  | {
    type: typeof ADD_COLUMN;
    payload: { text: string; boardId: string };
  }
  | {
    type: typeof ADD_TASK;
    payload: {
      text: string;
      boardId: string;
      columnId: string;
    };
  }
  | {
    type: typeof MOVE_COLUMN;
    payload: {
      dragIndex: number;
      hoverIndex: number;
      boardId: string;
    };
  }
  | {
    type: typeof SET_DRAGGED_ITEM;
    payload: {
      Drag: DragItem | undefined;
      boardId: string;
    };
  }
  | {
    type: typeof DELETE_CARD;
    payload: {
      boardId: string;
      columnId: string;
      cardId: string;
    };
  }
  | {
    type: typeof DELETE_COLUMN;
    payload: {
      boardId: string;
      columnId: string;
    };
  }
  | {
    type: typeof DELETE_BOARD;
    payload: {
      boardId: string;
    };
  }
  | {
    type: typeof MOVE_TASK;
    payload: {
      boardId: string;
      dragIndex: number;
      hoverIndex: number;
      sourceColumn: string;
      targetColumn: string;
    };
  };

interface IProps1 {
  counter?: number;
  onAdd?: Dispatch<any>;
  onSub?: Dispatch<any>;
  onAddNum?: Dispatch<number>;
  onAsyncAdd?: Dispatch<number>;
}

interface IProps2 {
  boardList?: IBoardList[];
  onAdd2?: Dispatch<string>;
}

interface IMenu {
  open: boolean;
}

interface IMenuToggle extends IMenu {
  setOpen: (v: boolean) => void;
}

export {
  IState,
  IProps1,
  IProps2,
  IBoards,
  IBoardList,
  IColumns,
  IBoardTasks,
  ActionType,
  IPayload,
  IMoveColumn,
  IMoveTask,
  ISetDraggedItem,
  IMenu,
  IMenuToggle,
  IDeleteCard,
  IDeleteColumn,
  IDeleteBoard,
};
