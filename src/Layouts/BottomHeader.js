import React from "react";
import {items} from "../Data";
import {useLocation} from "react-router-dom";
import {FaArrowRight, FaGreaterThanEqual} from "react-icons/fa";

const BottomHeader = ({setData}) => {
 const location = useLocation();
 const filterByCategory = (category) => {
  const productCat = items.filter((product) => product.category === category);
  setData(productCat);
 };

 const filterByPrice = (price) => {
  const priceItem = items.filter((product) => Number([product.price]) >= price);
  setData(priceItem);
 };
 return (
  <>
   {location.pathname === "/" && (
    <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
     <div className="container">
      <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
       <ul id="main-menu" className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <div className="nav-link">Filter By {<FaArrowRight />}</div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => setData(items)}>
          No Filter
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("tv")}>
          TV
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("mobiles")}>
          Mobile
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("laptops")}>
          Laptops
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("tablets")}>
          Tablets
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("5999")}>
          {<FaGreaterThanEqual />} 5999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("19999")}>
          {<FaGreaterThanEqual />} 19999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("39999")}>
          {<FaGreaterThanEqual />} 39999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("59999")}>
          {<FaGreaterThanEqual />} 59999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("79999")}>
          {<FaGreaterThanEqual />} 79999
         </div>
        </li>
       </ul>
      </div>
     </div>
    </nav>
   )}
  </>
 );
};

export default BottomHeader;
