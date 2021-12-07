import { Add } from "@material-ui/icons";
import React from "react";
import styles from "../styles/components/ProductForm.module.css";
import { Input, Select, TextArea } from "./utils/Input";

const ProductForm = () => {
  return (
    <div className={styles.wrapper}>
      <form action="" className={styles.form}>
        <div className={styles.left}>
          <Input label={"Product Name"} placeholder="name" />
          <Input label={"Product Name"} placeholder="name" />
          <Input label={"Product Name"} placeholder="name" />
          <Input label={"Product Name"} placeholder="name" />
          <Input
            label={"Old price"}
            type="number"
            placeholder="old price"
            width="45%"
          />
          <Input
            label={"New Price"}
            type="number"
            placeholder="new price"
            width="45%"
          />

          <Select width="45%" label="Category" />
          <Input
            label={"Quantity"}
            type="number"
            placeholder="name"
            width="45%"
          />
          <div className={styles.sizes}>
            <div>
              <span>Sizes</span>
            </div>
            <div>
              <Input placeholder="size" width="60%" />
              <button className="btn btn-primary">
                <span>Add Size </span> <Add />
              </button>
            </div>
          </div>

          <div className={styles.colors}>
            <div>
              <span>Colors</span>
            </div>
            <div>
              <Input placeholder="size" width="60%" />
              <Input placeholder="size" width="100px" type="color" />
              <button className="btn btn-primary">
                <span>Add Color </span> <Add />
              </button>
            </div>
          </div>

          <TextArea
            label="Description"
            placeholder="Write product description here........."
          />
        </div>

        <div className="right">
          <div className={styles.history}>
            <div>
              <span>Status</span> <span>Published</span>
            </div>
            <div>
              <span>Ratings</span> <span>4</span>
            </div>
            <div>
              <span>Total Reviews</span>
              <span>
                <a href="#reviews"> 121 reviews </a>
              </span>
            </div>

            <div>
              <span>Created By</span> <span>Md Alif</span>
            </div>
          </div>

          <div className={styles.image}>
            <img
              src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
              alt=""
            />
          </div>

          <div className={styles.gallery}>
            <div>
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
