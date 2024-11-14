import React from "react";

function StatView(props) {
  return (
    <div className="stat1">
      <p style={{fontSize: '14px'}}>{props.title}</p>
      <div className="details">
        <p className="price">{(props.price)}</p>
        <p className="percent">+ {props.percent}% &uarr;</p>
      </div>
    </div>
  );
}

export default StatView;
