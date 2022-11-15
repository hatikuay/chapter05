import React, {FC, useContext} from 'react';
import { Link } from 'react-router-dom';
import { ListsContext } from '../context/ListsContextProvider';
import NavBar from '../components/NavBar/NavBar';

const ListWrapper = {
  display: "flex",
  justifyContent: "space-between",
  FlexDirection: "column",
  margin: "5%",
}

const ListLink = {
  display: "flex",
  TextAlign: "left",
  alignItems: "center",
  //padding: "1%",
  backgroundCpolor: "lightGray",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "2%",
  color: "black",
  textDecoration: "none",
} 
//styled(Link)

const Title = {
  flexBasis: "80%",
} 
//styled.h3

const Alert = {
  width: "100%",
  TextAlign: "center",
} 
//styled.span


const Lists:FC<ListsProps> = (props:ListsProps) => {
  const { lists, loading, error, getListsRequest } = React.useContext(
    ListsContext,
  );
  React.useLayoutEffect(() => {
    if (!lists.length) {
      getListsRequest();
    }
  }, [getListsRequest, lists]);

  return !loading && !error ? (
    <>
      {props.history && <NavBar title='Your Lists' />}
      <div style={ListWrapper}>
        {lists &&
          lists.map(list => (
            <Link style={ListLink} key={list.id} to={`list/${list.id}`}>
              <h3 style={Title}>{list.title}</h3>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <span style={Alert}>{loading ? 'Loading...' : error}</span>
  );
};
export default Lists;
