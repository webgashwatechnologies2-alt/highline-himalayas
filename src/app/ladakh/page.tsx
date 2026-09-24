"use client";

import { useState, type ReactNode } from "react";
import { submitLead } from "@/lib/lead-service";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "../components/EnquiryModal";
import {
  MapPin, Star, ArrowRight, Clock3, Mountain, CheckCircle2,
  Car, Phone, User, Users, ChevronDown, Bed, UtensilsCrossed,
  Camera, Percent, MessageCircle, Sparkles, Shield, Award,
  Headphones, TrendingUp, Filter, Heart, PhoneCall,
  Compass, Zap, Wind,
} from "lucide-react";

import { allPackages } from "../../lib/packages-data";

const packages = allPackages.filter(pkg => pkg.destination === "ladakh");

const FILTERS = [
  { id: "all", label: "All Packages" },
  { id: "family", label: "Family" },
  { id: "adventure", label: "Adventure" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "group", label: "Group" },
  { id: "culture", label: "Culture" },
];

function IncludeIcon({ type }: { type: string }) {
  const map: Record<string, { icon: ReactNode; label: string; color: string }> = {
    stay: { icon: <Bed size={11} strokeWidth={2.5} />, label: "Stay", color: "text-blue-600 bg-blue-50" },
    meals: { icon: <UtensilsCrossed size={11} strokeWidth={2.5} />, label: "Meals", color: "text-orange-600 bg-orange-50" },
    car: { icon: <Car size={11} strokeWidth={2.5} />, label: "4WD Car", color: "text-amber-600 bg-amber-50" },
    sightseeing: { icon: <Camera size={11} strokeWidth={2.5} />, label: "Sightseeing", color: "text-purple-600 bg-purple-50" },
  };
  const item = map[type];
  if (!item) return null;
  return (
    <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${item.color}`}>
      {item.icon} {item.label}
    </div>
  );
}

function BookingForm() {
  const [travelers, setTravelers] = useState(2);
  const [destination, setDestination] = useState("Ladakh Full Circuit");
  const [departureCity, setDepartureCity] = useState("Delhi (NCR)");
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
        formType: "Ladakh Expedition Booking Form",
        name,
        phone,
        destination,
        departureCity,
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
    <div className="lg:sticky lg:top-24 rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(30,64,175,0.18)] border border-[#F44336]/15">
      <div className="relative bg-gradient-to-br from-[#FF8C00] via-[#FF8C00] to-[#F44336] px-6 py-5 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-2 w-16 h-16 rounded-full bg-white/5" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center">
              <Wind size={13} className="text-amber-200" />
            </div>
            <span className="text-amber-200 text-[11px] font-black uppercase tracking-widest">Ladakh Expedition</span>
          </div>
          <p className="text-white font-bold text-[15px] leading-tight">Plan Your Land of High Passes Trip</p>
          <p className="text-white/65 text-[11px] mt-0.5">Quick &amp; Hassle Free Enquiry</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white px-5 py-5 space-y-3.5">
        {status === "success" && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs text-center font-bold">
            Booking inquiry sent! We will contact you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs text-center font-bold">
            Failed to send inquiry. Please try again.
          </div>
        )}
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Destination</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center">
              <MapPin size={12} className="text-[#1E40AF]" />
            </div>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all cursor-pointer"
            >
              <option>Ladakh Full Circuit</option>
              <option>Leh City</option>
              <option>Pangong Tso</option>
              <option>Nubra Valley</option>
              <option>Tso Moriri</option>
              <option>Zanskar Valley</option>
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Departure City</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center">
              <TrendingUp size={12} className="text-[#1E40AF]" />
            </div>
            <select
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all cursor-pointer"
            >
              <option>Delhi (NCR)</option>
              <option>Manali</option>
              <option>Chandigarh</option>
              <option>Mumbai</option>
              <option>Srinagar</option>
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Your Name</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center">
              <User size={12} className="text-[#1E40AF]" />
            </div>
            <input
              required
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all placeholder-slate-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Phone Number</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center">
              <Phone size={12} className="text-[#1E40AF]" />
            </div>
            <input
              required
              type="tel"
              placeholder="+91-0000-000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all placeholder-slate-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Travelers</label>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 gap-3">
            <div className="w-6 h-6 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center shrink-0">
              <Users size={12} className="text-[#1E40AF]" />
            </div>
            <button type="button" onClick={() => setTravelers((p) => Math.max(1, p - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-all text-base leading-none cursor-pointer">−</button>
            <span className="flex-1 text-center text-sm font-black text-slate-800">{travelers}</span>
            <button type="button" onClick={() => setTravelers((p) => p + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-all text-base leading-none cursor-pointer">+</button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF8C00] to-[#F44336] text-white text-[13px] font-black tracking-wide shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "SENDING..." : "🏔️ PLAN MY LADAKH TRIP"}
        </button>
        <a
          href="https://wa.me/918988449735?text=Hello%20Highline%20Himalayas,%20I%20want%20to%20enquire%20about%20Ladakh%20packages"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2.5 rounded-2xl border-2 border-[#1E40AF] text-[#1E40AF] text-[11px] font-black tracking-wide flex items-center justify-center gap-2 hover:bg-[#1E40AF] hover:text-white transition-all cursor-pointer"
        >
          <PhoneCall size={13} /> Call Our Expert
        </a>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Shield size={10} className="text-emerald-500" /> Free Cancel</div>
          <div className="w-px h-3 bg-slate-200 hidden xs:block" />
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Award size={10} className="text-amber-500" /> Best Price</div>
          <div className="w-px h-3 bg-slate-200 hidden xs:block" />
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Headphones size={10} className="text-blue-500" /> 24/7 Support</div>
        </div>
      </form>

      <div className="mt-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-3">
        <p className="text-[12px] font-black text-slate-800 mb-2">Why Book With Us?</p>
        {[
          { icon: <Shield size={14} className="text-emerald-500" />, text: "Free Cancellation Policy" },
          { icon: <Award size={14} className="text-amber-500" />, text: "Best Price Guaranteed" },
          { icon: <Headphones size={14} className="text-blue-500" />, text: "24/7 Expert Support" },
          { icon: <Compass size={14} className="text-indigo-500" />, text: "Experienced Mountain Guides" },
          { icon: <Zap size={14} className="text-amber-500" />, text: "4WD Vehicles + Oxygen Cylinders" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">{item.icon}</div>
            <span className="text-[11px] font-semibold text-slate-600">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-4 bg-gradient-to-br from-[#1E40AF]/5 to-[#D97706]/5 border border-[#1E40AF]/15 rounded-3xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#D97706] flex items-center justify-center shadow-lg">
            <PhoneCall size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[12px] font-black text-slate-900">Need Help?</p>
            <p className="text-[10px] text-slate-500 font-medium">Talk to our Ladakh expert</p>
          </div>
        </div>
        <a href="tel:+91898849735"
          className="block w-full text-center py-2.5 rounded-xl bg-white border-2 border-[#1E40AF] text-[#1E40AF] text-[12px] font-black hover:bg-[#1E40AF] hover:text-white transition-all">
          +91 898849735
        </a>
      </div>
    </div>
  );
}

function PackageCard({
  pkg,
  onEnquire,
}: {
  pkg: typeof allPackages[number];
  onEnquire: (pkg: typeof allPackages[number]) => void;
}) {
  const [wished, setWished] = useState(false);
  return (
    <article className="group relative isolate flex flex-col sm:flex-row bg-white rounded-3xl border border-slate-100/80 shadow-[0_2px_20px_rgba(15,23,42,0.06)] sm:hover:shadow-[0_16px_48px_rgba(15,23,42,0.14)] sm:hover:-translate-y-1 transition-all duration-300 overflow-hidden max-w-full">      <div className="relative w-full sm:w-[210px] md:w-[230px] shrink-0 h-[200px] sm:min-h-[260px] sm:h-auto sm:self-stretch overflow-hidden bg-slate-100">
      <Image src={pkg.image} alt={pkg.title} fill sizes="(max-width: 640px) 100vw, 230px"
        className="object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      <div className="absolute top-3 left-3">
        <div className="flex items-center gap-1 bg-[#FF8C00] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg shadow-orange-400/30">
          <Percent size={8} strokeWidth={3} /> {pkg.discount}
        </div>
      </div>
      <button type="button" onClick={() => setWished((w) => !w)}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-all">
        <Heart size={14} className={wished ? "fill-red-500 text-red-500" : "text-slate-400"} />
      </button>
      <div className="absolute top-12 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-full">
        <Star size={9} className="fill-amber-400 text-amber-400" /> {pkg.rating}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full">
          <Clock3 size={10} className="text-amber-400" /> {pkg.nights} / {pkg.days}
        </div>
        <div className="flex items-center gap-1 text-white text-[10px] font-semibold drop-shadow">
          <MapPin size={10} className="text-amber-400 shrink-0" />
          <span className="truncate max-w-[100px]">{pkg.route.split("→")[0].trim()}</span>
        </div>
      </div>
    </div>
      <div className="flex flex-1 flex-col sm:flex-row min-w-0">
        <div className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 min-w-0">
          <span className={`inline-flex items-center text-[10px] font-black px-2.5 py-0.5 rounded-full border ${pkg.tagColor} mb-2`}>{pkg.tag}</span>
          <h3 className="text-[17px] sm:text-[20px] font-black leading-tight text-slate-900 group-hover:text-[#1E40AF] transition-colors duration-200 mb-1.5 line-clamp-2 sm:line-clamp-1">{pkg.title}</h3>
          <div className="flex items-center gap-1.5 mt-2 sm:mt-3">
            <div className="inline-flex max-w-full items-center gap-1 text-[#1E40AF] bg-blue-50 rounded-full px-2.5 py-1.5 sm:py-2 text-[10px] font-bold">
              <MapPin size={10} strokeWidth={2.5} className="shrink-0" />
              <span className="truncate">{pkg.route}</span>
            </div>
          </div>
          <ul className="space-y-1.5 mb-4 sm:mb-6 mt-3 sm:mt-6">
            {pkg.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-slate-600 leading-tight">
                <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#D97706]" strokeWidth={2.5} /> {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">{pkg.includes.map((inc) => <IncludeIcon key={inc} type={inc} />)}</div>
        </div>
        <div className="flex flex-col sm:flex-col justify-between sm:justify-center gap-2.5 px-4 py-3 sm:px-4 sm:py-4 sm:w-[165px] border-t sm:border-t-0 sm:border-l border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 shrink-0">
          <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-2">
            <span className={`text-white text-[9px] font-black uppercase tracking-wide px-3 py-1 rounded-full bg-gradient-to-r ${pkg.badgeGrad} shadow-sm text-center`}>{pkg.badge}</span>
            <div className="text-right sm:text-center">
              <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wide hidden sm:block mb-0.5">Starting From</p>
              <p className="text-[13px] font-black text-[#1E40AF] leading-tight">{pkg.price}</p>
            </div>
            <div className="hidden sm:flex items-center justify-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={9} className={s <= Math.round(pkg.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300 fill-slate-200"} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 w-full sm:mt-1">
            <Link href={`/packages/${pkg.id}`}
              className="flex items-center justify-center gap-1 h-9 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#F44336] text-white text-[10px] sm:text-[11px] font-black shadow-md shadow-blue-200 hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all w-full text-center">
              GET DETAILS <ArrowRight size={10} strokeWidth={3} />
            </Link>
            <button type="button"
              onClick={() => onEnquire(pkg)}
              className="flex items-center justify-center gap-1 h-9 rounded-xl border-2 border-[#1E40AF]/60 text-[#1E40AF] text-[10px] sm:text-[11px] font-black hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-all w-full cursor-pointer">
              <MessageCircle size={10} /> ENQUIRE
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function TrustBadge({ icon, iconClassName, children }: { icon: ReactNode; iconClassName?: string; children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-lg">
      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${iconClassName || "bg-white/15"}`}>{icon}</span>
      {children}
    </div>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1 px-2 sm:px-6 py-3.5 sm:py-4">
      <div className="text-[#1E40AF] mb-0.5 sm:mb-1">{icon}</div>
      <div className="text-xl sm:text-2xl font-black text-slate-900">{value}</div>
      <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 text-center">{label}</div>
    </div>
  );
}

export default function Ladakh() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPackage, setSelectedPackage] =
    useState<typeof allPackages[number] | null>(null);
  const filtered = activeFilter === "all" ? packages : packages.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative isolate w-full min-h-[420px] sm:min-h-[540px] overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[#0c1445]">
          <Image
            src="/images/packagesimages/lehhh.webp"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/35" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#2563EB]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full bg-[#D97706]/20 blur-3xl pointer-events-none" />

        <div className="mx-auto flex min-h-[420px] sm:min-h-[540px] max-w-[1400px] items-center justify-center px-4 pt-16 pb-24 sm:py-20 sm:px-6 lg:px-10">          <div className="w-full max-w-[860px] text-center">
          <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6 flex justify-center">
            <ol className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3.5 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold text-white shadow-lg max-w-full text-center">
              <li><Link href="/" className="hover:text-[#FF8C00] transition-colors">Home</Link></li>
              <li className="text-white/40">/</li>
              <li><Link href="" className="hover:text-[#FF8C00] transition-colors">National Destinations</Link></li>
              <li className="text-white/40">/</li>
              <li className="flex items-center gap-1 text-[#F59E0B]" aria-current="page">
                <Mountain size={12} /> Ladakh
              </li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3.5 sm:px-4 py-1.5 mb-4 sm:mb-5">
            <Sparkles size={13} className="text-amber-300" />
            <span className="text-white/90 text-[11px] sm:text-[12px] font-bold tracking-wider uppercase">Explore the Land of High Passes</span>
          </div>
          <h1 className="text-[28px] sm:text-5xl md:text-[58px] font-black leading-tight sm:leading-[1.0] tracking-[-0.02em] sm:tracking-[-0.03em] text-white mb-4 sm:mb-5 px-1">            Ladakh{" "}
            <span className="bg-gradient-to-r from-[#FF8C00] via-[#FF8C00] to-[#F44336] bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h1>
          <p className="mx-auto max-w-[640px] text-[13px] sm:text-[15px] leading-relaxed sm:leading-7 text-white/85 mb-6 sm:mb-8 px-2 sm:px-0">
            Turquoise Pangong Lake, dramatic Nubra Desert, ancient monasteries & the world&apos;s highest motorable passes.
            The ultimate frontier adventure awaits you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <TrustBadge icon={<CheckCircle2 size={13} strokeWidth={3} />} iconClassName="bg-[#FF8C00] text-white">8 Packages</TrustBadge>
            <TrustBadge icon={<Star size={13} className="fill-amber-300 text-amber-300" />}>4.9 / 5 Rated</TrustBadge>
            <TrustBadge icon={<Shield size={13} className="text-amber-300" />}>100% Safe Travel</TrustBadge>
            <TrustBadge icon={<Headphones size={13} className="text-blue-300" />}>24/7 Support</TrustBadge>
          </div>
        </div>
        </div>
      </section>

      {/* ── STAT BAR ──────────────────────────────────────────────── */}
      <section className="relative z-[1] -mt-14 sm:-mt-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(15,23,42,0.10)] border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100">
              <StatCard value="600+" label="Happy Travelers" icon={<Users size={22} />} />
              <StatCard value="4.9★" label="Average Rating" icon={<Star size={22} className="fill-amber-400 text-amber-400" />} />
              <StatCard value="8" label="Tour Packages" icon={<Mountain size={22} />} />
              <StatCard value="24/7" label="Customer Support" icon={<Headphones size={22} />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES + SIDEBAR ───────────────────────────────────── */}
      <section className="relative z-0 w-full pt-8 pb-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[#D97706] font-black text-[11px] tracking-widest uppercase mb-1">
                    <Sparkles size={12} /> Curated For You
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 break-words">
                    Top Packages in <span className="text-[#1E40AF]">Ladakh</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Filter size={14} className="text-slate-400" />
                  <span className="text-[11px] font-bold text-slate-400">{filtered.length} of {packages.length} packages</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7">
                {FILTERS.map((f) => (
                  <button key={f.id} type="button" onClick={() => setActiveFilter(f.id)}
                    className={`shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black border transition-all cursor-pointer ${activeFilter === f.id
                      ? "bg-[#FF8C00] text-white border-[#F44336] shadow-md shadow-blue-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#FF8C00] hover:text-[#1E40AF]"
                      }`}>
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="space-y-4 overflow-hidden sm:overflow-visible">
                {filtered.length === 0
                  ? <div className="text-center py-16 text-slate-400 font-semibold">No packages found for this category.</div>
                  : filtered.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      onEnquire={(selectedPkg) => setSelectedPackage(selectedPkg)}
                    />
                  ))}
              </div>
            </div>
            <aside className="w-full lg:w-[295px] xl:w-[315px] shrink-0 min-w-0">
              <BookingForm />

              <div className="relative z-10 mt-4 bg-gradient-to-br from-[#0c1445] to-[#1e3a8a] rounded-3xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Mountain size={16} className="text-amber-300" />
                  <p className="text-[12px] font-black">Best Time to Visit</p>
                </div>
                {[
                  { season: "Summer (Jun–Sep)", note: "Best time, all passes open", color: "bg-amber-400" },
                  { season: "Winter (Oct–Feb)", note: "Chadar Trek season, extreme cold", color: "bg-blue-400" },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 mb-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${s.color}`} />
                    <div>
                      <p className="text-[11px] font-black text-white/90">{s.season}</p>
                      <p className="text-[10px] text-white/55">{s.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
      {selectedPackage && (
        <EnquiryModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}
