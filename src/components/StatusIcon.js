import React, { useEffect, useState } from "react";

function StatusIcon(props) {
  // const [title, setTitle] = useState("Pending");
  const [bgColor, setBgColor] = useState("#ffcc19");
  const colors = {
    Pending: "#ffcc19",
    Confirmed: "#00C4F1",
    Cancelled: "#E74C3C",
    Delayed: "#800080",
    Completed: "#27AE60",
    Returned: "#FF7913",
    Active: "#27AE60",
    Inactive: "#FFCC19"
  };

  useEffect(() => {
    // setTitle(props.title);
    setBgColor(colors[props.title])
  }, [props.title]);
  return (
    <div className="status-icon">
      <p style={{ backgroundColor: bgColor }}>{props.title}</p>
    </div>
  );
}

export default StatusIcon;
