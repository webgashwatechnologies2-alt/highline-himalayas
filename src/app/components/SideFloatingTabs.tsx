"use client";

import { useState } from "react";
import { submitLead } from "@/lib/lead-service";
import { Lock, Zap, PhoneCall } from "lucide-react";

export default function SideFloatingTabs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Himachal",
    travelMonth: "",
    travelers: "2 Adults",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitLead({
        formType: "Right Floating Tab - Free Quote",
        name: formData.name,
        phone: formData.phone,
        destination: formData.destination,
        travelMonth: formData.travelMonth,
        travelers: formData.travelers,
        message: formData.message,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
        setFormData({
          name: "",
          phone: "",
          destination: "Himachal",
          travelMonth: "",
          travelers: "2 Adults",
          message: "",
        });
      }, 2500);
    } catch (err) {
      console.error(err);
      setError("Unable to submit lead right now. Please WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <aside
        aria-label="Quick Actions"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col shadow-2xl select-none"
      >
        <a
          href="https://wa.me/918988449735?text=Hello%20Highline%20Himalayas,%20I%20am%20looking%20for%20a%20travel%20quote%20and%20package%20details."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="group flex flex-col items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-2 py-3.5 rounded-tl-xl transition-all duration-200 hover:-translate-x-1 shadow-md cursor-pointer border-t border-l border-white/20"
        >
          <span
            className="text-[12px] sm:text-[13px] font-bold tracking-wide text-white drop-shadow-sm"
            style={{ writingMode: "vertical-rl" }}
          >
            Whatsapp
          </span>
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </a>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          title="Get a free Quote"
          className="group flex flex-col items-center justify-center gap-2 bg-[#1d63dc] hover:bg-[#1853ba] text-white px-2 py-3.5 rounded-bl-xl transition-all duration-200 hover:-translate-x-1 shadow-md cursor-pointer border-b border-l border-white/20"
        >
          <div className="w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center text-white shadow-sm flex-shrink-0 transition-transform group-hover:scale-110">
            <svg
              className="w-3.5 h-3.5 stroke-[3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span
            className="text-[12px] sm:text-[13px] font-bold tracking-wide text-white drop-shadow-sm whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Get a free Quote
          </span>
        </button>
      </aside>

      {/* Free Quote Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] p-5 sm:p-6 text-white relative">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-lg"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-blue-900 text-xs font-black">
                  ✓
                </span>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
                  Instant Response Guarantee
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Get a Free Customized Quote
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Tell us your travel plan & receive custom itinerary with best pricing.
              </p>
            </div>
            <div className="p-5 sm:p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">
                    Quote Request Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our Himalayan travel expert will contact you within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-medium border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({ ...formData, destination: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white"
                      >
                        <option value="Himachal">Himachal (Manali & Shimla)</option>
                        <option value="Spiti Valley">Spiti Valley Adventure</option>
                        <option value="Ladakh">Leh Ladakh Tour</option>
                        <option value="Kashmir">Kashmir Paradise</option>
                        <option value="Kerala">Kerala Backwaters</option>
                        <option value="Custom Tour">Other / Custom Tour</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Travel Month / Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Next Month / April 2026"
                        value={formData.travelMonth}
                        onChange={(e) =>
                          setFormData({ ...formData, travelMonth: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      No. of Travelers
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) =>
                        setFormData({ ...formData, travelers: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white"
                    >
                      <option value="Couple (2 Adults)">Couple (2 Adults)</option>
                      <option value="Family (3-5 Members)">Family (3-5 Members)</option>
                      <option value="Group of Friends (4-10)">Group of Friends (4-10)</option>
                      <option value="Solo Traveler">Solo Traveler</option>
                      <option value="Corporate / Large Group (10+)">Corporate / Large Group (10+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Any Special Request / Requirements
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Budget preference, cab requirement, hotel category etc."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold rounded-xl shadow-lg hover:shadow-[#FF5722]/25 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Quote Request...
                      </>
                    ) : (
                      <>Get My Free Quote Now →</>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock size={12} className="text-[#FF5722]" />
                      100% Privacy
                    </span>

                    <span className="flex items-center gap-1">
                      <Zap size={12} className="text-[#FF5722]" />
                      No Spam Ever
                    </span>

                    <span className="flex items-center gap-1">
                      <PhoneCall size={12} className="text-[#FF5722]" />
                      Free Consultation
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
