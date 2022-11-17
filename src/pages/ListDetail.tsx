import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemsContext from '../context/ItemsContext';
import ListsContext from '../context/ListsContext';
import NavBar from '../components/NavBar/NavBar';
import ListItem from '../components/ListItem/ListItem';
import "./List.css"

function ListDetail() {
  let navigate = useNavigate();
  const { listId } = useParams();

  const { loading, error, items, fetchItems } = useContext(ItemsContext);
  const { list, fetchList } = useContext(ListsContext);

  useEffect(() => {
    listId && !items.length && fetchItems(parseInt(listId));
  }, [fetchItems, items, listId]);

  useEffect(() => {
    listId && fetchList(parseInt(listId));
  }, [fetchList, listId]);

  return (
    <>
      {navigate && (
        <NavBar
          goBack={() => navigate(-1)}
          openForm={() => navigate(`/list/${listId}/new`)}
          title={list && list.title}
        />
      )}
      <div className='ListItemWrapper'>
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          items.map((item) => <ListItem key={item.id} {...item}/>)
        )}
      </div>
    </>
  );
}

export default ListDetail;