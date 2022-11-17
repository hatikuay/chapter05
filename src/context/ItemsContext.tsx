import { createContext, useCallback, useReducer } from 'react';

const initialState:IItemsContext = {
  items: Array<Item>(),
  loading: true,
  error: '',
  fetchItems: (listId:number) => Array<Item>(), 
  addItem: ({ listId, title, quantity, price }:Item) => {return {}}
};

interface IItemsContext {
  items: Array<Item>;
  loading: boolean;
  error: string;
  fetchItems: (listId:number) => {}, 
  addItem: ({ listId, title, quantity, price }:Item) => {}
}

export const ItemsContext = createContext<IItemsContext>(initialState);

type Action = {
  type: string;
  payload: Item | Array<Item> | any ;
}

const reducer = (state: IItemsContext, action:Action) => {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'GET_ITEMS_ERROR':
      return {
        ...state,
        items: Array<Item>(),
        loading: false,
        error: action.payload,
      };
    case 'ADD_ITEM_SUCCESS':
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };

    default:
      return state;
  }
};

export const ItemsContextProvider = (props: ItemsContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = useCallback(async (listId:number) => {
    try {
      const data = await fetch(
        `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}/items`,
      );
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_ITEMS_SUCCESS', payload: result });
      }
    } catch (e:any) {
      dispatch({ type: 'GET_ITEMS_ERROR', payload: e.message });
    }
  }, []);

  const addItem = useCallback(async ({ listId, title, quantity, price }:Item) => {
    const itemId = Math.floor(Math.random() * 100);

    try {
      const data = await fetch(
        `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/items`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: itemId,
            listId,
            title,
            quantity,
            price,
          }),
        },
      );
      const result = await data.json();

      if (result) {
        dispatch({
          type: 'ADD_ITEM_SUCCESS',
          payload: {
            id: itemId,
            listId,
            title,
            quantity,
            price,
          },
        });
      }
    } catch { }
  }, [])

  return (
    <ItemsContext.Provider value={{ ...state, fetchItems, addItem }}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;

