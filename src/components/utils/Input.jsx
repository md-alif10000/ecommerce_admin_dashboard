import { StylesProvider } from "@material-ui/styles";
import React from "react";
import "./input.css";

export const Input = ({ onChange, placeholder, value, type, label, width }) => {
  return (
    <div className="wrapper"   style={{ width: width ? width : "100%" }}>
      <label htmlFor="">{label}</label>
      <input
      className="input"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
       
      />
    </div>
  );
};

export const Select = ({width,onChange,label}) => {
  return (
    <div className="wrapper"  style={{ width: width ? width : "100%" }}>
      <label htmlFor="">{label}</label>
      <select name="" id="" className="input" >
        <option value="">Mens Fashion</option>
        <option value="">Mens Fashion</option>
        <option value="">Mens Fashion</option>
        <option value="">Mens Fashion</option>
        <option value="">Mens Fashion</option>
        <option value="">Mens Fashion</option>
        <option value="">Mens Fashion</option>
      </select>
    </div>
  );
};



 export const TextArea = ({label,placeholder,onChange}) => {
    return (
        <div  className="wrapper" >
            <label htmlFor="">{label}</label>

            <textarea name="" id="" onChange={onChange} placeholder={placeholder} ></textarea>
            
        </div>
    )
}

