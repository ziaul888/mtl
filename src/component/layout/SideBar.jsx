import React, { useState } from "react";
import "../../asset/scss/sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar--wrap py-3 px-0  ">
      <ul className="sidebar-menu">
        <li>
          <a href="#">Meat</a>
        </li>
        <li>
          <a href="#">Milk</a>
        </li>
        <li>
          <a href="#">Fish</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
