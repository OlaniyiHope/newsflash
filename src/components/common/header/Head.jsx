import React from "react";
import "./header.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container">
          <div className="logo" style={{ margin: "auto" }}>
            <img src="../images/flash3.png" alt="" />
            <h1> NEWSFLASH</h1>
          </div>
          <div className="ad"></div>
        </div>
      </section>
    </>
  );
};

export default Head;
