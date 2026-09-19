"use client";

import { useState } from "react";
import { submitLead } from "@/lib/lead-service";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Star, Clock3, CheckCircle2, XCircle, Bed, UtensilsCrossed,
  Car, Camera, ChevronDown, ChevronUp, Phone, Users, User,
  Shield, Award, Headphones, PhoneCall, ArrowRight,
  Mountain, Sparkles, Share2, Heart, MessageCircle,
} from "lucide-react";
import {
  getDestinationLabel,
  type TourPackage,
} from "@/lib/packages-data";

async function sharePackage(pkg: TourPackage) {
  if (typeof window === "undefined") return;

  const url = `${window.location.origin}${window.location.pathname}`;

  const shareData = {
    title: pkg.title,
    text: `Check out this travel package: ${pkg.title}`,
    url,
  };

  try {
    if (
      navigator.share &&
      (!navigator.canShare || navigator.canShare(shareData))
    ) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(url);
    alert("Package link copied successfully!");
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      alert("Package link copied successfully!");
    } catch {
      alert("Unable to share this package. Please copy the URL manually.");
    }
  }
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Day Plan" },
  // { id: "hotels", label: "Hotels & Stay" },
  { id: "transfers", label: "Transfers" },
  { id: "inclusions", label: "Inclusions" },
  { id: "policies", label: "Policies" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const INCLUDE_MAP: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  stay: {
    label: "Stay",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  meals: {
    label: "Meals",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  car: {
    label: "Transport",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  bike: {
    label: "Bike",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  sightseeing: {
    label: "Sightseeing",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  flights: {
    label: "Flights",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  guide: {
    label: "Guide",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  backup: {
    label: "Backup Support",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
};

const INCLUDE_ICONS: Record<string, React.ReactNode> = {
  stay: <Bed size={14} />,
  meals: <UtensilsCrossed size={14} />,
  car: <Car size={14} />,
  bike: <Mountain size={14} />,
  sightseeing: <Camera size={14} />,
  flights: <Mountain size={14} />,
  guide: <Users size={14} />,
  backup: <Shield size={14} />,
};

// ─── BOOKING SIDEBAR ─────────────────────────────────────────────────────────
function BookingSidebar({ pkg }: { pkg: TourPackage }) {
  const [travelers, setTravelers] = useState(2);
  const [wished, setWished] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      await submitLead({
        formType: `Package Booking Form - ${pkg.title}`,
        name,
        phone,
        packageName: pkg.title,
        packageRoute: pkg.route,
        packagePrice: pkg.price,
        destination: pkg.destination,
        travelers,
      });
      setStatus("success");
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(15,23,42,0.15)] border border-slate-200/60">
      <div
        className="px-6 py-5 relative overflow-hidden"
        style={{ background: "#FF8C00" }}
      >
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-white/5" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={12} className="text-white/70" />
            <span className="text-white/70 text-[10px] font-black uppercase tracking-widest">Limited Offer</span>
          </div>
          <p className="text-white text-[28px] font-black leading-none mb-1">{pkg.price}</p>
          <p className="text-white/60 text-[11px]">Per person · Inclusive of all taxes</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="bg-white/20 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
              {pkg.discount}
            </span>
            <div className="flex items-center gap-1">
              <Star size={11} className="fill-amber-300 text-amber-300" />
              <span className="text-white text-[11px] font-bold">{pkg.rating} ({pkg.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-5 space-y-3">
        {status === "success" && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs text-center font-bold">
            Booking inquiry sent! Our specialist will call you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs text-center font-bold">
            Failed to send inquiry. Please try again.
          </div>
        )}
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Travelers</label>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${pkg.primaryColor}18` }}>
              <Users size={12} style={{ color: pkg.primaryColor }} />
            </div>
            <button type="button" onClick={() => setTravelers((p) => Math.max(1, p - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-black flex items-center justify-center text-base leading-none transition-all hover:text-white cursor-pointer"
              style={{ ["--hover-bg" as string]: pkg.primaryColor }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = pkg.primaryColor; (e.currentTarget as HTMLButtonElement).style.borderColor = pkg.primaryColor; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0"; }}>
              −
            </button>
            <span className="flex-1 text-center text-sm font-black text-slate-800">{travelers}</span>
            <button type="button" onClick={() => setTravelers((p) => p + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-black flex items-center justify-center text-base leading-none transition-all cursor-pointer"
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = pkg.primaryColor; (e.currentTarget as HTMLButtonElement).style.borderColor = pkg.primaryColor; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0"; (e.currentTarget as HTMLButtonElement).style.color = "#1e293b"; }}>
              +
            </button>
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Your Name</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${pkg.primaryColor}18` }}>
              <User size={12} style={{ color: pkg.primaryColor }} />
            </div>
            <input
              required
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none transition-all placeholder-slate-400"
              style={{ ["--focus-border" as string]: pkg.primaryColor }}
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Phone Number</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${pkg.primaryColor}18` }}>
              <Phone size={12} style={{ color: pkg.primaryColor }} />
            </div>
            <input
              required
              type="tel"
              placeholder="+91-0000-000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none transition-all placeholder-slate-400"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-2xl text-white text-[13px] font-black tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ background: "#FF8C00" }}
        >
          {loading ? "PROCESSING..." : "🚀 PROCEED TO BOOK ONLINE"}
        </button>

        <div className="flex gap-2">
          <button type="button"
            className="flex-1 py-2.5 rounded-2xl border-2 text-[11px] font-black flex items-center justify-center gap-1.5 transition-all"
            style={{ borderColor: pkg.primaryColor, color: pkg.primaryColor }}>
            <MessageCircle size={12} /> Whatsapp
          </button>
          <button type="button"
            className="flex-1 py-2.5 rounded-2xl border-2 text-[11px] font-black flex items-center justify-center gap-1.5 transition-all"
            style={{ borderColor: pkg.accentColor, color: pkg.accentColor }}>
            <PhoneCall size={12} /> Call Expert
          </button>
        </div>
        <div className="flex items-center justify-between pt-1">
          {[
            { icon: <Shield size={10} className="text-emerald-500" />, label: "Free Cancel" },
            { icon: <Award size={10} className="text-amber-500" />, label: "Best Price" },
            { icon: <Headphones size={10} className="text-blue-500" />, label: "24/7 Help" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold">
              {t.icon} {t.label}
            </div>
          ))}
        </div>
      </form>
      <div className="bg-slate-50 px-5 py-3 flex items-center justify-between border-t border-slate-100">
        <button type="button" onClick={() => setWished((w) => !w)}
          className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-red-500 transition-colors">
          <Heart size={13} className={wished ? "fill-red-500 text-red-500" : ""} />
          {wished ? "Saved" : "Save"}
        </button>
        <button type="button" onClick={() => sharePackage(pkg)} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-800 transition-colors">
          <Share2 size={13} /> Share
        </button>
      </div>
    </div>
  );
}

function AccordionItem({ title, content, defaultOpen = false }: { title: string; content: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button type="button" onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-colors text-left">
        <span className="text-[13px] font-black text-slate-800">{title}</span>
        {open ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 py-4 bg-white border-t border-slate-100">
          <p className="text-[13px] text-slate-600 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
}
function SectionHeading({ emoji, title, color }: { emoji: string; title: string; color: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-lg">{emoji}</span>
      <h2 className="text-[17px] font-black text-slate-900">{title}</h2>
      <div className="flex-1 h-px bg-slate-100 ml-2" />
    </div>
  );
}
export default function PackageDetailClient({ pkg }: { pkg: TourPackage }) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [activeImage, setActiveImage] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(1);

  const allImages = [pkg.image];
  const destLabel = getDestinationLabel(pkg.destination);

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      <div className="bg-white border-b border-slate-100 relative z-10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 flex-wrap">
            <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href={`/${pkg.destination}`} className="hover:text-slate-800 transition-colors capitalize">{destLabel}</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 line-clamp-1 max-w-[220px]">{pkg.title}</span>
          </nav>
          <div className="flex items-center gap-3 ml-auto shrink-0">
            <div className="hidden md:flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <Star size={11} className="fill-amber-400 text-amber-400" /> {pkg.rating} ({pkg.reviews})
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-slate-100 rounded-full px-3 py-1">
              <Clock3 size={11} className="text-slate-500" /> {pkg.nights} / {pkg.days}
            </div>
            <button type="button" onClick={() => sharePackage(pkg)} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-800 transition-colors border border-slate-200 rounded-full px-3 py-1.5">
              <Share2 size={12} /> Share
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider"
              style={{ background: pkg.badgeGrad }}>
              {pkg.badge}
            </span>
            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${pkg.tagColor}`}>
              {pkg.tag}
            </span>
            <span className="text-slate-400 text-xs">·</span>
            <span className="text-slate-500 text-xs font-semibold">{pkg.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
            {pkg.title}
          </h1>
          <p className="text-slate-500 text-sm font-medium mb-3">{pkg.subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 font-semibold">
              <MapPin size={13} style={{ color: pkg.primaryColor }} />
              <span>{pkg.route}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 font-semibold">
              <Clock3 size={13} style={{ color: pkg.primaryColor }} />
              <span>{pkg.nights} / {pkg.days}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 font-semibold">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>{pkg.rating} · {pkg.reviews} verified reviews</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-7 items-start">
          <div className="flex-1 min-w-0">
            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-200">
              <div className="relative h-[280px] sm:h-[380px] md:h-[440px] w-full">
                <Image
                  key={activeImage}
                  src={allImages[activeImage]}
                  alt={pkg.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 860px"
                  className="object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {pkg.includes?.map((inc) => {
                    const info = INCLUDE_MAP[inc];
                    if (!info) return null;
                    return (
                      <div
                        key={inc}
                        className={`flex items-center gap-1.5 ${info.bg} ${info.color} text-[10px] font-black px-2.5 py-1 rounded-full backdrop-blur-md shadow`}
                      >
                        {INCLUDE_ICONS[inc] ?? null}
                        {info.label}
                      </div>
                    );
                  })}
                </div>
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2 p-3 bg-white border-t border-slate-100">
                  {allImages.map((img, i) => (
                    <button key={i} type="button" onClick={() => setActiveImage(i)}
                      className={`relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${i === activeImage ? "border-current shadow-md scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
                      style={{ borderColor: i === activeImage ? pkg.primaryColor : undefined }}>
                      <Image src={img} alt={`View ${i + 1}`} fill sizes="64px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="sticky top-[57px] z-30 bg-[#F8FAFC] pb-3 mb-5">
              <div className="flex gap-1 overflow-x-auto no-scrollbar bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm">
                {TABS.map((tab) => (
                  <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-[13px] font-black whitespace-nowrap transition-all ${activeTab === tab.id ? "text-white shadow-md" : "text-slate-500 hover:text-slate-800"
                      }`}
                    style={activeTab === tab.id ? { background: "#FF8C00" } : undefined}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Tour Overview */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                  <SectionHeading emoji="🗺️" title="Tour Overview & Key Highlights" color={pkg.primaryColor} />
                  <p className="text-[14px] text-slate-600 leading-7 mb-6">{pkg.overview}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${pkg.primaryColor}18` }}>
                          <CheckCircle2 size={13} style={{ color: pkg.primaryColor }} strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] text-slate-700 font-medium leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Duration", value: `${pkg.nights} / ${pkg.days}`, icon: <Clock3 size={18} /> },
                    { label: "Destination", value: destLabel, icon: <MapPin size={18} /> },
                    { label: "Rating", value: `${pkg.rating}★ (${pkg.reviews})`, icon: <Star size={18} className="fill-amber-400 text-amber-400" /> },
                    { label: "Group Size", value: "2–15 pax", icon: <Users size={18} /> },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col items-center gap-2 text-center">
                      <div style={{ color: pkg.primaryColor }}>{item.icon}</div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-[12px] font-black text-slate-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "itinerary" && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <SectionHeading emoji="📅" title="Day-by-Day Detailed Itinerary" color={pkg.primaryColor} />
                  <button type="button" onClick={() => setOpenDay(openDay === null ? 1 : null)}
                    className="text-[10px] font-black uppercase tracking-widest shrink-0"
                    style={{ color: pkg.primaryColor }}>
                    {openDay !== null ? "Collapse All" : "Expand All"}
                  </button>
                </div>
                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day}
                      className="border border-slate-200 rounded-2xl overflow-hidden hover:border-current transition-colors"
                      style={{ ["--hover-color" as string]: pkg.primaryColor }}>
                      <button type="button"
                        onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors text-left">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white text-[11px] font-black shadow-md"
                          style={{ background: "#FF8C00" }}
                        >
                          {day.day}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[16px] font-black text-slate-800">Day {day.day}: {day.title}</p>
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">Overnight: {day.overnight} · {day.meals}</p>
                        </div>
                        {openDay === day.day
                          ? <ChevronUp size={15} className="text-slate-400 shrink-0" />
                          : <ChevronDown size={15} className="text-slate-400 shrink-0" />}
                      </button>
                      {openDay === day.day && (
                        <div className="px-5 pb-5 border-t border-slate-100 bg-white">
                          <p className="text-[13px] text-slate-600 leading-7 mt-4">{day.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="flex items-center gap-1 text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
                              <UtensilsCrossed size={9} /> {day.meals}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                              <Bed size={9} /> {day.overnight}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* {activeTab === "hotels" && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <SectionHeading emoji="🏨" title="Hotels & Accommodations" color={pkg.primaryColor} />
                <p className="text-[12px] text-slate-500 mb-5 -mt-2">
                  All hotels are selected for high hygiene standards, scenic views, and prime connectivity.
                </p>
                <div className="space-y-4">
                  {pkg.hotels.map((hotel, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all">
                      <div className="w-full sm:w-32 h-24 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shrink-0 overflow-hidden">
                        <Bed size={28} className="text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="text-[14px] font-black text-slate-900">{hotel.name}</p>
                            <p className="text-[11px] text-slate-500 font-medium">{hotel.type}</p>
                          </div>
                          <div className="flex items-center gap-0.5 shrink-0">
                            {Array.from({ length: hotel.stars }).map((_, s) => (
                              <Star key={s} size={11} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {hotel.amenities.map((am, j) => (
                            <span key={j} className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                              {am}
                            </span>
                          ))}
                        </div>
                        <p className="text-[10px] text-slate-400 font-semibold mt-2 uppercase tracking-wide">
                          Included Meal Plan (MAP) · Breakfast & Dinner
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
            {activeTab === "transfers" && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <SectionHeading emoji="🚗" title="Transfers & Sightseeing Cab" color={pkg.primaryColor} />
                <p className="text-[14px] text-slate-600 leading-7 mb-6">{pkg.transferInfo}</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: "Private AC Vehicle", desc: "Dedicated cab for entire trip", icon: <Car size={20} /> },
                    { title: "All Inclusive Driving", desc: "Fuel, toll & parking charges", icon: <MapPin size={20} /> },
                    { title: "Verified Driver", desc: "10+ years mountain road experience", icon: <Shield size={20} /> },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 bg-slate-50 text-center">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${pkg.primaryColor}15`, color: pkg.primaryColor }}>
                        {item.icon}
                      </div>
                      <p className="text-[12px] font-black text-slate-800">{item.title}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "inclusions" && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <SectionHeading emoji="✅" title="What&apos;s Included in This Package" color={pkg.primaryColor} />
                <div className="grid sm:grid-cols-2 gap-2 mb-8">
                  {pkg.included.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-[13px] text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <SectionHeading emoji="❌" title="What&apos;s Excluded" color="#ef4444" />
                <div className="grid sm:grid-cols-2 gap-2">
                  {pkg.excluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-100">
                      <XCircle size={14} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-[13px] text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "policies" && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                <SectionHeading emoji="📋" title="Important Policies & Terms" color={pkg.primaryColor} />
                <div className="space-y-3">
                  {pkg.policies.map((policy, i) => (
                    <AccordionItem key={i} title={policy.title} content={policy.content} defaultOpen={i === 0} />
                  ))}
                </div>
              </div>
            )}
            <div className="mt-6 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ background: `linear-gradient(135deg, ${pkg.primaryColor}12, ${pkg.accentColor}12)`, border: `1px solid ${pkg.primaryColor}20` }}>
              <div>
                <p className="text-[15px] font-black text-slate-900">Ready to book this trip?</p>
                <p className="text-[12px] text-slate-500 font-medium">Get personalised quote · Free itinerary planning</p>
              </div>
              <button type="button"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-white text-[13px] font-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
                style={{ background: "#FF8C00" }}>
                Get Custom Quote <ArrowRight size={14} strokeWidth={3} />
              </button>
            </div>
          </div>
          <aside className="w-full xl:w-[320px] shrink-0">
            <div className="sticky top-20 space-y-4">
              <BookingSidebar pkg={pkg} />
              <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">Need Assistance?</p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ background: "#FF8C00" }}>
                    <Headphones size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[12px] font-black text-slate-900">Talk to an Expert</p>
                    <p className="text-[10px] text-slate-400">Available 9AM – 9PM daily</p>
                  </div>
                </div>
                <a href="tel:+91898849735"
                  className="block w-full text-center py-2.5 rounded-xl text-[12px] font-black transition-all border-2 hover:text-white"
                  style={{ borderColor: pkg.primaryColor, color: pkg.primaryColor }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = pkg.primaryColor; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = pkg.primaryColor; }}>
                  +91898849735
                </a>
              </div>
              <Link href={`/${pkg.destination}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border-2 border-slate-200 text-slate-600 text-[12px] font-black hover:border-slate-400 hover:text-slate-900 transition-all">
                ← More {destLabel} Packages
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
