import React, { useState } from "react";
import "../../asset/scss/sidebar.scss";
import { useDispatch } from "react-redux";
import { filterCategory } from "../../feature/ProductReducer";

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar--wrap py-3 px-0  ">
      <ul className="sidebar-menu">
        <li onClick={() => dispatch(filterCategory("Meat"))}>
          <a href="#">Meat</a>
        </li>
        <li onClick={() => dispatch(filterCategory("Milk"))}>
          <a href="#">Milk</a>
        </li>
        <li onClick={() => dispatch(filterCategory("Fish"))}>
          <a href="#">Fish</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
