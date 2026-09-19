"use client";

import React from "react";
import {
  DollarSign,
  ShieldCheck,
  FileCheck2,
  Sparkles,
} from "lucide-react";

const trustItems = [
  {
    id: 1,
    title: "No hidden fees",
    description: "Transparent pricing with no hidden fees.",
    icon: DollarSign,
  },
  {
    id: 2,
    title: "Instant booking",
    description: "Get confirmation right after you reserve.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Flexibility",
    description: "Flexible options with free cancellation on many listings.",
    icon: FileCheck2,
  },
];

export default function WhyTravelersTrust() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-7 sm:mb-8">
          <h2 className="text-[24px] sm:text-[27px] lg:text-[28px] font-extrabold tracking-tight text-slate-900">
            Why Travelers Trust Highline Holidays
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-20 w-[66px] h-[66px] sm:w-[68px] sm:h-[68px] rounded-[15px] bg-[#e9f0ff] flex items-center justify-center">
                  <div className="w-[31px] h-[31px] rounded-full bg-[#F04F1D] flex items-center justify-center">
                    <Icon
                      className="w-[20px] h-[20px] text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                {index < trustItems.length - 1 && (
                  <div className="hidden md:block absolute top-[20px] left-[calc(50%+40px)] w-[calc(100%+5px)] h-[65px] pointer-events-none z-10">
                    <svg
                      viewBox="0 0 300 70"
                      className="w-full h-full overflow-visible"
                      fill="none"
                    >
                      <path
                        d={
                          index === 0
                            ? "M 0 50 C 70 58, 95 55, 145 28 C 195 2, 230 3, 290 5"
                            : "M 0 50 C 70 58, 95 55, 145 28 C 195 2, 230 3, 290 5"
                        }
                        stroke="#76a7ff"
                        strokeWidth="1"
                        strokeDasharray="2 3"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="0"
                        cy="50"
                        r="1.8"
                        fill="#76a7ff"
                      />
                      <circle
                        cx="290"
                        cy="5"
                        r="1.8"
                        fill="#76a7ff"
                      />
                    </svg>
                  </div>
                )}
                <div className="mt-5">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-slate-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[190px] mx-auto text-[11.5px] sm:text-[12px] leading-[1.55] text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden sm:flex absolute right-[4%] lg:right-[4.5%] top-[130px] w-[45px] h-[45px] rounded-full bg-[#F04F1D] items-center justify-center shadow-sm">
        <Sparkles
          className="w-[24px] h-[24px] text-white"
          strokeWidth={1.7}
        />
      </div>
    </section>
  );
}