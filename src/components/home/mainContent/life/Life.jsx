import React from "react";
import "./life.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../common/heading/Heading";
import useFetch from "../../../../hook/useFetch";
import { Link } from "react-router-dom";

const Life = () => {
  const { data, loading, error } = useFetch(`/properties?categories=music`);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="popular">
        <Heading title="Hottest Post" />

        <div className="content">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Life;
