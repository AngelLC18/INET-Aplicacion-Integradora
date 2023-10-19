import React, { useState, useEffect, useRef } from "react";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // arreglo de imágenes que se mostrarán en el carrusel
  const images = [
    "https://cdn-0.generatormix.com/images/cats/japanese-bobtail.jpg",
    "https://cdn-0.generatormix.com/images/cats/javanese.jpg",
    "https://cdn-0.generatormix.com/images/cats/pixie-bob.jpg",
    "https://cdn-0.generatormix.com/images/cats/ragamuffin.jpg",
    "https://cdn-0.generatormix.com/images/cats/sphynx.jpg",
  ];

  const updateIndex = (newIndex) => {
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const carouselWidth = carouselRef.current.offsetWidth;
    const scrollPosition = activeIndex * carouselWidth;
    carouselRef.current.scrollLeft = scrollPosition;
  }, [activeIndex]);

  return (
    <div className="bg-white w-[90%] h-[400px] rounded-lg mx-auto overflow-hidden relative">
      <div
        ref={carouselRef}
        className="h-full flex overflow-x-hidden"
        data-carousel="slide"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-full w-full flex-shrink-0 duration-700 ease-in-out  transition-opacity  ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => updateIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer "
        onClick={() => updateIndex(activeIndex - 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 duration-150 ">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer "
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 duration-150 ">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
