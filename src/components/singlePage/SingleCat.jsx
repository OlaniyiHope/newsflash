import React, { useEffect, useState } from "react";
import { hero } from "../../dummyData";
import "../home/mainContent/homes/style.css";
import "../home/sideContent/side/side.css";
import SinglePageSlider from "./slider/SinglePageSlider";
import useFetch from "../../hook/useFetch";
import { useLocation, useNavigate, Link } from "react-router-dom";
const SingleCat = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/properties/find/${categories}`);

  return (
    <>
      <main>
        <SinglePageSlider />
        <div className="container">
          <section className="mainContent details">
            <h1 className="title">{data.categories}</h1>

            <div className="author">
              <span>by</span>
              <img src={data.photos} alt="" />
              <p> {data.city} on</p>
              <label>{data.cheapestPrice}</label>
            </div>

            <div className="social">
              <div className="socBox">
                <i className="fab fa-facebook-f"></i>
                <span>SHARE</span>
              </div>
              <div className="socBox">
                <i className="fab fa-twitter"></i>
                <span>TWITTER</span>
              </div>
              <div className="socBox">
                <i className="fab fa-pinterest"></i>
              </div>
              <div className="socBox">
                <i className="fa fa-envelope"></i>
              </div>
            </div>

            <img src={data.photos} alt="" />
          </section>
          <section className="sideContent"></section>
        </div>
      </main>

      <h1>not found</h1>
    </>
  );
};

export default SingleCat;
