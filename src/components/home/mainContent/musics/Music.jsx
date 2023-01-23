import React from "react";
import "./music.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { popular } from "../../../../dummyData";
import useFetch from "../../../../hook/useFetch";
const Music = () => {
  const { data, loading, error } = useFetch(`/properties?categories=sport`);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <>
      <section className="music">
        <Heading title="Music News" />
        <div className="content">
          <Slider {...settings}>
            {data &&
              data.map((item) => (
                <div className="items">
                  <div className="box shadow flexSB">
                    <div className="images">
                      <div className="img">
                        <img src={item.photos} alt="" />
                      </div>
                      <div class="category category1">
                        <span>{item.categories}</span>
                      </div>
                    </div>
                    <div className="text">
                      <h1 className="title">{item.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{item.datePosted}</label>
                      </div>
                      <p className="desc">{item.desc1.slice(0, 250)}...</p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Music;
