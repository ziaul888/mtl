import React from "react";
import Layout from "../component/layout/Layout";
import Product from "../component/Product";
import "../asset/scss/main.scss";

const HomePage = () => {
  return (
    <Layout>
      <div className="main--wrapper">
        <div className="container-fluid">
          <Product />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
