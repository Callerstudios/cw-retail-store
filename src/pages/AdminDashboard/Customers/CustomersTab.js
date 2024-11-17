import React from "react";
import { ReactComponent as ExportIcon } from "../../../images/icons/export.svg";
import { ReactComponent as SearchIcon } from "../../../images/icons/search.svg";
import { ReactComponent as MoreVertIcon } from "../../../images/icons/more-vert.svg";
import StatusIcon from "../../../components/StatusIcon";
import "./CustomersTab.css";

function CustomersTab() {
  const customerData = [
    {
      name: "Jaime Man",
      email: "jaime@gmail.com",
      number: "090876557299",
      status: "Active",
    },
    {
      name: "Jaime Man",
      email: "jaime@gmail.com",
      number: "090876557299",
      status: "Active",
    },
    {
      name: "Jaime Man",
      email: "jaime@gmail.com",
      number: "090876557299",
      status: "Active",
    },
    {
      name: "Jaime Man",
      email: "man@gmail.com",
      number: "090876557299",
      status: "Active",
    },
    {
      name: "Jaime Carl",
      email: "jaime@gmail.com",
      number: "090468637299",
      status: "Inactive",
    },
    {
      name: "John Man",
      email: "john@gmail.com",
      number: "090345323299",
      status: "Inactive",
    },
  ];
  return (
    <div className="customer-tab">
      <div className="header">
        <p>Customers</p>
        <div className="header-right">
          <span className="export">
            <ExportIcon />
            <p>Export</p>
          </span>
        </div>
      </div>
      <div className="filter">
        <div className="filter-form">
          <select>
            <option value={1}>Status</option>
            <option value={2}>Active</option>
            <option value={3}>Inactive</option>
          </select>
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
          <span className="name">Name</span>
          <span className="email">Email</span>
          <span>Phone Number</span>
          <span>Status</span>
          <span></span>
        </div>
        {customerData.map((data) => (
          <div className="row">
            <span className="name">
              <p>{data.name}</p>
            </span>
            <span className="email">{data.email}</span>
            <span>{data.number}</span>
            <span>
              <StatusIcon title={data.status} />
            </span>
            <span>
              <MoreVertIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersTab;
