"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, MapPin, Calendar } from "lucide-react";

import himachalImage from "../../../public/images/destinations/rkshh.webp";
import spitiImage from "../../../public/images/destinations/spitiherobaner.webp";
import LadakhImage from "../../../public/images/destinations/ladakh-tours-packages.webp";
import KashmirImage from "../../../public/images/destinations/kashmirtrails.webp";
import ManaliImage from "../../../public/images/destinations/manaliimage.webp";
import LehImage from "../../../public/images/destinations/lehimage.webp";
import KashmirGreatimage from "../../../public/images/destinations/Festivals-of-Jammu-and-Kashmir.webp";
import KeralaTropicalimage from "../../../public/images/destinations/Festivals-of-Jammu-and-Kashmir.webp";

export interface NearestStartCard {
  id: string;
  category: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  description: string;
}

export const nearestStartsData: NearestStartCard[] = [
  {
    id: "ns-1",
    category: "Hiking & Trekking",
    title: "Himalayan Trails & Mountain Adventures",
    image: himachalImage.src,
    location: "Manali, Himachal Pradesh",
    duration: "5 Days",
    price: "On Request",
    description:
      "Explore scenic Himalayan trails, pine forests, waterfalls, and breathtaking mountain valleys with experienced local guides."
  },
  {
    id: "ns-2",
    category: "Adventure & Camping",
    title: "Spiti Valley Himalayan Adventure",
    image: spitiImage.src,
    location: "Spiti Valley, Himachal Pradesh",
    duration: "6 Days",
    price: "On Request",
    description:
      "Discover remote mountain villages, ancient monasteries, dramatic valleys, and unforgettable Himalayan landscapes."
  },
  {
    id: "ns-3",
    category: "Mountain Expedition",
    title: "Ladakh High Pass & Lake Expedition",
    image: LadakhImage.src,
    location: "Leh, Ladakh",
    duration: "7 Days",
    price: "On Request",
    description:
      "Journey across spectacular high-altitude passes, turquoise lakes, ancient monasteries, and rugged Ladakhi landscapes."
  },
  {
    id: "ns-4",
    category: "Skiing & Snow Adventures",
    title: "Kashmir Snow & Mountain Escape",
    image: KashmirImage.src,
    location: "Gulmarg, Kashmir",
    duration: "4 Days",
    price: "On Request",
    description:
      "Experience Kashmir's snowy landscapes, beautiful valleys, mountain views, and thrilling winter adventures in Gulmarg."
  },
  {
    id: "ns-5",
    category: "Backpacking",
    title: "Manali to Kasol Himalayan Backpacking",
    image: ManaliImage.src,
    location: "Kasol, Himachal Pradesh",
    duration: "5 Days",
    price: " On Request",
    description:
      "Walk through peaceful mountain villages, lush valleys, riverside trails, and experience the laid-back beauty of Himachal."
  },
  {
    id: "ns-6",
    category: "Road Trips",
    title: "Leh to Pangong Lake Road Trip",
    image: LehImage.src,
    location: "Pangong Lake, Ladakh",
    duration: "4 Days",
    price: "On Request",
    description:
      "Ride through some of Ladakh's most spectacular landscapes and experience the magical blue waters of Pangong Lake."
  },
  {
    id: "ns-7",
    category: "Valley Escape",
    title: "Kashmir Great Lakes & Valley Escape",
    image: KashmirGreatimage.src,
    location: "Srinagar, Kashmir",
    duration: "6 Days",
    price: "On Request",
    description:
      "Discover peaceful valleys, alpine lakes, lush meadows, traditional villages, and the timeless beauty of Kashmir."
  },
  {
    id: "ns-8",
    category: "Beach & Backwaters",
    title: "Kerala Tropical Backwaters Escape",
    image: KeralaTropicalimage.src,
    location: "Alappuzha, Kerala",
    duration: "4 Days",
    price: "On Request",
    description:
      "Relax on traditional houseboats, cruise through peaceful backwaters, explore lush landscapes, and experience authentic Kerala."
  }
];

export default function NearestStarts() {
  const nearestScrollRef = useRef<HTMLDivElement>(null);
  const [nearestPaused, setNearestPaused] = useState(false);
  const [selectedDetailCard, setSelectedDetailCard] = useState<NearestStartCard | null>(null);
  useEffect(() => {
    if (nearestPaused) return;
    const container = nearestScrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3200);
    return () => clearInterval(interval);
  }, [nearestPaused]);
  const scrollNearest = (dir: "left" | "right") => {
    nearestScrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full bg-white py-10 sm:py-14 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <p className="text-xs sm:text-[13px] font-semibold text-slate-500 tracking-wide mb-1" style={{ color: '#FF8C00' }}>
                Your next getaway
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight">
                Explore Himachal, <span style={{ color: '#FF8C00' }}>Spiti</span> , Ladakh, <span style={{ color: '#FF8C00' }}>Kashmir</span>  & Kerala
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollNearest("left")}
                className="w-11 h-11 rounded-full border-2 border-orange-500/30 bg-white hover:bg-orange-50 shadow-md hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all cursor-pointer active:scale-95"
                aria-label="Previous starts"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollNearest("right")}
                className="w-11 h-11 rounded-full border-2 border-orange-500/30 bg-white hover:bg-orange-50 shadow-md hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all cursor-pointer active:scale-95"
                aria-label="Next starts"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div
            ref={nearestScrollRef}
            onMouseEnter={() => setNearestPaused(true)}
            onMouseLeave={() => setNearestPaused(false)}
            className="flex items-center gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-3 select-none"
          >
            {nearestStartsData.map((item) => (
              <div
                key={item.id}
                className="relative w-[calc((100%-60px)/4)] min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[300px] h-[370px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group shrink-0 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 flex flex-col justify-end border border-white/20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 240px, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-30% to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-orange-500/30 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold">
                      <MapPin size={13} className="text-orange-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="w-px h-3 bg-white/30" />
                    <span className="text-white/90 text-xs font-semibold">{item.duration}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white leading-snug mb-4 drop-shadow-md line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-white">
                      <span className="text-xs font-semibold text-white/70">From</span>
                      <span className="text-lg font-black ml-1">{item.price}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedDetailCard(item)}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedDetailCard && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedDetailCard(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 animate-in zoom-in-95 duration-150">
            <div className="relative h-52 w-full">
              <Image
                src={selectedDetailCard.image}
                alt={selectedDetailCard.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedDetailCard(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-orange-600 px-2.5 py-0.5 rounded-full">
                  {selectedDetailCard.category}
                </span>
                <h3 className="text-xl font-extrabold mt-1 leading-snug">
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
                  Book This Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
