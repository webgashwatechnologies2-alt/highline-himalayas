"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white overflow-hidden border-t border-slate-100 font-sans">
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-100/60" />
        <svg
          className="absolute right-0 bottom-12 w-[850px] max-w-full h-64 opacity-25 pointer-events-none"
          viewBox="0 0 850 260"
          fill="none"
        >
          <path
            d="M 100 260 Q 220 180, 360 210 T 580 140 T 750 170 T 850 130 L 850 260 Z"
            fill="url(#footerMountainGrad1)"
          />
          <path
            d="M 280 260 Q 420 120, 560 170 T 740 90 T 850 110 L 850 260 Z"
            fill="url(#footerMountainGrad2)"
          />
          <defs>
            <linearGradient
              id="footerMountainGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#93C5FD"
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor="#CBD5E1"
                stopOpacity="0.1"
              />
            </linearGradient>
            <linearGradient
              id="footerMountainGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#60A5FA"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="#E2E8F0"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6">
          <Image
            src="/images/highline-himalaya-logo.png"
            alt="Highline Himalayas"
            width={130}
            height={60}
            className="h-auto w-[130px] object-contain"
          />
          <div className="flex items-center gap-3 text-slate-700">
            <span className="text-[13.5px] font-semibold text-slate-700">
              Follow us:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-[#1877F2] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-black transition-colors cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-[#E4405F] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-dashed border-slate-300/80 mb-8 sm:mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-14">

          {/* Destinations */}
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="text-[14.5px] font-bold text-slate-800 tracking-tight mb-4">
              Destinations
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[13.5px]">

              <div className="flex flex-col space-y-2.5">
                {[
                  {
                    name: "Himachal Pradesh",
                    href: "/himachal",
                  },
                  {
                    name: "Spiti Valley",
                    href: "/spiti",
                  },
                  {
                    name: "Ladakh",
                    href: "/ladakh",
                  },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col space-y-2.5">
                {[
                  {
                    name: "Kashmir",
                    href: "/kashmir",
                  },
                  {
                    name: "Kerala",
                    href: "/kerala",
                  },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

            </div>
          </div>


          {/* Travel Experiences */}
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="text-[14.5px] font-bold text-slate-800 tracking-tight mb-4">
              Official Address
            </h3>

            <div className="flex flex-col gap-3 text-[13.5px]">
              <p className="text-slate-500 leading-relaxed">
                Vekta Niwas, Raighat Colony,
                <br />
                Teh Theog, Shimla (H.P) 171201
              </p>
            </div>
          </div>
          <div className="md:col-span-12 lg:col-span-2">
            <h3 className="text-[14.5px] font-bold text-slate-800 tracking-tight mb-4">
              Contact Us
            </h3>
            <a
                href="tel:+918988449735"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                +91 89884 49735
              </a>
          </div>

        </div>
      </div>
      <div className="relative z-10 w-full bg-slate-100/70 border-t border-slate-200/80 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="leading-relaxed">
            <p>
              Copyright © 2026 HighlineHimalayas. All Rights Reserved.
            </p>
            <p className="text-slate-400 mt-0.5">
              Your trusted partner for unforgettable journeys across India.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-600 font-medium">
            <Link
              href="/"
              className="hover:text-slate-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-slate-900 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-slate-900 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}