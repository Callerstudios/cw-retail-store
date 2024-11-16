import React, { useRef } from "react";
import "./OrderTab.css";
import { ReactComponent as SyncIcon } from "../../../images/icons/sync.svg";
import { ReactComponent as ExportIcon } from "../../../images/icons/export.svg";
import { ReactComponent as MoreVertIcon } from "../../../images/icons/more-vert.svg";
import { ReactComponent as SearchIcon } from "../../../images/icons/search.svg";
import StatusIcon from "../../../components/StatusIcon";

function OrderTab() {
  const dateRef = useRef(null);
  const showCalendar = () => {
    if (dateRef.current) {
      dateRef.current.showPicker();
      dateRef.current.focus();
    }
  };
  const orderData = [
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Pending",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Pending",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Confirmed",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Pending",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Delayed",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Cancelled",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Delayed",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Completed",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Cancelled",
    },
    {
      date: "25/10/2024, 04:50 PM",
      orderId: "#0224",
      store: "Store 1",
      customerName: "Adewale Ayuba",
      price: "₦120,100",
      statusTitle: "Completed",
    },
  ];
  return (
    <div className="order">
      <div className="header">
        <p>Orders</p>
        <div className="header-right">
          <span className="sync">
            <SyncIcon />
            <p>Sync Offline Orders</p>
          </span>
          <span className="export">
            <ExportIcon />
            <p>Export</p>
          </span>
        </div>
      </div>
      <div className="filter">
        <div className="filter-form">
          <select>
            <option value={1}>All Stores</option>
          </select>
          <select>
            <option value={1}>All Stores</option>
          </select>
          <span className="date">
            <span onClick={showCalendar} className="label">
              <p>Date </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </span>
            <input ref={dateRef} type="date" />
          </span>
        </div>
        <div className="search">
          <label htmlFor="search">
            <SearchIcon />
          </label>
          <input id="search" placeholder="Search..." />
        </div>
      </div>
      <div className="table">
        <div className="row head">
          <p>Date/Time</p>
          <p>Order ID.</p>
          <p>Store</p>
          <p>Customer</p>
          <p>Amount</p>
          <p>Status</p>
          <MoreVertIcon className="vert none" />
        </div>
        {orderData.map((data) => (
          <div className="row">
            <p>{data.date}</p>
            <p>{data.orderId}</p>
            <p>{data.store}</p>
            <p>{data.customerName}</p>
            <p>{data.price}</p>
            <StatusIcon title={data.statusTitle} />
            <MoreVertIcon className="vert" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderTab;
