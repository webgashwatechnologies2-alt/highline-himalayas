"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Search,
  ArrowRight,
  HelpCircle,
  RefreshCw,
  Car,
  Bed,
  Mountain,
  Info,
  Clock,
  ChevronRight,
  Shield,
  FileCheck,
  Scale,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  shortTitle: string;
  badge?: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

export default function TermsAndConditions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");

  const lastUpdated = "September 15, 2026";

  const keyHighlights = [
    {
      icon: FileCheck,
      title: "Easy Token Booking",
      desc: "Lock stays & cabs with just 20%–25% token amount.",
      accent: "#FF8C00",
    },
    {
      icon: RefreshCw,
      title: "Fair Cancellation",
      desc: "Clear tiered refunds & free road-closure reschedule.",
      accent: "#10b981",
    },
    {
      icon: Mountain,
      title: "Altitude Safety",
      desc: "Acclimatization, oxygen & ILP permit guidelines.",
      accent: "#0ea5e9",
    },
    {
      icon: Shield,
      title: "100% Transparent",
      desc: "Zero hidden costs for cab fuel, toll & MAP meals.",
      accent: "#8b5cf6",
    },
  ];

  const sections: Section[] = [
    {
      id: "introduction",
      title: "1. Acceptance of Terms & Overview",
      shortTitle: "Overview",
      icon: FileText,
      badge: "Core Agreement",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Welcome to <strong className="text-slate-900 font-bold">Highline Himalayas</strong>. These Terms and
            Conditions (&ldquo;Terms&rdquo;) govern your use of our travel portal, booking services, and holiday
            packages covering Himachal Pradesh, Spiti Valley, Ladakh &amp; Zanskar, Kashmir, Kerala, and allied
            Himalayan circuits.
          </p>
          <p>
            By confirming an itinerary, making a token payment, or availing our cab and hotel services, you acknowledge
            and agree to be legally bound by these terms on behalf of all travelers in your group.
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 sm:gap-3">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[12px] sm:text-[13px] text-amber-900 leading-relaxed">
              <strong>Mountain Travel Note:</strong> Highline Himalayas operates in high-altitude passes (Khardung La,
              Kunzum La, Rohtang) and rugged Himalayan valleys. Please review the altitude safety and force majeure
              clauses carefully.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "booking-confirmation",
      title: "2. Booking Process & Confirmation",
      shortTitle: "Booking",
      icon: CheckCircle2,
      badge: "Protocol",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Reservations and vehicle bookings require official confirmation via email or registered WhatsApp booking
            voucher from Highline Himalayas.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Token Deposit:</strong> 20% to 25% advance token amount is
                required to lock selected hotel rooms, private cabs, and expedition slots.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Balance Payment:</strong> 50% prior to departure, and the
                final balance upon arrival at the destination after meeting your trip coordinator.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Peak Season:</strong> For Christmas/New Year and May–June
                rushes, 100% advance may be mandated by mountain resort partners.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "pricing-inclusions",
      title: "3. Pricing, Inclusions & Exclusions",
      shortTitle: "Pricing",
      icon: Info,
      content: (
        <div className="space-y-4 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Every quotation details explicit inclusions and exclusions tailored to your chosen package:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-xs sm:text-[13px]">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> Standard Inclusions
              </div>
              <ul className="text-[11.5px] sm:text-xs space-y-1.5 text-slate-600">
                <li>• Stays on twin/triple sharing as booked.</li>
                <li>• MAP Meals (Breakfast &amp; Dinner) unless specified.</li>
                <li>• Dedicated cab (Innova, Sedan, Tempo, or Thar).</li>
                <li>• Fuel, toll tax, road tax, driver allowance &amp; parking.</li>
                <li>• Inner Line Permits (ILP) assistance for Ladakh &amp; Spiti.</li>
              </ul>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/70 border border-rose-200">
              <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold text-xs sm:text-[13px]">
                <AlertTriangle size={16} className="text-rose-600 shrink-0" /> Standard Exclusions
              </div>
              <ul className="text-[11.5px] sm:text-xs space-y-1.5 text-slate-600">
                <li>• Airfare or train tickets unless specifically invoiced.</li>
                <li>• Personal adventure activities (paragliding, rafting, skiing).</li>
                <li>• Monument entry, camera tickets &amp; Rohtang Green fee.</li>
                <li>• Personal expenses: laundry, alcoholic drinks, extra heaters.</li>
                <li>• Expenses arising from roadblocks, flight delays, or weather.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cancellation-refunds",
      title: "4. Cancellation, Rescheduling & Refund Policy",
      shortTitle: "Cancellations",
      icon: RefreshCw,
      badge: "Important",
      content: (
        <div className="space-y-4 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            We recognize that mountain travel plans can be disrupted by unpredictable weather or family emergencies.
            Our tiered cancellation policy balances fairness with commitments made to local mountain partners:
          </p>

          {/* Mobile Card-Based Timeline (Visible on <sm) */}
          <div className="block sm:hidden space-y-2.5">
            {[
              {
                period: "30+ days prior to trip",
                fee: "10% of total",
                refund: "90% Refund / 100% Credit Note",
                feeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
              },
              {
                period: "15 – 29 days prior",
                fee: "25% of total",
                refund: "75% Refund / 80% Credit Note",
                feeColor: "text-amber-700 bg-amber-50 border-amber-200",
              },
              {
                period: "7 – 14 days prior",
                fee: "50% of total",
                refund: "50% Refund",
                feeColor: "text-orange-700 bg-orange-50 border-orange-200",
              },
              {
                period: "Less than 7 days / No-Show",
                fee: "100% of total",
                refund: "No Refund Applicable",
                feeColor: "text-rose-700 bg-rose-50 border-rose-200",
              },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-bold text-slate-900 text-xs">{item.period}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${item.feeColor}`}>
                    Fee: {item.fee}
                  </span>
                </div>
                <div className="text-[11.5px] text-slate-600 flex items-center justify-between">
                  <span className="text-slate-400">Return:</span>
                  <span className="font-semibold text-slate-800">{item.refund}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Table (Visible on sm+) */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Notice Period</th>
                  <th className="py-3 px-4">Cancellation Charges</th>
                  <th className="py-3 px-4">Refund / Credit Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 font-semibold text-slate-900">30+ days prior to departure</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">10% of total package</td>
                  <td className="py-3 px-4">90% Refund or 100% Credit Note</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 font-semibold text-slate-900">15 – 29 days prior to departure</td>
                  <td className="py-3 px-4 text-amber-600 font-bold">25% of total package</td>
                  <td className="py-3 px-4">75% Refund or 80% Credit Note</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 font-semibold text-slate-900">7 – 14 days prior to departure</td>
                  <td className="py-3 px-4 text-orange-600 font-bold">50% of total package</td>
                  <td className="py-3 px-4">50% Refund</td>
                </tr>
                <tr className="hover:bg-slate-50/60 bg-red-50/30">
                  <td className="py-3 px-4 font-semibold text-slate-900">Less than 7 days or No-Show</td>
                  <td className="py-3 px-4 text-red-600 font-bold">100% of package cost</td>
                  <td className="py-3 px-4 text-red-500">No Refund Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11.5px] sm:text-xs text-slate-500 italic">
            *Refunds are processed back to the original source within 7 to 10 working days. Credit notes remain valid
            for 12 months for any Highline Himalayas package.
          </p>
        </div>
      ),
    },
    {
      id: "mountain-altitude",
      title: "5. High Altitude Advisory & Health Fitness",
      shortTitle: "Altitude Safety",
      icon: Mountain,
      badge: "Health",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Circuits in Leh-Ladakh (3,500m+), Spiti Valley (3,800m+), and high passes (Khardung La, Rohtang Pass) feature
            thin air and lower oxygen levels.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <ShieldCheck size={16} className="text-blue-600 shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Mandatory Acclimatization:</strong> For Leh and upper
                Spiti, the first 24 to 48 hours must be dedicated to complete rest without strenuous activity.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck size={16} className="text-blue-600 shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Medical Clearance:</strong> Guests with pre-existing
                cardiac, asthma, or respiratory conditions must consult a certified doctor before booking high-altitude
                circuits.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck size={16} className="text-blue-600 shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Emergency Oxygen:</strong> Portable oxygen support is
                available in our high-pass expedition cabs and camp bases.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "force-majeure",
      title: "6. Force Majeure & Weather Delays",
      shortTitle: "Weather Delays",
      icon: AlertTriangle,
      badge: "Safety",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            In high-mountain terrain, unforeseen occurrences such as unseasonal snow, landslides, bridge damage, or
            road closures may necessitate immediate changes to route plans.
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-800 mb-1.5">Operating Protocol:</h4>
            <p className="leading-relaxed text-slate-600">
              Highline Himalayas reserves the right to reroute or substitute itineraries to guarantee guest safety. We
              assist with alternative stays and transport; additional hotel or cab expenses incurred due to extended
              delays or route diversions remain the responsibility of the traveler.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "permits-documents",
      title: "7. Permits, Identity & Government Regulations",
      shortTitle: "Permits",
      icon: FileCheck,
      content: (
        <div className="space-y-3 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Travelers must carry valid government-issued photo identification (Aadhaar Card, Passport, Voter ID, or
            Driving License) throughout the journey.
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li>
              • <strong className="text-slate-800 font-semibold">Inner Line Permits:</strong> Managed by our ground
              team. Clear ID copies must be provided at least 5 days prior to arrival.
            </li>
            <li>
              • <strong className="text-slate-800 font-semibold">Foreign Nationals:</strong> Must hold a valid Indian
              Visa or OCI card. Restricted Area Permits (PAP/RAP) may apply for border areas like Hanle or Turtuk.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "vehicle-transfers",
      title: "8. Transport, Cab & Bike Rental Terms",
      shortTitle: "Transport",
      icon: Car,
      content: (
        <div className="space-y-3 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Our mountain fleet consists of licensed commercial vehicles driven by experienced Himalayan chauffeurs.
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li>
              • <strong className="text-slate-800 font-semibold">Point-to-Point Itinerary:</strong> Vehicles operate as
              per the agreed day plan. Night pass driving after 7:00 PM is restricted for passenger safety.
            </li>
            <li>
              • <strong className="text-slate-800 font-semibold">Bike Rentals:</strong> Security deposits (₹5,000 to
              ₹10,000) and valid two-wheeler gear driving licenses are mandatory for bike expeditions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "hotel-policies",
      title: "9. Hotels, Homestays & Camps",
      shortTitle: "Hotels",
      icon: Bed,
      content: (
        <div className="space-y-3 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Standard check-in time is 12:00 PM – 2:00 PM, and check-out is 10:00 AM – 11:00 AM across mountain stays.
          </p>
          <p className="text-xs text-slate-500">
            In remote regions (Kaza, Chandratal, Hunder, Pangong), running hot water and electricity may operate on
            generator/solar schedules due to terrain constraints.
          </p>
        </div>
      ),
    },
    {
      id: "jurisdiction",
      title: "10. Governing Law & Dispute Jurisdiction",
      shortTitle: "Legal Jurisdiction",
      icon: Scale,
      content: (
        <div className="space-y-3 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            These Terms &amp; Conditions and any dispute arising from our travel services shall be governed exclusively
            by the laws of India.
          </p>
          <p>
            Any legal proceedings shall be subject to the exclusive jurisdiction of the competent courts in{" "}
            <strong className="text-slate-900 font-semibold">Manali / Kullu, Himachal Pradesh</strong>, India.
          </p>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return s.title.toLowerCase().includes(q) || s.shortTitle.toLowerCase().includes(q) || s.id.toLowerCase().includes(q);
  });

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-slate-800">
      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative w-full py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-[#1E293B] to-slate-900 overflow-hidden text-white border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF8C00_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#FF8C00]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-400 mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#FF8C00]">Terms &amp; Conditions</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FF8C00] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4">
              <ShieldCheck size={13} className="shrink-0" /> Legal &amp; Booking Guidelines
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-2.5 sm:mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              Transparent, fair, and safety-oriented policies designed to ensure a seamless, memorable Himalayan journey
              with Highline Himalayas.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-[#FF8C00]" /> Last Updated: {lastUpdated}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Applies to all itineraries &amp; vouchers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT PILLARS (2x2 on mobile, 4 cols on desktop) ──────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 -mt-6 sm:-mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {keyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 sm:mb-3.5 shadow-sm"
                    style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
                  >
                    <Icon size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-[15px] font-black text-slate-900 mb-1 leading-snug">{item.title}</h3>
                  <p className="text-[10.5px] sm:text-xs leading-4 sm:leading-5 text-slate-500 line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MOBILE QUICK JUMP & SEARCH STRIP (Visible only on <lg screens) ──── */}
      <section className="block lg:hidden max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 pb-2">
        {/* Mobile Search */}
        <div className="relative mb-3">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search policies (refund, permits, cabs...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#FF8C00] shadow-sm font-medium placeholder-slate-400"
          />
        </div>

        {/* Mobile Horizontal Section Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 pt-0.5">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setActiveSection(sec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-black transition-all shrink-0 border ${
                  isActive
                    ? "bg-[#FF8C00] text-white border-[#FF8C00] shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {sec.shortTitle}
              </a>
            );
          })}
        </div>
      </section>

      {/* ── MAIN CONTENT & DESKTOP SIDEBAR ─────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* DESKTOP SIDEBAR (Visible only on lg+ screens) */}
          <aside className="w-full lg:w-[310px] xl:w-[330px] shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Search Within Terms */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  Search In Policies
                </label>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. refund, permits, cabs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#FF8C00] transition-colors placeholder-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">
                  Table of Contents
                </h4>
                <nav className="space-y-1">
                  {sections.map((sec) => {
                    const SecIcon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSection(sec.id)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-orange-50 to-amber-50 text-[#FF8C00] border-l-4 border-[#FF8C00] shadow-sm"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <SecIcon size={14} className={isActive ? "text-[#FF8C00]" : "text-slate-400"} />
                        <span className="truncate">{sec.title.replace(/^\d+\.\s*/, "")}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Desktop Assistance Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <HelpCircle size={18} className="text-[#FF8C00]" />
                  <h4 className="text-sm font-black text-white">Have Booking Doubts?</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Our tour managers in Manali and Delhi are on standby to clarify custom terms or trip adjustments.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+91898849735"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-black transition-all shadow-md"
                  >
                    <Phone size={13} /> Call +91 89884 49735
                  </a>
                  <a
                    href="mailto:contact@highlinehimalayas.com"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-semibold transition-all"
                  >
                    <Mail size={13} /> Email Support
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CLAUSES LIST */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200 text-center">
                <Search size={32} className="mx-auto text-slate-300 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1">No Matching Clauses Found</h3>
                <p className="text-xs text-slate-500 mb-4">
                  We couldn&apos;t find any policy matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => {
                const SecIcon = sec.icon;
                return (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.03)] scroll-mt-24 sm:scroll-mt-28 transition-all hover:border-slate-300"
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-50 text-[#FF8C00] flex items-center justify-center shrink-0">
                          <SecIcon size={18} className="sm:w-5 sm:h-5" />
                        </div>
                        <h2 className="text-sm sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                          {sec.title}
                        </h2>
                      </div>
                      {sec.badge && (
                        <span className="shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-black tracking-wide uppercase bg-slate-100 text-slate-600 border border-slate-200">
                          {sec.badge}
                        </span>
                      )}
                    </div>
                    {sec.content}
                  </article>
                );
              })
            )}

            {/* Bottom Official Sign-off Card */}
            <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-7 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent border border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                  Highline Himalayas Travel Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                  Registered Travel Agency under the Department of Tourism, Himachal Pradesh. Dedicated to secure and
                  sustainable mountain adventures across India.
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2.5 text-[11px] sm:text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#FF8C00]" /> Vekta Niwas Raighat Colony Teh Theog Shimla (H.P) 171201
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>GST Verified Operator</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-black shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                Contact Legal Desk <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Bottom Assistance Box (Visible only on <lg) */}
            <div className="block lg:hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-md">
              <div className="flex items-center gap-2 mb-1.5">
                <HelpCircle size={16} className="text-[#FF8C00]" />
                <h4 className="text-xs sm:text-sm font-black text-white">Need Clarification?</h4>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mb-3">
                Call our 24/7 mountain desk for quick support regarding permits or booking policies.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+91898849735"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FF8C00] text-white text-[11px] font-black shadow"
                >
                  <Phone size={12} /> Call Desk
                </a>
                <a
                  href="mailto:contact@highlinehimalayas.com"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/25 text-white text-[11px] font-semibold"
                >
                  <Mail size={12} /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
