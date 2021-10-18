import React from "react";

function Menu(props) {
  return (
    <div>
      <h3>Menu</h3>
      <div>{props.children}</div>
    </div>
  );
}

export default Menu;
