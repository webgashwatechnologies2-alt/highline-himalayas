"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  SlidersHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Check,
  Users,
  Plus,
  Minus,
  Sparkles,
  Compass,
  Shield,
  Flame,
} from "lucide-react";

const heroSlides = [
  {
    src: "/images/herobaner/herobanerthree.jpg",
    alt: "Scenic Himalayan heritage railway winding through misty pine forests",
    title: "Darjeeling & Shimla Toy Train Trails",
    tagline: "Historic mountain rail journeys across iconic stone arch bridges",
  },
  {
    src: "/images/herobaner/herobaner2.jpg",
    alt: "Traditional mountain wooden architecture facing towering Himalayan peaks",
    title: "Ancient Himalayan Valley Sanctuaries",
    tagline: "Traditional cedar chalets overlooking eternal snow peaks",
  },
  {
    src: "/images/herobaner/herobanerfive.jpg",
    alt: "Spiti & Pangong cold desert alpine landscapes",
    title: "Mystic Spiti & Pangong Tso Expeditions",
    tagline: "Turquoise glacial waters under crystal high-altitude skies",
  },
  {
    src: "/images/herobaner/herobanerfour.jpg",
    alt: "Lush green Kinnaur & Tirthan valleys with mountain streams",
    title: "Kinnaur & Tirthan Valley Escapes",
    tagline: "Pristine pine forests, river valleys and organic orchards",
  },
  {
    src: "/images/herobaner/herobanerseven.jpg",
    alt: "Golden sunset over high mountain passes",
    title: "Golden Hour in Solang & Rohtang Pass",
    tagline: "Dramatic alpine sunsets and thrilling mountain expeditions",
  },
  {
    src: "/images/herobaner/herobanersix.jpg",
    alt: "High altitude Buddhist monastery on Himalayan cliff",
    title: "Sacred Ladakh & Zanskar Trails",
    tagline: "Centuries of Himalayan wisdom atop the roof of the world",
  },
];
const SLIDE_INTERVAL = 5500; 

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const [destination, setDestination] = useState("Choose destinations");
  const [travelDate, setTravelDate] = useState("January 16, 2024");
  const [activeCategory, setActiveCategory] = useState("Hiking & Trekking");
  const [guestCount, setGuestCount] = useState({ adults: 2, children: 2, rooms: 1 });

  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setLocationOpen(false);
        setDateOpen(false);
        setCategoryOpen(false);
        setGuestsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <section
        className="relative z-20 w-full overflow-visible min-h-[600px] lg:min-h-[660px] flex flex-col justify-between"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 z-0 overflow-hidden select-none">
          {heroSlides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/60 pointer-events-none z-10" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none z-10" />
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous background"
            className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/25 hover:bg-black/50 text-white/90 hover:text-white backdrop-blur-md border border-white/20 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next background"
            className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/25 hover:bg-black/50 text-white/90 hover:text-white backdrop-blur-md border border-white/20 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-6 right-6 lg:right-10 z-20 hidden sm:flex items-center gap-2 bg-black/35 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-white">
            <span className="text-[11px] font-bold tracking-wider text-orange-400">
              0{current + 1}
            </span>
            <span className="text-[11px] text-white/50">/ 0{heroSlides.length}</span>
            <div className="w-px h-3 bg-white/20 mx-1" />
            <div className="flex items-center gap-1.5">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === current ? "w-5 bg-orange-500" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
          <svg
            className="w-full h-full opacity-60"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flightTrailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#F97316" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FB923C" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M -50 360 C 180 430, 320 240, 600 230 C 880 220, 1100 210, 1260 250 C 1390 280, 1420 380, 1340 450 C 1270 510, 1140 510, 1040 470 C 970 440, 930 400, 910 360"
              stroke="url(#flightTrailGrad)"
              strokeWidth="2.4"
              strokeDasharray="7 7"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="absolute bottom-[24%] right-[5%] sm:right-[10%] lg:right-[18%] animate-float-plane pointer-events-auto cursor-pointer group"
            title="Explore high alpine routes"
          >
            <div className="relative">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Take Flight ✈️
              </div>
              <svg
                width="84"
                height="64"
                viewBox="0 0 100 75"
                fill="none"
                className="drop-shadow-[0_12px_24px_rgba(234,88,12,0.35)] group-hover:scale-110 transition-transform duration-300"
              >
                <polygon points="12,50 96,12 48,64" fill="#1D4ED8" />
                <polygon points="12,50 96,12 42,36" fill="#3B82F6" />
                <polygon points="42,36 96,12 48,64" fill="#2563EB" opacity="0.9" />
                <polygon points="48,64 96,12 62,68" fill="#F97316" />
                <polygon points="48,64 62,68 42,56" fill="#FBBF24" />
                <polygon points="96,12 70,36 62,68" fill="#EA580C" opacity="0.85" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-30 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-lg mb-4 hover:bg-white/20 transition-all cursor-default animate-in fade-in slide-in-from-top-3 duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs sm:text-[13px] font-semibold tracking-wide text-white drop-shadow-sm">
              Handcrafted Himalayan Expeditions & Escapes
            </span>
            <Sparkles size={13} className="text-amber-300 animate-spin-slow" />
          </div>
          <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
            Life&apos;s an{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-[#FF8C00] bg-clip-text text-transparent font-black drop-shadow-none">
              adventure
            </span>
            , live it!
          </h1>
          <p className="mt-3.5 sm:mt-4 text-white/95 text-[15px] sm:text-[17px] leading-[1.65] max-w-[720px] mx-auto font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            We help travelers discover serene stays, plan breathtaking mountain journeys, and embark on unforgettable Himalayan expeditions.
          </p>
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[12px] font-semibold text-white/90">
            <span className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>4.96/5 (14k+ Travelers)</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
              <Shield size={13} className="text-emerald-400" />
              <span>Certified Local Sherpas</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
              <Compass size={13} className="text-sky-400" />
              <span>150+ Verified Trails</span>
            </span>
          </div>
          <div className="mt-7 sm:mt-9 max-w-[1080px] mx-auto relative z-50" ref={popoverRef}>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.22)] border border-white/80 p-2 sm:p-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-1.5 md:gap-0 transition-all duration-300 hover:shadow-[0_25px_70px_-12px_rgba(0,0,0,0.28)] hover:border-white">
              <div
                onClick={() => {
                  setLocationOpen(!locationOpen);
                  setDateOpen(false);
                  setCategoryOpen(false);
                  setGuestsOpen(false);
                }}
                className={`flex-1 flex items-center gap-3 px-3.5 py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-200 text-left ${
                  locationOpen ? "bg-orange-50/90 shadow-inner" : "hover:bg-slate-50/90"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={18} className="fill-orange-500 text-orange-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider leading-tight">Location</p>
                  <p className="text-[13px] font-bold text-slate-900 truncate">{destination}</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 mx-1 shrink-0" />
              <div
                onClick={() => {
                  setDateOpen(!dateOpen);
                  setLocationOpen(false);
                  setCategoryOpen(false);
                  setGuestsOpen(false);
                }}
                className={`flex-1 flex items-center gap-3 px-3.5 py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-200 text-left ${
                  dateOpen ? "bg-blue-50/90 shadow-inner" : "hover:bg-slate-50/90"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Calendar size={18} className="text-blue-600" strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider leading-tight">Travel Date</p>
                  <p className="text-[13px] font-bold text-slate-900 truncate">{travelDate}</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 mx-1 shrink-0" />
              <div
                onClick={() => {
                  setCategoryOpen(!categoryOpen);
                  setLocationOpen(false);
                  setDateOpen(false);
                  setGuestsOpen(false);
                }}
                className={`flex-1 flex items-center gap-3 px-3.5 py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-200 text-left ${
                  categoryOpen ? "bg-amber-50/90 shadow-inner" : "hover:bg-slate-50/90"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Compass size={18} className="text-amber-600" strokeWidth={2.2} />
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 mx-1 shrink-0" />
              <div
                onClick={() => {
                  setGuestsOpen(!guestsOpen);
                  setLocationOpen(false);
                  setDateOpen(false);
                  setCategoryOpen(false);
                }}
                className={`flex-1 flex items-center gap-3 px-3.5 py-2 rounded-xl md:rounded-full cursor-pointer transition-all duration-200 text-left ${
                  guestsOpen ? "bg-purple-50/90 shadow-inner" : "hover:bg-slate-50/90"
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Users size={18} className="text-purple-600" strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider leading-tight">Guests</p>
                  <p className="text-[13px] font-bold text-slate-900 truncate">
                    {guestCount.adults} adults, {guestCount.children} kids
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pl-2 pr-1 pt-1 md:pt-0 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToSection("showcase-section")}
                  className="w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="More filters"
                  title="Explore adventures"
                >
                  <SlidersHorizontal size={17} strokeWidth={2} />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("showcase-section")}
                  className="px-5 sm:px-6 h-11 sm:h-12 rounded-full bg-gradient-to-r from-[#FF8C00] via-[#F4511E] to-[#E64A19] hover:from-[#F44336] hover:to-[#FF8C00] text-white flex items-center justify-center gap-2 font-bold text-[14px] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={2.5} />
                  <span>Search</span>
                </button>
              </div>
            </div>
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-white/85 font-semibold drop-shadow-sm flex items-center gap-1">
                <Flame size={13} className="text-amber-400 fill-amber-400" /> Popular:
              </span>
              {[
                { name: "Spiti Valley", region: "Himachal" },
                { name: "Hampta Pass", region: "Trek" },
                { name: "Solang Valley", region: "Manali" },
                { name: "Leh & Pangong", region: "Ladakh" },
                { name: "Gulmarg", region: "Kashmir" },
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setDestination(item.name);
                    scrollToSection("showcase-section");
                  }}
                  className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white text-[11px] font-semibold border border-white/30 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-xs"
                >
                  {item.name}
                </button>
              ))}
            </div>
            {locationOpen && (
              <div className="absolute top-full left-0 mt-3 w-full sm:w-84 bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] border border-slate-200/90 p-4 z-[100] text-left animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Popular Destinations</span>
                  <button onClick={() => setLocationOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={15} />
                  </button>
                </div>
                <div className="mt-2 space-y-1">
                  {[
                    { name: "Manali & Solang Valley", region: "Himachal Pradesh" },
                    { name: "Spiti Valley & Kaza", region: "Himachal Pradesh" },
                    { name: "Leh, Pangong & Nubra", region: "Ladakh" },
                    { name: "Srinagar & Gulmarg", region: "Kashmir" },
                    { name: "Munnar & Alleppey", region: "Kerala" },
                  ].map((dest) => (
                    <button
                      key={dest.name}
                      type="button"
                      onClick={() => {
                        setDestination(dest.name);
                        setLocationOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-orange-50/80 text-left transition-colors cursor-pointer group"
                    >
                      <MapPin size={16} className="text-orange-500 shrink-0" />
                      <div>
                        <p className="text-[13px] font-bold text-slate-800 group-hover:text-orange-600">{dest.name}</p>
                        <p className="text-[11px] text-slate-400">{dest.region}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {dateOpen && (
              <div className="absolute top-full left-0 sm:left-44 mt-3 w-full sm:w-80 bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] border border-slate-200/90 p-4 z-[100] text-left animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Select Travel Dates</span>
                  <button onClick={() => setDateOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={15} />
                  </button>
                </div>
                <div className="mt-3 space-y-2">
                  <p className="text-[11px] font-semibold text-slate-500">Quick Presets:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {["January 16, 2024", "This Weekend", "Next Month", "Flexible Dates"].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => {
                          setTravelDate(preset);
                          setDateOpen(false);
                        }}
                        className={`p-2 text-[12px] rounded-xl font-semibold text-center border transition-colors cursor-pointer ${
                          travelDate === preset
                            ? "bg-blue-50 border-blue-400 text-blue-700"
                            : "border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">Custom Date:</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-[13px] font-medium text-slate-800 focus:outline-blue-500"
                      onChange={(e) => {
                        if (e.target.value) {
                          setTravelDate(e.target.value);
                          setDateOpen(false);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            {categoryOpen && (
              <div className="absolute top-full left-0 sm:left-88 mt-3 w-full sm:w-76 bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] border border-slate-200/90 p-3 z-[100] text-left animate-in fade-in slide-in-from-top-2 duration-150 max-h-80 overflow-y-auto">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Choose Experience</span>
                  <button onClick={() => setCategoryOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={15} />
                  </button>
                </div>
                {/* <div className="mt-2 space-y-0.5">
                  {experienceOptions.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat);
                        setCategoryOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-[13px] font-semibold transition-colors cursor-pointer ${
                        activeCategory === cat
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat}</span>
                      {activeCategory === cat && <Check size={14} className="text-blue-600" />}
                    </button>
                  ))}
                </div> */}
              </div>
            )}
            {guestsOpen && (
              <div className="absolute top-full right-0 mt-3 w-full sm:w-80 bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] border border-slate-200/90 p-4 z-[100] text-left animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Travelers & Rooms</span>
                  <button onClick={() => setGuestsOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={15} />
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-bold text-slate-800">Adults</p>
                      <p className="text-[11px] text-slate-400">Ages 13 or above</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGuestCount((g) => ({ ...g, adults: Math.max(1, g.adults - 1) }))}
                        className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-[14px] font-bold w-4 text-center">{guestCount.adults}</span>
                      <button
                        type="button"
                        onClick={() => setGuestCount((g) => ({ ...g, adults: g.adults + 1 }))}
                        className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-bold text-slate-800">Children</p>
                      <p className="text-[11px] text-slate-400">Ages 2–12</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGuestCount((g) => ({ ...g, children: Math.max(0, g.children - 1) }))}
                        className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-[14px] font-bold w-4 text-center">{guestCount.children}</span>
                      <button
                        type="button"
                        onClick={() => setGuestCount((g) => ({ ...g, children: g.children + 1 }))}
                        className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-bold text-slate-800">Rooms</p>
                      <p className="text-[11px] text-slate-400">Number of rooms</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGuestCount((g) => ({ ...g, rooms: Math.max(1, g.rooms - 1) }))}
                        className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-[14px] font-bold w-4 text-center">{guestCount.rooms}</span>
                      <button
                        type="button"
                        onClick={() => setGuestCount((g) => ({ ...g, rooms: g.rooms + 1 }))}
                        className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGuestsOpen(false)}
                    className="w-full mt-2 py-2 bg-[#FF8C00] hover:bg-[#F44336] text-white text-[13px] font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
                  >
                    Apply Travelers
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
