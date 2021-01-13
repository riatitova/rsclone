import React from 'react';

import { AppContainer } from '@/assets/stylesheets/styles';
import AddNewItem from '@/components/Board/AddNewItem';
import Column from '@/components/Board/Column';
import { useAppState } from '@/components/context/AppStateContext';
import CustomDragLayer from '@/components/layers/CustomDragLayer';

const Board = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, index) => (
        <Column id={list.id} text={list.text} key={list.id} index={index} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </AppContainer>
  );
};

export default Board;
