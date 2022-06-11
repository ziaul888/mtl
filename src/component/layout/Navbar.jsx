import React from "react";
import "../../asset/scss/navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="header--wrapper position-fixed w-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="logo-wrap d-flex align-items-center">
              <a href="index.html" className="khetkhamar_logo">
                {/* <img src={logo} alt="" className="img-fluid" /> */}
                logo
              </a>
            </div>

            <div className="search--wrap d-none d-md-block d-sm-none ">
              <div className="search--box d-flex">
                <input
                  className="searchBox"
                  type="text"
                  placeholder="Search "
                />
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
            <div className="nav-right text-center d-flex">
              <div className="cart-icon d-md-none d-lg-block">
                <span className="mobile-shopping-wrap__cart_item d-flex align-items-center justify-content-center"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="25"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
              <div className="user d-md-none d-lg-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-circle "
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <span className="user-text">Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
