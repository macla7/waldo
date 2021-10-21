import React, { useEffect, useState } from "react";
import TimeFormat from "hh-mm-ss";

function Clock(props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!props.gameOver) {
        setTime((time) => time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <h4>{TimeFormat.fromS(time)}</h4>
    </div>
  );
}

export default Clock;
