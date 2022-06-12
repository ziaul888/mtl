import React from "react";
import Layout from "../component/layout/Layout";
import Cart from "../component/Cart";

const CartPage = () => {
  return (
    <>
      <Layout>
        <div className="main--wrapper">
          <div className="container-fluid">
            <Cart />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CartPage;
