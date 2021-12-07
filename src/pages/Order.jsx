import React from "react";
import styles from "../styles/Order.module.css";

const Order = () => {
  return (
    <div className={styles.order}>
      <div className={styles.info}>
        <div className={styles.orderInfo}>
          <h3>Order Info</h3>
          <div>
            <div className={styles.keyValue}>
              <span>Id</span> <span>1411414114</span>
            </div>
            <div className={styles.keyValue}>
              <span>Status</span> <span>Delivered</span>
            </div>
            <div className={styles.keyValue}>
              <span>Total Price</span> <span>30000 $</span>
            </div>
            <div className={styles.keyValue}>
              <span>Payment Method</span> <span>Cash On Delivery</span>
            </div>
            <div className={styles.keyValue}>
              <span>Payment Status</span> <span>Not paid</span>
            </div>
          </div>
        </div>

        <div className={styles.customerInfo}>
          <h3>Order info</h3>

          <div>
            <div className={styles.keyValue}>
              <span>Name</span> <span>Md Morsalin Alif</span>
            </div>
            <div className={styles.keyValue}>
              <span>Phone</span> <span>01309677070</span>
            </div>
            <div className={styles.keyValue}>
              <span>Email</span> <span>alif@gmail.com</span>
            </div>

            <div className={styles.keyValue}>
              <span>Division </span> <span>Dhaka</span>
            </div>
            <div className={styles.keyValue}>
              <span>District </span> <span>Dhaka</span>
            </div>
            <div className={styles.keyValue}>
              <span>Upazilla </span> <span>Savar</span>
            </div>
            <div className={styles.keyValue}>
              <span>Shipping Address</span> <span>Ashulia,Savar,dhaka</span>
            </div>
          </div>

          <div className={styles.keyValue}>
            <span>Comment </span>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              architecto in repellat quas! Repellat ea architecto assumenda ex
              repellendus. Ut?
            </span>
          </div>
        </div>
      </div>

      <div>
          
      </div>

      <div className={styles.statusInfo}>
        <h3>Order Status</h3>
      </div>
      <div className={styles.cartInfo}>
        <div className={styles.heading}>
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>quantity</span>
          <span>Total</span>
        </div>

        <div className={styles.products}>
          <div className={styles.product}>
            <span>
              <img
                className={styles.productImg}
                src="https://m.media-amazon.com/images/I/41sGASjc4-L.jpg"
                alt=""
              />
            </span>
            <span>Samsung Galaxy S21 Ultra 5G</span>
            <span>1000 $</span>
            <span>5</span>
            <span>5000$</span>
          </div>
        </div>

        <div className={styles.cartTotal}>
          <div>
            <span>Total</span> <span>50000</span>
          </div>
          <div>
            <span>Delivery Charge</span> <span>50</span>
          </div>
          <div>
            <span>Grand Total</span> <span>50050</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
