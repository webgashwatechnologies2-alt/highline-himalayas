"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import Hamptaimg from "../../../public/images/destinations/hampta-pass-trek.webp";
import Pinimg from "../../../public/images/destinations/pinbabha.webp";
import Markhaimg from "../../../public/images/destinations/Markha-Valley-Trek.webp";
import Kashmirimg from "../../../public/images/destinations/kashmirgateway.webp";
import Keralaimg from "../../../public/images/destinations/munnar.webp";
import Rohtangimg from "../../../public/images/destinations/rohtang-pass-tour.webp";



import {
  Sparkles,
  MapPin,
  Star,
  Heart,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
function IconBird({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7h.01" />
      <path d="M3.4 18c3-4 6-7 10-7h4a4 4 0 0 0 4-4 4 4 0 0 0-4-4H9.5a5.5 5.5 0 0 0-5.5 5.5v2.5" />
      <path d="M14 11v6a3 3 0 0 1-3 3H7" />
      <path d="M10 18l-3 3" />
      <path d="M13 18l-2 3" />
    </svg>
  );
}

function IconHotel({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3.5l.5 1 1.1.2-.8.8.2 1.1L8 6.1l-1 .5.2-1.1-.8-.8 1.1-.2L8 3.5z" fill="currentColor" stroke="none" />
      <path d="M12 2l.5 1 1.1.2-.8.8.2 1.1L12 4.6l-1 .5.2-1.1-.8-.8 1.1-.2L12 2z" fill="currentColor" stroke="none" />
      <path d="M16 3.5l.5 1 1.1.2-.8.8.2 1.1L16 6.1l-1 .5.2-1.1-.8-.8 1.1-.2L16 3.5z" fill="currentColor" stroke="none" />
      <rect x="5" y="7.5" width="14" height="13.5" rx="1.5" />
      <line x1="8" y1="10.5" x2="10" y2="10.5" />
      <line x1="14" y1="10.5" x2="16" y2="10.5" />
      <line x1="8" y1="13.5" x2="10" y2="13.5" />
      <line x1="14" y1="13.5" x2="16" y2="13.5" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}
function IconRestaurant({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="1.5" />
      <path d="M4 15a8 8 0 0 1 16 0H4z" />
      <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
    </svg>
  );
}
function IconHiker({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="4" r="1.5" />
      <path d="M10 7.5h3.5l1.5 5-2.5 3.5 1.5 4" />
      <path d="M9 8.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1" />
      <path d="M11 12.5l-3 4-2.5-1.5" />
      <line x1="17" y1="7" x2="18.5" y2="21" strokeWidth="1.8" />
    </svg>
  );
}
function IconCruise({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l1.5 3h15L21 17l-9-2-9 2z" />
      <path d="M6 15V9h12v6" />
      <path d="M8 9V6h8v3" />
      <line x1="10" y1="6" x2="10" y2="4" />
      <line x1="14" y1="6" x2="14" y2="4" />
      <line x1="2" y1="20" x2="22" y2="20" strokeDasharray="3 3" />
    </svg>
  );
}
function IconBicycle({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="16.5" r="3.5" />
      <circle cx="18.5" cy="16.5" r="3.5" />
      <circle cx="12" cy="16.5" r="1" />
      <path d="M12 16.5L9 9h5l3 7.5" />
      <path d="M9 9L5.5 16.5" />
      <path d="M14 9l1-3h3" />
      <path d="M7 9h3" />
    </svg>
  );
}
function IconUrn({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="4" x2="17" y2="4" strokeWidth="2" />
      <path d="M9 4v2c0 2-3 3-3 6a6 6 0 0 0 12 0c0-3-3-4-3-6V4" />
      <line x1="8" y1="20" x2="16" y2="20" strokeWidth="2" />
      <line x1="10" y1="18" x2="14" y2="18" />
      <path d="M6 8a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1 2.5 2.5 2.5" />
      <path d="M18 8a2.5 2.5 0 0 1 2.5 2.5c0 1.5-1 2.5-2.5 2.5" />
    </svg>
  );
}

function IconVan({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v11H3z" />
      <path d="M14 9h4.5L21 12.5V17h-7" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
      <line x1="14" y1="13" x2="18.5" y2="13" />
    </svg>
  );
}

function IconSkier({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="4.5" r="1.5" />
      <path d="M11 9l4-2 3 3" />
      <path d="M12 9l-2 4 4 4" />
      <path d="M10 13l-3 4" />
      <line x1="4" y1="21" x2="18" y2="17" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="7" x2="18" y2="20" strokeWidth="1.2" />
      <line x1="11" y1="9" x2="8" y2="20" strokeWidth="1.2" />
    </svg>
  );
}

function IconBed({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7v13" />
      <path d="M21 11v9" />
      <path d="M3 16h18" />
      <path d="M3 12h18v4H3z" />
      <rect x="6" y="8" width="4.5" height="3" rx="1" />
      <rect x="13.5" y="8" width="4.5" height="3" rx="1" />
    </svg>
  );
}

function IconTourPin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
      <path d="M18 9v3" />
      <path d="M6 19c0-3 3-5 6-5s4-2 4-5" strokeDasharray="2.5 2.5" />
      <circle cx="6" cy="19" r="2" />
    </svg>
  );
}

function IconMonument({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2 3h-4l2-3z" fill="currentColor" />
      <path d="M10 5l-1.5 15h7L14 5" />
      <line x1="6" y1="20" x2="18" y2="20" strokeWidth="2" />
      <line x1="5" y1="22" x2="19" y2="22" strokeWidth="2" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

const categories = [
  { id: "wildlife", label: "Wildlife", icon: <IconBird /> },
  { id: "hotels", label: "Hotels & Resorts", icon: <IconHotel /> },
  { id: "restaurant", label: "Restaurant", icon: <IconRestaurant /> },
  { id: "hiking", label: "Hiking & Trekking", icon: <IconHiker /> },
  { id: "cruises", label: "Cruises", icon: <IconCruise /> },
  { id: "bicycle", label: "Bicycle Rentals", icon: <IconBicycle /> },
  { id: "museums", label: "Museums", icon: <IconUrn /> },
  { id: "car", label: "Car Service", icon: <IconVan /> },
  { id: "skiing", label: "Skiing", icon: <IconSkier /> },
  { id: "bnb", label: "Bed & Breakfasts", icon: <IconBed /> },
  { id: "tours", label: "Tours", icon: <IconTourPin /> },
  { id: "monuments", label: "Monuments", icon: <IconMonument /> },
];

interface AdventureCard {
  id: string;
  category: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  unit: string;
  badge?: string;
  image: string;
  details: string;
}

const adventuresData: Record<string, AdventureCard[]> = {
  "Restaurant": [
    {
      id: "res-1",
      category: "Restaurant",
      title: "The Cloud Cliff Alpine Bistro",
      location: "Old Manali, Himachal",
      rating: 4.94,
      reviews: 182,
      price: "Price On Request",
      unit: "per person",
      badge: "Chef's Choice",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      details: "Organic wood-fired sourdough, smoked Himalayan trout, mountain berry glaze."
    },
    {
      id: "res-2",
      category: "Restaurant",
      title: "Solang Valley Sunset Dining",
      location: "Solang, Himachal",
      rating: 4.88,
      reviews: 145,
      price: "Price On Request",
      unit: "tasting menu",
      badge: "Panoramic View",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=80",
      details: "Open terrace glass dining overlooking snowcapped peaks with bonfire."
    },
    {
      id: "res-3",
      category: "Restaurant",
      title: "Leh Heritage Rooftop Cafe",
      location: "Main Bazaar, Ladakh",
      rating: 4.91,
      reviews: 210,
      price: "Price On Request",
      unit: "avg meal",
      badge: "Authentic",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
      details: "Traditional Tibetan thukpa, butter tea, and freshly baked apricot pies."
    },
    {
      id: "res-4",
      category: "Restaurant",
      title: "Kashmir Wazwan Royal Feast",
      location: "Srinagar, Kashmir",
      rating: 4.96,
      reviews: 267,
      price: "Price On Request",
      unit: "per person",
      badge: "Traditional",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
      details: "Authentic 36-course Wazwan with rogan josh, gushtaba, and kahwa tea."
    },
    {
      id: "res-5",
      category: "Restaurant",
      title: "Kerala Backwater Spice Kitchen",
      location: "Alappuzha, Kerala",
      rating: 4.93,
      reviews: 198,
      price: "Price On Request",
      unit: "per person",
      badge: "Seafood",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80",
      details: "Fresh catch karimeen curry, appam, and traditional Kerala sadya."
    },
    {
      id: "res-6",
      category: "Restaurant",
      title: "Spiti Valley Mountain Kitchen",
      location: "Kaza, Spiti",
      rating: 4.87,
      reviews: 112,
      price: "Price On Request",
      unit: "per person",
      badge: "Local",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
      details: "Traditional Spiti thukpa, momos, and yak butter tea with mountain views."
    },
  ],
  "Hotels & Resorts": [
    {
      id: "hot-1",
      category: "Hotels & Resorts",
      title: "The Himalayan Cedar Sanctuary",
      location: "Kullu Valley, Himachal",
      rating: 4.97,
      reviews: 312,
      price: "Price On Request",
      unit: "per night",
      badge: "Luxury 5★",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
      details: "Private pine chalets, heated infinity pool facing Pir Panjal range."
    },
    {
      id: "hot-2",
      category: "Hotels & Resorts",
      title: "Spiti Desert Star Dome Resort",
      location: "Kaza, Spiti Valley",
      rating: 4.92,
      reviews: 198,
      price: "Price On Request",
      unit: "per night",
      badge: "Stargazing",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80",
      details: "Geodesic luxury domes with telescope decks for Milky Way viewing."
    },
    {
      id: "hot-3",
      category: "Hotels & Resorts",
      title: "Kashmir Dal Lake Houseboat",
      location: "Srinagar, Kashmir",
      rating: 4.95,
      reviews: 289,
      price: "Price On Request",
      unit: "per night",
      badge: "Heritage",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80",
      details: "Traditional cedar houseboats with shikara rides and walnut wood interiors."
    },
    {
      id: "hot-4",
      category: "Hotels & Resorts",
      title: "Kerala Ayurveda Beach Resort",
      location: "Varkala, Kerala",
      rating: 4.94,
      reviews: 245,
      price: "Price On Request",
      unit: "per night",
      badge: "Wellness",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80",
      details: "Cliff-top cottages with authentic Ayurveda treatments and sunset views."
    },
    {
      id: "hot-5",
      category: "Hotels & Resorts",
      title: "Nubra Valley Sand Dune Camp",
      location: "Hunder, Ladakh",
      rating: 4.91,
      reviews: 167,
      price: "Price On Request",
      unit: "per night",
      badge: "Desert",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      details: "Luxury Swiss tents with Bactrian camel rides and starry desert nights."
    },
    {
      id: "hot-6",
      category: "Hotels & Resorts",
      title: "Munnar Tea Estate Bungalow",
      location: "Munnar, Kerala",
      rating: 4.96,
      reviews: 289,
      price: "Price On Request",
      unit: "per night",
      badge: "Heritage",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
      details: "Colonial-era plantation bungalow surrounded by endless tea gardens."
    },
  ],
  "Hiking & Trekking": [
    {
      id: "hik-1",
      category: "Hiking & Trekking",
      title: "Hampta Pass & Chandratal Lake Trek",
      location: "Manali to Spiti Valley",
      rating: 4.98,
      reviews: 440,
      price: "Price On Request",
      unit: "5-day trek",
      badge: "Best Seller",
      image: Hamptaimg.src,
      details: "Cross from lush green valleys to dramatic cold desert moonscapes."
    },
    {
      id: "hik-2",
      category: "Hiking & Trekking",
      title: "Pin Bhaba High Alpine Expedition",
      location: "Kinnaur to Spiti",
      rating: 4.95,
      reviews: 185,
      price: "Price On Request",
      unit: "7-day trek",
      badge: "High Altitude",
      image: Pinimg.src,
      details: "Spectacular 16,105 ft pass crossing with pristine river deltas."
    },
    {
      id: "hik-3",
      category: "Hiking & Trekking",
      title: "Markha Valley Wilderness Circuit",
      location: "Hemis National Park, Ladakh",
      rating: 4.91,
      reviews: 260,
      price: "Price On Request",
      unit: "6-day trek",
      badge: "Wild Trail",
      image: Markhaimg.src,
      details: "Himalayan Buddhist villages, ancient forts and high prayer flag passes."
    },
    {
      id: "hik-4",
      category: "Hiking & Trekking",
      title: "Kashmir Great Lakes Trek",
      location: "Sonamarg, Kashmir",
      rating: 4.93,
      reviews: 198,
      price: "Price On Request",
      unit: "7-day trek",
      badge: "Alpine",
      image: Kashmirimg.src,
      details: "Seven pristine alpine lakes, meadows of wildflowers and snow-capped peaks."
    },
    {
      id: "hik-5",
      category: "Hiking & Trekking",
      title: "Kerala Munnar Tea Garden Trails",
      location: "Munnar, Kerala",
      rating: 4.89,
      reviews: 156,
      price: "Price On Request",
      unit: "3-day trek",
      badge: "Nature",
      image: Keralaimg.src,
      details: "Walk through lush tea plantations, spice gardens and misty hill stations."
    },
    {
      id: "hik-6",
      category: "Hiking & Trekking",
      title: "Rohtang Pass Glacier Expedition",
      location: "Manali, Himachal",
      rating: 4.92,
      reviews: 234,
      price: "Price On Request",
      unit: "4-day trek",
      badge: "Glacier",
      image: Rohtangimg.src,
      details: "Explore stunning glaciers, snow bridges and panoramic mountain vistas."
    },
  ],
  "Wildlife": [
    {
      id: "wil-1",
      category: "Wildlife",
      title: "Hemis Snow Leopard Winter Quest",
      location: "Rumbak Valley, Ladakh",
      rating: 4.99,
      reviews: 112,
      price: "Price On Request",
      unit: "7-day safari",
      badge: "Rare Sighting",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop&q=80",
      details: "Expert native trackers, spotting scopes and heated homestay camps."
    },
    {
      id: "wil-2",
      category: "Wildlife",
      title: "Great Himalayan National Park Safari",
      location: "Tirthan Valley, Himachal",
      rating: 4.88,
      reviews: 178,
      price: "Price On Request",
      unit: "3-day permit",
      badge: "UNESCO Site",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      details: "Western tragopan, musk deer, Himalayan brown bears, pristine flora."
    },
    {
      id: "wil-3",
      category: "Wildlife",
      title: "Dachigam Hangul Deer Sanctuary",
      location: "Srinagar, Kashmir",
      rating: 4.86,
      reviews: 145,
      price: "Price On Request",
      unit: "full day",
      badge: "Endangered",
      image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&auto=format&fit=crop&q=80",
      details: "Spot the rare Kashmir stag (hangul) in their natural Himalayan habitat."
    },
    {
      id: "wil-4",
      category: "Wildlife",
      title: "Periyar Tiger Reserve Boat Safari",
      location: "Thekkady, Kerala",
      rating: 4.92,
      reviews: 267,
      price: "Price On Request",
      unit: "per person",
      badge: "Tiger Reserve",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&fit=crop&q=80",
      details: "Periyar Lake boat safari to spot elephants, tigers and rare birds."
    },
    {
      id: "wil-5",
      category: "Wildlife",
      title: "Spiti Valley Blue Sheep Safari",
      location: "Kibber, Spiti",
      rating: 4.88,
      reviews: 98,
      price: "Price On Request",
      unit: "full day",
      badge: "Rare Species",
      image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=800&auto=format&fit=crop&q=80",
      details: "Spot the elusive blue sheep (bharal) and ibex in high-altitude Spiti terrain."
    },
    {
      id: "wil-6",
      category: "Wildlife",
      title: "Kerala Backwater Bird Sanctuary",
      location: "Kumarakom, Kerala",
      rating: 4.90,
      reviews: 189,
      price: "Price On Request",
      unit: "per person",
      badge: "Birding",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&fit=crop&q=80",
      details: "Houseboat bird watching tour through Vembanad Lake's migratory bird habitats."
    },
  ]
};

export default function CuratedShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("Hiking & Trekking");
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({});
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedDetailCard, setSelectedDetailCard] = useState<AdventureCard | null>(null);

  const [priceRange, setPriceRange] = useState(300);
  const [selectedRating, setSelectedRating] = useState(4.5);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -260 : 260, behavior: "smooth" });
  };

  const toggleLike = (id: string) => {
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedAdventures = adventuresData[activeCategory] || adventuresData["Restaurant"];

  return (
    <section id="showcase-section" className="w-full bg-slate-50/70 py-12 border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-2 sm:gap-4 mb-8 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-2 sm:p-2.5 shadow-sm">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 shrink-0 cursor-pointer active:scale-95 transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>

          <div
            ref={scrollRef}
            className="flex-1 flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat.label;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full shrink-0 cursor-pointer transition-all duration-200 border ${
                    active
                      ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/15"
                      : "bg-white/70 hover:bg-white text-slate-600 hover:text-slate-900 border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <div className={`transition-transform duration-200 ${active ? "text-orange-400 scale-105" : "text-slate-500"}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[12.5px] whitespace-nowrap ${active ? "font-bold text-white" : "font-semibold text-slate-700"}`}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 shrink-0 cursor-pointer active:scale-95 transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-orange-600 font-bold text-[13px] tracking-wide uppercase mb-1">
              <Sparkles size={14} />
              <span>Curated for you</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Top Rated in <span className="text-[#FF8C00]">{activeCategory}</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Handpicked adventures and accommodations verified for excellence.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setFilterModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs cursor-pointer transition-colors"
            >
              <SlidersHorizontal size={13} className="text-orange-500" />
              <span>Filters</span>
            </button>
            <span className="text-xs font-semibold text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              Showing top 3 of 48 results
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedAdventures.map((adv) => (
            <div
              key={adv.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={adv.image}
                  alt={adv.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                {adv.badge && (
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-slate-800 shadow-sm">
                    {adv.badge}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => toggleLike(adv.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
                  aria-label="Save to wishlist"
                >
                  <Heart
                    size={17}
                    className={likedCards[adv.id] ? "fill-red-500 text-red-500" : ""}
                  />
                </button>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-semibold drop-shadow-md">
                  <MapPin size={13} className="text-orange-400" />
                  <span>{adv.location}</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {adv.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span>{adv.rating}</span>
                      <span className="text-slate-400 font-normal">({adv.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {adv.details}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-slate-900">{adv.price}</span>
                    <span className="text-xs text-slate-400 ml-1">/{adv.unit}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedDetailCard(adv)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF8C00] hover:bg-[#F44336] text-white text-xs font-bold shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                  >
                    Book Now
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {filterModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs"
            onClick={() => setFilterModalOpen(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 z-10 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-extrabold text-slate-900">Filters</h3>
              <button
                type="button"
                onClick={() => setFilterModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            <div className="py-4 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800">Max Price: ${priceRange}</label>
                  <span className="text-xs text-slate-400">per person / night</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>Price On Request</span>
                  <span>Price On Request0</span>
                  <span>Price On Request</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-2.5">Key Amenities</p>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  {["Free Cancellation", "Certified Mountain Guide", "Organic Meals", "Heated Stay", "WiFi & Cellular", "Airport Pickup"].map((item) => (
                    <label key={item} className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                      <input type="checkbox" defaultChecked={item === "Free Cancellation"} className="accent-orange-600 rounded" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-2">Minimum Rating</p>
                <div className="flex items-center gap-2">
                  {[4.0, 4.5, 4.8, 4.9].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setSelectedRating(rate)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border transition-colors cursor-pointer ${
                        selectedRating === rate
                          ? "bg-orange-50 border-orange-500 text-orange-600"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      {rate}+
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setFilterModalOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={() => setFilterModalOpen(false)}
                className="px-6 py-2.5 bg-[#FF8C00] hover:bg-[#F44336] text-white text-xs font-bold rounded-full shadow-md cursor-pointer"
              >
                Show 48 results
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedDetailCard && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setSelectedDetailCard(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 animate-in zoom-in-95 duration-150">
            <div className="relative h-60 w-full bg-slate-900">
              <Image
                src={selectedDetailCard.image}
                alt={selectedDetailCard.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedDetailCard(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
                  {selectedDetailCard.category}
                </span>
                <h3 className="text-xl font-black leading-tight text-white">
                  {selectedDetailCard.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-orange-600">
                  <MapPin size={15} />
                  <span>{selectedDetailCard.location}</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <span>{selectedDetailCard.rating}</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="ml-auto text-lg font-black text-slate-900">
                  {selectedDetailCard.price} <span className="text-xs text-slate-400 font-normal">/{selectedDetailCard.unit}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {selectedDetailCard.details}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDetailCard(null)}
                  className="flex-1 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDetailCard(null)}
                  className="flex-1 py-3 rounded-full bg-[#FF8C00] hover:bg-[#F44336] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
