"use client";

function IllustrationFlexibility() {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80" fill="none">
        <polygon points="18,12 70,22 58,72 12,62" fill="#E0F2FE" opacity="0.65" />
      </svg>
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 54 54" className="w-full h-full" fill="none">
          <g transform="translate(2, 6) rotate(-10)">
            <polygon points="4,20 22,6 14,24" fill="#38BDF8" />
            <polygon points="14,24 22,6 18,20" fill="#0284C7" />
            <polygon points="4,20 14,24 8,26" fill="#BAE6FD" />
          </g>
          <path d="M26 12V8a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 36 8v4" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="22" y="12" width="18" height="28" rx="5" fill="#FF8C00" />
          <line x1="26" y1="19" x2="36" y2="19" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="26" y1="26" x2="36" y2="26" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="26" y1="33" x2="36" y2="33" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="26" cy="42" r="2.5" fill="#BF360C" />
          <circle cx="36" cy="42" r="2.5" fill="#BF360C" />
        </svg>
      </div>
    </div>
  );
}
function IllustrationExperiences() {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80" fill="none">
        <polygon points="25,10 75,30 65,72 15,55" fill="#FFEDD5" opacity="0.65" />
      </svg>
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 54 54" className="w-full h-full" fill="none">
          <line x1="12" y1="42" x2="38" y2="16" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="42" r="3" fill="#F97316" />
          <circle cx="38" cy="16" r="5" fill="#EA580C" />
          <circle cx="38" cy="16" r="2" fill="#FFFFFF" />
          <g transform="translate(13, 11) rotate(-15)">
            <path d="M12 2L16 12L24 14L16 17L18 24L12 19L6 24L8 17L0 14L8 12Z" fill="#38BDF8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IllustrationQuality() {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80" fill="none">
        <polygon points="20,15 72,15 65,68 15,62" fill="#F1F5F9" opacity="0.85" />
      </svg>
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 54 54" className="w-full h-full" fill="none">
          <circle cx="33" cy="18" r="11" fill="#F97316" />
          <circle cx="33" cy="18" r="9" fill="#FB923C" />
          <path d="M29 18l3 3 6-6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 37h12l8-5c2-1 4 0 4 2v2l-7 6h-7l-10 2v-7z" fill="#FDBA74" />
          <rect x="8" y="33" width="7" height="9" rx="1.5" fill="#0284C7" />
        </svg>
      </div>
    </div>
  );
}
function IllustrationSupport() {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80" fill="none">
        <polygon points="25,12 68,18 60,70 18,58" fill="#E0F2FE" opacity="0.65" />
      </svg>
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 54 54" className="w-full h-full" fill="none">
          <path d="M16 28C16 19.5 21.5 13 29 13C36.5 13 42 19.5 42 28" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="12" y="24" width="7" height="12" rx="3.5" fill="#0284C7" />
          <rect x="39" y="24" width="7" height="12" rx="3.5" fill="#0284C7" />
          <path d="M42 33c0 7-5 10-12 10h-2" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="26" cy="43" r="2.5" fill="#0369A1" />
          <circle cx="24" cy="27" r="1.8" fill="#F97316" />
          <circle cx="29" cy="27" r="1.8" fill="#F97316" />
          <circle cx="34" cy="27" r="1.8" fill="#F97316" />
        </svg>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="w-full bg-white py-14 sm:py-12 border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-[13px] font-semibold text-slate-500 tracking-wide mb-1">
            Why us
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight">
            Why travel with <span style={{color : '#FF8800'}}>RealAdventures</span> ?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="flex flex-col items-start group">
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-200">
              <IllustrationFlexibility />
            </div>
            <h3 className="text-lg sm:text-[19px] font-black text-slate-900 mb-2 tracking-tight">
              Ultimate flexibility
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal">
              You&apos;re in control, with free cancellation and payment options to satisfy any plan.
            </p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-200">
              <IllustrationExperiences />
            </div>
            <h3 className="text-lg sm:text-[19px] font-black text-slate-900 mb-2 tracking-tight">
              Memorable experiences
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal">
              Browse and book tours so incredible, you&apos;ll want to tell your friends.
            </p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-200">
              <IllustrationQuality />
            </div>
            <h3 className="text-lg sm:text-[19px] font-black text-slate-900 mb-2 tracking-tight">
              Quality at our core
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal">
              High quality standards. Millions of reviews. A Tripadvisor company.
            </p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="mb-4 transform group-hover:scale-105-transform duration-200">
              <IllustrationSupport />
            </div>
            <h3 className="text-lg sm:text-[19px] font-black text-slate-900 mb-2 tracking-tight">
              Award winning support
            </h3>
            <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal">
              New price? New plan? No problem. We&apos;re here to help, 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
