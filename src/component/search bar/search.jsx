import React from "react";
import "./search.css";

export const SarchBox = ({placeholder,onchange}) => (
  <input 
  className="search"
    type="search"
    placeholder = {placeholder}
    onChange={onchange}
  />
);
