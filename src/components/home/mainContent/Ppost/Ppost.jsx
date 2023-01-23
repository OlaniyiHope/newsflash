import React from "react";
import "./ppost.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../common/heading/Heading";
import useFetch from "../../../../hook/useFetch";
import { Link } from "react-router-dom";

const Ppost = () => {
  const { data, loading, error } = useFetch(`/properties?categories=memes`);

  return (
    <>
      <section className="popular">
        <Heading title="Trending Music" />

        <div className="content">
          {data &&
            data.map((item) => (
              <div key={item?._id}>
                <div className="items">
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <Link to={`/singlepage/${item?._id}`}>
                          <img src={item?.photos} alt="" />
                        </Link>
                      </div>
                      <div class="category category1">
                        <span>{item?.categories}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">{item?.title}...</h1>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{item?.datePosted}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Ppost;
