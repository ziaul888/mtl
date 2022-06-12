import React, { useState, useEffect } from "react";
import axiosInstance from "../helper/axios";
import { useParams } from "react-router-dom";
import "../asset/scss/singleproduct.scss";
import { addToCart } from "../feature/cartSilce";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = () => {
    axiosInstance.get(`products/${id}`).then(({ data }) => {
      setProduct(data);
    });
  };

  useEffect(() => {
    productDetails();
  }, []);
  return (
    <div className="single mr-auto ml-auto">
      <div className="row py-2 py-md-4">
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center m-auto product--details__img">
          <img src={product.image} alt="" className="img-fluid" />
        </div>

        <div className="col-12 col-md-7 product--details__desc">
          <div className="px-3 pl-md-0">
            <h2>{product.name}</h2>
            <span className="product--details__desc_quantity"></span>
            <span className="product--details__desc_quantity">
              <span className="product_price_discount">৳{product.price} </span>
            </span>

            <div className="product__btns_cart">
              <button
                className="btn w-40"
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                <span className="product__btns_cart_text">
                  <i className="fas fa-shopping-basket mr-1"></i>
                  Add to cart
                </span>
              </button>
            </div>

            <div
              className="product--details__desc_text mt-2 mt-md-4"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
