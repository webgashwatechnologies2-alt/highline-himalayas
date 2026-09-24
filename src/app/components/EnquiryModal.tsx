"use client";

import { X, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/lead-service";

type EnquiryModalProps = {
  pkg: any;
  onClose: () => void;
};

export default function EnquiryModal({
  pkg,
  onClose,
}: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  if (!pkg) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone) {
      setError("Please enter your name and phone number.");
      setLoading(false);
      return;
    }

    try {
      await submitLead({
        formType: "Package Enquiry Modal",
        name,
        phone,
        message,
        packageName: pkg.title,
        packageRoute: pkg.route,
        packagePrice: pkg.price,
      });

      setSuccess("Thank you! Your enquiry has been sent successfully.");

      form.reset();

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("ENQUIRY ERROR:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-[#FF8C00] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-[10px] font-bold uppercase">
              Package Enquiry
            </p>
            <h2 className="text-xl font-black text-white">
              {pkg.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5 bg-blue-50 border-b">
          <p className="text-xs font-bold text-slate-500">
            {pkg.route}
          </p>
          <p className="text-sm font-black text-[#FF8C00] mt-1">
            Starting From: {pkg.price}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4"
        >
          <div>
            <label className="text-xs font-bold text-slate-600">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#1565C0]"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#1565C0]"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-600">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder={`I am interested in ${pkg.title}`}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#1565C0] resize-none"
            />
          </div>
          {success && (
            <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-semibold text-green-700">
              {success}
            </div>
          )}
          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FF8C00] text-white font-black flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={15} />
            {loading ? "SENDING..." : "SEND ENQUIRY"}
          </button>
        </form>
      </div>
    </div>
  );
}