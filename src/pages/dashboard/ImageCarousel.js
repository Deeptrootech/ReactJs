import React, { useState } from "react";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";

import carouselcss from "./Carousel.css";

const ImageCarousel = () => {
  const [imgs, setImgs] = useState([
    pic1,
    pic2,
    pic3,
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
    </div>
  );
};

export default ImageCarousel;