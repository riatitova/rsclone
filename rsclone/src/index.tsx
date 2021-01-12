import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';

import '@/assets/stylesheets/index.scss';
import App from '@/components/App';
import { AppStateProvider } from '@/components/context/AppStateContext';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById('root')
);
