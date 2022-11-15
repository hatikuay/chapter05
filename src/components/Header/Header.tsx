import React from 'react';

const HeaderWrapper = {
  backgroundColor: "orange",
  height: "100%",
  display: "flex",
  FlexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
}

const Title = {
  //PointerEvents: "none",
}
  
const Header = () => (
  <div style={HeaderWrapper}>
    <h1 style={Title}>Personal Shopping List</h1>
  </div>
);

export default Header;
