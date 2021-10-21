import React, { useEffect, useState } from "react";

function Menu(props) {
  const [drawingsArr, setDrawingsArr] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/v1/images")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDrawingsArr(createList(json));
        return json;
      })

      .catch((error) => console.log(error));
  }, []);

  function createList(arr) {
    return arr.map((drawing) => {
      return (
        <li className="drawingLi" key={drawing.title}>
          <img
            src={`/images/${drawing.url}.jpeg`}
            alt={`${drawing.title} tile`}
            data-url={drawing.url}
            data-id={drawing.id}
            onClick={handleClick}
          />
        </li>
      );
    });
  }

  function handleClick(e) {
    props.toggleGame({ url: e.target.dataset.url, id: e.target.dataset.id });
  }

  return (
    <div>
      <h4>Menu</h4>
      {console.log(drawingsArr)}
      <ul className="drawingList">{drawingsArr}</ul>
    </div>
  );
}

export default Menu;
