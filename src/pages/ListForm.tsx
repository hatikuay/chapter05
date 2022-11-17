import React, { useState, useContext, FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import FormItem from '../components/FormItem/FormItem';
import ItemsContext from '../context/ItemsContext';
import "./List.css"


const ListForm = () => {
  
  let navigate = useNavigate();
  const { listId } = useParams();

  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const { addItem } = useContext(ItemsContext);

  function onSubmit(e:any) {
    e.preventDefault();

    if (title && quantity && price) {
      addItem({
        title,
        quantity,
        price,
        listId,
      });
    }

    navigate(`/list/${listId}`);
    
  }

  return (
    <>
      {(
        <NavBar goBack={() => navigate(-1)} title='Add Item' />
      )}
      <div className='FormWrapper'>
        <form onSubmit={onSubmit}>
          <FormItem
            id='title'
            label='Title'
            placeholder='Insert title'
            value={title}
            handleOnChange={(event:React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)}
          />
          <FormItem
            id='quantity'
            label='Quantity'
            type='number'
            placeholder='0'
            value={quantity}
            handleOnChange={(event:React.ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(event.currentTarget.value))}
          />
          <FormItem
            id='price'
            label='Price'
            type='number'
            placeholder='0.00'
            value={price}
            handleOnChange={(event:React.ChangeEvent<HTMLInputElement>) => setPrice(parseInt(event.currentTarget.value))}
          />
          <button className='SubmitButton'>Add Item</button>
        </form>
      </div>
    </>
  );
};

export default ListForm;
