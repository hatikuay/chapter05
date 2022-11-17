import React, { FC } from 'react';
import "./NavBar.css"

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className='NavBarWrapper'>
      {props.goBack && (
        <button className="NavBarButton" onClick={props.goBack}>{`< Go Back`}</button>
      )}
      <h2 className='Title'>{props.title}</h2>
      {props.openForm && (
        <button className="NavBarButton" onClick={props.openForm}>{`+ Add Item`}</button>
      )}
    </div>);
}

export default NavBar;