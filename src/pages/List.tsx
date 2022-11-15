import React from 'react';
import { ListsContext } from '../context/ListsContextProvider';
import { ItemsContext } from '../context/ItemsContextProvider';
import ListItem from '../components/ListItem/ListItem';
import NavBar from '../components/NavBar/NavBar';

const ListItemWrapper = {
  display: "flex",
  justifyContent: "space-between",
  FlexDirection: "column",
  margin: "2% 5%",
}
//styled.div

const Alert = {
  width: "100%",
  TextAlign: "center",
}
//styled.span

const List = ({ match, history }) => {
  const { list, getListRequest } = React.useContext(ListsContext);
  const { loading, error, items, getItemsRequest } = React.useContext(
    ItemsContext,
  );

  React.useEffect(() => {
    if (!list.id) {
      getListRequest(match.params.id);
    }

    if (!items.length) {
      getItemsRequest(match.params.id);
    }
  }, [getItemsRequest, getListRequest, items, list, match.params.id]);

  return !loading && !error ? (
    <>
      {history && list && (
        <NavBar
          goBack={() => history.goBack()}
          title={list.title}
          openForm={() => history.push(`${match.url}/new`)}
        />
      )}
      <div style={ListItemWrapper}>
        {items && items.map(item => <ListItem key={item.id} data={item} />)}
      </div>
    </>
  ) : (
    <span style={Alert}>{loading ? 'Loading...' : error}</span>
  );
};

export default List;
