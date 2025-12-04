import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4">
      {/* main greeting section */}
      <div className="flex flex-col items-center justify-center mt-10 text-center gap-6 max-w-4xl">

        {/* Badge */}
        <div className="flex flex-row cursor-pointer justify-center items-center gap-2 w-fit p-1.5 rounded-full bg-white shadow-sm hover:shadow-md transition-all">
          <span className="h-2 w-2 animate-ping rounded-full bg-green-500 opacity-85"></span>
          <button className="text-sm cursor-pointer text-gray-800 font-medium">
            Only 2 open slots available
          </button>
          <ArrowRight size={20} className="text-gray-800 p-0.5 rounded-full bg-gray-100" />
        </div>

        {/* Heading Row 1 */}
        <div className="flex flex-row gap-2 md:gap-4 mb-2 items-center flex-wrap justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold">World-class Tech Partner</h1>
          <span className="flex flex-row justify-center items-center gap-1">
            <img
              className="bg-white rounded-lg px-2 py-2 rotate-12 shadow-sm"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcursor.b9d537cd.svg&w=32&q=75"
              alt="cursor"
            />
            <img
              className="bg-white rounded-lg px-2 py-1 h-8 -rotate-20 shadow-sm"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigma-logo.bdabe27a.svg&w=32&q=75"
              alt="figma"
            />
          </span>
        </div>

        {/* Heading Row 2 */}
        <h1 className="text-4xl md:text-5xl font-semibold flex flex-row justify-center items-center gap-3 flex-wrap">
          Engineering Your Digital
          <span>
            <img
              className="h-9 rounded-lg rotate-12 bg-white p-2 shadow-sm"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthunder.9bc4f0d2.svg&w=48&q=75"
              alt="thunder"
            />
          </span>
          Success
        </h1>

        {/* Subtitle */}
        <p className="text-center text-md text-gray-700 max-w-2xl leading-relaxed">
          Trusted by startups and enterprises to design, build, and scale products that perform globally.
        </p>

        {/* CTA */}
        <button className="flex justify-center items-center rounded-full bg-black hover:bg-gray-900 text-white px-5 py-3 gap-2 cursor-pointer shadow-md transition-all active:scale-95 mt-4">
          <img
            className="h-6 bg-white rounded-full p-1"
            src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCodeDale-01.bdbe0272.webp&w=1920&q=75"
            alt="codedale"
          />
          +
          <span className="text-[10px] rounded-full bg-blue-500 text-white px-1 py-1">You</span>
          <span className="text-[13px] font-medium">Book a 30-Min Call</span>
        </button>

        {/* Reviews */}
        <div className="flex flex-row gap-6 md:gap-10 items-center mt-5">
          <div className="flex flex-row justify-center items-center gap-[-0.5rem]">
            <img
              className="h-8 rounded-2xl -ml-0"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabhishek-conquer.f0f4dc65.jpeg&w=640&q=75"
              alt=""
            />
            <img
              className="h-8 rounded-2xl -ml-2"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsujith-reddy-fluentpro.87a6ace5.jpeg&w=640&q=75"
              alt=""
            />
            <img
              className="h-8 rounded-2xl -ml-2"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnarasimha-reddy-tfs.c75b6da4.jpeg&w=640&q=75"
              alt=""
            />
            <p className="text-black py-1.5 px-2 bg-white border border-gray-200 rounded-full text-xs -ml-2 shadow-sm">
              +30
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-800 font-semibold">★★★★★</p>
            <p className="text-xs text-gray-600">From 30+ reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
