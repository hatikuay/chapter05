import React, {FC} from 'react';

const ListItemWrapper = { 
  display: "flex",
  TextAlign: "left",
  alignItems: "center",
  //padding: "1%",
  backgroundColor: "lightGray",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "2%",
  textDecoration: "none",
}

const Title = {
  flexBasis: "70%",
}

const Total = {
  flexBasis: "15%",
  fontWeight: "bold",
  TextAlign: "right",
}

const ListItem:FC<Data> = (props:Data) => (
  <div style={ListItemWrapper}>
    <h3 style={Title}>{props.title}</h3>
    <span style={Total}>{`Quantity: ${props.quantity}`}</span>
    <span style={Total}>{`$ ${props.price}`}</span>
  </div>
);

export default ListItem;
