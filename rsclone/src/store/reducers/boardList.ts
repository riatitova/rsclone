import { nanoid } from 'nanoid';

import { ActionType } from '@/constants/index';
import {
  ADD_BOARD,
  ADD_COLUMN,
  ADD_TASK,
  MOVE_COLUMN,
  SET_DRAGGED_ITEM,
  MOVE_TASK,
} from '@/store/actions/actionTypes';
import {
  overrideItemAtIndex,
  removeItemAtIndex,
  moveItem,
  insertItemAtIndex,
} from '@/utils/arrayUtils';

const getInitialState = (name = 'Board') => ({
  boardList: [
    {
      boardId: nanoid(),
      boardName: name,
      draggedItem: undefined,
      boardColumns: [
        {
          columnId: nanoid(),
          columnName: 'To Do',
          columnTasks: [
            {
              taskId: nanoid(),
              taskName: 'learn typescript',
            },
          ],
        },
        {
          columnId: nanoid(),
          columnName: 'Testing',
          columnTasks: [
            {
              taskId: nanoid(),
              taskName: 'write tests',
            },
            {
              taskId: nanoid(),
              taskName: 'Never gonna give you up',
            },
          ],
        },
        {
          columnId: nanoid(),
          columnName: 'Complited',
          columnTasks: [
            {
              taskId: nanoid(),
              taskName: 'Never gonna get you down',
            },
            {
              taskId: nanoid(),
              taskName: 'Never gonna run around',
            },
            {
              taskId: nanoid(),
              taskName: 'And hurt you',
            },
          ],
        },
      ],
    },
    {
      boardId: nanoid(),
      boardName: `${name}_1`,
      draggedItem: undefined,
      boardColumns: [
        {
          columnId: nanoid(),
          columnName: 'To Do',
          columnTasks: [
            {
              taskId: nanoid(),
              taskName: 'learn typescript',
            },
          ],
        },
        {
          columnId: nanoid(),
          columnName: 'Testing',
          columnTasks: [
            {
              taskId: nanoid(),
              taskName: 'write tests',
            },
            {
              taskId: nanoid(),
              taskName: 'Never gonna give you up',
            },
          ],
        },
        {
          columnId: nanoid(),
          columnName: 'Complited',
          columnTasks: [
            {
              taskId: nanoid(),
              taskName: 'Never gonna get you down',
            },
          ],
        },
      ],
    },
  ],
});

const getNewBoard = (name: string, boardId: string) => ({
  boardId,
  boardName: name,
  draggedItem: undefined,
  boardColumns: [
    {
      columnId: nanoid(),
      columnName: 'To Do',
      columnTasks: [
        {
          taskId: nanoid(),
          taskName: 'learn typescript',
        },
      ],
    },
  ],
});

const initialState = getInitialState();

const boardList = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boardList: [...state.boardList, getNewBoard(action.payload.text || '', nanoid())],
      };
    case ADD_COLUMN: {
      const targetBoardIndex = state.boardList.findIndex(x => x.boardId === action.payload.boardId);

      const targetBoard = state.boardList[targetBoardIndex];

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: [
          ...targetBoard.boardColumns,
          {
            columnId: nanoid(),
            columnName: action.payload.text,
            columnTasks: [],
          },
        ],
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(state.boardList, updatedColumnList, targetBoardIndex),
      };
    }

    case ADD_TASK: {
      const targetBoardIndex = state.boardList.findIndex(x => x.boardId === action.payload.boardId);
      const targetBoard = state.boardList[targetBoardIndex];
      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        value => value.columnId === action.payload.columnId
      );
      const targetColumn = targetBoard.boardColumns.filter(
        value => value.columnId === action.payload.columnId
      )[0];

      const updatedTaskList = {
        ...targetColumn,
        columnTasks: [
          ...targetColumn.columnTasks,
          {
            taskId: nanoid(),
            taskName: action.payload.text,
          },
        ],
      };

      const updatedColumnList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedTaskList,
          targetColumnIndex
        ),
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(state.boardList, updatedColumnList, targetBoardIndex),
      };
    }

    case MOVE_COLUMN: {
      const { dragIndex, hoverIndex, boardId } = action.payload;
      const targetBoardIndex = state.boardList.findIndex(x => x.boardId === boardId);
      const targetBoard = state.boardList[targetBoardIndex];

      const updateBoard = {
        ...targetBoard,
        boardColumns: moveItem(targetBoard.boardColumns, dragIndex, hoverIndex),
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(state.boardList, updateBoard, targetBoardIndex),
      };
    }

    case MOVE_TASK: {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn, boardId } = action.payload;
      // console.log(action.payload);

      const targetBoardIndex = state.boardList.findIndex(x => x.boardId === boardId);
      const targetBoard = state.boardList[targetBoardIndex];

      const sourceColumnIndex = targetBoard.boardColumns.findIndex(
        x => x.columnId === sourceColumn
      );

      const targetColumnIndex = targetBoard.boardColumns.findIndex(
        x => x.columnId === targetColumn
      );

      const sourceList = targetBoard.boardColumns[sourceColumnIndex];

      const task = sourceList.columnTasks[dragIndex];

      const updatedSourceColumn = {
        ...sourceList,
        columnTasks: removeItemAtIndex(sourceList.columnTasks, dragIndex),
      };

      const stateWithUpdatedSourceList = {
        ...targetBoard,
        boardColumns: overrideItemAtIndex(
          targetBoard.boardColumns,
          updatedSourceColumn,
          sourceColumnIndex
        ),
      };

      const targetList = stateWithUpdatedSourceList.boardColumns[targetColumnIndex];

      const updatedTargetList = {
        ...targetList,
        columnTasks: insertItemAtIndex(targetList.columnTasks, task, hoverIndex),
      };

      const updateBoard = {
        ...stateWithUpdatedSourceList,
        boardColumns: overrideItemAtIndex(
          stateWithUpdatedSourceList.boardColumns,
          updatedTargetList,
          targetColumnIndex
        ),
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(state.boardList, updateBoard, targetBoardIndex),
      };
      // return state;
    }

    case SET_DRAGGED_ITEM: {
      const targetBoardIndex = state.boardList.findIndex(x => x.boardId === action.payload.boardId);
      const targetBoard = state.boardList[targetBoardIndex];

      const updateBoard = {
        ...targetBoard,
        draggedItem: action.payload.Drag,
      };

      return {
        ...state,
        boardList: overrideItemAtIndex(state.boardList, updateBoard, targetBoardIndex),
      };
    }

    default:
      return {
        ...state,
      };
  }
  return state;
};

export default boardList;
