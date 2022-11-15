import React, { FC } from 'react';

const FormItemWrapper = {
  display: "flex",
  TextAlign: "left",
  FlexDirection: "column",
  marginBottom: "2%",
}

const Label = {
  display: "block",
  fontWeight: "bold",
  padding: "10px 0",
}

const Input = {
  flexBasis: "60%",
  fontSize: "inherit",
  borderRadius: "5px",
  padding: "10px",
  border: "1px solid lightGrey",
}

const FormItem: FC<FormItemProps> = (props: FormItemProps) => {
  
  props.type = 'text';
  props.placeholder = '';

  return (
    <div style={FormItemWrapper} >
      <label style={Label} htmlFor={props.id}>{props.label}</label>
      <input style={Input}
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.handleOnChange(e.target.value)}
      />
    </div>);
}

export default FormItem;
