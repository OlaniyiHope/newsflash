import React, { useEffect, useState } from "react";
import { hero } from "../../dummyData";
import Side from "../home/sideContent/side/Side";
import "../home/mainContent/homes/style.css";
import "./singlepage.css";
import "../home/sideContent/side/side.css";
import SinglePageSlider from "./slider/SinglePageSlider";
import useFetch from "../../hook/useFetch";
import { useLocation, useNavigate, Link } from "react-router-dom";
const SinglePage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/properties/find/${id}`);

  return (
    <>
      <main>
        <SinglePageSlider />
        <div className="container">
          <section className="mainContent details">
            <h1 className="title">{data.title}</h1>

            <div className="author">
              <span style={{ marginRight: 5 }}>Posted by</span>
              <label style={{ marginRight: 5 }}> {data.authorName} </label>On,
              <label style={{ marginRight: 5 }}>{data.datePosted}</label> under,
              <label style={{ marginRight: 5 }}>{data.categories}</label>
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
            <div className="desctop">
              <>
                <p>{data.desc1}</p>
                <p>{data.desc2}</p>
              </>
            </div>

            <div className="descbot">
              <>
                <h1>{data.detail1}</h1>
                <br></br>
                <p>{data.detail2}</p>
                <br></br>
                <p>{data.detail3}</p>
                <br></br>
                <p>{data.detail4}</p>
                <br></br>
              </>
            </div>
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
      ;
    </>
  );
};

export default SinglePage;
