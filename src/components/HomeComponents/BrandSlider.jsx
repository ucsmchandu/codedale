const BrandsSlider = () => {
  const brands = [
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftfs-black.75cc00a9.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconquer.aaf7e329.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfluentPro.a45ab5f1.png&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmach.aca8b2a1.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftfs-black.75cc00a9.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconquer.aaf7e329.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfluentPro.a45ab5f1.png&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmach.aca8b2a1.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftfs-black.75cc00a9.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconquer.aaf7e329.webp&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfluentPro.a45ab5f1.png&w=384&q=75",
    "https://www.codedale.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmach.aca8b2a1.webp&w=384&q=75",
  ];

  // duplicate for infinite loop
  // const sliderItems = [...brands];

  return (
    <div className=" w-screen overflow-hidden py-6">
      <div className="flex gap-16 animate-marquee">
        {brands.map((img, index) => (
          <img key={index} src={img} alt="" className="h-10  object-contain grayscale hover:grayscale-0 transition-all hover:scale-110" />
        ))}
      </div>
    </div>
  );
};

export default BrandsSlider;
