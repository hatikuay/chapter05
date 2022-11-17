import React, { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListsContext } from '../context/ListsContext';
import NavBar from '../components/NavBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import "./List.css"

const Lists = () => {
  let navigate = useNavigate();
  const { loading, error, lists, fetchLists } = useContext(ListsContext);

  useEffect(() => {
    !lists.length && fetchLists()
  }, [fetchLists, lists])

  return (
    <>
      {<NavBar title='Your Lists' />}
      <div className='ListWrapper'>
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          lists.map((list) => (
            <Link className='ListLink' key={list.id} to={`list/${list.id}`}>
              <h3 className='Title'>{list.title}</h3>
            </Link>
          ))
        )}
      </div>
    </>
  );
};
export default Lists;
