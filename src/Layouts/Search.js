import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const Search = () => {
 const navigate = useNavigate();

 const [searchTerm, setSearchTerm] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  navigate(`/search/${searchTerm}`);
  setSearchTerm("")
 };
 return (
  <>
   <form onSubmit={handleSubmit} className="nav-searchbar">
    <div className="input-group">
     <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="form-control input-focus" placeholder="Search for Products, Brands and More" required />
     <label className="visually-hidden" htmlFor="search"></label>
     <button className="btn btn-danger text-white " type="submit" aria-label="Search">
      <FaSearch />
     </button>
    </div>
   </form>
  </>
 );
};

export default Search;
