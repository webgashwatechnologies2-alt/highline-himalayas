"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { submitLead } from "@/lib/lead-service";
import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Flame,
  CreditCard,
  FileText,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Send,
  Plane,
  Compass,
} from "lucide-react";

// Domestic / National destinations
const nationalDestinations = [
  {
    name: "Himachal Pradesh",
    desc: "Manali, Shimla, Kasol & Rohtang Pass",
    tag: "Most Popular",
    badgeColor: "bg-amber-500",
    href: "/himachal",
    price: "From ₹On Request",
  },
  {
    name: "Spiti Valley",
    desc: "Kaza, Chandratal Lake & High Passes",
    tag: "Adventure",
    badgeColor: "bg-orange-600",
    href: "/spiti",
    price: "From ₹On Request",
  },
  {
    name: "Ladakh & Zanskar",
    desc: "Pangong Tso, Nubra Valley & Khardung La",
    tag: "Trending",
    badgeColor: "bg-blue-600",
    href: "/ladakh",
    price: "From ₹On Request",
  },
  {
    name: "Kashmir Valley",
    desc: "Srinagar, Gulmarg Gondola & Pahalgam",
    tag: "Top Rated",
    badgeColor: "bg-emerald-600",
    href: "/kashmir",
    price: "From ₹On Request",
  },
  {
    name: "Kerala Backwaters",
    desc: "Munnar Tea Hills, Alleppey Houseboat",
    tag: "Serene",
    badgeColor: "bg-teal-600",
    href: "/kerala",
    price: "From ₹On Request",
  },
];

// International destinations


export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Live countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 46,
    seconds: 25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 8, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => String(num).padStart(2, "0");

  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteError, setQuoteError] = useState("");

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteLoading(true);
    setQuoteError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const destination = formData.get("destination")?.toString().trim();
    const travelers = formData.get("travelers")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    try {
      await submitLead({
        formType: "Header - Custom Quote Request",
        name,
        phone,
        destination,
        travelers,
        message,
      });

      setQuoteSubmitted(true);
      form.reset();
      setTimeout(() => {
        setQuoteSubmitted(false);
        setQuoteModalOpen(false);
      }, 2500);
    } catch (err) {
      console.error("Quote Submit Error:", err);
      setQuoteError("Failed to submit request. Please try again.");
    } finally {
      setQuoteLoading(false);
    }
  };

  return (
    <>
      <div className="relative z-50 bg-gradient-to-r from-[#D84315] via-[#E65100] to-[#FF6B00] text-white text-xs border-b border-orange-700/20 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 py-1.5 sm:py-2.5">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase shadow-sm border border-white/25 shrink-0 animate-pulse">
                <Flame size={12} className="text-amber-200 fill-amber-300" />
                <span className="hidden xs:inline">Special </span>
                <span>Offer</span>
              </span>

              <p className="font-semibold text-[11.5px] sm:text-[13px] truncate text-white/95">
                <span className="hidden sm:inline">Himalayan Holiday Escapes — </span>
                <span>Up to </span>
                <span className="text-amber-200 font-extrabold underline decoration-amber-300 underline-offset-2">
                  35% OFF
                </span>
                <span className="hidden md:inline"> on Manali, Spiti &amp; Ladakh!</span>
              </p>
            </div>

            {/* Mobile Single-line Timer (<sm) */}
            <div className="flex sm:hidden items-center gap-1 shrink-0 bg-black/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/15">
              <Clock size={11} className="text-amber-200" />
              <span className="bg-white/20 px-1 py-0.5 rounded text-[10px] font-mono font-black text-white min-w-[18px] text-center">
                {formatDigit(timeLeft.hours)}
              </span>
              <span className="font-bold text-amber-200 text-[10px]">:</span>
              <span className="bg-white/20 px-1 py-0.5 rounded text-[10px] font-mono font-black text-white min-w-[18px] text-center">
                {formatDigit(timeLeft.minutes)}
              </span>
              <span className="font-bold text-amber-200 text-[10px]">:</span>
              <span className="bg-white/20 px-1 py-0.5 rounded text-[10px] font-mono font-black text-amber-200 min-w-[18px] text-center">
                {formatDigit(timeLeft.seconds)}
              </span>
            </div>

            {/* Tablet & Desktop Timer (sm+) */}
            <div className="hidden sm:flex items-center gap-1.5 shrink-0 bg-black/15 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
              <Clock size={13} className="text-amber-200" />
              <span className="text-[11px] uppercase font-bold text-white/90 mr-1">
                Ends In:
              </span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px] font-mono font-black text-white shadow-inner min-w-[24px] text-center">
                  {formatDigit(timeLeft.hours)}
                </span>
                <span className="text-[8px] font-bold text-amber-100/90 uppercase tracking-tighter">
                  HRS
                </span>
              </div>
              <span className="font-bold text-amber-200 text-xs">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px] font-mono font-black text-white shadow-inner min-w-[24px] text-center">
                  {formatDigit(timeLeft.minutes)}
                </span>
                <span className="text-[8px] font-bold text-amber-100/90 uppercase tracking-tighter">
                  MIN
                </span>
              </div>
              <span className="font-bold text-amber-200 text-xs">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px] font-mono font-black text-amber-200 shadow-inner min-w-[24px] text-center">
                  {formatDigit(timeLeft.seconds)}
                </span>
                <span className="text-[8px] font-bold text-amber-100/90 uppercase tracking-tighter">
                  SEC
                </span>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-4 text-[12px] font-medium">
              <a
                href="mailto:info@highlinehimalayas.com"
                className="flex items-center gap-1.5 text-white/95 hover:text-amber-200 transition-colors"
              >
                <Mail size={13} />
                <span>info@highlinehimalayas.com</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+918988449735"
                className="flex items-center gap-1.5 text-white/95 hover:text-amber-200 transition-colors"
              >
                <Phone size={13} />
                <span>+91 89884 49735</span>
              </a>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-1.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#D84315] flex items-center justify-center transition-all duration-200 text-white"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#D84315] flex items-center justify-center transition-all duration-200 text-white"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#D84315] flex items-center justify-center transition-all duration-200 text-white"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#D84315] flex items-center justify-center transition-all duration-200 text-white"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-6 h-6 rounded-full bg-white/15 hover:bg-white hover:text-[#D84315] flex items-center justify-center transition-all duration-200 text-white"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-[90] w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#FF6B00] rounded-xl hover:bg-orange-50/70 border border-slate-200/60 transition-colors cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu size={20} />
              </button>
              <Link href="/" className="flex items-center gap-3 group select-none">
                <div className="relative p-1 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50/40 border border-orange-100 shadow-sm group-hover:border-[#FF6B00]/40 transition-all">
                  <Image
                    src="/images/highline-himalaya-logo.png"
                    alt="Highline Himalayas Logo"
                    width={100}
                    height={50}
                    priority
                    className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black tracking-tight text-[#FF6B00] font-sans">
                      Highline
                    </span>
                    <span className="text-xl font-extrabold tracking-wider text-[#1565C0] font-sans">
                      HIMALAYAS
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1">
                    <span>Premium Mountain Travel</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-emerald-500"></span>
                    <span className="text-emerald-600 font-semibold">Govt. Verified</span>
                  </p>
                </div>
              </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-[13.5px] font-semibold text-slate-700 hover:text-[#FF6B00] rounded-lg hover:bg-orange-50/60 transition-colors relative group"
              >
                Home
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#FF6B00] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              <Link
                href="/about"
                className="px-3 py-2 text-[13.5px] font-semibold text-slate-700 hover:text-[#FF6B00] rounded-lg hover:bg-orange-50/60 transition-colors relative group"
              >
                About
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#FF6B00] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("national")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`px-3 py-2 text-[13.5px] font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "national"
                      ? "text-[#FF6B00] bg-orange-50/80"
                      : "text-slate-700 hover:text-[#FF6B00] hover:bg-orange-50/60"
                  }`}
                >
                  <span>National Destinations</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "national" ? "rotate-180 text-[#FF6B00]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "national" && (
                  <div className="absolute top-full left-0 pt-2 w-[520px] animate-in fade-in slide-in-from-top-2 duration-200 z-[100]">
                    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-300/60 border border-slate-200/90 p-4 overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
                          <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                            Domestic Mountain & Valley Circuits
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#FF6B00] hover:underline flex items-center gap-1 cursor-pointer">
                          View All 18 Circuits <ArrowRight size={11} />
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-1.5">
                        {nationalDestinations.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-orange-50/80 transition-all group border border-transparent hover:border-orange-100"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-orange-100/70 text-[#FF6B00] flex items-center justify-center shrink-0 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors shadow-sm">
                                <MapPin size={16} />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-[13px] font-bold text-slate-800 group-hover:text-[#FF6B00] transition-colors">
                                    {item.name}
                                  </h4>
                                  <span
                                    className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full text-white ${item.badgeColor}`}
                                  >
                                    {item.tag}
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-slate-500 font-normal">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="text-[11.5px] font-black text-[#FF6B00]">
                                {item.price}
                              </span>
                              <p className="text-[9px] text-slate-400 font-medium">per person</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50/60 p-2.5 rounded-xl">
                        <div className="flex items-center gap-2">
                          <Sparkles size={16} className="text-[#FF6B00]" />
                          <p className="text-[11.5px] font-bold text-slate-700">
                            Custom group itinerary? Get customized cab & hotel booking.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveDropdown(null);
                            setQuoteModalOpen(true);
                          }}
                          className="px-2.5 py-1 bg-[#FF6B00] text-white text-[11px] font-bold rounded-lg hover:bg-orange-600 transition-colors shrink-0 cursor-pointer"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="px-3 py-2 text-[13.5px] font-semibold text-slate-700 hover:text-[#FF6B00] rounded-lg hover:bg-orange-50/60 transition-colors relative group"
              >
                Contact Us
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#FF6B00] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </nav>
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border-1.5 border-[#FF6B00] text-[#FF6B00] bg-orange-50/40 hover:bg-[#FF6B00] hover:text-white text-[11.5px] sm:text-[13px] font-bold transition-all duration-200 shadow-sm hover:shadow-orange-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <FileText size={13} className="shrink-0 sm:w-3.5 sm:h-3.5" />
                <span>Get Quote</span>
              </button>
              <button
                type="button"
                onClick={() => setPayModalOpen(true)}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FF7A00] to-[#FFA000] hover:from-[#E65100] hover:to-[#FF6B00] text-white text-[11.5px] sm:text-[13px] font-extrabold shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <CreditCard size={13} className="shrink-0 sm:w-3.5 sm:h-3.5" />
                <span>Pay Now</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-[120] flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl p-5 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/highline-himalaya-logo.png"
                    alt="Logo"
                    width={45}
                    height={45}
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-base font-black text-[#FF6B00] leading-none">
                      Highline Himalayas
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                      Mountain Expeditions & Holidays
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wide flex items-center gap-1 text-amber-100">
                    <Flame size={13} /> Limited Offer — 35% OFF
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-black/20 px-1.5 py-0.5 rounded">
                    {formatDigit(timeLeft.hours)}:{formatDigit(timeLeft.minutes)}:
                    {formatDigit(timeLeft.seconds)}
                  </span>
                </div>
                <p className="text-[11px] text-white/90">
                  Manali, Spiti & Ladakh holiday packages are filling fast.
                </p>
              </div>
              <div className="mt-4 space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF6B00] hover:bg-orange-50/70 rounded-xl transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF6B00] hover:bg-orange-50/70 rounded-xl transition-colors"
                >
                  About Us
                </Link>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === "national" ? null : "national")
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF6B00] hover:bg-orange-50/70 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>National Destinations</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileSubmenu === "national" ? "rotate-180 text-[#FF6B00]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  {mobileSubmenu === "national" && (
                    <div className="pl-4 pr-1 py-1 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                      {nationalDestinations.map((dest) => (
                        <Link
                          key={dest.name}
                          href={dest.href}
                          onClick={() => setMobileDrawerOpen(false)}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-white text-xs font-semibold text-slate-700 hover:text-[#FF6B00] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-[#FF6B00]" />
                            <span>{dest.name}</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#FF6B00]">
                            {dest.price}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF6B00] hover:bg-orange-50/70 rounded-xl transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl border-1.5 border-[#FF6B00] text-[#FF6B00] bg-orange-50 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Get Quote</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    setPayModalOpen(true);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFA000] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <CreditCard size={14} />
                  <span>Pay Now</span>
                </button>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1">
                <p className="font-bold text-slate-700">Need Immediate Help?</p>
                <a
                  href="tel:+918988449735"
                  className="flex items-center gap-1.5 text-[#FF6B00] font-semibold"
                >
                  <Phone size={12} /> +91 89884 49735
                </a>
                <a
                  href="mailto:info@highlinehimalayas.com"
                  className="flex items-center gap-1.5 text-slate-500 font-medium"
                >
                  <Mail size={12} /> info@highlinehimalayas.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF6B00] to-[#FFA000] p-4 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FileText size={18} />
                  <h3 className="text-base font-black tracking-tight">Request a Custom Quote</h3>
                </div>
                <p className="text-xs text-orange-100 mt-0.5">
                  Get best prices, itinerary advice & seasonal discounts in 15 minutes!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setQuoteModalOpen(false)}
                className="p-1 rounded-lg bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            {quoteSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-lg font-black text-slate-800">Quote Request Received!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our Himalayan destination specialist will contact you shortly with the best
                  discounted itinerary.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="p-5 space-y-3.5">
                {quoteError && (
                  <p className="text-red-500 text-xs font-bold">{quoteError}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Destination
                    </label>
                    <select
                      name="destination"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00] bg-white text-slate-700"
                    >
                      <option>Manali & Rohtang Pass</option>
                      <option>Spiti Valley Circuit</option>
                      <option>Ladakh & Pangong Lake</option>
                      <option>Kashmir & Gulmarg</option>
                      <option>Kerala Backwaters</option>
                      <option>Dubai & UAE</option>
                      <option>Bali, Indonesia</option>
                      <option>Other / Customized</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Number of Travelers
                    </label>
                    <select
                      name="travelers"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00] bg-white text-slate-700"
                    >
                      <option>2 Persons (Couple)</option>
                      <option>3 - 5 Persons (Family/Friends)</option>
                      <option>6 - 12 Persons (Group)</option>
                      <option>Solo Traveler</option>
                      <option>Corporate / 12+ Persons</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    name="message"
                    placeholder="Preferred travel dates, hotel category (3-star / 4-star / luxury), tempo traveler or cab type..."
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>Zero spam. 100% verified rates.</span>
                  </div>
                  <button
                    type="submit"
                    disabled={quoteLoading}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#FF6B00] to-[#FFA000] text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={13} />
                    <span>{quoteLoading ? "Sending..." : "Submit & Get Quote"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      {payModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-[#FF6B00] flex items-center justify-center border border-orange-500/30">
                  <CreditCard size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-black">Highline Himalayas Express Pay</h3>
                  <p className="text-[10px] text-slate-400">Secure 256-bit SSL Encrypted Portal</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPayModalOpen(false)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p>
                  Pay your booking advance token or balance securely through UPI, Debit/Credit
                  Cards, or NetBanking. Instant e-receipt will be shared immediately.
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Booking Reference / Quotation ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HH-2026-MANALI-01 or Phone number"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Amount to Pay (INR ₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount (e.g. 5000 for token)"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Direct Official UPI ID
                  </label>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                    <span>highlinehimalayas@hdfcbank</span>
                    <button
                      type="button"
                      onClick={() => alert("UPI ID copied to clipboard!")}
                      className="text-[11px] font-sans font-bold text-[#FF6B00] hover:underline cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/918988449735?text=Hello%20Highline%20Himalayas,%20I%20want%20to%20make%20a%20package%20payment"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Phone size={13} />
                  <span>Connect with Accounts via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
