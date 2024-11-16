import React from "react";

function PerformanceStat(props) {
  return (
    <div className="performance-stat">
      <div className="top">
        <p>{props.title}</p>
        <hr />
      </div>
      <div className="performance-list">
        <div className="performance">

        <span>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </span>
        <div className="progress">
            <span style={{width: '80%'}}></span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceStat;
