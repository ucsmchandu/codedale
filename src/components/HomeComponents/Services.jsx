import React from "react";
/*

         {
            id:2,
            img1:"",
            img2:"",
            name:""
         }
*/
const Services = () => {
  const imagesData = [
    {
      id: 1,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebdevelopment1.69679903.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebdevelopment2.55d5e697.webp&w=1920&q=75",
      name: "Web Development",
    },
    {
      id: 2,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAppDevelopment1.15fd08d6.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAppDevelopment2.123b4929.webp&w=1920&q=75",
      name: "App Development",
    },
    {
      id: 3,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAI-Application1.26dff39b.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAI-Application2.2ebff593.webp&w=1920&q=75",
      name: "AI Applications",
    },
    {
      id: 4,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FData-Driven-Products1.c8d57e5e.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FData-Driven-Products2.51a06221.webp&w=1920&q=75",
      name: "Data Driven Products",
    },
    {
      id: 5,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlockchain-Technology1.dd33b08d.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlockchain-Technology2.483f4d3b.webp&w=1920&q=75",
      name: "Blockchain Technology",
    },
    {
      id: 6,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUIUX1.d0a0a8e8.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUIUX2.f0795fc7.webp&w=1920&q=75",
      name: "UI/UX",
    },
    {
      id: 7,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGODesigning1.846dc3c6.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGODesigning2.e40146e7.webp&w=1920&q=75",
      name: "Logo Designing",
    },
    {
      id: 8,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMvps-and-Rapid-Prototyping1.b2f0e71d.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMvps-and-Rapid-Prototyping2.c46d02f6.webp&w=1920&q=75",
      name: "Rapid Prototyping and MVPs",
    },
    {
      id: 9,
      img1: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSEO1.a52ff824.webp&w=1920&q=75",
      img2: "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSEO2.fd9d44c5.webp&w=1920&q=75",
      name: "Digital Marketing & SEO",
    },
  ];
  return (
    <div className="hidden md:grid grid-cols-3 w-full max-w-5xl h-full gap-y-16 items-center justify-center py-10 px-10">
      {imagesData.map((data, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-5 items-center justify-center w-full h-full"
        >
          <div className="flex items-center justify-center">
            <div className="group size-full -rotate-12 translate-x-3.5 z-10">
              <div className="w-[4.4rem] h-[3.3rem] border-[3px] border-white filter-shadow group-hover:-translate-y-2 transition-transform duration-300 ease-in-out group-hover:will-change-transform">
                <img src={data.img1} alt="" />
              </div>
            </div>
            <div className="group size-full rotate-12 -translate-x-3.5">
              <div className="w-[4.4rem] h-[3.3rem] border-[3px] border-white filter-shadow group-hover:-translate-y-2 transition-transform duration-300 ease-in-out group-hover:will-change-transform">
                <img src={data.img2} alt="" />
              </div>
            </div>
          </div>
          <div className="group">
            <span className="inline-block text-[17px] font-medium  max-w-[200px] text-center group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              {data.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
