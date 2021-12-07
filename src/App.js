import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Product from "./pages/Product";

import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
// import 'sweetalert2/src/sweetalert2.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 1000);
  const [width, setwidth] = useState(window.innerWidth)

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} style={{with:'100vw'}} />
      <BrowserRouter>
        <div className={`sidebar ${!menuOpen && "halfopen"} ${
        !menuOpen && width < 700 && 'close'
      } `} style={{display:menuOpen  && "flex" }}     >
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        <div className="container">
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/users"} element={<Users />} />
            <Route path={"/orders"} element={<Orders />} />
            <Route path={"/order/:id"} element={<Order />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/product/:id"} element={<Product />} />
            <Route path={"/addProduct"} element={<AddProduct />} />
            <Route path={"/categories"} element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
