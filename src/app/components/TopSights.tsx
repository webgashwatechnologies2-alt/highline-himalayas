"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


import Image from "next/image";
import { MapPin, Calendar, X } from "lucide-react";
import Himachalimage from "../../../public/images/herobaner/herothree.png";
import Spitiimage from "../../../public/images/destinations/spitiherobaner.webp";
import Ladakhimage from "../../../public/images/destinations/ladakh-tours-packages.webp";
import Kashmirimage from "../../../public/images/destinations/family.webp";
import Keralaimage from "../../../public/images/destinations/Thekkady-Travel.webp";



const destinations = [
  {
    name: "Himachal",
    slug: "himachal",
  },
  {
    name: "Spiti",
    slug: "spiti",
  },
  {
    name: "Manali",
    slug: "manali",
  },
];


interface TopSightItem {
  id: string;
  name: string;
  tag: string;
  highlights: string;
  image: string;
  toursCount: number;
}

export function IndiaFlag() {
  return (
    <span className="inline-flex items-center overflow-hidden rounded-[3px] shadow-sm border border-white/40 leading-none">
      <svg className="w-6 h-4" viewBox="0 0 30 20">
        <rect width="30" height="6.67" fill="#FF9933" />
        <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
        <rect y="13.33" width="30" height="6.67" fill="#138808" />
        <circle cx="15" cy="10" r="2.2" fill="#000080" />
        <circle cx="15" cy="10" r="1.6" fill="#FFFFFF" />
        <circle cx="15" cy="10" r="0.6" fill="#000080" />
      </svg>
    </span>
  );
}

const topSightsData: TopSightItem[] = [
  {
    id: "sight-himachal",
    name: "Himachal",
    tag: "🇮🇳",
    highlights: "Solang Valley, Manali & Parvati Rivers",
    image: Himachalimage.src,
    toursCount: 6
  },
  {
    id: "sight-spiti",
    name: "Spiti",
    tag: "🇮🇳",
    highlights: "Key Monastery, Pin Valley & Rugged Gorges",
    image: Spitiimage.src,
    toursCount: 6
  },
  {
    id: "sight-ladakh",
    name: "Ladakh",
    tag: "🇮🇳",
    highlights: "Pangong Tso & High Mountain Passes",
    image: Ladakhimage.src,
    toursCount: 6
  },
  {
    id: "sight-kashmir",
    name: "Kashmir",
    tag: "🇮🇳",
    highlights: "Dal Lake, Gulmarg & Alpine Meadows",
    image: Kashmirimage.src,
    toursCount: 6
  },
  {
    id: "sight-kerala",
    name: "Kerala",
    tag: "🇮🇳",
    highlights: "Alleppey Backwaters & Munnar Tea Hills",
    image: Keralaimage.src,
    toursCount: 6
  }
];

interface ModalCard {
  id: string;
  slug: string;
  category: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  description: string;
}

export default function TopSights() {
  const router = useRouter();
  const [selectedDetailCard, setSelectedDetailCard] = useState<ModalCard | null>(null);

  return (
    <section className="w-full bg-white py-12 sm:py-18 border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight mb-8">
          Top Sights<span style={{color: '#FF8C00'}}> To See</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {topSightsData.slice(0, 2).map((sight) => (
            <div
              key={sight.id}
              onClick={() => {
                setSelectedDetailCard({
                  id: sight.id,
                  slug: sight.name.toLowerCase(),
                  category: "Featured Destination",
                  title: `${sight.name} Exploration Expedition`,
                  image: sight.image,
                  location: `${sight.name}, India`,
                  duration: "5-7 Days",
                  price: "Price On Request",
                  description: `Discover the breathtaking sights of ${sight.name} (${sight.highlights}). Handcrafted journeys with certified guides, comfortable stays, and personalized itineraries.`
                });
              }}
              className="group relative h-[250px] sm:h-[290px] md:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={sight.image}
                alt={sight.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10 group-hover:via-black/25 transition-colors" />
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2.5">
                <span className="text-2xl sm:text-[28px] font-black text-white tracking-wide drop-shadow-md">
                  {sight.name}
                </span>
                <IndiaFlag />
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-white/95 font-semibold drop-shadow-sm">
                    {sight.highlights}
                  </p>
                  <p className="text-[11px] text-white/75 font-medium mt-0.5">
                    {sight.toursCount} verified tours & activities
                  </p>
                </div>
                <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 group-hover:bg-white group-hover:text-slate-900 transition-all">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {topSightsData.slice(2, 5).map((sight) => (
            <div
              key={sight.id}
              onClick={() => {
                setSelectedDetailCard({
                  id: sight.id,
                  slug: sight.name.toLowerCase(),
                  category: "Featured Destination",
                  title: `${sight.name} Exploration Expedition`,
                  image: sight.image,
                  location: `${sight.name}, India`,
                  duration: "4-6 Days",
                  price: "Price On Request",
                  description: `Discover the iconic landscapes of ${sight.name} (${sight.highlights}). Authentic local experiences, scenic stays, and professional expedition guidance.`
                });
              }}
              className="group relative h-[230px] sm:h-[260px] md:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={sight.image}
                alt={sight.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/40 group-hover:via-black/25 transition-colors" />
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow-md">
                  {sight.name}
                </span>
                <IndiaFlag />
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                <div>
                  <p className="text-xs sm:text-[13px] text-white/95 font-semibold drop-shadow-sm line-clamp-1">
                    {sight.highlights}
                  </p>
                  <p className="text-[11px] text-white/75 font-medium mt-0.5">
                    {sight.toursCount} verified tours
                  </p>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 group-hover:bg-white group-hover:text-slate-900 transition-all">
                  Explore →
                </span>
              </div>
            </div>
          ))}
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
                  {selectedDetailCard.category}
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
                  onClick={() => {
                    if (!selectedDetailCard?.slug) return;

                    setSelectedDetailCard(null);
                    router.push(`/${selectedDetailCard.slug}`);
                  }}
                  className="flex-1 py-3 rounded-full bg-[#FF8C00] hover:bg-[#F44336] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
