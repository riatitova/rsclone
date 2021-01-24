import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';

import { AddItemButton } from '@/assets/stylesheets/styles';
import NewItemForm from '@/components/Board/AddNewItem/AddNewItemForm';
import { IBoardList } from '@/constants/index';
import { addColumn, addTask } from '@/store/actions/actions';
import { RootState } from '@/store/reducers/rootReducer';

interface AddNewItemProps {
  functionName: string;
  boardId: string;
  toggleButtonText: string;
  columnId?: string;
  dark?: boolean;
}

interface DispatchProps {
  onAddColumn: (str: string, boardId: string) => void;
  onAddTask: (str: string, boardId: string, columnId: string) => void;
}

interface StateProps {
  // eslint-disable-next-line react/no-unused-prop-types
  board: IBoardList[];
}

type Props = StateProps & DispatchProps & AddNewItemProps;

const AddNewItem = (props: Props) => {
  const [showForm, setShowForm] = useState(false);
  const { functionName, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={itemText => {
          // eslint-disable-next-line no-lone-blocks, @typescript-eslint/no-unused-expressions
          {functionName === 'addColumn'
            ? props.onAddColumn(itemText, props.boardId)
            : props.onAddTask(itemText, props.boardId, props.columnId || '1');
          }
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

const mapStateToProps = (state: RootState) => {
  const boardList: IBoardList[] = state.boardList?.boardList;
  return {
    board: boardList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onAddColumn: (str: string, boardId: string) => dispatch(addColumn({ text: str, boardId })),
  onAddTask: (str: string, boardId: string, columnId: string | undefined) =>
    dispatch(addTask({ text: str, boardId, columnId })),
});

export default connect<StateProps, DispatchProps, AddNewItemProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddNewItem);
