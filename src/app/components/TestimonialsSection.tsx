'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  review: string;
}

function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 16.98l-5.87 3.09 1.12-6.54L2.5 8.9l6.56-.95L12 2z" />
    </svg>
  );
}

function TripadvisorIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M3 8.5C5.2 5.7 8.2 4.5 12 4.5s6.8 1.2 9 4c-.7-.2-1.4-.3-2.1-.3.7 1 1.1 2.2 1.1 3.5 0 3.4-2.7 6.1-6.1 6.1-1.5 0-2.9-.6-3.9-1.5-1 1-2.4 1.5-3.9 1.5-3.4 0-6.1-2.7-6.1-6.1 0-1.3.4-2.5 1.1-3.5-.7 0-1.4.1-2.1.3zm4 2.1a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm10 0a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zM12 8c-1.1 0-2.1.3-3 .9a4.5 4.5 0 0 1 6 0c-.9-.6-1.9-.9-3-.9z" />
    </svg>
  );
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'atanu chakraborty',
    role: 'Highline Himalayas Traveler',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    title: 'Average Experience',
    review:
      'The trip was awesome! The hotels were good, and our cab driver was excellent. While the entire management team was nice, they were very busy, which led to a bit of a communication gap and made it hard to stay in touch at times. Overall, everything else was fine. Thank you, Anjali Mam, for this amazing itinerary.',
  },
  {
    id: 2,
    name: 'Riya Kashyap',
    role: 'Highline Himalayas Traveler',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    title: 'Average Experience',
    review:
      'Had a really great experience traveling with this company. Everything was well managed, smooth, and comfortable throughout the trip. Special thanks to Ajay Thakur and Bhupinder for being so supportive, cooperative, and helpful throughout the journey. They truly made the experience even better. Highly recommended!',
  },
  {
    id: 3,
    name: 'ALIUL ISLAM',
    role: 'Highline Himalayas Traveler',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    title: 'Average Experience',
    review:
      'It’s a great experience to travel with Highline Himalayas . You guys are so good and behave like family. Thank you so much for your such kind of cooperation with us .Specially, Rajni ma’am guide us in every single moment like family.',
  },
  {
    id: 4,
    name: 'Raghu Nandan',
    role: 'Highline Himalayas Traveler',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    title: 'Unforgettable Vacation',
    review:
      'Recently completed an amazing 7 days and 6 nights trip with Highline Himalayas, covering Manali, Shimla, Kasol, and Kullu, and the experience was smooth and memorable throughout. A special shout-out to Shubham Thakur, our driver, for his excellent planning, local knowledge, and ensuring we covered all places comfortably and on time',
  },
  {
    id: 5,
    name: 'Prasenjit Chatterjee',
    role: 'Highline Himalayas Traveler',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    title: 'Flawless Arrangements',
    review:
      'Recently had a wonderful and pleasant trip to Kasauli, Kufri, and Narkanda with Highline Himalayas. Everything was very well arranged and smoothly managed throughout the journey.',
  },
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsData.length);
  };
  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };
  const visibleTestimonials = [
    testimonialsData[startIndex % testimonialsData.length],
    testimonialsData[(startIndex + 1) % testimonialsData.length],
    testimonialsData[(startIndex + 2) % testimonialsData.length],
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#eef4fa]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 219, 238, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 219, 238, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-8 left-12 w-44 h-44 pointer-events-none opacity-[0.18] text-[#3b82f6]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-full h-full">
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="16" />
          <line x1="50" y1="12" x2="50" y2="24" strokeLinecap="round" />
          <line x1="50" y1="76" x2="50" y2="88" strokeLinecap="round" />
          <line x1="12" y1="50" x2="24" y2="50" strokeLinecap="round" />
          <line x1="76" y1="50" x2="88" y2="50" strokeLinecap="round" />
          <line x1="23" y1="23" x2="31" y2="31" strokeLinecap="round" />
          <line x1="69" y1="69" x2="77" y2="77" strokeLinecap="round" />
          <line x1="23" y1="77" x2="31" y2="69" strokeLinecap="round" />
          <line x1="69" y1="31" x2="77" y2="23" strokeLinecap="round" />
          <line x1="34" y1="16" x2="38" y2="26" strokeLinecap="round" />
          <line x1="62" y1="74" x2="66" y2="84" strokeLinecap="round" />
          <line x1="16" y1="66" x2="26" y2="62" strokeLinecap="round" />
          <line x1="74" y1="38" x2="84" y2="34" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute top-12 right-1/4 w-40 h-28 pointer-events-none opacity-[0.16] text-[#3b82f6]">
        <svg viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path
            d="M10 80 Q 50 10 95 40 T 130 20"
            strokeDasharray="4 4"
            fill="none"
          />
          <g transform="translate(115, 12) rotate(35) scale(0.6)">
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <div className="absolute -bottom-8 -right-8 w-56 h-56 pointer-events-none opacity-[0.15] text-[#3b82f6]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full">
          <circle cx="50" cy="50" r="42" />
          <ellipse cx="50" cy="50" rx="42" ry="20" />
          <ellipse cx="50" cy="50" rx="20" ry="42" />
          <line x1="8" y1="50" x2="92" y2="50" />
          <line x1="50" y1="8" x2="50" y2="92" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-10 w-36 h-36 pointer-events-none opacity-[0.14] text-[#3b82f6]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M15 85 Q 35 30 75 25" strokeLinecap="round" />
          <path d="M75 25 Q 60 45 40 50" strokeLinecap="round" />
          <path d="M75 25 Q 70 55 55 65" strokeLinecap="round" />
          <path d="M75 25 Q 85 55 75 75" strokeLinecap="round" />
          <path d="M5 85 C 25 55, 45 65, 60 85" strokeLinecap="round" />
        </svg>
      </div>
      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[38px] font-semibold text-[#0f172a] tracking-tight mb-3">
            Hear It from Travelers
          </h2>
          <p className="text-[#4b5563] text-[14px] md:text-[15.5px] max-w-xl mx-auto leading-relaxed">
            We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-[24px] p-7 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-[#e2e8f0]/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="w-[21px] h-[21px] bg-[#00b67a] rounded-[2px] flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 fill-white"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4b5563] text-[13.5px] md:text-[14px] leading-relaxed mb-8">
                  {item.review}
                </p>
              </div>
              <div className="flex items-center gap-3.5 pt-2 border-t border-transparent">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[14.5px] text-[#111827] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[12px] text-gray-500 font-normal mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-2">
          <div className="flex items-center gap-3">
            <span className="text-[28px] md:text-[32px] font-black text-[#111827] leading-none">
              4.7
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <StarIcon className="w-4 h-4 text-[#00b67a]" />
                <span className="font-bold text-[14px] tracking-tight text-[#111827]">
                  Trustpilot
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[14px] h-[14px] bg-[#00b67a] rounded-[1.5px] flex items-center justify-center text-white text-[9px]"
                    >
                      <StarIcon className="w-2.5 h-2.5 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-[12px] text-gray-500 font-medium">
                  Reviews
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonials"
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-4 h-4 fill-none stroke-current stroke-2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonials"
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-4 h-4 fill-none stroke-current stroke-2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-end md:items-end">
            <div className="flex items-center gap-1.5 mb-0.5">
              <TripadvisorIcon className="w-5 h-5 text-[#00aa6c]" />
              <span className="font-bold text-[14px] tracking-tight text-[#111827]">
                Tripadvisor
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] font-extrabold text-[#111827]">
                4.7
              </span>
              <span className="text-[12px] text-gray-500 font-medium mr-1">
                Reviews
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#00aa6c]" />
                ))}
                <div className="w-3.5 h-3.5 rounded-full bg-gray-200 overflow-hidden relative">
                  <div className="w-[50%] h-full bg-[#00aa6c]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
