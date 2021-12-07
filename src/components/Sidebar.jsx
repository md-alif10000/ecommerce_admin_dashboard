import React, { useState, useEffect } from "react";
import styles from "../styles/components/Sidebar.module.css";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Category, NotificationAdd, WbSunny } from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const [width, setwidth] = useState(null);
  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);

  return (
    <div
      className={`${styles.sidebar} ${!menuOpen && styles.halfopen} ${
        !menuOpen && width < 700 && styles.close
      } `}
    >
  
      <div className={styles.top}>
      <span  className={styles.close} onClick={() => setMenuOpen(false)}>
        <Close />
      </span>
        <h2>Admin Dashboard</h2>
        <div className={styles.user}>
          <img
            src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
            alt=""
          />
          <h4>Md Alif</h4>

          <div>
            {" "}
            <span>
              {" "}
              <WbSunny />{" "}
            </span>{" "}
            <span>
              <NotificationAdd />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <ul>
          <NavLink
            className={styles.navlink}
            exact={true}
            to="/"
            className={(navInfo) => (navInfo.isActive ? styles.active : "")}
          >
            <li>
              <span>
                <DashboardIcon />
              </span>
              <span>Dashboard</span>
            </li>
          </NavLink>

          <NavLink
            className={styles.navlink}
            exact={true}
            to="/users"
            className={(navInfo) => (navInfo.isActive ? styles.active : "")}
          >
            <li>
              <span>
                <PeopleOutlineIcon />
              </span>
              <span>Users</span>
            </li>
          </NavLink>

          <NavLink
            className={styles.navlink}
            exact={true}
            to="/orders"
            className={(navInfo) => (navInfo.isActive ? styles.active : "")}
          >
            <li>
              <span>
                <PeopleOutlineIcon />
              </span>
              <span>Orders</span>
            </li>
          </NavLink>

          <NavLink
            className={styles.navlink}
            exact={true}
            to="/products"
            activeClassName="isActive"
            className={(navInfo) => (navInfo.isActive ? styles.active : "")}
          >
            <li>
              <span>
                <ProductionQuantityLimitsIcon />
              </span>
              <span>Products</span>
            </li>
          </NavLink>

          <NavLink
            className={styles.navlink}
            exact={true}
            to="/product/144"
            activeClassName="isActive"
            className={(navInfo) => (navInfo.isActive ? styles.active : "")}
          >
            <li>
              <span>
                <ProductionQuantityLimitsIcon />
              </span>
              <span>Single Product</span>
            </li>
          </NavLink>

          <NavLink
            className={styles.navlink}
            exact={true}
            to="/addProduct"
            activeClassName="isActive"
            className={(navInfo) => (navInfo.isActive ? styles.active : "")}
          >
            <li>
              <span>
                <ProductionQuantityLimitsIcon />
              </span>
              <span>Add Product</span>
            </li>
          </NavLink>

          <NavLink
            className={styles.navlink}
            exact={true}
            to="/categories"
            activeClassName="isActive"
          >
            <li>
              <span>
                <Category />
              </span>
              <span>Categories</span>
            </li>
          </NavLink>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
