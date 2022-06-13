import React from "react";
import Layout from "../component/layout/Layout";
import Product from "../component/Product";
import "../asset/scss/main.scss";
import SideBar from "../component/layout/SideBar";

const HomePage = () => {
  return (
    <Layout>
      <div className="main--wrapper">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className="main-content p-3 p-md-4">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
