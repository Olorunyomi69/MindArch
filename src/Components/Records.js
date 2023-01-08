import React from "react";
import "./Records.css";
import { useRef } from "react";

import Count from "./Count";

const Records = () => {
  const Record = [
    {
      text: "Events",
      count: "3600",
    },
    {
      text: "Satisfied Clients",
      count: "4800",
    },
    {
      text: "Sponsored",
      count: "200",
    },
    {
      text: "Outreach",
      count: "1200",
    },
  ];

  const recordRef = useRef(null);

  return (
    <div className="record-wrapper" ref={recordRef} id="cases">
      {Record.map((item, idx) => {
        return (
          <div className="record" key={idx}>
            <Count count={item.count} />

            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Records;
