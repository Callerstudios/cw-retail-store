import React, { useState } from "react";
import "./DashboardTab.css";
import StatView from "../../components/StatView";

function DashboardTab(props) {
  const [storeTypes, setStoreTypes] = useState(["Store 1", "Store 2"]);
  const [filterDurationIndex, setFilterDurationIndex] = useState(0);
  const [stat1Data, setstat1Data] = useState([
    {
      title: "Total Sales Amount",
      price: "₦ 12,000,000",
      percent: 15,
    },
    {
      title: "Total Store",
      price: 5,
      percent: 45,
    },
    {
      title: "Total Products",
      price: "2,724",
      percent: 10,
    },
    {
      title: "Total Customer",
      price: "1,527",
      percent: 36,
    },
    
  ]);
  return (
    <div className="dashboard-tab">
      <div className="dashboard-head">
        <h2>Welcome {props.name.split(" ")[0]}</h2>
      </div>
      <div className="filter">
        <div className="tabs">
          <span
            className={filterDurationIndex === 0 ? "tab active" : "tab"}
            onClick={() => setFilterDurationIndex(0)}
          >
            All
          </span>
          <span
            className={filterDurationIndex === 1 ? "tab active" : "tab"}
            onClick={() => setFilterDurationIndex(1)}
          >
            Today
          </span>
          <span
            className={filterDurationIndex === 2 ? "tab active" : "tab"}
            onClick={() => setFilterDurationIndex(2)}
          >
            This Week
          </span>
          <span
            className={filterDurationIndex === 3 ? "tab active" : "tab"}
            onClick={() => setFilterDurationIndex(3)}
          >
            This Month
          </span>
          <span
            className={filterDurationIndex === 4 ? "tab active" : "tab"}
            onClick={() => setFilterDurationIndex(4)}
          >
            This Year
          </span>
        </div>
        <div className="date">
          <label htmlFor="date-filter">Custom Date</label>
          <br />
          <input type="date" id="date-filter" />
        </div>
        <select className="store-type">
          {storeTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="stats1">
        {stat1Data.map((stat, index) => (
          <StatView
            price={stat.price}
            key={index}
            title={stat.title}
            percent={stat.percent}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardTab;
