import React, {FC} from 'react';

import { ListsContextProvider } from './ListsContext';
import { ItemsContextProvider } from './ItemsContext';

const AppContext = (props:AppContextProps) => {
  return (
    <ListsContextProvider>
      <ItemsContextProvider>{props.children}</ItemsContextProvider>
    </ListsContextProvider>
  );
};

export default AppContext;
