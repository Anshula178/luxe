import React from "react";
const firstImage = "/assets/images/carousel1.webp";
const secondImage = "/assets/images/card15.jpg";
const thirdImage = "/assets/images/carousel2.webp";

const BentoGrid = () => {
  return (
    <div className="pb-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center font-outfitSemiBold">
          {/* First row */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-[14px] md:text-[24px] lg:text-5xl font-semibold inline-block">
            Embrace  Your
            </span>
            <div className="w-[80px] h-[45px] md:w-40 md:h-20 rounded-full overflow-hidden inline-block">
              <img
                src={firstImage} // Replace with your image URL
                alt="Happy person"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1 cursor-pointer"
              />
            </div>
            <span className="text-[14px] md:text-[24px] lg:text-5xl font-semibold inline-block">
            Elegance
            </span>
          </div>

          {/* Second row */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-[14px] md:text-[24px] lg:text-5xl font-semibold inline-block">
            Shine
            </span>
            <div className="w-[80px] h-[45px] md:w-40 md:h-20 rounded-full overflow-hidden cursor-pointer inline-block">
              <img
                src={secondImage} // Replace with your image URL
                alt="Glow product"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1 cursor-pointer"
              />
            </div>
            <span className="text-[14px] md:text-[24px] lg:text-5xl font-semibold inline-block">
            with Confidence
            </span>
            <div className="w-[80px] h-[45px] md:w-40 md:h-20 rounded-full overflow-hidden cursor-pointer inline-block">
              <img
                src={thirdImage} // Replace with your image URL
                alt="Healthy skin"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
