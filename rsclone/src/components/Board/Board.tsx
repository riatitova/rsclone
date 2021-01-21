import React from 'react';

import { AppContainer } from '@/assets/stylesheets/styles';
import AddNewItem from '@/components/Board/AddNewItem';
import Column from '@/components/Board/Column';
import { useAppState } from '@/components/context/AppStateContext';
import CustomDragLayer from '@/components/layers/CustomDragLayer';
import style from '@/components/Board/Board.scss';

const Board = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer className={style.board__wrapper}>
      <CustomDragLayer />
      {state.lists.map((list, index) => (
        <Column id={list.id} text={list.text} key={list.id} index={index} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
      />
      {/*<Footer />*/}
    </AppContainer>
  );
};

export default Board;
