import MaterialTable from "material-table";
import { forwardRef } from "react";
import React from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import styles from "../styles/Orders.module.css";
import { useNavigate } from "react-router";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};




const Orders = () => {

  const navigate=useNavigate()
  return (
    <div className={styles.orders}>
      <div className={styles.ordersheader}>
        <h2>Orders</h2>

        <div>
          <select name="" id="">
            <option value="">All Orders</option>
            <option value="">Processing</option>
            <option value="">Confirmed</option>
            <option value="">Delivered</option>
          </select>
        </div>
      </div>

      <div className={styles.tablewrapper}>
        <MaterialTable
          icons={tableIcons}
          style={{ width: "100%" }}
          title="Basic Search Preview"
          columns={[
            {
              title: "Pictures",
              field: "imageUrl",
              render: (rowData) => (
                <img
                  src={rowData.imageUrl}
                  style={{ width: 40, borderRadius: "10%" }}
                />
              ),
            },
            { title: "Product Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
              title: "Total Price",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
            {
              title: "Total Price",
              field: "birthCity",
              type: "numeric",
            },
            {
              title: "Status",
              field: "status",
            },
            {
              title: "Edit",
              render: (rowData) => (
                <button className="btn btn-primary"  onClick={()=>navigate('/order/11')} >view</button>
              ),
            },
            {
              title: "Delete",
              render: (rowData) => (
                <button className="btn btn-danger">Delete</button>
              ),
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
              imageUrl:
                "https://waltonbd.com/image/catalog/category-banner/mobile/smart-phone-half-block.jpg",
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34,
              imageUrl:
                "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
            },
          ]}
          options={{
            search: true,
            filtering: true,
            headerStyle: {
              backgroundColor: "#1ea8e7",
              color: "#FFF",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Orders;
