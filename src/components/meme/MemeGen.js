import { React, useState } from "react";
import "./meme.css";
import memedata from "../../memedata";
const MemeGen = () => {
  return (
    <>
      <div className="meme">
        <h1>MEMES GENERATOR</h1>
        <h4>Create your own memes here</h4>
      </div>
      <main>
        <form className="form">
          <input type="text" placeholder="Top Text" className="form-input" />
          <input type="text" placeholder="Bottom Text" className="form-input" />
          <input type="text" placeholder="Bottom Text" className="form-input" />

          <button className="form-button">get a new meme image</button>
        </form>
      </main>
    </>
  );
};

export default MemeGen;
