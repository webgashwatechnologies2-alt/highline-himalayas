"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Users, Award, Shield, Heart, Star, ArrowRight, CheckCircle } from "lucide-react";
import mountainImage from "../../../public/images/herobaner/Shimla-During-Monsoon.jpg";
import Himachalimage from "../../../public/images/herobaner/herothree.png";
import Spitiimage from "../../../public/images/destinations/spitiherobaner.webp";
import Ladakhimage from "../../../public/images/destinations/ladakh-tours-packages.webp";
import Kashmirimage from "../../../public/images/destinations/family.webp";
import Keralaimage from "../../../public/images/destinations/Thekkady-Travel.webp";





export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const destinations = [
    {
      name: "Himachal Pradesh",
      description: "The land of snow-capped peaks, lush valleys, and ancient temples. Experience the magic of Manali, Shimla, and Dharamshala.",
      image: Himachalimage.src,
      highlights: ["Rohtang Pass", "Manali", "Shimla", "Dharamshala"]
    },
    {
      name: "Spiti Valley",
      description: "A cold desert mountain valley known for its monasteries, pristine landscapes, and stargazing opportunities in Kaza.",
      image: Spitiimage.src,
      highlights: ["Kaza Monastery", "Chandratal Lake", "Key Monastery", "Pin Valley"]
    },
    {
      name: "Ladakh",
      description: "The land of high passes featuring Pangong Lake, Nubra Valley, and ancient Buddhist monasteries in Leh.",
      image: Ladakhimage.src,
      highlights: ["Pangong Lake", "Nubra Valley", "Leh Palace", "Khardung La Pass"]
    },
    {
      name: "Kashmir",
      description: "Paradise on Earth with Dal Lake houseboats, Gulmarg skiing, and the stunning beauty of Srinagar's valleys.",
      image: Kashmirimage.src,
      highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Sonamarg"]
    },
    {
      name: "Kerala",
      description: "God's Own Country featuring backwaters, tea plantations in Munnar, and pristine beaches of Varkala.",
      image: Keralaimage.src,
      highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Varkala Beach", "Thekkady"]
    }
  ];

  const stats = [
    { value: "15K+", label: "Happy Travelers", icon: Users },
    { value: "50+", label: "Destinations", icon: MapPin },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "24/7", label: "Support Available", icon: Shield }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to ensure every journey exceeds expectations."
    },
    {
      icon: Shield,
      title: "Safety Guaranteed",
      description: "All our tours are verified with certified guides, quality accommodations, and emergency support."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We partner with the best local operators to deliver premium experiences at competitive prices."
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description: "No hidden costs. What you see is what you pay. Clear breakdown of all inclusions and exclusions."
    }
  ];

  return (
    <div className="w-full bg-white">
      <section className="relative w-full h-[60vh] sm:h-[40vh] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${mountainImage.src})`,
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-tight mb-6">
              Discover India's Most <br />
              <span className="text-amber-200">Beautiful Destinations</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              We are Highline Himalayas - your trusted partner for unforgettable journeys through the majestic landscapes of India.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-3 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Crafting Unforgettable <span className="text-orange-500">Himalayan Adventures</span> Since 2015
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-6">
                Highline Himalayas was born from a passion for exploring the incredible diversity of India's landscapes. From the snow-capped peaks of Himachal to the serene backwaters of Kerala, we've dedicated ourselves to creating authentic, transformative travel experiences.
              </p>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-8">
                Our team of local experts and travel enthusiasts work tirelessly to curate journeys that go beyond typical tourist trails. We believe in sustainable tourism that benefits local communities while giving travelers memories that last a lifetime.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle size={18} className="text-orange-500" />
                  <span className="text-sm font-semibold">Certified Local Guides</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle size={18} className="text-orange-500" />
                  <span className="text-sm font-semibold">24/7 Travel Support</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle size={18} className="text-orange-500" />
                  <span className="text-sm font-semibold">Best Price Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={Himachalimage}
                  alt="Mountain landscape"
                  width={1920}
                  height={1000}
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="fill-amber-400 text-amber-400" size={20} />
                  <span className="font-bold text-slate-900">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-slate-600">Based on 2,500+ verified reviews from happy travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="w-full py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-3 block">Our Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Mission & Vision</h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "mission"
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "vision"
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Our Vision
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === "mission" ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-6">
                  To provide exceptional travel experiences that connect people with India's diverse landscapes, cultures, and heritage. We strive to make every journey meaningful, safe, and unforgettable while promoting sustainable tourism practices that benefit local communities.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver authentic, locally-immersive travel experiences",
                    "Ensure safety and comfort for every traveler",
                    "Support local communities through responsible tourism",
                    "Create memories that last a lifetime"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-6">
                  To become India's most trusted and beloved travel company, known for curating extraordinary journeys that inspire wonder and foster deep connections with nature and culture. We envision a world where every traveler can explore India's beauty responsibly and sustainably.
                </p>
                <ul className="space-y-3">
                  {[
                    "Be the first choice for domestic travel in India",
                    "Expand to cover all 28 states and 8 union territories",
                    "Pioneer sustainable tourism practices in India",
                    "Build a community of passionate travelers"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md mb-4">
                  <stat.icon size={28} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-white/90 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-3 block">Our Destinations</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Explore India's Gems</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From the Himalayas to the backwaters, we cover the most beautiful destinations in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{dest.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white font-semibold">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-3 block">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">What Drives Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 mb-4">
                  <value.icon size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Let us help you plan the perfect trip to India's most beautiful destinations
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-xl">
            Get in Touch
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
