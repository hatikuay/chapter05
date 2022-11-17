import { createContext, useCallback, useReducer } from 'react';

const initialState: IListsContext = {
  lists: Array<List>(),
  list: {
    id: 0,
    title: ""
  },
  loading: true,
  error: '',
  fetchLists: () => Array<List>(),
  fetchList: (listId: number) => { return {} }
};

interface IListsContext {
  lists: Array<List>,
  list: List,
  loading: boolean,
  error: string,
  fetchLists: () => {},
  fetchList: (listId: number) => {}
}

export const ListsContext = createContext<IListsContext>(initialState);

type Action = {
  type: string;
  payload: List | Array<List> | any;
}


const reducer = (state: IListsContext, action: Action) => {
  switch (action.type) {
    case 'GET_LISTS_SUCCESS':
      return {
        ...state,
        lists: action.payload,
        loading: false,
      };
    case 'GET_LISTS_ERROR':
      return {
        ...state,
        lists: Array<List>(),
        loading: false,
        error: action.payload,
      };
    case 'GET_LIST_SUCCESS':
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case 'GET_LIST_ERROR':
      return {
        ...state,
        list: {
          id: 0,
          title: ""
        },
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const ListsContextProvider = (props: ListsContextProviderProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchLists = useCallback(async () => {
    try {
      const data = await fetch(
        `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists`,
      );
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_LISTS_SUCCESS', payload: result });
      }
    } catch (e: any) {
      dispatch({ type: 'GET_LISTS_ERROR', payload: e.message });
    }
  }, []);

  const fetchList = useCallback(async (listId: number) => {
    try {
      const data = await fetch(
        `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}`,
      );
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_LIST_SUCCESS', payload: result });
      }
    } catch (e: any) {
      dispatch({ type: 'GET_LIST_ERROR', payload: e.message });
    }
  }, []);

  return (
    <ListsContext.Provider value={{ ...state, fetchLists, fetchList }}>
      {props.children}
    </ListsContext.Provider>
  );
};

export default ListsContext;
