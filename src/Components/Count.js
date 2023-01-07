import React from "react";
import { useState, useEffect } from "react";

const Count = ({ count }) => {
  // number displayed by component
  const [number, setNumber] = useState("0");

  useEffect(() => {
    let start = 0;

    const end = parseInt(count.substring(0, 3));

    if (start === end) return;

    let totalMilSecDur = 2;
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setNumber(String(start) + count.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [count]);
  return <h2 className="num">{number}</h2>;
};

export default Count;
