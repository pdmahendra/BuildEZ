"use client";

import { useEffect, useState } from "react";

const img1 = ("/image.png");
const img2 = ("/image1.png");
const img3 = ("/image2.png");
const img4 = ("/image3.png");
const img5 = ("/image4.png");
const img6 = ("/image5.png");

const images = [img1, img2, img3, img4, img5, img6];
const speed = 3500;
let timerId;
const ImageSlider = () => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      if (pos >= images.length - 1) setPos(0);
      else setPos((pos) => (pos += 1));
    }, [speed]);

    return () => clearInterval(timerId);
  }, [pos]);

  return (
    <div className="image-slider">
      <img src={images[pos]} alt="image" loading="lazy" />
    </div>
  );
};

export default ImageSlider;
