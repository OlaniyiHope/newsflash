import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../../hook/useFetch";
const Card = ({ item }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={item.photos} alt="" />
        </div>
        <div className="text">
          <span className="category">{item.categories}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          <Link to={`/singlepage/${item?._id}`}>
            <h1 className="titleBg">{item.title}</h1>
          </Link>
          <div className="author flex">
            <span>by {item.authorName}</span>
            <span>{item.datePosted}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
