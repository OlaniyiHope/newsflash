import React from "react";
import Slider from "react-slick";
import { popular } from "../../../dummyData";
import "./style.css";
import useFetch from "../../../hook/useFetch";
// same code of popular and change some part
const SinglePageSlider = () => {
  const { data, loading, error } = useFetch("/properties");
  //change
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="singlePopular">
        <div className="content">
          <Slider {...settings}>
            {data &&
              data.map((ok) => (
                <div className="items">
                  <div className="box">
                    <div className="images">
                      <img src={ok.photos} alt="" />
                    </div>
                    <div className="text">
                      <h1 className="title">{ok.title}</h1>
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

export default SinglePageSlider;
