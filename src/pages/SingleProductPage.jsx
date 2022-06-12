import React from "react";
import Layout from "../component/layout/Layout";
import SingleProduct from "../component/SingleProduct";
import "../asset/scss/main.scss";

const SingleProductPage = () => {
  return (
    <Layout>
      <div className="main--wrapper">
        <div className="container-fluid">
          <SingleProduct />
        </div>
      </div>
    </Layout>
  );
};

export default SingleProductPage;
