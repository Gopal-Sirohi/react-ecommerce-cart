import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ProductList from "./ProductList";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({items, addToCart}) => {
 const {id} = useParams();
 const [product, setProduct] = useState({});
 const [relatedProducts, setRelatedProducts] = useState([]);

 useEffect(() => {
  const filterProduct = items.filter((prodcut) => prodcut.id == id);
  setProduct(filterProduct[0]);

  const relatedProducts = items.filter((productCat) => productCat.category === product.category);

  setRelatedProducts(relatedProducts);
 }, [id, product.category]);

 return (
  <>
   <div className="container mt-5">
    <div className="row justify-content-md-center  g-0">
     <div className="col-md-10 card" style={{border: "none"}}>
      <div className="row g-0">
       <div className="col-md-4">
        <div className="card-image">
         <img src={product.imgSrc} className="card-img-top" alt="..." />
        </div>
       </div>
       <div className="col-md-8">
        <>
         <div className="card-body mt-0 pt-0">
          <h5 className="card-title">{product.title}</h5>
          <h4 className="card-price">
           <span className="a-price-symbol">₹</span> {product.price}
          </h4>
          <p className="card-text pb-0 mb-0">{product.description}</p>
          {product.rating ? <ReactStars classNames="mb-2" count={5} name="rating" value={Number([product.rating])} size={24} edit={false} isHalf={true} position="center" activeColor="#ffd700" /> : ""}

          <button onClick={() => addToCart(product)} className="btn btn-danger  text-center w-25">
           Add to cart
          </button>
         </div>
        </>
       </div>
      </div>
     </div>
    </div>
   </div>
   <hr />
   <ProductList pathname={"projectdetails"} items={relatedProducts} addToCart={addToCart} />
  </>
 );
};

export default ProductDetail;
