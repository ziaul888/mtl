import React, { useEffect, useState } from "react";
import "../asset/scss/product.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../feature/ProductReducer";
import { addToCart } from "../feature/cartReducer";
import { Link } from "react-router-dom";

const Product = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  /// add to cart//

  const addHandler = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div className="product--listing">
        <div className="row product--row">
          {products?.map((item) => {
            return (
              <>
                <div
                  className="col-6 col-md-3 product--items mb-3"
                  key={item.id}
                >
                  <div className="product" key={item.id}>
                    <div className="product__card" key={item.id}>
                      <div className="product_img d-flex align-items-center justify-content-center">
                        <img src={item.image} className="img-fluid" alt="img" />
                      </div>

                      <div className="product_price d-flex align-items-center justify-content-center">
                        <span className="product_price_discount">
                          {item.price}
                        </span>
                      </div>
                      <div className="product_name">
                        <Link to={`product/${item.id}`}>{item.name}</Link>
                      </div>
                      <div className="product__btns">
                        <div className="product__btns_cart px-3">
                          <button
                            className="btn w-100"
                            onClick={() => addHandler(item)}
                          >
                            <span className="product__btns_cart_text">
                              <i className="fas fa-shopping-basket mr-1">
                                Add to Cart
                              </i>
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* <div className="product_overlay d-flex align-items-center justify-content-center">
              <p className="product_overlay_text">Add to Shopping Bag</p>
            </div> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
