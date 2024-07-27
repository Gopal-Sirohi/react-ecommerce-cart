import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {items} from "../Data";
import ProductList from "../Product/ProductList";
const SearchItem = ({addToCart}) => {
 const {term} = useParams();
 const [filterData, setFilterData] = useState([]);

 useEffect(() => {
  const filteredData = () => {
   const data = items.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()));
   setFilterData(data);
  };

  filteredData();
 }, [term]);

 return <ProductList items={filterData} addToCart={addToCart}/>;
};

export default SearchItem;
