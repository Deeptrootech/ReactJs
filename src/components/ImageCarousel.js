import React, { useState } from "react";

const ImageCarousel = () => {
  const [imgs, setImgs] = useState([1, 2, 3]);

  const displayRight = () => {};
  const displayLeft = () => {};

  return (
    <div style={{ display: "flex" }}>
    {imgs}
      <button onClick={displayRight}>Left</button>
      {imgs.map((each_img, index) => (
        <p key={index}>{each_img}</p>
      ))}
      {imgs[1]}
      <button onClick={displayLeft}>Right</button>
    </div>
  );
};

export default ImageCarousel;
