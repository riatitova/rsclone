import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import '@/assets/stylesheets/index.scss';
import { Provider } from 'react-redux';

import App from '@/components/App';
import { AppStateProvider } from '@/components/context/AppStateContext';
import store from '@/store/index';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppStateProvider>
  </DndProvider>,
  document.getElementById('root')
);
