"use client";
import React, { useState, useEffect } from "react";

const ProductImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(2);

  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerPage(4);
      } else if (window.innerWidth >= 640) {
        setImagesPerPage(3);
      } else {
        setImagesPerPage(2);
      }
    };

    updateImagesPerPage();

    window.addEventListener("resize", updateImagesPerPage);
    return () => {
      window.removeEventListener("resize", updateImagesPerPage);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + imagesPerPage < images.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex mt-8">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="w-full overflow-hidden pl-4">
        <div
          className="flex transition-transform duration-300 gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerPage)}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="h-auto max-h-[100px] w-[100px] object-contain"
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex + imagesPerPage >= images.length}
        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductImageSlider;
