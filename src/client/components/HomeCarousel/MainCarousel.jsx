// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import mainBanner1 from '../../assets/images/banners/main-banner-1.png';

const MainCarousel = () => {
  const carouselRef = useRef(null);

  const items = [
    <img key="1" src={mainBanner1} className="object-cover w-full h-full" alt="Banner 1" />,
    <img key="2" src={mainBanner1} className="object-cover w-full h-full" alt="Banner 2" />,
    <img key="3" src={mainBanner1} className="object-cover w-full h-full" alt="Banner 3" />,
  ];

  return (
    <div className="relative max-w-screen-lg mx-auto p-4">
      <AliceCarousel
        ref={carouselRef}
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={5000}
        infinite
        responsive={{ 0: { items: 1 } }}
        controlsStrategy="responsive"
        disableButtonsControls
        disableDotsControls
      />

      {/* Custom Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 hover:bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        onClick={() => carouselRef.current.slidePrev()}
        aria-label="Previous Slide"
      >
        ❮
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 hover:bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        onClick={() => carouselRef.current.slideNext()}
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default MainCarousel;
