import React, {FC} from 'react';
import Button from '../Button/Button';
import "./NavBar.css"

const NavBarWrapper =  {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "navajowhite",
}

const NavBar:FC<NavBarProps> = (props:NavBarProps) => (
  <div style={NavBarWrapper}>
    {props.goBack && (
      <button className="NavBarButton" onClick={props.goBack}>{`< Go Back`}</button>
    )}
    <h2 className='Title'>{props.title}</h2>
    {props.openForm && (
      <button className="NavBarButton" onClick={props.openForm}>{`+ Add Item`}</button>
    )}
  </div>
);

export default NavBar;