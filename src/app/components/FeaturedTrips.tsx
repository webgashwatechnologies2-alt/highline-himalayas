"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Calendar, X } from "lucide-react";

interface FeaturedTripItem {
  id: string;
  title: string;
  startingPrice: string;
  location: string;
  image: string;
  buttonText: string;
}

const featuredTripsData: FeaturedTripItem[] = [
  {
    id: "ft-1",
    title: "Hampta Pass, Bhrigu Lake & Kheerganga Trek",
    startingPrice: "Price On Request",
    location: "Kullu-Manali, Himachal Pradesh",
    image: "/images/Hampta-Pass.webp",
    buttonText: "Book my travel now"
  },
  {
    id: "ft-2",
    title: "Nubra Valley, Pangong Tso & Khardung La Adventure",
    startingPrice: "Price On Request",
    location: "Leh-Ladakh, Himalayas",
    image: "/images/packagesimages/sptfamily.webp",
    buttonText: "Book my travel now"
  },
  {
    id: "ft-3",
    title: "Spiti Celestial Valley & High Passes Jeep Safari",
    startingPrice: "Price On Request",
    location: "Kaza & Pin Valley, Himachal",
    image: "/images/destinations/spitiherobaner.webp",
    buttonText: "Book my travel now"
  }
];

interface ModalCard {
  id: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  description: string;
}

export default function FeaturedTrips() {
  const [featuredTripIndex, setFeaturedTripIndex] = useState(0);
  const [selectedDetailCard, setSelectedDetailCard] = useState<ModalCard | null>(null);

  const nextFeaturedTrip = () => {
    setFeaturedTripIndex((prev) => (prev + 1) % featuredTripsData.length);
  };

  const prevFeaturedTrip = () => {
    setFeaturedTripIndex((prev) => (prev - 1 + featuredTripsData.length) % featuredTripsData.length);
  };

  const currentTrip = featuredTripsData[featuredTripIndex];

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <p className="text-xs sm:text-[13px] font-semibold text-slate-500 tracking-wide mb-1" style={{ color: '#FF8C00' }}>
              Featured trips
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight">
              Accommodations, <span style={{ color: '#FF8C00' }}>adventure travel</span>  & <span style={{ color: '#FF8C00' }}>vacations</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={prevFeaturedTrip}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all shadow-xs hover:border-slate-300 cursor-pointer active:scale-95"
              aria-label="Previous trip"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={nextFeaturedTrip}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all shadow-xs hover:border-slate-300 cursor-pointer active:scale-95"
              aria-label="Next trip"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 flex items-center">
          {featuredTripsData.map((trip, idx) => (
            <div
              key={trip.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${idx === featuredTripIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                }`}
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover object-center sm:object-[center_35%]"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent max-w-2xl sm:max-w-3xl pointer-events-none z-10" />
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 420 0 C 425 120, 470 200, 540 230 C 630 270, 750 280, 830 260 C 900 245, 930 195, 875 185 C 825 175, 805 235, 855 260 C 905 285, 955 275, 1000 200"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeDasharray="6 7"
              strokeLinecap="round"
              opacity="0.85"
            />
          </svg>
          <div className="relative z-20 px-6 sm:px-12 md:px-16 py-10 max-w-xl sm:max-w-2xl flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl md:text-[36px] font-black text-slate-900 tracking-tight leading-[1.2] mb-3 sm:mb-4">
              {currentTrip.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-slate-700 text-sm sm:text-[15px] font-semibold mb-6 sm:mb-7">
              <span className="font-extrabold text-slate-900">
                Starting {currentTrip.startingPrice}
              </span>
              <span className="text-slate-300 font-light hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                <MapPin size={16} className="text-slate-500 shrink-0" />
                <span>{currentTrip.location}</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedDetailCard({
                  id: currentTrip.id,
                  title: currentTrip.title,
                  image: currentTrip.image,
                  location: currentTrip.location,
                  duration: "6 Days / 5 Nights",
                  price: currentTrip.startingPrice,
                  description:
                    "Experience an unforgettable journey with certified mountain leaders, luxury wilderness camps, acclimatization protocol, and curated gourmet meals."
                });
              }}
              className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#FF8C00] hover:bg-[#F44336] text-white text-sm sm:text-[15px] font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              {currentTrip.buttonText}
            </button>
          </div>
        </div>
      </div>
      {selectedDetailCard && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setSelectedDetailCard(null)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 animate-in zoom-in-95 duration-150">
            <div className="relative h-60 w-full bg-slate-900">
              <Image
                src={selectedDetailCard.image}
                alt={selectedDetailCard.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedDetailCard(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
                  Featured Expedition
                </span>
                <h3 className="text-xl font-black leading-tight text-white">
                  {selectedDetailCard.title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-orange-600">
                  <MapPin size={15} />
                  <span>{selectedDetailCard.location}</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Calendar size={15} className="text-blue-500" />
                  <span>{selectedDetailCard.duration}</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="ml-auto text-lg font-black text-slate-900">
                  {selectedDetailCard.price}
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {selectedDetailCard.description}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDetailCard(null)}
                  className="flex-1 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDetailCard(null)}
                  className="flex-1 py-3 rounded-full bg-[#FF8C00] hover:bg-[#F44336] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Book This Expedition
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
