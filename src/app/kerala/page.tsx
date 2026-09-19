"use client";

import { useState, type ReactNode } from "react";
import { submitLead } from "@/lib/lead-service";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Star, ArrowRight, Clock3, Mountain, CheckCircle2,
  Car, Phone, User, Users, ChevronDown, Bed, UtensilsCrossed,
  Camera, Percent, MessageCircle, Sparkles, Shield, Award,
  Headphones, TrendingUp, Filter, Heart, PhoneCall,
  Compass, Zap, Palmtree,
} from "lucide-react";

import { allPackages } from "../../lib/packages-data";

const packages = allPackages.filter(pkg => pkg.destination === "kerala");

const FILTERS = [
  { id: "all", label: "All Packages" },
  { id: "family", label: "Family" },
  { id: "adventure", label: "Adventure" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "group", label: "Group" },
];

function IncludeIcon({ type }: { type: string }) {
  const map: Record<string, { icon: ReactNode; label: string; color: string }> = {
    stay: { icon: <Bed size={11} strokeWidth={2.5} />, label: "Stay", color: "text-blue-600 bg-blue-50" },
    meals: { icon: <UtensilsCrossed size={11} strokeWidth={2.5} />, label: "Meals", color: "text-orange-600 bg-orange-50" },
    car: { icon: <Car size={11} strokeWidth={2.5} />, label: "Car", color: "text-green-600 bg-green-50" },
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
  const [destination, setDestination] = useState("Kerala Complete Circuit");
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
        formType: "Kerala Holiday Booking Form",
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
    <div className="sticky top-24 rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(22,101,52,0.18)] border border-[#166534]/15">
      <div className="relative bg-gradient-to-br from-[#FF8C00] via-[#FF8C00] to-[#FF8C00] px-6 py-5 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-2 w-16 h-16 rounded-full bg-white/5" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-orange-400/20 flex items-center justify-center">
              <Palmtree size={13} className="text-orange-200" />
            </div>
            <span className="text-orange-200 text-[11px] font-black uppercase tracking-widest">Kerala Expedition</span>
          </div>
          <p className="text-white font-bold text-[15px] leading-tight">Plan Your God&apos;s Own Country Trip</p>
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
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#166534]/10 flex items-center justify-center">
              <MapPin size={12} className="text-[#166534]" />
            </div>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10 transition-all cursor-pointer"
            >
              <option>Kerala Complete Circuit</option>
              <option>Munnar</option>
              <option>Alleppey Backwaters</option>
              <option>Thekkady</option>
              <option>Kovalam Beach</option>
              <option>Wayanad</option>
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Departure City</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#166534]/10 flex items-center justify-center">
              <TrendingUp size={12} className="text-[#166534]" />
            </div>
            <select
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10 transition-all cursor-pointer"
            >
              <option>Delhi (NCR)</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Hyderabad</option>
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Your Name</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#166534]/10 flex items-center justify-center">
              <User size={12} className="text-[#166534]" />
            </div>
            <input
              required
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10 transition-all placeholder-slate-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Phone Number</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#166534]/10 flex items-center justify-center">
              <Phone size={12} className="text-[#166534]" />
            </div>
            <input
              required
              type="tel"
              placeholder="+91-0000-000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/10 transition-all placeholder-slate-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Travelers</label>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 gap-3">
            <div className="w-6 h-6 rounded-lg bg-[#166534]/10 flex items-center justify-center shrink-0">
              <Users size={12} className="text-[#166534]" />
            </div>
            <button type="button" onClick={() => setTravelers((p) => Math.max(1, p - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-[#166534] hover:text-white hover:border-[#166534] transition-all text-base leading-none cursor-pointer">−</button>
            <span className="flex-1 text-center text-sm font-black text-slate-800">{travelers}</span>
            <button type="button" onClick={() => setTravelers((p) => p + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-black flex items-center justify-center hover:bg-[#166534] hover:text-white hover:border-[#166534] transition-all text-base leading-none cursor-pointer">+</button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF8C00] to-[#FF8C00] text-white text-[13px] font-black tracking-wide shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "SENDING..." : "🌴 PLAN MY KERALA TRIP"}
        </button>
        <a
          href="https://wa.me/918988449735?text=Hello%20Highline%20Himalayas,%20I%20want%20to%20enquire%20about%20Kerala%20packages"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2.5 rounded-2xl border-2 border-[#166534] text-[#166534] text-[11px] font-black tracking-wide flex items-center justify-center gap-2 hover:bg-[#166534] hover:text-white transition-all cursor-pointer"
        >
          <PhoneCall size={13} /> Call Our Expert
        </a>
        <div className="flex items-center justify-center gap-4 pt-1">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Shield size={10} className="text-emerald-500" /> Free Cancel</div>
          <div className="w-px h-3 bg-slate-200" />
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Award size={10} className="text-amber-500" /> Best Price</div>
          <div className="w-px h-3 bg-slate-200" />
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Headphones size={10} className="text-green-600" /> 24/7 Support</div>
        </div>
      </form>

      <div className="mt-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-3">
        <p className="text-[12px] font-black text-slate-800 mb-2">Why Book With Us?</p>
        {[
          { icon: <Shield size={14} className="text-emerald-500" />, text: "Free Cancellation Policy" },
          { icon: <Award size={14} className="text-amber-500" />, text: "Best Price Guaranteed" },
          { icon: <Headphones size={14} className="text-blue-500" />, text: "24/7 Expert Support" },
          { icon: <Compass size={14} className="text-green-600" />, text: "Certified Local Guides" },
          { icon: <Zap size={14} className="text-orange-500" />, text: "Houseboat & Resort Packages" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">{item.icon}</div>
            <span className="text-[11px] font-semibold text-slate-600">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-4 bg-gradient-to-br from-[#052e16] to-[#14532d] rounded-3xl p-5 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Palmtree size={16} className="text-green-300" />
          <p className="text-[12px] font-black">Best Time to Visit</p>
        </div>
        {[
          { season: "Winter (Oct–Feb)", note: "Ideal weather, festivals & backwaters", color: "bg-green-400" },
          { season: "Summer (Mar–May)", note: "Hot but great for Ayurveda retreats", color: "bg-orange-400" },
          { season: "Monsoon (Jun–Sep)", note: "Lush greenery, Onam festival", color: "bg-blue-400" },
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
    </div>
  );
}

function PackageCard({ pkg }: { pkg: typeof allPackages[number] }) {
  const [wished, setWished] = useState(false);
  return (
    <article className="group relative z-10 flex flex-col sm:flex-row bg-white rounded-3xl border border-slate-100/80 shadow-[0_2px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_48px_rgba(15,23,42,0.14)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="relative w-full sm:w-[210px] md:w-[230px] shrink-0 h-[200px] sm:min-h-[260px] sm:h-auto sm:self-stretch overflow-hidden bg-slate-100">
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
            <Clock3 size={10} className="text-green-400" /> {pkg.nights} / {pkg.days}
          </div>
          <div className="flex items-center gap-1 text-white text-[10px] font-semibold drop-shadow">
            <MapPin size={10} className="text-green-400 shrink-0" />
            <span className="truncate max-w-[100px]">{pkg.route.split("→")[0].trim()}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col sm:flex-row min-w-0">
        <div className="flex-1 px-5 py-4 min-w-0">
          <span className={`inline-flex items-center text-[10px] font-black px-2.5 py-0.5 rounded-full border ${pkg.tagColor} mb-2`}>{pkg.tag}</span>
          <h3 className="text-[20px] font-black leading-tight text-slate-900 group-hover:text-[#166534] transition-colors duration-200 mb-1.5 line-clamp-1">{pkg.title}</h3>
          <div className="flex items-center gap-1.5 mt-3">
            <div className="flex items-center gap-1 text-[#166534] bg-green-50 rounded-full px-2.5 py-2 text-[10px] font-bold">
              <MapPin size={10} strokeWidth={2.5} className="shrink-0" />
              <span className="truncate">{pkg.route}</span>
            </div>
          </div>
          <ul className="space-y-1.5 mb-6 mt-6">
            {pkg.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600 leading-tight">
                <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#16A34A]" strokeWidth={2.5} /> {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">{pkg.includes.map((inc) => <IncludeIcon key={inc} type={inc} />)}</div>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-stretch justify-between sm:justify-center gap-2.5 px-4 py-3 sm:px-4 sm:py-4 sm:w-[165px] border-t sm:border-t-0 sm:border-l border-slate-100 bg-gradient-to-br from-slate-50 to-green-50/30 shrink-0">
          <span className={`text-white text-[9px] font-black uppercase tracking-wide px-3 py-1 rounded-full bg-gradient-to-r ${pkg.badgeGrad} shadow-sm text-center`}>{pkg.badge}</span>
          <div className="text-center">
            <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wide hidden sm:block mb-0.5">Starting From</p>
            <p className="text-[13px] font-black text-[#166534] leading-tight">{pkg.price}</p>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={9} className={s <= Math.round(pkg.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300 fill-slate-200"} />
            ))}
          </div>
          <div className="flex flex-row sm:flex-col gap-2 w-full sm:mt-1">
            <Link href={`/packages/${pkg.id}`}
              className="flex items-center justify-center gap-1 h-9 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FF8C00] text-white text-[10px] font-black shadow-md shadow-green-200 hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all w-full">
              GET DETAILS <ArrowRight size={10} strokeWidth={3} />
            </Link>
            <button type="button"
              className="flex items-center justify-center gap-1 h-9 rounded-xl border-2 border-[#166534]/60 text-[#166534] text-[10px] font-black hover:bg-[#166534] hover:text-white hover:border-[#166534] transition-all w-full">
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
    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-bold text-white shadow-lg">
      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${iconClassName || "bg-white/15"}`}>{icon}</span>
      {children}
    </div>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-4">
      <div className="text-[#166534] mb-1">{icon}</div>
      <div className="text-2xl font-black text-slate-900">{value}</div>
      <div className="text-[11px] font-semibold text-slate-500 text-center">{label}</div>
    </div>
  );
}

export default function Kerala() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? packages : packages.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative isolate w-full min-h-[540px] overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[#052e16]">
          <Image
            src="/images/packagesimages/keralahero.webp"
            alt="Spiti Valley"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/35" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#16A34A]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full bg-[#EA580C]/20 blur-3xl pointer-events-none" />

        <div className="mx-auto flex min-h-[540px] max-w-[1400px] items-center justify-center px-4 py-20 sm:px-6 lg:px-10">
          <div className="w-full max-w-[860px] text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2 text-[11px] font-bold text-white shadow-lg">
                <li><Link href="/" className="hover:text-[#FF8C00] transition-colors">Home</Link></li>
                <li className="text-white/40">/</li>
                <li><Link href="" className="hover:text-[#FF8C00] transition-colors">National Destinations</Link></li>
                <li className="text-white/40">/</li>
                <li className="flex items-center gap-1 text-[#86EFAC]" aria-current="page">
                  <Palmtree size={12} /> Kerala
                </li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles size={13} className="text-orange-300" />
              <span className="text-white/90 text-[12px] font-bold tracking-wider uppercase">God&apos;s Own Country</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[58px] font-black leading-[1.0] tracking-[-0.03em] text-white mb-5">
              Kerala{" "}
              <span className="bg-gradient-to-r from-[#FF8800] via-[#FF8800] to-[#FACC15] bg-clip-text text-transparent">
                Tour Packages
              </span>
            </h1>
            <p className="mx-auto max-w-[640px] text-[14px] sm:text-[15px] leading-7 text-white/85 mb-8">
              Palm-fringed backwaters, misty tea gardens, elephant safaris & pristine beaches —
              experience God&apos;s Own Country. Explore Munnar, Alleppey, Thekkady, Kovalam &amp; more.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <TrustBadge icon={<CheckCircle2 size={13} strokeWidth={3} />} iconClassName="bg-[#FF8C00] text-white">8 Packages</TrustBadge>
              <TrustBadge icon={<Star size={13} className="fill-amber-300 text-amber-300" />}>4.9 / 5 Rated</TrustBadge>
              <TrustBadge icon={<Shield size={13} className="text-green-300" />}>100% Safe Travel</TrustBadge>
              <TrustBadge icon={<Headphones size={13} className="text-orange-300" />}>24/7 Support</TrustBadge>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ──────────────────────────────────────────────── */}
      <section className="relative -mt-1 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(15,23,42,0.10)] border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100">
              <StatCard value="1000+" label="Happy Travelers" icon={<Users size={22} />} />
              <StatCard value="4.9★" label="Average Rating" icon={<Star size={22} className="fill-amber-400 text-amber-400" />} />
              <StatCard value="8" label="Tour Packages" icon={<Mountain size={22} />} />
              <StatCard value="24/7" label="Customer Support" icon={<Headphones size={22} />} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES + SIDEBAR ───────────────────────────────────── */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-[#EA580C] font-black text-[11px] tracking-widest uppercase mb-1">
                    <Sparkles size={12} /> Curated For You
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Top Packages in <span className="text-[#166534]">Kerala</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Filter size={14} className="text-slate-400" />
                  <span className="text-[11px] font-bold text-slate-400">{filtered.length} of {packages.length} packages</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-7">
                {FILTERS.map((f) => (
                  <button key={f.id} type="button" onClick={() => setActiveFilter(f.id)}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-black border transition-all ${activeFilter === f.id
                      ? "bg-[#166534] text-white border-[#166534] shadow-md shadow-green-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#166534] hover:text-[#166534]"
                      }`}>
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {filtered.length === 0
                  ? <div className="text-center py-16 text-slate-400 font-semibold">No packages found for this category.</div>
                  : filtered.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
              </div>
            </div>
            <aside className="w-full lg:w-[295px] xl:w-[315px] shrink-0">
              <BookingForm />


            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
