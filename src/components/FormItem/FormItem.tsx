import React, { FC } from 'react';
import "./FormItem.css"

const FormItem: FC<FormItemProps> = (props: FormItemProps) => {
  
  /*props.type = 'text';
  props.placeholder = '';*/

  return (
    <div className='FormItemWrapper' >
      <label className='Label' htmlFor={props.id}>{props.label}</label>
      <input className='Input'
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleOnChange}
      />
    </div>);
}

export default FormItem;
