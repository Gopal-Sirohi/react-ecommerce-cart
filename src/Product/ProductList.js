import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";

const ProductList = ({items, pathname, addToCart}) => {

 return (
  <>
   <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
   <div className="container my-4">
    <div className="row justify-content-center pt-4">
      <div className="heading_s3">
       <h3>{pathname==="projectdetails" ? 'Related Products' : 'Exclusive Products'}</h3>
      </div>
    </div>
    <div className="row">
     {items.map((product, index) => {
      return (
       <div className="col-lg-3 my-3" key={index}>
        <div className="card cart-radius">
         <div className="card-img text-center justify-content-center">
          <Link to={`/productdetail/${product.id}`}>
           <img src={product.imgSrc} className="card-img-top" alt="..." />
          </Link>
         </div>
         <div className="card-body">
          <Link to={`/productdetail/${product.id}`}>
           <h4 className="card-price">
            <span className="a-price-symbol">₹</span> {product.price}
           </h4>
          </Link>
          <Link to={`/productdetail/${product.id}`}>
           <h6 className="card-title text-break mb-2">
            {product.title.substring(0, 45)}
            {product.title.length >= 50 ? "..." : ""}
           </h6>
          </Link>
          <ReactStars classNames="mb-2" count={5}  value={Number([product.rating])} size={24} edit={false} isHalf={true} position="center" activeColor="#ffd700" />
          <button onClick={() => addToCart(product)} className="btn btn-danger text-center w-75">
           Add to cart
          </button>
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
};

export default ProductList;
