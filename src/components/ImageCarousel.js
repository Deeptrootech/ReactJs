import React, { useState } from "react";
import img_lights_wide from "../images/img_lights_wide.jpg";
import img_mountains_wide from "../images/img_mountains_wide.jpg";
import img_nature_wide from "../images/img_nature_wide.jpg";
import img_snow_wide from "../images/img_snow_wide.jpg";

import carouselcss from "../Carousel.css";

const ImageCarousel = () => {
  const [imgs, setImgs] = useState([
    img_lights_wide,
    img_mountains_wide,
    img_nature_wide,
    img_snow_wide,
  ]);
  const counter = 0;
  const current = imgs[counter];
  const [currentimg, setCurrentImg] = useState(current);

  const displayRight = () => {
    setCurrentImg(imgs[Math.abs(imgs.indexOf(currentimg) + 1) % imgs.length]);
  };
  const displayLeft = () => {
    setCurrentImg(
      imgs[
      ((imgs.indexOf(currentimg) === 0
        ? imgs.length
        : imgs.indexOf(currentimg)) -
        1) %
      imgs.length
      ]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_images = [...imgs, e.target.newdata.value];
    e.target.newdata.value
      ? setImgs(new_images)
      : console.log("Enter any Value");
    e.target.reset();
  };

  return (
    <div>
      <div className='layout'>
        <button className='carousel-controls prev' onClick={displayLeft}>
          &lt;
        </button>
        <img className='slides' src={currentimg} alt='Some Error' />
        <button className='carousel-controls next' onClick={displayRight}>
          &gt;
        </button>
      </div>
      <div className="submitform">
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>ImageUrl</label>
          <input type='text' name='newdata' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ImageCarousel;
