import React, { useRef, useState } from "react";
import "../../asset/scss/navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productSearch } from "../../feature/ProductReducer";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const inputRef = useRef("");
  const cart = useSelector((state) => state.carts.cartItem);
  const navigate = useNavigate();
  // const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(productSearch(inputRef.current.value));
  };

  return (
    <>
      <nav className="navbar top-navbar navbar-expand-md sticky-top">
        <div className="container">
          <a href="#">
            {/* <picture>
                <source media="(min-width: 992px)" srcset="./img/Spl-992x50-992W.svg">
                <source media="(min-width: 320px)" srcset="./img/Spl-992x50-992W.svg">
                <img alt="Spotlight" title="Spotlight" />
            </picture> */}
          </a>
          <div className="nav-item-middle ">
            <div className="search--box d-flex">
              <input
                classNameName="searchBox"
                type="search"
                placeholder="Search "
                ref={inputRef}
                onChange={handleSearch}
              />{" "}
              <button type="submit">
                <svg
                  className="search"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  data-reactid=".b9pytvtuci.4.0.0.0.3.0.2.0"
                >
                  <path
                    d="M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z"
                    data-reactid=".b9pytvtuci.4.0.0.0.3.0.2.0.0"
                  ></path>
                  <path
                    d="M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z"
                    data-reactid=".b9pytvtuci.4.0.0.0.3.0.2.0.1"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="nav-item-right ">
            <ul className="navbar-nav right-nav mx-auto">
              <li
                className="nav-item "
                onClick={() =>
                  reactLocalStorage.get("token")
                    ? navigate("/cart")
                    : navigate("/login")
                }
              >
                <a href="">
                  <i className="fas fa-heart">
                    <FaCartArrowDown />
                  </i>
                  <span className="count">
                    <span>{cart.length}</span>
                  </span>
                </a>
              </li>
              <li className="nav-item ">
                <Link to="/login">
                  <a href="">
                    <i className="fas fa-user-circle">
                      <FaUserCircle />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="nav-item ">
                <a href="">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
