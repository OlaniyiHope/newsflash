import { React, useState } from "react";
import "./meme.css";
import memedata from "../../memedata";
const MemeGen = () => {
  const [memeImage, setmemeImage] = useState();

  const getMemeImage = async () => {
    const memesArray = memedata.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setmemeImage(memesArray[randomNumber].url);
  };
  const nums = [1, 2, 3, 5, 5];
  return (
    <>
      {nums && nums.map((item) => <p>{item * item}</p>)}
      <div className="meme">
        <h1>MEMES GENERATOR</h1>
        <h4>Create your own memes here</h4>
      </div>
      <main>
        <form className="form">
          <input type="text" placeholder="Top Text" className="form-input" />
          <input type="text" placeholder="Bottom Text" className="form-input" />
          <input type="text" placeholder="Bottom Text" className="form-input" />

          <button className="form-button" onClick={getMemeImage}>
            get a new meme image
          </button>
          <img src={memeImage} />
        </form>
      </main>
    </>
  );
};

export default MemeGen;
