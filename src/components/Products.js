import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import "./Product.css";
import useFetch from "../hook/useFetch";
import Side from "./home/sideContent/side/Side";
const Container = styled.div``;

const Products = ({ cat }) => {
  const { data, loading, error } = useFetch(
    cat
      ? `/properties?categories=${cat}`
      : "https://newsflash.herokuapp.com/api/properties"
  );

  return (
    <>
      <Container>
        <p
          style={{
            fontWeight: 700,
            fontSize: "40px",

            textTransform: "uppercase",
          }}
        >
          {cat}
        </p>
        <div className="all">
          <div className="all1">
            {data && data.map((item) => <Product item={item} key={item.id} />)}
          </div>
          <div className="all2">
            <Side />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Products;
