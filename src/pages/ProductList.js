import styled from "styled-components";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import useFetch from "../hook/useFetch";
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <div>
      <Products cat={cat} />
    </div>
  );
};

export default ProductList;
