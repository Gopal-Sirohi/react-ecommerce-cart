import React from "react";
import {Link} from "react-router-dom";
import storeLogo from "../assets/logo/store-logo.png";
import {BsCart3} from "react-icons/bs";
import Search from "./Search";
const TopHeader = ({cart}) => {
 return (
  <>
     <div className="top-header p-2 border-bottom bg-light">
     <div className="container">
      <div className="row">
       <div className="col-md-3">
        <Link to={"/"}>
         <img alt="logo" src={storeLogo} />
        </Link>
       </div>
       <div className="col-md-7">
        <Search />
       </div>
       <div className="col-md-2 d-flex justify-content-end">
        <div className="position-relative d-inline me-3">
         <Link to={"/cart"} className="btn btn-danger">
          <BsCart3 />
          <div className="position-absolute top-0 start-100 translate-middle badge bg-info rounded-circle mt-2">{cart.length}</div>
         </Link>
        </div>
       </div>
      </div>
     </div>
    </div>
  </>
 );
};

export default TopHeader;
