import React from "react";
import { ArrowRight } from "lucide-react";
import Cards from "./components/HomeComponents/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BrandsSlider from "./components/HomeComponents/BrandSlider";
import Services from "./components/HomeComponents/Services";
import Works from "./components/HomeComponents/Works";

const Home = () => {
  const cardsData = [
    {
      id: 1,
      img: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffluent3.5d3a5022.webp&w=3840&q=75",
      customerComment:
        "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
      codeDaleComment: "Honored to drive lasting impact.",
      customerName: "Sujith Reddy Gopu",
      customerImg:
        "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsujith-reddy-fluentpro.87a6ace5.jpeg&w=640&q=75",
      customerCompany: "Founder of Fluent Pro",
    },
    {
      id: 2,
      img: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsolution.b5c6a316.webp&w=3840&q=75",
      customerComment:
        "CodeDale met our most ambitious requirements. Their team became a trusted extension, not just a vendor.",
      codeDaleComment: "Proud to be your trusted partner.",
      customerName: "Abhishek",
      customerImg:
        "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabhishek-conquer.f0f4dc65.jpeg&w=640&q=75",
      customerCompany: "Senior Business Analyst, Conquer",
    },
    {
      id: 3,
      img: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FATH.e8464160.webp&w=3840&q=75",
      customerComment:
        "We imagined the extraordinary—a 3D immersive experience. CodeDale brought it to life with precision and creativity.",
      codeDaleComment: "Pushing boundaries is what we do",
      customerName: "Nino Gorbach",
      customerImg:
        "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTJB.ec8f17e1.jpg&w=828&q=75",
      customerCompany: "COO, ATH",
    },
    {
      id: 4,
      img: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTFS.b4fee99a.webp&w=3840&q=75",
      customerComment:
        "We thought it was impossible. CodeDale made it possible and changed how we see tech partners.",
      codeDaleComment: "Grateful to set new standards together.",
      customerName: "Narasimha Reddy",
      customerImg:
        "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnarasimha-reddy-tfs.c75b6da4.jpeg&w=640&q=75",
      customerCompany: "CEO, TFS",
    },
  ];
  const slides = [...cardsData, ...cardsData];
  return (
    <div className="bg-gray-100 flex flex-col items-center px-4">
      {/* main welcome section section */}
      <div className="flex flex-col items-center justify-center mt-10 text-center gap-6 max-w-4xl">
        <div className="flex flex-row cursor-pointer justify-center items-center gap-2 w-fit p-1.5 rounded-full bg-white shadow-sm hover:shadow-md transition-all">
          <span className="h-2 w-2 animate-ping rounded-full bg-green-500 opacity-85"></span>
          <button className="text-sm cursor-pointer text-gray-800 font-medium">
            Only 2 open slots available
          </button>
          <ArrowRight
            size={20}
            className="text-gray-800 p-0.5 rounded-full bg-gray-100"
          />
        </div>

        <div className="flex flex-row gap-2 md:gap-4 mb-2 items-center flex-wrap justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold">
            World-class Tech Partner
          </h1>
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

        <h1 className="text-4xl md:text-5xl font-semibold flex items-center justify-center gap-3 flex-wrap">
          Engineering Your Digital
          <img
            className="h-9 rounded-lg rotate-12 bg-white p-2 shadow-sm"
            src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthunder.9bc4f0d2.svg&w=48&q=75"
            alt=""
          />
          Success
        </h1>

        <p className="text-center text-md text-gray-700 max-w-lg leading-relaxed">
          Trusted by startups and enterprises to design, build, and scale
          products that perform globally.
        </p>
        {/* CTA */}
        <button className="flex justify-center items-center rounded-full bg-black hover:bg-gray-900 text-white px-5 py-3 gap-2 cursor-pointer shadow-md transition-all active:scale-95 mt-4">
          <img
            className="h-6 bg-white rounded-full p-1"
            src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCodeDale-01.bdbe0272.webp&w=1920&q=75"
            alt="codedale"
          />
          +
          <span className="text-[10px] rounded-full bg-blue-500 text-white px-1 py-1">
            You
          </span>
          <span className="text-[13px] font-medium">Book a 30-Min Call</span>
        </button>

        {/* Reviews */}
        <div className="flex flex-row gap-6 md:gap-10 items-center mt-5">
          <div className="flex flex-row justify-center items-center gap-[-0.5rem]">
            <img
              className="h-8 rounded-2xl -ml-1"
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
            <p className="text-black py-1.5 px-1 bg-white border border-gray-200 rounded-full text-xs -ml-2 shadow-sm">
              +30
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-800 font-semibold">★★★★★</p>
            <p className="text-xs text-gray-600">From 30+ reviews</p>
          </div>
        </div>
      </div>

      {/* customer cards */}
      <div className="mt-20 w-full max-w-[1800px] mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          loopAdditionalSlides={cardsData.length}
          slidesPerGroup={1}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          speed={900}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.05, spaceBetween: 12 },
            640: { slidesPerView: 1.4, spaceBetween: 16 },
            768: { slidesPerView: 1.9, spaceBetween: 18 },
            1024: { slidesPerView: 2.6, spaceBetween: 20 },
            1280: { slidesPerView: 3.2, spaceBetween: 22 }, // EXACT layout like screenshot
          }}
        >
          {slides.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Cards data={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* customer images */}
      <div className="mt-10 overflow-hidden">
        <BrandsSlider />
      </div>

          
      <div className="flex mt-10 flex-col items-center justify-center">
        <div>
          <img
            className="h-10 w-9 rounded-4xl"
            src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvasant.b1a95dae.webp&w=256&q=75"
            alt=""
          />
        </div>
        <div>
          <p className="font-semibold text-center text-gray-700">
            It's not the lines we type,
          </p>
          <p className="font-semibold text-center text-gray-700">
            it's the solutions they unlock.
          </p>
          <p className="text-sm text-center text-gray-500">
            - CTO, Vasanta Kumar
          </p>
        </div>
      </div>

      {/* why choose codedale */}
      <div className="flex flex-col mt-16 items-center justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-4xl text-center">Why Choose CodeDale?</h1>
          <p className="  leading-[1.2] max-w-xl text-center ">Discover the advantages of partnering with a tech team that’s built for results and client success:</p>
        </div>

        <div className="grid mt-16 grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 max-w-4xl gap-10 gap-x-20  ">
          <div className="flex flex-col gap-2 items-center text-center">
             <h1 className="font-medium text-xl">Impact-Driven Solutions</h1>
             <p className="text-gray-900  text-base max-w-[300px]">Every product we build is custom-crafted to create real business impact.</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-medium text-xl">Fast & Reliable Delivery</h1>
            <p className="text-gray-900 text-center  max-w-[300px]">Get high-quality results in days or weeks, not months.</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-medium text-xl">Transparent & Fair Pricing</h1>
            <p className="text-gray-900 text-center  max-w-[300px]">Honest, customized pricing with no hidden fees or surprises.</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-medium text-xl">Expert Problem Solvers</h1>
            <p className="text-gray-900 text-center  max-w-[300px]">We tackle technical and creative challenges with innovative solutions.</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-medium text-xl">Seamless Collaboration</h1>
            <p className="text-gray-900 text-center  max-w-[300px]">Clear communication and feedback at every stage of the project.</p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-medium text-xl">Direct Access to Top Talent</h1>
            <p className="text-gray-900 text-center max-w-[300px]">Work directly with senior experts—no long-term hiring needed.</p>
          </div>
        </div>
      </div>

      {/* reserve your slot */}
      <div className="flex mt-16">
        <p className="border px-6 p-1 py-3 rounded-4xl bg-black text-white">Reserve Your Slot</p>
      </div>


      <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center py-16 gap-2.5">
        <h1 className="text-[32px] sm:text-4xl tracking-tight font-semibold undefined">Solutions Tailored for Your Growth</h1>
        <p className="text-base whitespace-pre-wrap leading-[1.2] undefined">Discover our full-service offerings — crafted to deliver reliability, scalability, and results</p>
      </div>

      {/* service images */}
      <Services/>
      <div className=" w-full h-full flex md:hidden items-center flex-wrap justify-center gap-3 py-10 px-2 dashed-y-custom">
       {
        ["Web Development","App Development","AI Applications","Data Driven Products","Blockchain Technology","Cloud & DevOps","UI/UX","Logo Designing","Rapid Prototyping and MVPs","Digital Marketing & SEO","Brand Strategy","Visual Identity","...and More"].
        map((data,index)=>(
           <span key={index} className="py-2 px-5 bg-white text-[15px] text-black rounded-full">
          {data}
        </span>
        ))
        
       }
      </div>

      {/* our work */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center py-16 gap-2.5">
        <h1 className="text-[32px] sm:text-4xl tracking-tight font-semibold leading-[1.2] undefined">Our Works</h1>
        <p className="text-base whitespace-pre-wrap leading-[1.2] undefined">Still confused about us? Our Work Speaks for Itself</p>
      </div>
       <Works/>
    </div>
  );
};

export default Home;
