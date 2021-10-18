import React from "react";
import { useEffect } from "react";

function Display(props) {
  useEffect(() => {
    window
      .fetch("/api/v1/images/1")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="display">
      <h2>This is the display</h2>
      {props.children}
    </div>
  );
}

export default Display;
