import React, { useState } from "react";
import "./AdminDashboard.css";
import CompanyLogo from "../../components/CompanyLogo";
import { ReactComponent as DashboardIcon } from "../../images/icons/dashboard.svg";
import { ReactComponent as CartIcon } from "../../images/icons/cart.svg";
import { ReactComponent as ProductIcon } from "../../images/icons/package.svg";
import { ReactComponent as CustomerIcon } from "../../images/icons/customer.svg";
import { ReactComponent as NotificationIcon } from "../../images/icons/notification.svg";
import { ReactComponent as LogoutIcon } from "../../images/icons/logout.svg";
import DashboardTab from "./Dashboard/DashboardTab";
import OrderTab from "./Order/OrderTab";
import ProductsTab from "./Products/ProductsTab";
import CustomersTab from "./Customers/CustomersTab";

function AdminDashboard() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [userDetails, setUserDetails] = useState({
    username: "Tunde Bakare",
    imageUrl:
      "data:image/jpeg;base64,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",
  });
  const [notificationCount, setNotificationCount] = useState(2);
  return (
    <div className="dashboard">
      <aside>
        <div className="logo">
          <CompanyLogo />
        </div>
        <div
          className={
            currentPageIndex === 0 ? "nav-button active" : "nav-button"
          }
          onClick={() => setCurrentPageIndex(0)}
        >
          <DashboardIcon className="nav-button-icon" />
          <p>Dashboard</p>
        </div>
        <div
          className={
            currentPageIndex === 1 ? "nav-button active" : "nav-button"
          }
          onClick={() => setCurrentPageIndex(1)}
        >
          <CartIcon className="nav-button-icon" />
          <p>Orders</p>
        </div>
        <div
          className={
            currentPageIndex === 2 ? "nav-button active" : "nav-button"
          }
          onClick={() => setCurrentPageIndex(2)}
        >
          <ProductIcon className="nav-button-icon" />
          <p>Products</p>
        </div>
        <div
          className={
            currentPageIndex === 3 ? "nav-button active" : "nav-button"
          }
          onClick={() => setCurrentPageIndex(3)}
        >
          <CustomerIcon className="nav-button-icon" />
          <p>Customers</p>
        </div>
      </aside>
      <main>
        <header>
          <div className="user-detail">
            <div className="notification">
              <span>{notificationCount}</span>
              <NotificationIcon />
            </div>
            <div className="user-image-name">
              <img src={userDetails.imageUrl} alt="" />
              <p>{userDetails.username}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </div>
            <div className="logout">
              <LogoutIcon />
              <p>Logout</p>
            </div>
          </div>
        </header>
        <section className="main-dashboard">
          {currentPageIndex === 0 && (
            <DashboardTab name={userDetails.username} />
          )}
          {currentPageIndex === 1 && <OrderTab />}
          {currentPageIndex === 2 && <ProductsTab />}
          {currentPageIndex === 3 && <CustomersTab />}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
