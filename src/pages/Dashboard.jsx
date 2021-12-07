import { PeopleAlt } from "@mui/icons-material";
import React from "react";
import Chart from "../components/Chart/Chart";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.overview}>
        <div>
          <span>
            <PeopleAlt />
            <span>Users</span>
          </span>
          <span>200</span>
        </div>
        <div>
          <span>
            <PeopleAlt />
            <span>Total Products</span>
          </span>
          <span>5000</span>
        </div>

        <div>
          <span>
            <PeopleAlt />
            <span>Total Revenue</span>
          </span>
          <span>50000$</span>
        </div>
        <div>
          <span>
            <PeopleAlt />
            <span>Total Orders</span>
          </span>
          <span>500</span>
        </div>
        <div>
          <span>
            <PeopleAlt />
            <span>Total Orders</span>
          </span>
          <span>500</span>
        </div>
        <div>
          <span>
            <PeopleAlt />
            <span>Total Orders</span>
          </span>
          <span>500</span>
        </div>
        <div>
          <span>
            <PeopleAlt />
            <span>Total Orders</span>
          </span>
          <span>500</span>
        </div>
      </div>

      <div className={styles.charts}>
        <Chart />
   
      </div>
    </div>
  );
};

export default Dashboard;
