import React, { useState } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";
import useFetch from "../../../hook/useFetch";
const Hero = () => {
  const { data, loading, error } = useFetch("/properties");

  return (
    <>
      <section className="hero">
        <div className="container">
          {data.slice(0, 4).map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
