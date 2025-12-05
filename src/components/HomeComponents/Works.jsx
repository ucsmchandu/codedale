import React from "react";

const Works = () => {
    const workData=[
        {
            id:1,
            img1:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTFS.19309528.webp&w=3840&q=75",
            img2:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftfs.a062562b.webp&w=1080&q=75"
        },
        {
            id:2,
            img1:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconquer.2d415b43.webp&w=3840&q=75",
            img2:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconquer.aaf7e329.webp&w=828&q=75"
        },
        {
            id:3,
            img1:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFluentPro.76ae2fa8.webp&w=3840&q=75",
            img2:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfluentPro.a45ab5f1.png&w=256&q=75",
        },
        {
            id:4,
            img1:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FATH.f12a26d2.jpg&w=3840&q=75",
            img2:"https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fath.680186fb.svg&w=3840&q=75"
        }
    ]
  return (
    <div className="w-full py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">

        {
            workData.map((data,index)=>(
                 <div key={index} className="relative group rounded-[32px] overflow-hidden cursor-pointer w-full h-[550px]">
          {/* Project Image */}
          <img
            src={data.img1}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-500 ease-in-out"
          />

          {/* Bottom Bar */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 py-2 
              rounded-full backdrop-blur-lg bg-black/30 border border-white/40 
              translate-y-[160%] group-hover:translate-y-0 transition-all duration-500 ease-out">

            {/* Logo */}
            <img
              src={data.img2}
              alt=""
              className="h-10"
            />

            {/* Button */}
            <a
              href="#"
              className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-black font-medium transition"
            >
              View project
              <img
                src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow.bda32707.svg&w=48&q=75"
                alt=""
                className="h-4"
              />
            </a>
          </div>
        </div>
            ))
        }
       

      </div>
    </div>
  );
};

export default Works;
