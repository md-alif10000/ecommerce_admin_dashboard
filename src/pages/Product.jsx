import { Delete, Save } from "@material-ui/icons";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import ProductForm from "../components/ProductForm";
import styles from "../styles/Product.module.css";
import Swal from "sweetalert2";

const Product = () => {
  const deleteConfirm = () => {
    console.log("clicked");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Successfully deleted !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  const saveSuccess = () => {
    toast.success("Save successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={styles.product}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.header}>
        <div className="left"></div>
        <div className="right">
          <button className="btn btn-primary" onClick={saveSuccess}>
            <Save /> <span>Save</span>
          </button>
        </div>
      </div>
      <div className="left">
        <ProductForm />
      </div>
      <div className="right">
      
      </div>

      <div className={styles.reviews} id="reviews">
        <h3>Reviews</h3>
        <div className={styles.review}>
          <h5>md morsalin alif</h5>
          <div>
            <div className="left">
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                earum sed odio omnis nostrum est quidem suscipit dignissimos.
                Excepturi, id!
              </p>
            </div>
          </div>
          <span className={styles.delete} onClick={deleteConfirm}>
            <Delete />
          </span>
        </div>
        <div className={styles.review}>
          <h5>md morsalin alif</h5>
          <div>
            <div className="left">
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                earum sed odio omnis nostrum est quidem suscipit dignissimos.
                Excepturi, id!
              </p>
            </div>
          </div>
          <span className={styles.delete} onClick={deleteConfirm}>
            <Delete />
          </span>
        </div>
        <div className={styles.review}>
          <h5>md morsalin alif</h5>
          <div>
            <div className="left">
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                earum sed odio omnis nostrum est quidem suscipit dignissimos.
                Excepturi, id!
              </p>
            </div>
          </div>
          <span className={styles.delete} onClick={deleteConfirm}>
            <Delete />
          </span>
        </div>
        <div className={styles.review}>
          <h5>md morsalin alif</h5>
          <div>
            <div className="left">
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                earum sed odio omnis nostrum est quidem suscipit dignissimos.
                Excepturi, id!
              </p>
            </div>
          </div>
          <span className={styles.delete} onClick={deleteConfirm}>
            <Delete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
