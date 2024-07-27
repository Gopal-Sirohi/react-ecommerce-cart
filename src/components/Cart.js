import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BsFillTrash3Fill} from "react-icons/bs";
import {FaMinus, FaPlus, FaPhone, FaArrowLeft} from "react-icons/fa6";
const Cart = ({cart, setCart}) => {
 const [cartitems, setCartitems] = useState([]);
 useEffect(() => {
  setCartitems(cart);
 }, [cart]);

 return (
  <>
   <div className="container my-3">
    <div className="wrapper wrapper-content animated fadeInRight">
     <div className="row g-0 pt-4">
      {cart.length === 0 ? (
       <>
        <div className="heading_s3">
         <h3>Shopping Cart</h3>
        </div>
        <div className="cartitems-empty">
         <h3>Your Cart is Empty</h3>
         <Link to={"/"} className="btn btn-danger w-25 mt-3">
          <FaArrowLeft /> Continue Shopping
         </Link>
        </div>
       </>
      ) : (
       <div className="col-lg-9 card-bg">
        <div className="heading_s3">
         <h3>Shopping Cart</h3>
         {cart.length != 0 && (
          <button onClick={() => setCart("")} className="btn btn-link remove-all-items">
           <BsFillTrash3Fill /> Remove all items
          </button>
         )}
        </div>
        <div className="table-responsive shop_cart_table">
         <table className="table">
          <thead>
           <tr>
            <th className="" colSpan={2}>
             Product
            </th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
            <th className="product-remove">Remove</th>
           </tr>
          </thead>
          <tbody>
           {cartitems.map((product, productIndex) => {
            return (
             <tr key={productIndex}>
              <td className="product-thumbnail">
               <Link to={`/productdetail/${product.id}`}>
                <img src={product.imgSrc} className="card-img-top-scart" alt="..." />
               </Link>
              </td>
              <td className="product-name" data-title="Product">
               <Link to={`/productdetail/${product.id}`}>{product.title}</Link>
              </td>
              <td className="product-price" data-title="Price">
               <Link to={`/productdetail/${product.id}`}>
                <span className="a-price-symbol">₹</span> {product.price}
               </Link>
              </td>
              <td className="product-quantity" data-title="Quantity">
               <div className="quantity">
                <button
                 className="minus"
                 onClick={() => {
                  const _cartitems = cartitems.map((item, index) => {
                   return productIndex === index ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0} : item;
                  });
                  setCartitems(_cartitems);
                 }}>
                 <FaMinus />
                </button>
                <button className="qty">{product.quantity}</button>
                <button
                 className="plus"
                 onClick={() => {
                  const _cartitems = cartitems.map((item, index) => {
                   return productIndex === index ? {...item, quantity: item.quantity + 1} : item;
                  });
                  setCartitems(_cartitems);
                 }}>
                 <FaPlus />
                </button>
               </div>
              </td>
              <td className="product-subtotal" data-title="Total">
               <span className="a-price-symbol">₹</span> {product.price * product.quantity}
              </td>
              <td className="product-remove" data-title="Remove">
               <span className="btn-delete">
                <BsFillTrash3Fill />
               </span>
              </td>
             </tr>
            );
           })}
          </tbody>
          <tfoot>
           <tr>
            <td colSpan={3} className="text-left-tb">
             {" "}
             <Link to={"/"} className="btn btn-danger text-center">
              <FaArrowLeft /> Continue Shopping
             </Link>
            </td>
            <td colSpan={3} className="text-right-tb">
             <button className="btn btn-danger text-center w-50">Proceed to Buy</button>
            </td>
           </tr>
          </tfoot>
         </table>
        </div>
       </div>
      )}
      {cart.length !== 0 && (
       <div className="col-lg-3">
        <div className="s-box">
         <div className="heading_s3">
          <h6>Cart Summary</h6>
          <h6 className="me-2">({cartitems.length}) items</h6>
         </div>
         <div className="s-box-content">
          <span>Subtotal</span>
          <h6>
           <span className="a-price-symbol">₹</span> {cartitems.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
          </h6>
         </div>
         <div className="s-box-content">
          <span>Shipping</span>
          <h6>
           <span className="a-price-symbol">₹</span> 50
          </h6>
         </div>
         <div className="s-box-content border-top border-bottom">
          <span className="fs-6">Total</span>
          <h6>
           <span className="a-price-symbol">₹</span> {cartitems.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
          </h6>
         </div>
         <div className="s-box-content">
          <button className="btn btn-danger text-center w-100 mt-3">Proceed to Buy</button>
         </div>
        </div>
        <div className="s-box">
         <div className="heading_s3">
          <h6>Support</h6>
         </div>
         <div className="s-box-content">
          <h5>
           <FaPhone /> +43 100 783 001
          </h5>
          <span className="small"> Please contact with us if you have any questions. We are avalible 24h. </span>
         </div>
        </div>
       </div>
      )}
     </div>
    </div>
   </div>
  </>
 );
};

export default Cart;
