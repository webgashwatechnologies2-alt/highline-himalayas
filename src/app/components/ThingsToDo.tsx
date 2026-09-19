"use client";

import React, { useState } from "react";
import Image from "next/image";


import Hadimbaimg from "../../../public/images/destinations/hadimba-devi-temple-manali.webp";
import Solangimg from "../../../public/images/destinations/solang.webp";
import OldManaliimg from "../../../public/images/destinations/oldmanalai.webp";
import Rohtangimg from "../../../public/images/destinations/rohtang.webp";
import AtalTunnelimg from "../../../public/images/destinations/atultunnel.webp";
import Joginiimg from "../../../public/images/destinations/joginiwaterfall.webp";
import KeyMonasteryimg from "../../../public/images/destinations/About-Key-Monastery.webp";
import Chandratalimg from "../../../public/images/destinations/chandertaal.webp";
import Hikkimimg from "../../../public/images/destinations/hikkimpostofc.webp";
import Komicimg from "../../../public/images/destinations/komic-village.webp";
import Pinimg from "../../../public/images/destinations/pinvallery.webp";
import Dhankarimg from "../../../public/images/destinations/dhankar.webp";
import Pangongimg from "../../../public/images/destinations/pg.webp";
import Nubraimg from "../../../public/images/destinations/Nubra-Valley.webp";
import Khardungimg from "../../../public/images/destinations/kdlungala.webp";
import Thikseyimg from "../../../public/images/destinations/Thiksey_Monastery.webp";
import Magneticimg from "../../../public/images/destinations/magnetic_hill_sangam_point.webp";
import Hemisimg from "../../../public/images/destinations/camp.webp";
import Dalimg from "../../../public/images/destinations/famus.webp";
import Gulmargimg from "../../../public/images/destinations/gulmarg.webp";
import Betaabimg from "../../../public/images/destinations/betaab.webp";
import Aruimg from "../../../public/images/destinations/aru-city.webp";
import Sonamargimg from "../../../public/images/destinations/thajiwas-glacier.webp";
import Pariimg from "../../../public/images/destinations/parimahal-lead.webp";
import Alleppeyimg from "../../../public/images/destinations/alleppey.webp";
import Munnarimg from "../../../public/images/destinations/trekking-in-the-middle-of-tea-garden.webp";
import Periyarimg from "../../../public/images/destinations/peryier.webp";
import Athirappillyimg from "../../../public/images/destinations/athirapally-falls-in.webp";
import Varkalaimg from "../../../public/images/destinations/veralalaka.webp";
import Fortimg from "../../../public/images/destinations/Chinese-Fishing-Nets-in-Kochi.webp";

import {
  Compass,
  Mountain,
  Landmark,
  Waves,
  Utensils,
  Sparkles,
  MapPin,
  Calendar,
  X
} from "lucide-react";
import { IndiaFlag } from "./TopSights";

interface ThingToDoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  price: string;
  location: string;
  description: string;
}

const domesticDestinationsList = ["Himachal", "Spiti", "Ladakh", "Kashmir", "Kerala"] as const;

// const activityPills = [
//   { id: "all", label: "Explore", icon: <Compass size={14} /> },
//   { id: "adventure", label: "Adventure", icon: <Mountain size={14} /> },
//   { id: "heritage", label: "Heritage", icon: <Landmark size={14} /> },
//   { id: "water", label: "Lakes & Water", icon: <Waves size={14} /> },
//   { id: "food", label: "Food", icon: <Utensils size={14} /> },
//   { id: "night", label: "Camp & Stargaze", icon: <Sparkles size={14} /> },
// ];

const thingsToDoData: Record<string, ThingToDoItem[]> = {
  "Himachal": [
    {
      id: "hm-1",
      title: "Hadimba Temple & Cedar Grove",
      category: "heritage",
      image: Hadimbaimg.src,
      duration: "3 Hours",
      price: "Price On Request",
      location: "Old Manali, Himachal",
      description: "Historic 16th-century wooden pagoda temple tucked inside a towering deodar cedar sacred forest."
    },
    {
      id: "hm-2",
      title: "Solang Valley Paragliding Arena",
      category: "adventure",
      image: Solangimg.src,
      duration: "4 Hours",
      price: "Price On Request",
      location: "Solang, Himachal",
      description: "Tandem flights soaring over alpine slopes with certified pilots and panoramic mountain views."
    },
    {
      id: "hm-3",
      title: "Old Manali Riverside Cafes",
      category: "food",
      image: OldManaliimg.src,
      duration: "Evening",
      price: "Price On Request",
      location: "Manali, Himachal",
      description: "Artisan cafes serving fresh Himalayan trout, wood-fired sourdough pizzas, and mountain berry jams."
    },
    {
      id: "hm-4",
      title: "Rohtang Pass Snow Ridge",
      category: "adventure",
      image: Rohtangimg.src,
      duration: "Full Day",
      price: "Price On Request",
      location: "Rohtang, 13,058 ft",
      description: "Gateway connecting Kullu to Lahaul with eternal snow peaks, yak rides, and high-pass scenery."
    },
    {
      id: "hm-5",
      title: "Atal Tunnel & Sissu Falls",
      category: "water",
      image: AtalTunnelimg.src,
      duration: "Half Day",
      price: "Price On Request",
      location: "Sissu, Lahaul",
      description: "Cross the world's longest high-altitude tunnel into the surreal weeping falls of Lahaul Valley."
    },
    {
      id: "hm-6",
      title: "Jogini Waterfalls Sacred Trek",
      category: "adventure",
      image: Joginiimg.src,
      duration: "4 Hours",
      price: "Price On Request",
      location: "Vashisht, Himachal",
      description: "A peaceful forest trail leading past apple orchards to the cascading sacred streams of Jogini."
    }
  ],
  "Spiti": [
    {
      id: "sp-1",
      title: "Key Monastery 1,000-Yr Gompa",
      category: "heritage",
      image: KeyMonasteryimg.src,
      duration: "3 Hours",
      price: "Price On Request",
      location: "Key, Spiti Valley",
      description: "Iconic fortress-like Tibetan Buddhist monastery perched atop a rocky hill at 13,668 ft."
    },
    {
      id: "sp-2",
      title: "Chandratal Crescent Moon Lake",
      category: "water",
      image: Chandratalimg.src,
      duration: "Full Day",
      price: "Price On Request",
      location: "Samudra Tapu, 14,100 ft",
      description: "A mystical turquoise crescent lake reflecting towering snow peaks under crystal skies."
    },
    {
      id: "sp-3",
      title: "Hikkim Highest Post Office",
      category: "heritage",
      image: Hikkimimg.src,
      duration: "2 Hours",
      price: "Price On Request",
      location: "Hikkim, 14,567 ft",
      description: "Send a handwritten postcard to your loved ones from the highest working post office on Earth."
    },
    {
      id: "sp-4",
      title: "Komic 15,027 ft Celestial Village",
      category: "night",
      image: Komicimg.src,
      duration: "Overnight",
      price: "Price On Request",
      location: "Komic, Spiti",
      description: "One of the highest inhabited villages connected by motorable road with zero light pollution for stargazing."
    },
    {
      id: "sp-5",
      title: "Pin Valley Wildlife Sanctuary",
      category: "adventure",
      image: Pinimg.src,
      duration: "Full Day",
      price: "Price On Request",
      location: "Mudh, Pin Valley",
      description: "Rugged alpine wilderness home to rare Ibex, Tibetan gazelles, and the elusive snow leopard."
    },
    {
      id: "sp-6",
      title: "Dhankar Cliffside Monastery",
      category: "heritage",
      image: Dhankarimg.src,
      duration: "4 Hours",
      price: "Price On Request",
      location: "Dhankar, Spiti",
      description: "Dramatic cliffside ancient capital overlooking the confluence of Spiti and Pin rivers."
    }
  ],
  "Ladakh": [
    {
      id: "ld-1",
      title: "Pangong Tso Crystal Waters",
      category: "water",
      image: Pangongimg.src,
      duration: "Full Day",
      price: "Price On Request",
      location: "Pangong, Ladakh",
      description: "Endorheic saltwater lake at 14,270 ft changing hues from emerald green to deep cobalt blue."
    },
    {
      id: "ld-2",
      title: "Nubra Valley Hunder Dunes",
      category: "adventure",
      image: Nubraimg.src,
      duration: "Overnight",
      price: "Price On Request",
      location: "Hunder, Nubra",
      description: "High-altitude desert dunes featuring double-humped Bactrian camel safaris and river vistas."
    },
    {
      id: "ld-3",
      title: "Khardung La Pass 17,982 ft",
      category: "adventure",
      image: Khardungimg.src,
      duration: "Half Day",
      price: "Price On Request",
      location: "Khardung La, Ladakh",
      description: "Ascend one of the world's highest motorable passes with panoramic Karakoram views."
    },
    {
      id: "ld-4",
      title: "Thiksey Monastery Palace",
      category: "heritage",
      image: Thikseyimg.src,
      duration: "3 Hours",
      price: "Price On Request",
      location: "Thiksey, Indus Valley",
      description: "Twelve-story Tibetan monastery resembling the Potala Palace with a 49 ft Maitreya Buddha statue."
    },
    {
      id: "ld-5",
      title: "Magnetic Hill & Sangam Point",
      category: "adventure",
      image: Magneticimg.src,
      duration: "Half Day",
      price: "Price On Request",
      location: "Nimmu, Ladakh",
      description: "Experience the gravity-defying hill and dramatic confluence of blue Indus and green Zanskar rivers."
    },
    {
      id: "ld-6",
      title: "Hemis Stargazing Camp",
      category: "night",
      image: Hemisimg.src,
      duration: "Overnight",
      price: "Price On Request",
      location: "Hemis National Park",
      description: "Luxury tented camps under the crystal clear Milky Way arc surrounded by silent jagged peaks."
    }
  ],
  "Kashmir": [
    {
      id: "ks-1",
      title: "Dal Lake Floating Shikara",
      category: "water",
      image: Dalimg.src,
      duration: "2 Hours",
      price: "Price On Request",
      location: "Srinagar, Kashmir",
      description: "Gliding across lotus-filled waters on ornately carved cedar wood Shikara boats at sunrise."
    },
    {
      id: "ks-2",
      title: "Gulmarg Gondola Cable Car",
      category: "adventure",
      image: Gulmargimg.src,
      duration: "Half Day",
      price: "Price On Request",
      location: "Gulmarg, 12,293 ft",
      description: "Soar over pine forests to Apharwat Peak for powder skiing and majestic Himalayan vistas."
    },
    {
      id: "ks-3",
      title: "Betaab Valley Pine Meadows",
      category: "water",
      image: Betaabimg.src,
      duration: "4 Hours",
      price: "Price On Request",
      location: "Pahalgam, Kashmir",
      description: "Picture-perfect green valley with gushing mountain streams, bridges, and backdrop of snow peaks."
    },
    {
      id: "ks-4",
      title: "Aru Valley Alpine Trails",
      category: "adventure",
      image: Aruimg.src,
      duration: "Full Day",
      price: "Price On Request",
      location: "Aru, Pahalgam",
      description: "Quiet scenic meadows and trailheads for Kolahoi Glacier with native mountain ponies."
    },
    {
      id: "ks-5",
      title: "Sonamarg Thajiwas Glacier",
      category: "adventure",
      image: Sonamargimg.src,
      duration: "5 Hours",
      price: "Price On Request",
      location: "Sonamarg, Kashmir",
      description: "The 'Meadow of Gold' offering gentle pony treks to the glistening edge of Thajiwas Glacier."
    },
    {
      id: "ks-6",
      title: "Pari Mahal Historic Gardens",
      category: "heritage",
      image: Pariimg.src,
      duration: "3 Hours",
      price: "Price On Request",
      location: "Zabarwan Range, Srinagar",
      description: "Six-terraced Mughal palace gardens overlooking Dal Lake and the entire Srinagar valley bowl."
    }
  ],
  "Kerala": [
    {
      id: "kr-1",
      title: "Alleppey Houseboat Cruise",
      category: "water",
      image: Alleppeyimg.src,
      duration: "Overnight",
      price: "Price On Request",
      location: "Alleppey, Kerala",
      description: "Cruise tranquil palm-fringed backwaters with traditional Kettuvallam houseboats and chef-prepared meals."
    },
    {
      id: "kr-2",
      title: "Munnar Tea Estate Trek",
      category: "adventure",
      image: Munnarimg.src,
      duration: "Half Day",
      price: "Price On Request",
      location: "Munnar, 7,130 ft",
      description: "Jeep safari to high organic tea plantations to watch the sun rise over a blanket of clouds."
    },
    {
      id: "kr-3",
      title: "Periyar Wildlife Sanctuary",
      category: "night",
      image: Periyarimg.src,
      duration: "Full Day",
      price: "Price On Request",
      location: "Thekkady, Kerala",
      description: "Bamboo rafting and jungle walks inside the cardamom hills observing wild elephants and endemic birds."
    },
    {
      id: "kr-4",
      title: "Athirappilly Waterfalls",
      category: "water",
      image: Athirappillyimg.src,
      duration: "4 Hours",
      price: "Price On Request",
      location: "Thrissur, Kerala",
      description: "The 'Niagara of India' plunging 80 feet down through rainforest canopies and misty spray."
    },
    {
      id: "kr-5",
      title: "Varkala Cliff Beach & Sunset",
      category: "water",
      image: Varkalaimg.src,
      duration: "Evening",
      price: "Price On Request",
      location: "Varkala, Kerala",
      description: "Dramatic red laterite cliffs bordering the Arabian Sea with seaside cafes, yoga, and surf breaks."
    },
    {
      id: "kr-6",
      title: "Fort Kochi Chinese Fishing Nets",
      category: "heritage",
      image: Fortimg.src,
      duration: "3 Hours",
      price: "Price On Request",
      location: "Fort Kochi, Kerala",
      description: "Centuries-old cantilevered shoreline fishing nets, Portuguese bungalows, and aromatic spice bazaars."
    }
  ]
};

interface ModalCard {
  id: string;
  category: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  price: string;
  description: string;
}

export default function ThingsToDo() {
  const [activeToDoDest, setActiveToDoDest] = useState<string>("Himachal");
  const [activeToDoCategory, setActiveToDoCategory] = useState<string>("all");
  const [selectedDetailCard, setSelectedDetailCard] = useState<ModalCard | null>(null);

  return (
    <section className="w-full bg-white py-12 sm:py-18 border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight">
              Top Things to Do in{" "}
              <span className="text-[#FF8C00]">{activeToDoDest}</span>
            </h2>
            <p className="text-xs sm:text-[13.5px] text-slate-500 font-medium mt-1">
              Curated must-visit sights, alpine trails & authentic experiences across domestic routes.
            </p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {domesticDestinationsList.map((dest) => (
              <button
                key={dest}
                type="button"
                onClick={() => {
                  setActiveToDoDest(dest);
                  setActiveToDoCategory("all");
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 inline-flex items-center gap-1.5 ${activeToDoDest === dest
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
              >
                <span>{dest}</span>
                <IndiaFlag />
              </button>
            ))}
          </div>
        </div>
        {/* <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 mb-8 no-scrollbar">
          {activityPills.map((pill) => {
            const isActive = activeToDoCategory === pill.id;
            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => setActiveToDoCategory(pill.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-[13.5px] font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                  }`}
              >
                <span className={isActive ? "text-orange-400" : "text-slate-500"}>
                  {pill.icon}
                </span>
                <span>{pill.label}</span>
              </button>
            );
          })}
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {thingsToDoData[activeToDoDest]
            ?.filter((item) => activeToDoCategory === "all" || item.category === activeToDoCategory)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedDetailCard({
                    id: item.id,
                    category: `Must-Do in ${activeToDoDest}`,
                    title: item.title,
                    image: item.image,
                    location: item.location,
                    duration: item.duration,
                    price: item.price,
                    description: item.description
                  });
                }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl sm:rounded-[20px] overflow-hidden bg-slate-100 shadow-xs group-hover:shadow-md transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-xs text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.duration}
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 mt-2.5 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </div>
            ))}
        </div>
      </div>
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
                  <Calendar size={15} className="text-blue-500" />
                  <span>{selectedDetailCard.duration}</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="ml-auto text-lg font-black text-slate-900">
                  {selectedDetailCard.price}
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {selectedDetailCard.description}
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
                  Book This Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
