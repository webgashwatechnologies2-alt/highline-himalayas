"use client";

import React from "react";

const travelDealsData = [
  {
    id: "deal-1",
    title: "10% discounts on stays",
    description:
      "Enjoy verified savings at participating boutique stays, luxury chalets, and heritage villas across Himachal, Kashmir & Kerala."
  },
  {
    id: "deal-2",
    title: "Travel of season",
    description:
      "Avoid peak times and enjoy lower rates, tranquil high-altitude trails, and fewer crowds in Spiti Valley & Ladakh."
  },
  {
    id: "deal-3",
    title: "Exclusive deals",
    description:
      "Unlock special members-only rates on traditional Kerala houseboats and panoramic Spiti stargazing geodesic domes."
  },
  {
    id: "deal-4",
    title: "Weekend Special",
    description:
      "Spontaneous escape? Enjoy up to 12% off instant weekend getaways and scenic mountain retreats in Himachal and Kashmir."
  }
];

export default function TravelDeals() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight mb-8">
          Travel more, <span style={{color : '#FF8C00'}}>Spend Less</span> 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {travelDealsData.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl p-6 border-2 border-blue-600/85 hover:border-blue-600 hover:shadow-lg transition-all duration-200 flex flex-col justify-start group cursor-pointer"
            >
              <h3 className="text-base sm:text-[17px] font-black text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                {deal.title}
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                {deal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
