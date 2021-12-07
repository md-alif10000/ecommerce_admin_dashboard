import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "../../styles/components/Chart.module.css";

const data = [
  {
    month: "January",
    users: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    month: "Feb",
    users: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: "Mar",
    users: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: "Apr",
    users: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: "May",
    users: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: "June",
    users: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: "Jul",
    users: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Aug",
    users: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Sep",
    users: 4490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Oct",
    users: 5490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Nov",
    users: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: "Dec",
    users: 2490,
    pv: 2300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className={styles.chart}>
      <h3>Users</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="users" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
