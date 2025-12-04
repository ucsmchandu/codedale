import React from "react";

const Cards = ({data}) => {
  return (
<div className="bg-white p-4 w-full max-w-[500px] flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition-all">
      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          className="h-72 w-full object-cover rounded-2xl"
          src={data.img}
          alt="project"
        />
      </div>

      {/* Comments */}
      <div className="p-3 mt-4 flex flex-col gap-3">

        {/* Client Message */}
        <div className="bg-gray-100 max-w-[90%] rounded-t-2xl rounded-r-2xl p-3 shadow-sm">
          <p className="text-sm font-semibold leading-relaxed">
           {data.customerComment}
          </p>
          <span className="text-[11px] text-gray-500 font-semibold mt-1 inline-block">
          — {data.customerName}
          </span>
        </div>

        {/* Reply Message */}
        <div className="flex justify-end">
          <div className="flex flex-col bg-gray-100 gap-1 p-3 max-w-[80%] rounded-t-2xl rounded-l-2xl shadow-sm items-end">
            <p className="text-sm font-semibold leading-relaxed text-right">
             {data.codeDaleComment}
            </p>
            <span className="text-[11px] text-gray-500 font-semibold">
              — CodeDale
            </span>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-row gap-3 mt-3 items-center">
        <img
          className="h-9 w-9 rounded-full object-cover"
          src={data.customerImg}
          alt="profile"
        />
        <div>
          <p className="text-[13px] font-semibold">{data.customerName}</p>
          <p className="text-[12px] text-gray-500">{data.customerCompany}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
