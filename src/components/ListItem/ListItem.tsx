import React, {FC} from 'react';
import "./ListItem.css"

const ListItem:FC<Item> = (props:Item) => (
  <div className='ListItemWrapper'>
    <h3 className='Title'>{props.title}</h3>
    <span className='Total'>{`Quantity: ${props.quantity}`}</span>
    <span className='Total'>{`$ ${props.price}`}</span>
  </div>
);

export default ListItem;
