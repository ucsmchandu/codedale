import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] mt-10 text-[#50576b] pb-12 px-4 sm:px-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">

        <div className="flex flex-col items-start">
          <a href="#" className="w-auto h-12 md:h-14">
            <img
              className="h-full"
              src="https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCodeDale_logo_footer.bb09ff45.webp&w=256&q=75"
              alt="CodeDale"
            />
          </a>
          <p className="font-normal text-[#50576b] leading-snug text-[15px] mt-2 md:max-w-64">
            Strategic web design and campaigns tailored to drive results and conversions.
          </p>
        </div>

        {/* Navigation + Socials */}
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <h1 className="text-black mb-4 font-medium">Company</h1>
            <div className="flex flex-col gap-y-2">
              <a href="#">Services</a>
              <a href="#">Our Work</a>
              <a href="#">Achievements</a>
              <a href="#">FAQs</a>
              <a href="#">Brand</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <h1 className="text-black mb-4 font-medium">Socials</h1>
            <div className="flex flex-col gap-y-2">
              <a href="#">Email</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h1 className="text-black mb-4 font-medium">Newsletter</h1>
          <p className="font-normal text-[15px] text-[#50576b] leading-snug mb-4 max-w-xs">
            Stay ahead with design & marketing tips and strategies that drive results.
          </p>
          <form className="flex items-center gap-2 bg-white rounded-full border border-gray-200 pl-3 pr-1.5 py-1.5 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 outline-none bg-transparent text-base font-normal text-[#50576b] placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[#0067F4] hover:bg-[#0047A8] transition-colors text-white rounded-full w-24 h-10 flex items-center justify-center text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row items-end justify-between mt-8">
        <div>
          <p>©2025 CodeDale All rights reserved</p>
        </div>
        <div className="flex flex-row gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
