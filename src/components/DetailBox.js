import React from "react";

function DetailBox(props) {
  return (
    <div className="stat2">
      <p>{props.name}</p>
      <p style={{ fontSize: "24px", fontWeight: 600 }}>{props.number}</p>
    </div>
  );
}

export default DetailBox;
