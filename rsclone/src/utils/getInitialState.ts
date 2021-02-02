import { nanoid } from 'nanoid';

import { IBoardList } from '@/constants/index';

interface InitialState {
  boardList: IBoardList[];
}

const getInitialState = (name = 'Board'): InitialState => {
  const date = new Date();
  return {
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
                taskText: '',
                taskDate: date,
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
                taskText: '',
                taskDate: date,
              },
              {
                taskId: nanoid(),
                taskName: 'Never gonna give you up',
                taskText: '',
                taskDate: date,
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
                taskText: '',
                taskDate: date,
              },
              {
                taskId: nanoid(),
                taskName: 'Never gonna run around',
                taskText: '',
                taskDate: date,
              },
              {
                taskId: nanoid(),
                taskName: 'And hurt you',
                taskText: '',
                taskDate: date,
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
                taskText: '',
                taskDate: date,
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
                taskText: 'Task description',
                taskDate: date,
              },
              {
                taskId: nanoid(),
                taskName: 'Never gonna give you up',
                taskText: '',
                taskDate: date,
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
                taskText: '',
                taskDate: date,
              },
            ],
          },
        ],
      },
    ],
  };
};

const getNewBoard = (name: string, color: string, boardId: string) => ({
  boardId,
  boardName: name,
  boardColor: '',
  draggedItem: undefined,
  boardColumns: [
    {
      columnId: nanoid(),
      columnName: 'To Do',
      columnTasks: [
        {
          taskId: nanoid(),
          taskName: 'learn typescript',
          taskText: '',
          taskDate: new Date(),
        },
      ],
    },
  ],
});

export { getInitialState, getNewBoard };
