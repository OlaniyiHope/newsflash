import React from "react";
import useFetch from "../../../../hook/useFetch";
import { Link } from "react-router-dom";
import Heading from "../../../common/heading/Heading";

const Category = ({ handleCategory }) => {
  const { data, loading, error } = useFetch("/categories");
  return (
    <section className="catgorys">
      <Heading title="Catgeorys" />

      {data &&
        data.map((item) => (
          <Link to={`/cat/${item.categories}`}>
            <div className="category category1">
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default Category;
