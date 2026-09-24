"use client";

import { useState, useEffect } from "react";
import { submitLead } from "@/lib/lead-service";
import Image from "next/image";
import {
  X,
  Sparkles,
  CheckCircle2,
  Phone,
  User,
  MapPin,
  Calendar,
  Users,
  Send,
  Shield,
  Star,
  Flame,
  MessageCircle,
  Car,
  Bed,
  Compass,
} from "lucide-react";

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Himachal (Manali & Shimla)",
    travelers: "2 Persons (Couple)",
    travelMonth: "Next 30 Days",
  });

  // Open automatically 1.2 seconds after page load/reload
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitLead({
        formType: "SExclusive Himalayan Escape (Popup Modal)",
        name: formData.name,
        phone: formData.phone,
        destination: formData.destination,
        travelMonth: formData.travelMonth,
        travelers: formData.travelers,
        message: "Exclusive Himalayan Escape",
      });

      setSubmitted(true);
      // Auto-close after 3 seconds on success
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 3200);
    } catch (err) {
      console.error("Popup Lead Submit Error:", err);
      setError("Failed to submit. Please try again or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.35)] border border-slate-100 overflow-hidden my-auto animate-in zoom-in-95 fade-in duration-300">
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">
          {/* ── LEFT VISUAL COLUMN (Desktop & Tablet) ───────────────────────── */}
          <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-6 lg:p-8 bg-slate-900 text-white overflow-hidden">
            {/* Background Image */}
            <Image
              src="/images/herobaner/Shimla-During-Monsoon.jpg"
              alt="Himalayan Holiday"
              fill
              priority
              className="object-cover object-center scale-105"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/80 pointer-events-none" />

            {/* Top Brand / Offer Badge */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10.5px] font-black uppercase tracking-wider shadow-lg shadow-orange-500/30 border border-orange-300/30">
                <Flame size={13} className="fill-white" /> Exclusive Himalayan Escape
              </div>

              <div className="pt-1">
                <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
                  Plan Your Dream Trip to the Himalayas
                </h3>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                  Explore Manali, Spiti, Ladakh &amp; Kashmir with our
                  <span className="text-amber-300 font-extrabold"> curated holiday packages!</span>
                </p>
              </div>
            </div>

            {/* Center Key Inclusions */}
            <div className="relative z-10 space-y-2.5 py-4 my-auto">
              {[
                { icon: Car, text: "Private Dedicated Cab & Fuel" },
                { icon: Bed, text: "Handpicked 3★, 4★ & Luxury Stays" },
                { icon: Compass, text: "Free ILP & Rohtang Green Permits" },
                { icon: Phone, text: "24/7 Dedicated Trip Coordinator" },
              ].map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-white/95"
                  >
                    <Icon size={14} className="text-[#FF8C00] shrink-0" />
                    <span>{perk.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust Badge */}
            <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="font-bold text-white ml-1">4.9/5</span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium">15K+ Happy Guests</span>
            </div>
          </div>

          {/* ── RIGHT FORM COLUMN (Desktop & Mobile) ───────────────────────── */}
          <div className="md:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-white">
            {/* Mobile Top Header Banner (Visible only on mobile) */}
            <div className="block md:hidden pb-3 mb-3 border-b border-slate-100">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FF8C00] text-[10px] font-black uppercase tracking-wider mb-1.5">
                <Flame size={12} /> Flat 35% OFF
              </div>
              <h3 className="text-lg font-black text-slate-900 leading-tight">
                Get Custom Quote in 15 Mins
              </h3>
              <p className="text-[11.5px] text-slate-500">
                Share your trip plan to claim secret early-bird discounts.
              </p>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block pb-3 mb-2 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-[#FF8C00]">
                  <Sparkles size={13} /> Quick Enquiry
                </span>
                <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  ⚡ 15-Min Response
                </span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                Where Do You Want to Travel?
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill details below for an instant personalized day-wise itinerary.
              </p>
            </div>

            {/* Submitted Success View */}
            {submitted ? (
              <div className="my-auto py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-black text-slate-900">
                  Quote Request Submitted!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name || "Traveler"}</strong>! Our Himalayan
                  tour specialist is crafting your customized itinerary and will WhatsApp/Call you on{" "}
                  <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 my-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 sm:py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp Input */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      WhatsApp / Phone
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 sm:py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all placeholder-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Destination Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Select Destination
                  </label>
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF8C00]" />
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full pl-9 pr-8 py-2 sm:py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option>Himachal (Manali, Shimla &amp; Dharamshala)</option>
                      <option>Spiti Valley Circuit (Kaza &amp; Chandratal)</option>
                      <option>Ladakh &amp; Zanskar (Pangong &amp; Nubra)</option>
                      <option>Kashmir Valley (Srinagar &amp; Gulmarg)</option>
                      <option>Kerala (Alleppey Backwaters &amp; Munnar)</option>
                      <option>Customized Multi-City Holiday</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Travel Month */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Tentative Travel Time
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full pl-9 pr-6 py-2 sm:py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option>Immediate / Next 7 Days</option>
                        <option>Next 30 Days</option>
                        <option>Upcoming Long Weekend / Holiday</option>
                        <option>Next Month or Later</option>
                      </select>
                    </div>
                  </div>

                  {/* Travelers Count */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      No. of Travelers
                    </label>
                    <div className="relative">
                      <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full pl-9 pr-6 py-2 sm:py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option>2 Persons (Couple)</option>
                        <option>3 - 5 Persons (Family)</option>
                        <option>6 - 12 Persons (Group)</option>
                        <option>Solo Traveler</option>
                        <option>Corporate / 12+ Persons</option>
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-[11px] font-bold text-center">{error}</p>
                )}

                {/* Big CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 sm:py-3.5 rounded-2xl text-white text-xs sm:text-[13px] font-black tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #FFA000 100%)",
                    }}
                  >
                    <Send size={14} />
                    <span>{loading ? "SENDING DETAILS..." : "CLAIM 35% OFF & GET CUSTOM QUOTE"}</span>
                  </button>
                </div>

                {/* Direct WhatsApp Quick Chat + Privacy row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
                  <a
                    href="https://wa.me/918988449735?text=Hi%20Highline%20Himalayas,%20I%20want%20to%20plan%20a%20mountain%20holiday%20with%20custom%20itinerary"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11.5px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={14} className="text-emerald-500" />
                    <span>Or chat instantly on WhatsApp</span>
                  </a>

                  <div className="flex items-center gap-1 text-[10.5px] text-slate-400">
                    <Shield size={11} className="text-slate-400" />
                    <span>100% Privacy · No Spam</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
