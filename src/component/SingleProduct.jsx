import React,{useState} from "react";
import axiosInstance from "../helper/axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product,setProduct]=useState({})
  const { id } = useParams();
    
  const productDetails=()=>{
    axiosInstance.get(`products/${id}`).then((res)=>{
      setProduct(res)
    })

    }
  }

  return (
    <div>
      <div className="row py-2 py-md-4">
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center m-auto product--details__img">
          <img src={""} alt="" className="img-fluid" />
        </div>

        <div className="col-12 col-md-7 product--details__desc">
          <div className="px-3 pl-md-0">
            <h2></h2>
            <span className="product--details__desc_quantity"></span>
            <span className="product--details__desc_quantity">
              <span className="product_price_discount">৳ </span>
            </span>

            <div className="product__btns_cart px-3">
              <button className="btn w-100">
                <span className="product__btns_cart_text">
                  <i className="fas fa-shopping-basket mr-1"></i>
                  add
                </span>
              </button>
            </div>

            {/* <div className="product--details__desc_text mt-2 mt-md-4">
                {user && user.name ? "Seller: " + user.name : ""}
              </div> */}
            <div
              className="product--details__desc_text mt-2 mt-md-4"
              // dangerouslySetInnerHTML={{
              //   __html: description,
              // }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
