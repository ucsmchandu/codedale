import React from "react";
import { ArrowRight } from "lucide-react";
import Cards from "./components/HomeComponents/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  const slides=[...cardsData,...cardsData];
  return (
    <div className="bg-gray-100 flex flex-col items-center px-4">
      
      <div className="flex flex-col items-center justify-center mt-10 text-center gap-6 max-w-4xl">
        <div className="flex flex-row cursor-pointer justify-center items-center gap-2 w-fit p-1.5 rounded-full bg-white shadow-sm hover:shadow-md transition-all">
          <span className="h-2 w-2 animate-ping rounded-full bg-green-500 opacity-85"></span>
          <button className="text-sm cursor-pointer text-gray-800 font-medium">
            Only 2 open slots available
          </button>
          <ArrowRight size={20} className="text-gray-800 p-0.5 rounded-full bg-gray-100" />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold">
          World-class Tech Partner
        </h1>

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
          {slides.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex justify-center">
                <Cards data={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
