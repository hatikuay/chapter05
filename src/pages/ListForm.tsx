import React, {useContext, useState, FC} from 'react';
import { ItemsContext } from '../context/ItemsContextProvider';
import FormItem from '../components/FormItem/FormItem';
import Button from '../components/Button/Button';
import NavBar from '../components/NavBar/NavBar';

const FormWrapper = {
  display: "flex",
  justifyContent: "space-between",
  FlexDirection: "column",
  margin: "2% 5%",
}

const SubmitButton = {
  backgroundColor: "blue",
  margin: "2% 0",
}

const Form:FC<FormProps> = (props:FormProps) => {
  const { addItemRequest } = useContext(ItemsContext);
  const [title, setTitle]= useState('');
  const [quantity, setQuantity]= useState('');
  const [price, setPrice]= useState('');

  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    addItemRequest({
      title,
      quantity,
      price,
      id: Math.floor(Math.random() * 100),
      listId: parseInt(props.match.params.id),
    });
    props.history.goBack();
  };

  return (
    <>
      {history && (
        <NavBar goBack={() => props.history.goBack()} title='Add Item' />
      )}
      <div style={FormWrapper}>
        <form onSubmit={handleOnSubmit}>
          <FormItem
            id='title'
            label='Title'
            placeholder='Insert title'
            value={title}
            handleOnChange={setTitle}
          />
          <FormItem
            id='quantity'
            label='Quantity'
            type='number'
            placeholder='0'
            value={quantity}
            handleOnChange={setQuantity}
          />
          <FormItem
            id='price'
            label='Price'
            type='number'
            placeholder='0.00'
            value={price}
            handleOnChange={setPrice}
          />
          <SubmitButton>Add Item</SubmitButton>
        </form>
      </div>
    </>
  );
};

export default Form;
