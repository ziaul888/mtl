import React from "react";
import "../asset/scss/cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const carts = useSelector((state) => state.carts.cartItem);

  return (
    <div className="cart-item">
      {carts?.map((item) => {
        return (
          <>
            <div className="orderedProducts d-flex align-items-center">
              <div className="orderedProducts_name">
                <span>{item.name}</span>
                <div className="subText">
                  <span>{item.price}</span>
                </div>
              </div>
              <div className="orderedProducts_img">
                <img
                  src={item.image}
                  className="img-fluid"
                  alt="Diploma Instant Full Cream Milk Powder"
                />
              </div>
              <div className="orderedProducts_quantity">
                <div
                  className="caret caret-up"
                  title="Add one more to bag"
                  // onClick={() => incrementItem(id)}
                ></div>
                <div className="orderedProducts_quantity_count">1</div>
                <div
                  className="caret caret-down"
                  title="Remove one from bag"
                  // onClick={() => decrementItem(id)}
                ></div>
              </div>

              <div className="orderedProducts_amount d-flex align-items-center justify-content-center flex-column">
                <div className="orderedProducts_amount_discount">
                  <span>৳{item.price}</span>
                </div>
                {/* <div className="orderedProducts_amount_total">
              <span>৳{price} </span> 
            </div> */}
              </div>

              <div className="orderedProducts_remove ml-auto">
                <i className="far fa-trash-alt">Delete</i>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
