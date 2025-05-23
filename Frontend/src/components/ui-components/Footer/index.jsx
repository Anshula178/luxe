import React, { useState } from "react";
import SocialIcons from "src/components/ui-elements/SocialIcons";

const Footer = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <footer className=" mt-0 md:mt-8 font-outfitRegular  border-gray-500 py-10">
      <div className="container mx-auto px-4">
        <div class="lg:flex justify-between mb-[25px] sm:mb-[50px]">
          <div class="lg:w-[470px] ml-0 w-full mb-10 lg:mb-0">
            <div>
              <h3 className="text-[24px] sm:text-[30px] font-outfit font-medium mb-3 leading-[30px]">
                Subscribe to get 10% OFF
              </h3>
              <p className="mb-5 font-outfitRegular text-black">
                Sign up for exclusive offers, updates, and news.
              </p>
              <form className="flex flex-col gap-2 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 sm:py-4 px-2 sm:px-4 bg-gray-100 rounded-full text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-orange-600 absolute right-[10px] top-[4px] sm:top-[8px] flex items-center justify-center rounded-full font-outfitRegular hover:bg-orange-800 transition text-white w-[32px] sm:w-[40px] h-[32px] sm:h-[40px]"
                >
                  <svg
                    class="icon icon-arrow icon--medium w-[24px] h-[24px]"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 3.74121L13.75 9.99121L7.5 16.2412"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div class="flex-1 flex flex-wrap pl-[0px] lg:pl-[100px]">
            <div class="md:w-1/3 w-full mb-6 lg:mb-0">
              <div class="mb-5">
                <h6 class="text-[18px] sm:text-[24px] font-500 text-[#2F2F2F]">Feature</h6>
              </div>
              <div>
                <ul class="flex flex-col space-y-3">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-condition"
                      className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                    >
                      Terms Condition
                    </a>
                  </li>
                  <li>
                    <a
                      href="/all-products"
                      className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                    >
                      Best Products
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="md:w-1/3 lg:flex lg:flex-col w-full mb-6 lg:mb-0">
              <div>
                <div class="mb-5">
                  <h6 class="text-[18px] sm:text-[24px] font-500  text-[#2F2F2F]">
                    General Links
                  </h6>
                </div>
                <div>
                  <ul class="flex flex-col space-y-3">
                    <li>
                      <a
                        href="/blogs"
                        className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/tracking-order"
                        className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                      >
                        Tracking Order
                      </a>
                    </li>
                    <li>
                      <a
                        href="/become-saller"
                        className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                      >
                        Become Saller
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="md:w-1/3 lg:flex lg:flex-col w-full mb-6 lg:mb-0">
              <div>
                <div class="mb-5">
                  <h6 class="text-[18px] sm:text-[24px]  font-500 text-[#2F2F2F]">Helpful</h6>
                </div>
                <div>
                  <ul class="flex flex-col space-y-3">
                    <li>
                      <a
                        href="/flash-sale"
                        className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                      >
                        Flash Sale
                      </a>
                    </li>
                    <li>
                      <a
                        href="/faq"
                        className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-gray-800 hover:text-orange-600 text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-4 sm:mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left Side */}
          <div class="relative font-[sans-serif] w-max">
            <button
              type="button"
              id="dropdownToggle"
              onClick={handleDropdownToggle}
              class="rounded text-[#333] text-sm border-1 outline-none font-outfitRegular"
            >
              United States (USD $)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 fill-[#333] inline ml-3"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
            </button>
            {isDropdownVisible && (
              <ul
                id="dropdownMenu"
                class="absolute block shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
              >
                <li class="mb-2">
                  <input
                    placeholder="Search..."
                    class="px-4 py-2.5 w-full rounded text-[#333] text-sm border-none outline-blue-600 bg-blue-50 focus:bg-transparent"
                  />
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/usa_flag.webp"
                      class="w-6 mr-3"
                      alt="flag"
                    />
                    USA
                  </div>
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/uk_flag.webp"
                      class="w-6 mr-3"
                      alt="flag"
                    />
                    England
                  </div>
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/india_flag.webp"
                      class="w-6 mr-3"
                      alt="flag"
                    />
                    India
                  </div>
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/singapore_flag.webp"
                      class="w-6 mr-3"
                      alt="flag"
                    />
                    Singapore
                  </div>
                </li>
              </ul>
            )}
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 items-center">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
