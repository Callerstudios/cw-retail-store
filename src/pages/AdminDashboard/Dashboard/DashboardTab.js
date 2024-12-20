import React, { useState, useRef } from "react";
import "./DashboardTab.css";
import StatView from "../../../components/StatView";
import DetailBox from "../../../components/DetailBox";
import SalesChart from "../../../components/SalesChart";
import ProductsStat from "../../../components/ProductsStat";
import PerformanceStat from "../../../components/PerformanceStat";
import RetentionRate from "../../../components/RetentionRate";

function DashboardTab(props) {
  const customDateRef = useRef(null);
  const productImgUrl =
    "data:image/jpeg;base64,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ZUUKCNnYWmhQc70HNM0EEEAgggg4gg5gjaiYmYneFQnuSSyuMlkq6Mmpgri3eYicx9Q9DsXnajRzv6TFO0vb0/iVclfR6j5/f7uhksNrbRwo7KuTgdoxxB+qVTj1EWngvyt5fZqtS+LnXnCFvG6ZIsaazfeHzGxXzGy2mWtnAuVgg77mt/qn9r2HYOHgenhVdRKvLTij3pG8rgr24aY46lfyn5KZr5KseftZBSwOaaOa4HcQQudmiLRPR0aYQH9haCKEMYaHMUe0+BWTNy1GP4SaafWtt5qHdjXvJgZh64t1jwbU9wrXotda8U7Quz5K4qzkt2eo2CBsbGsaKNaAB0XoRG0bPjsmScl5vbrKSiKlwttxXfqDXcO0RgNw8yglkBAQEBAQEBAQEBAQEGEsQcKFBF2mzlueW9BxSIOaRBFW+72POtTVflrtwNBkDscOdeFFRn02PNG14+7Vp9XlwezPLy7OF1pmhzHrG72gk9W+13ay862m1OH/ANc8UeU9Xq49Xp83terP0/vx2cpFmnqW/u3bS3EA/WbsPQKuNZWJ4clZrLZwZKxvHOHJaLnkbi0CRu9mPwzWqsxaN6zuRljpPL4o8imBRYs+jNsLmmM5spT7J2dPmu6yyZ6bTum6rpnVPT6UeokFcmAHm5zaDwXnZrxbU0iOz0NHWYjdX9DrrLGmV47TxRo3NzrzPgAvXwU2jil5fiurjJb0VZ5R1+P8LdCr3jrdo/c+Usg4tafzH5BBY0BAQEBAQEBAQEBAQEBAQCg47RdzXZdk8Mu5BF2m7JBkNYcPJBFTMIwIoeOCDjlCCMttiY/FzcRk4Va4cnDEd64vipeNrRuvw6nLi9i236fJyNZJGaskJ4OwPIOb8wV59/DKb8WK01l6NPFd+WWu/wAG83lrCksbXcXNDu4jyCotXWYusRaGnHqNNf2bcPx5PsN7xR11GxMJzxofNV/5Oo/4/wBWj0VL/j3/ADh9kv0uyP4WnxOHxUb63LyrXb6fq4tOmxc7Wj57/SEbaYfW0DxVoNdU46x2F2/ktmj8P9FPHed5efqfE5tHDijaPPv/AA7omL03krno7cFKSzDHNrD4u8kFnQEBAQEBAQEBAQEBAQEBAQEBAQYSRNdg4AjiAUHDPckLvolv2SR8MkEbaNFQfZlI4ObX4gjwQRdo0VnGWo7k4g/EIIu0aP2hucLvu0d+UlBxuuqb/Zk/lv8AJBlFcs5ygk6scB3kIJSx6J2h3tNawfWcCe5tUFnunRyOEhx7bxkSKAcQ3fxKCaQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB//2Q==";
  const [storeTypes, setStoreTypes] = useState(["Store 1", "Store 2"]);
  const [filterDurationIndex, setFilterDurationIndex] = useState(0);
  const [stat1Data, setStat1Data] = useState([
    {
      title: "Total Sales Amount",
      price: "₦ 11,000,000",
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
  const topSellingCategories = [
    {
      imageUrl: productImgUrl,
      title: "Top Selling Categories",
      name: "Beverage",
      quantity: "234 Sold",
    },
    {
      imageUrl: productImgUrl,
      title: "Top Selling Categories",
      name: "Beverage",
      quantity: "234 Sold",
    },
    {
      imageUrl: productImgUrl,
      title: "Top Selling Categories",
      name: "Beverage",
      quantity: "234 Sold",
    },
  ];
  const showCalendar = () => {
    if (customDateRef.current) {
      customDateRef.current.focus();
      customDateRef.current.showPicker();
    }
  };
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
        <span className="date">
          <span onClick={showCalendar} className="label">
            <p> Custom Date </p>
          </span>
          <input ref={customDateRef} type="date" />
        </span>
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
      <div className="stats2">
        <DetailBox name="Total Orders" number={247} />
        <DetailBox name="Pending Orders" number={33} />
        <DetailBox name="Confirmed Orders" number={25} />
        <DetailBox name="Delivered Orders" number={41} />
      </div>
      <div className="stats2">
        <DetailBox name="Returned Orders" number={33} />
        <DetailBox name="Delayed Orders" number={25} />
        <DetailBox name="Cancelled Orders" number={7} />
        <DetailBox name="Total Offline Orders" number={23} />
      </div>
      <div className="sales-chart">
        <SalesChart />
      </div>
      <div className="stats3">
        <ProductsStat
          data={topSellingCategories}
          title="Total Sales Categories"
        />
        <ProductsStat
          data={topSellingCategories}
          title="Top Selling Products"
          imageUrl={productImgUrl}
          name="Beverage"
          quantity="234 Sold"
        />
        <ProductsStat
          data={topSellingCategories}
          imageUrl={productImgUrl}
          title="Low Selling Products"
          name="Beverage"
          quantity="234 Sold"
        />
      </div>
      <div className="stats4">
        <PerformanceStat
          title="Top Performing Stores"
          name="Store 1"
          price="₦ 2,000,000"
        />
        <PerformanceStat
          title="Top Customers"
          name="Yetunde"
          price="45 Orders"
        />
        <span className="retention-rate">
          <div className="top">
            <p>Retention Rate</p>
            <hr />
          </div>
          <RetentionRate />
        </span>
      </div>
    </div>
  );
}

export default DashboardTab;
