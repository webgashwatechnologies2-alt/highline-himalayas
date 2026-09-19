"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  CreditCard,
  Bell,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Search,
  ArrowRight,
  Clock,
  ChevronRight,
  Shield,
  FileCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  shortTitle: string;
  badge?: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

export default function PrivacyPolicy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");

  const lastUpdated = "September 15, 2026";

  const keyHighlights = [
    {
      icon: Lock,
      title: "256-Bit Data Security",
      desc: "All personal information and booking documents are encrypted with enterprise-grade SSL.",
      accent: "#FF8C00",
    },
    {
      icon: UserCheck,
      title: "Zero Spam Promise",
      desc: "We never sell, rent, or trade your contact information with third-party telemarketers.",
      accent: "#10b981",
    },
    {
      icon: FileCheck,
      title: "Secure Permit Filing",
      desc: "Government IDs for Ladakh & Spiti Inner Line Permits (ILP) are deleted post-verification.",
      accent: "#0ea5e9",
    },
    {
      icon: CreditCard,
      title: "Encrypted Payments",
      desc: "Instant UPI & bank transactions handled directly via RBI-authorized payment gateways.",
      accent: "#8b5cf6",
    },
  ];

  const sections: Section[] = [
    {
      id: "introduction",
      title: "1. Overview & Scope",
      shortTitle: "Overview",
      icon: ShieldCheck,
      badge: "Core Policy",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            At <strong className="text-slate-900 font-bold">Highline Himalayas</strong>, we respect your privacy and
            are committed to safeguarding the personal information you share with us while planning your mountain
            holidays across Himachal Pradesh, Spiti Valley, Ladakh &amp; Zanskar, Kashmir, Kerala, and other Indian
            circuits.
          </p>
          <p>
            This Privacy Policy explains what data we collect, why we collect it, how it is secured, and under what
            specific circumstances it is shared with on-ground hospitality and transport partners.
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-200/80 flex items-start gap-2.5 sm:gap-3">
            <Shield size={18} className="text-[#FF8C00] shrink-0 mt-0.5" />
            <p className="text-[12px] sm:text-[13px] text-orange-950 leading-relaxed">
              <strong>Our Commitment:</strong> We only collect data essential for confirming your hotel reservations,
              assigning private tourist vehicles, obtaining statutory mountain defense/green permits, and ensuring your
              safety during high-altitude travel.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "data-collection",
      title: "2. Information We Collect",
      shortTitle: "Data Collected",
      icon: Eye,
      badge: "Transparency",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Depending on your interaction with our website, booking forms, or travel coordinators, we may collect the
            following categories of information:
          </p>
          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-1">
                A. Personal &amp; Contact Details:
              </strong>
              <p className="text-slate-600">
                Your full name, mobile/WhatsApp number, email address, city of residence, preferred travel dates, and
                number of travelers (adults/children).
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-1">
                B. Government Identity Documents (For Mountain Permits &amp; Hotel KYC):
              </strong>
              <p className="text-slate-600">
                Aadhaar Card, Passport, or Voter ID copies required exclusively for processing Inner Line Permits (ILP)
                in Ladakh (Pangong Tso, Nubra Valley, Hanle), Spiti Valley restricted zones, Rohtang Pass Green
                clearances, and hotel check-in registers as mandated by the Ministry of Tourism.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-1">
                C. Travel Preferences &amp; Medical Disclosures:
              </strong>
              <p className="text-slate-600">
                Special meal requests (Jain, vegetarian, gluten-free), room configurations (twin/double), and voluntary
                high-altitude health disclosures (e.g., asthma, acute mountain sickness history) to arrange portable
                oxygen support.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use-data",
      title: "3. How We Use Your Information",
      shortTitle: "How We Use",
      icon: Server,
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>We process your data strictly for legitimate operational and booking purposes:</p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Itinerary Preparation &amp; Quotes:</strong> Calculating
                precise cab kilometer allowances, hotel room availability, and seasonal discount pricing.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Booking Execution:</strong> Confirming reservations with
                partner boutique resorts, heritage stays, and licensed tourist cab operators.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">Statutory Permit Filing:</strong> Submitting traveler lists
                to the Ladakh Autonomous Hill Development Council (LAHDC) and District Magistrates for border transit.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF8C00] shrink-0 mt-1" />
              <span>
                <strong className="text-slate-900 font-bold">On-Ground Emergency Safety:</strong> Coordinating
                breakdown backup or medical evacuations with local emergency teams during mountain road blockages.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "4. Information Sharing & Third Parties",
      shortTitle: "Data Sharing",
      icon: UserCheck,
      badge: "No Third-Party Ads",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            <strong className="text-slate-900 font-semibold">We never sell, rent, or trade</strong> your personal
            details to advertisers, telemarketing agencies, or commercial data brokers.
          </p>
          <p>Your details are shared solely on a strict need-to-know basis with:</p>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li>
              • <strong className="text-slate-800 font-semibold">Booked Accommodations:</strong> Guest names and contact
              details for check-in registration.
            </li>
            <li>
              • <strong className="text-slate-800 font-semibold">Assigned Chauffeurs / Transport Coordinators:</strong>{" "}
              Passenger name and pickup mobile number for airport/station coordination.
            </li>
            <li>
              • <strong className="text-slate-800 font-semibold">District Administration &amp; Police Checkposts:</strong>{" "}
              Official traveler lists for border permit clearance in Nubra, Pangong, and Spiti.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "payment-security",
      title: "5. Payment Security & Financial Data",
      shortTitle: "Payment Security",
      icon: CreditCard,
      badge: "Encrypted",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Highline Himalayas strictly adheres to Indian financial security standards for all booking token and balance
            transactions:
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs sm:text-[13px]">
              <Lock size={16} className="text-emerald-600 shrink-0" /> Zero Payment Credential Storage
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We do not store your Credit Card numbers, Debit Card PINs, CVV codes, or NetBanking passwords on any of
              our servers. Payments are processed through secure 256-bit SSL encrypted channels via official UPI handles
              and RBI-regulated payment gateways.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "cookies-analytics",
      title: "6. Cookies & Web Tracking",
      shortTitle: "Cookies",
      icon: FileText,
      content: (
        <div className="space-y-3 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            Our website uses minimal, functional cookies to optimize page load speeds, remember user preferences, and
            analyze aggregate traffic patterns via Google Analytics.
          </p>
          <p className="text-xs text-slate-500">
            You can modify your browser settings to decline cookies at any time; however, certain interactive booking
            features and itinerary filters may function with reduced speed.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "7. Data Retention & Traveler Rights",
      shortTitle: "Your Rights",
      icon: Lock,
      content: (
        <div className="space-y-3 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            We retain booking records and invoice copies as required under Indian taxation and tourism regulatory
            statutes. Identity document soft copies submitted for permits are purged from our active processing systems
            30 days following the completion of your tour.
          </p>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1">Your Privacy Rights:</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You have the right to inspect, update, or request the deletion of your personal records from our promotional
              broadcast lists at any time by emailing us at{" "}
              <a
                href="mailto:info@highlinehimalayas.com"
                className="text-[#FF8C00] font-semibold hover:underline"
              >
                info@highlinehimalayas.com
              </a>.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "grievance-contact",
      title: "8. Grievance Officer & Contact Information",
      shortTitle: "Contact Desk",
      icon: Mail,
      badge: "Support",
      content: (
        <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-slate-600">
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, you
            may reach our appointed Grievance Officer:
          </p>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs sm:text-sm">
            <p className="font-bold text-slate-900 text-sm">Grievance Redressal Desk — Highline Himalayas</p>
            <p className="text-slate-600 flex items-center gap-2">
              <MapPin size={14} className="text-[#FF8C00] shrink-0" />
              <span>Vekta Niwas Raighat Colony Teh Theog Shimla (H.P) 171201</span>
            </p>
            <p className="text-slate-600 flex items-center gap-2">
              <Phone size={14} className="text-[#FF8C00] shrink-0" />
              <span>+91 89884 49735 </span>
            </p>
            <p className="text-slate-600 flex items-center gap-2">
              <Mail size={14} className="text-[#FF8C00] shrink-0" />
              <span>info@highlinehimalayas.com</span>
            </p>
          </div>
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
        <div className="absolute -bottom-16 -left-16 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-400 mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#FF8C00]">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FF8C00] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4">
              <Lock size={13} className="shrink-0" /> Data Protection &amp; Confidentiality
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-2.5 sm:mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              Learn how Highline Himalayas protects your identity, booking data, permit documents, and payment
              information with enterprise-grade privacy safeguards.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-[#FF8C00]" /> Last Updated: {lastUpdated}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">100% Verified Mountain Operator</span>
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
            placeholder="Search privacy topics (permits, payment, security...)"
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
              {/* Search Within Privacy Policy */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  Search Privacy Topics
                </label>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. permits, payments, cookies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#FF8C00] transition-colors placeholder-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 px-2">
                  Privacy Sections
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

              {/* Privacy Help Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <HelpCircle size={18} className="text-[#FF8C00]" />
                  <h4 className="text-sm font-black text-white">Privacy Concerns?</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Need to update your contact preferences or request document deletion? Reach our privacy desk directly.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:info@highlinehimalayas.com"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-black transition-all shadow-md"
                  >
                    <Mail size={13} /> Email Privacy Officer
                  </a>
                  <a
                    href="tel:+918988449735"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-semibold transition-all"
                  >
                    <Phone size={13} /> Call +91 89884 49735
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
                <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1">No Matching Sections Found</h3>
                <p className="text-xs text-slate-500 mb-4">
                  We couldn&apos;t find any privacy topic matching &ldquo;{searchQuery}&rdquo;.
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
            <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-7 bg-gradient-to-br from-emerald-500/10 via-orange-500/10 to-transparent border border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                  Highline Himalayas Privacy &amp; Trust Assurance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                  We are registered with the Department of Tourism, Himachal Pradesh, maintaining strict compliance with
                  the Digital Personal Data Protection (DPDP) Act of India.
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2.5 text-[11px] sm:text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#FF8C00]" /> Vekta Niwas Raighat Colony Teh Theog Shimla (H.P) 171201
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>100% Encrypted &amp; Secure</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-black shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                Contact Privacy Desk <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Bottom Assistance Box (Visible only on <lg) */}
            <div className="block lg:hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-md">
              <div className="flex items-center gap-2 mb-1.5">
                <HelpCircle size={16} className="text-[#FF8C00]" />
                <h4 className="text-xs sm:text-sm font-black text-white">Privacy Inquiries?</h4>
              </div>
              <p className="text-[11.5px] sm:text-xs text-slate-300 leading-relaxed mb-3">
                Reach out to our data privacy coordinator for permit verification questions or account deletion.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+918988449735"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FF8C00] text-white text-[11px] font-black shadow"
                >
                  <Phone size={12} /> Call Desk
                </a>
                <a
                  href="mailto:info@highlinehimalayas.com"
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
