// import React from 'react';

// function HeroSection() {
  //   return (
    //     <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
    //       <img className="w-full h-full object-cover" src="src/components/heroSection/Grey Minimalist Special Offer Banner Landscape.png" alt="N/A" />
    //     </div>
    //   );
    // }
    
    // export default HeroSection;
    
    
    import React, { useState } from 'react';

function HeroSection() {

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay : true
    // };

  const images = [
    'src\\components\\heroSection\\clothing.png',
    'src\\components\\heroSection\\offer.png',
    'src\\components\\heroSection\\homeDeco.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-[500px] relative flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img className="w-full h-full object-cover" src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-0 z-10 p-2 m-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-0 z-10 p-2 m-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
        &#10095;
      </button>
      {/* Dots Navigation */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from "./clothing.png"
// import img2 from "./offer.png"
// import img3 from "./homeDeco.png"

// function HeroSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   const images = [
//     img1,
//     img2,
//     img3
//   ];

//   return (
//     <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
//     <Slider {...settings} className="w-full h-full">
//       {images.map((src, index) => (
//         <div key={index} className="w-full h-full">
//           <img className="w-full h-full object-cover" src={src} alt={`Slide ${index + 1}`} />
//         </div>
//       ))}
//     </Slider>
//   </div>
//   );
// }

// export default HeroSection;
