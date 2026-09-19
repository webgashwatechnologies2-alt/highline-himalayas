"use client";

import { useState } from "react";
import { submitLead } from "@/lib/lead-service";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Headphones,
  Calendar,
  Users,
  Building2,
  Compass,
  Star,
} from "lucide-react";
import heroBanner from "../../../public/images/herobaner/Shimla-During-Monsoon.jpg";

// Offices locations data
const officeLocations = [
  {
    city: "Manali (Headquarters)",
    title: "Highline Operations Hub",
    address: "Vekta Niwas Raighat Colony Teh Theog Shimla (H.P) 171201",
    phone: "+91 89884 49735",
    email: "manali@highlinehimalayas.com",
    badge: "Primary HQ & Fleet Base",
    hours: "Open 24/7 for In-Transit Guests",
  },
  {
    city: "New Delhi",
    title: "Corporate & Booking Lounge",
    address: "Barakhamba Road, Connaught Place, Central Delhi, New Delhi - 110001",
    phone: "+91 98160 11111",
    email: "delhi@highlinehimalayas.com",
    badge: "Guest Consultation",
    hours: "Mon - Sat: 9:30 AM - 8:30 PM",
  },
  {
    city: "Leh, Ladakh",
    title: "High Altitude Expedition Base",
    address: "Fort Road, Opposite Tourist Information Center, Leh, Ladakh - 194101",
    phone: "+91 98160 22222",
    email: "ladakh@highlinehimalayas.com",
    badge: "Permits & 4x4 Fleet",
    hours: "Open Daily: 8:00 AM - 9:00 PM",
  },
];

// FAQs data
const faqs = [
  {
    q: "How fast will I receive my customized itinerary & quote?",
    a: "Within 15 to 30 minutes! Once you submit your inquiry or ping us on WhatsApp, our destination specialist for that specific circuit (Himachal, Spiti, Ladakh, or Kashmir) will review your dates and share a detailed day-wise itinerary with transparent pricing.",
  },
  {
    q: "Can I customize the hotel category and vehicle type?",
    a: "Absolutely 100%! We customize every aspect of your journey—from boutique cottages, 4-star mountain view resorts, luxury glamping domes in Spiti/Nubra, to your choice of private vehicle (Innova Crysta, 4x4 Thar, or Luxury Urbania/Tempo Traveler).",
  },
  {
    q: "Do you arrange Inner Line Permits (ILP) and Rohtang/Khardung La passes?",
    a: "Yes, all required government permits, eco-green fees, and restricted area permissions (like Pangong Tso, Nubra Valley, Hanle, Rohtang Pass) are managed entirely by our local team before you arrive.",
  },
  {
    q: "What is your booking token amount and payment flexibility?",
    a: "You only need to pay an initial 20% to 25% token to lock in your hotels, cabs, and flight/train transfers. The balance can be paid upon your arrival at your destination after meeting your tour coordinator.",
  },
  {
    q: "Do you provide on-ground assistance during the trip?",
    a: "Yes, you are assigned a dedicated 24/7 personal trip manager throughout your journey. Whether you need an altitude acclimatization check, route update, or special dining arrangement, we are just one call away.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Himachal (Manali & Shimla)",
    travelType: "Family Holiday",
    travelDate: "",
    travelers: "2 Adults (Couple)",
    hotelCategory: "4-Star Premium Hotel / Resort",
    message: "",
    whatsappUpdates: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitLead({
        formType: "Contact Us",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        destination: formData.destination,
        travelType: formData.travelType,
        travelDate: formData.travelDate,
        travelers: formData.travelers,
        hotelCategory: formData.hotelCategory,
        message: formData.message,
        whatsappUpdates: formData.whatsappUpdates,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Contact Form Submit Error:", err);
      setError("Failed to send inquiry. Please try again or reach out directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER                                            */}
      {/* ========================================================= */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-950 via-[#1a2332] to-[#0f172a] text-white overflow-hidden">
        {/* Background photo overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay scale-105"
          style={{ backgroundImage: `url(${heroBanner.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        {/* Ambient decorative glowing spots */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-4 tracking-wide uppercase">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-300">Contact & Bookings</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md">
              <Sparkles size={13} className="text-amber-300" />
              <span>Direct Himalayan Tour Operators</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-5">
              Let's Plan Your Dream{" "}
              <span className="bg-gradient-to-r from-[#FF6B00] via-amber-400 to-[#FFA000] bg-clip-text text-transparent">
                Himalayan Journey
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Speak directly with local mountain travel architects. No middle agents, no inflated
              commissions—just bespoke itineraries, verified sanitized cabs, and verified mountain
              stays.
            </p>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <Clock size={15} className="text-amber-400" />
                <span>Response in &lt; 15 Mins</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <ShieldCheck size={15} className="text-emerald-400" />
                <span>Govt. Approved Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <Star size={15} className="text-amber-400 fill-amber-400" />
                <span>4.9/5 Rating (15K+ Trips)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INSTANT CONTACT ACCESS CHANNELS (Top Cards)            */}
      {/* ========================================================= */}
      <section className="relative z-20 -mt-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Call Directly */}
          <a
            href="tel:+918988449735"
            className="group bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/70 border border-slate-200/80 hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-4 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors shadow-sm">
                <Phone size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                Direct Helpline
              </span>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#FF6B00] transition-colors">
                +91 89884 49735
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Toll-free 24/7 guest consultation & active trip support.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF6B00]">
              <span>Call Now</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: WhatsApp Chat */}
          <a
            href="https://wa.me/918988449735?text=Hello%20Highline%20Himalayas!%20I%20am%20interested%20in%20planning%20a%20trip."
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/70 border border-slate-200/80 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                <MessageSquare size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 block mb-1">
                Instant Chat
              </span>
              <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                WhatsApp Desk
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Get PDF itineraries, hotel videos, and instant discounts on WhatsApp.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Chat on WhatsApp</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Email Desk */}
          <a
            href="mailto:info@highlinehimalayas.com"
            className="group bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/70 border border-slate-200/80 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1565C0] flex items-center justify-center mb-4 group-hover:bg-[#1565C0] group-hover:text-white transition-colors shadow-sm">
                <Mail size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1565C0] block mb-1">
                Official Inquiries
              </span>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#1565C0] transition-colors truncate">
                info@highlinehimalayas.com
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                For corporate offsites, group bookings & general feedback.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1565C0]">
              <span>Send Email</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 4: Working Hours & HQ */}
          <div className="bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/70 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                <Building2 size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 block mb-1">
                Office Hours
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-700">Open Now (IST)</span>
              </div>
              <p className="text-xs text-slate-600 mt-2 font-medium">
                Mon - Sun: 8:00 AM - 11:00 PM <br />
                Emergency Line: 24 Hours Active
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-semibold">
              Vekta Niwas Raighat Colony Teh Theog Shimla (H.P) 171201
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MAIN INTERACTIVE FORM & EXPERT CONSULTATION HUB        */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT 7 COLS: THE MODERN SMART FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/90">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF6B00] mb-2 block">
                Get a Customized Proposal
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Share Your Travel Dreams
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill this quick form and receive a personalized day-by-day itinerary with exact
                rates within 15 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 px-6 text-center bg-orange-50/60 border border-orange-200 rounded-2xl animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Your inquiry for <strong className="text-[#FF6B00]">{formData.destination}</strong> has
                  been dispatched to our chief destination planner. We will connect with you via
                  WhatsApp / Phone at{" "}
                  <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/918988449735?text=Hi,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.destination)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Connect Instantly on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      WhatsApp / Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Destination of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white text-slate-800"
                    >
                      <option>Himachal (Manali, Shimla, Kasol)</option>
                      <option>Spiti Valley Circuit (Kaza & Chandratal)</option>
                      <option>Ladakh & Zanskar (Leh, Pangong, Nubra)</option>
                      <option>Kashmir Valley (Srinagar, Gulmarg, Pahalgam)</option>
                      <option>Kerala Backwaters & Munnar Hills</option>
                      <option>Dubai & Abu Dhabi International</option>
                      <option>Bali & Nusa Penida</option>
                      <option>Thailand (Phuket, Krabi)</option>
                      <option>Customized Multi-Destination Circuit</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Travel Type & Travel Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Trip Category
                    </label>
                    <select
                      value={formData.travelType}
                      onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white text-slate-800"
                    >
                      <option>Couple / Honeymoon Special</option>
                      <option>Family Vacation</option>
                      <option>Biking & High-Pass Expedition</option>
                      <option>Friends / Group Adventure</option>
                      <option>Corporate Offsite / Team Retreat</option>
                      <option>Solo Traveler</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Expected Month / Travel Dates
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        placeholder="e.g. Next Month / May 15 - 22"
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      />
                      <Calendar
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 4: Travelers Count & Hotel Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Travelers Count
                    </label>
                    <div className="relative">
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white text-slate-800"
                      >
                        <option>2 Adults (Couple)</option>
                        <option>3 - 5 Persons (Small Family)</option>
                        <option>6 - 10 Persons (Group)</option>
                        <option>10+ Persons (Large Group / Corporate)</option>
                        <option>Solo Traveler</option>
                      </select>
                      <Users
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Stay Standard
                    </label>
                    <select
                      value={formData.hotelCategory}
                      onChange={(e) =>
                        setFormData({ ...formData, hotelCategory: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white text-slate-800"
                    >
                      <option>3-Star Deluxe Hotels & Cottages</option>
                      <option>4-Star Premium Resorts with View</option>
                      <option>5-Star Luxury Heritage & Domes</option>
                      <option>Budget-Friendly Homestays</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us if you need private cabs (Innova/Thar), honeymoon kit (cake/flowers), bonfire, rafting, or specific sightseeing..."
                    className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  ></textarea>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="whatsappCheck"
                    checked={formData.whatsappUpdates}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsappUpdates: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-[#FF6B00] accent-[#FF6B00] cursor-pointer"
                  />
                  <label
                    htmlFor="whatsappCheck"
                    className="text-xs text-slate-600 font-medium cursor-pointer"
                  >
                    Send PDF itinerary and pricing quote directly to my WhatsApp number
                  </label>
                </div>

                {error && (
                  <p className="text-red-500 text-xs font-bold text-center">{error}</p>
                )}

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FF7A00] to-[#FFA000] hover:from-[#E65100] hover:to-[#FF6B00] text-white font-extrabold text-sm shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    <span>{loading ? "Sending Your Inquiry..." : "Get Free Customized Itinerary & Quote"}</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    🔒 We respect your privacy. No unwanted calls or third-party sharing.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT 5 COLS: TRUST, ASSURANCE & DIRECT CONNECT */}
          <div className="lg:col-span-5 space-y-6">
            {/* Why Travel with Highline card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF6B00] flex items-center justify-center border border-orange-500/30">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight">The Highline Advantage</h3>
                  <p className="text-xs text-slate-400">Why 15,000+ travelers chose us</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      100% Local Sherpa & Driver Network
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Experienced hill drivers who know every pass, shortcut, and weather condition
                      in Himachal, Spiti & Ladakh.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Zero Hidden Costs or Surcharges
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      All permits, tolls, parking, driver allowances, and taxes are clearly listed
                      upfront in your quote.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Dedicated Trip Coordinator 24/7
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      You are never on your own. From boarding to departure, our operations team
                      monitors your travel safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Flexible Rescheduling Policies
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Weather disruptions or sudden road blockages? We assist in hassle-free
                      re-routing with no exorbitant penalties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Callout Box */}
              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    Immediate Assistance
                  </span>
                  <span className="text-sm font-extrabold text-amber-300">
                    Hotline: +91 89884 49735
                  </span>
                </div>
                <a
                  href="tel:+918988449735"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors border border-white/15"
                >
                  Dial Now
                </a>
              </div>
            </div>

            {/* Testimonial highlight card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200/80">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1.5">5.0 Star Experience</span>
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "Highline Himalayas organized our 8-day Spiti Valley circuit with Chandratal Lake
                camps. From the Innova driver's mountain driving skills to the cozy heated rooms,
                everything was world-class. Best travel planners in North India!"
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-400 to-amber-400 text-white font-black text-xs flex items-center justify-center">
                  AK
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Ananya & Karan Malhotra</p>
                  <p className="text-[10px] text-slate-400">Spiti Valley Adventure, June 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#FF6B00] mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Inquiries
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Everything you need to know about booking with Highline Himalayas.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-800">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-orange-100 text-[#FF6B00]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BOTTOM PROMPT / INSTANT CALL CTA                       */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-[#D84315] via-[#E65100] to-[#FF6B00] py-12 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider mb-2">
              Ready to Escape the Ordinary?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Speak with a Himalayan Specialist Today
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1">
              Personalized holiday packages tailored to your schedule and budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+918988449735"
              className="px-6 py-3 rounded-xl bg-white text-[#D84315] text-xs sm:text-sm font-extrabold hover:bg-amber-100 transition-colors shadow-lg flex items-center gap-2"
            >
              <Phone size={15} />
              <span>Call +91 89884 49735</span>
            </a>
            <a
              href="https://wa.me/918988449735"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs sm:text-sm font-extrabold transition-colors border border-white/20 flex items-center gap-2"
            >
              <MessageSquare size={15} className="text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
