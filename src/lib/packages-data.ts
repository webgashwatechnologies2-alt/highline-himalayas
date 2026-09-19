

export type PackageInclusion =
  | "stay"
  | "meals"
  | "car"
  | "bike"
  | "backup"
  | "sightseeing"
  | "flights"
  | "guide";

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  meals: string;
  overnight: string;
}

export interface HotelOption {
  name: string;
  stars: number;
  type: string;
  amenities: string[];
}

export interface TourPackage {
  id: string;
  destination: "himachal" | "spiti" | "ladakh" | "kashmir" | "kerala";
  title: string;
  subtitle: string;
  route: string;
  nights: string;
  days: string;
  badge: string;
  badgeGrad: string;
  tag: string;
  tagColor: string;
  discount: string;
  rating: number;
  reviews: number;
  price: string;
  category: string;
  image: string;
  overview: string;
  highlights: string[];
  includes: PackageInclusion[];
  included: string[];
  excluded: string[];
  itinerary: DayItinerary[];
  hotels: HotelOption[];
  transferInfo: string;
  policies: { title: string; content: string }[];
  primaryColor: string;
  accentColor: string;
}

export const allPackages: TourPackage[] = [
  // ─── HIMACHAL ──────────────────────────────────────────────────────────────
  {
    id: "manali-chandratal-tour-package",
    destination: "himachal",
    title: "Manali Chandratal Kaza Safari",
    subtitle:
      "A thrilling Spiti Valley road trip through Manali, Chandratal Lake and Kaza",

    route: "Delhi → Manali → Chandratal → Kaza → Manali → Delhi",

    nights: "7N",
    days: "8D",

    badge: "Best Seller",
    badgeGrad: "from-[#FF8C00] to-[#FF8C00]",

    tag: "⭐ Adventure Special",
    tagColor: "text-amber-600 bg-amber-50 border-amber-200",

    discount: "20% OFF",
    rating: 4.9,
    reviews: 312,

    price: "Price on Request",
    category: "adventure",

    image: "/images/packagesimages/chandertaaalnew.webp",


    overview:
      "Experience the ultimate Himalayan adventure with our Manali Chandratal Kaza Safari. Explore the scenic beauty of Manali, drive through the spectacular Atal Tunnel and Kunzum Pass, discover the remote villages and monasteries of Spiti Valley, and witness the mesmerizing beauty of Chandratal Lake. This carefully planned journey is perfect for adventure seekers, nature lovers, couples and families looking to explore the breathtaking landscapes of Himachal Pradesh.",

    highlights: [
      "Explore the scenic beauty and attractions of Manali",
      "Experience the spectacular drive through Atal Tunnel",
      "Cross the scenic Kunzum Pass",
      "Explore Kaza and the remote landscapes of Spiti Valley",
      "Visit Key Monastery, Kibber and Chicham Bridge",
      "Discover Langza, Hikkim and Komic villages",
      "Visit the iconic Chandratal Lake",
      "Enjoy breathtaking Himalayan landscapes throughout the journey",
    ],

    includes: ["stay", "meals", "car", "sightseeing"],

    included: [
      "Accommodation in comfortable hotels and camps",
      "Daily Breakfast & Dinner",
      "Delhi–Manali–Delhi Volvo/AC bus tickets, if applicable",
      "Private vehicle for sightseeing and transfers",
      "Manali local sightseeing",
      "Manali–Chandratal–Kaza–Manali transfers",
      "Kaza local sightseeing",
      "Chandratal Lake excursion",
      "Driver allowance, toll taxes & parking charges",
    ],

    excluded: [
      "Airfare / Train Fare",
      "Rohtang Pass permit & vehicle charges, if applicable",
      "Adventure activities such as Paragliding, ATV Ride, Skiing, etc.",
      "Lunch and personal expenses",
      "Monument and monastery entry fees",
      "Travel insurance",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi to Manali",
        description:
          "Depart from Delhi and begin your scenic journey towards Manali. Enjoy the beautiful mountain landscapes as you travel through Himachal Pradesh. Arrive in Manali by evening, check in to your hotel and relax.",
        meals: "Dinner",
        overnight: "Manali",
      },

      {
        day: 2,
        title: "Manali Local Sightseeing",
        description:
          "After breakfast, explore the popular attractions of Manali including Hadimba Devi Temple, Manu Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar and Mall Road. Spend the evening exploring the local market before returning to the hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 3,
        title: "Manali to Chandratal Lake via Atal Tunnel & Kunzum Pass",
        description:
          "Start early from Manali and drive towards the stunning Chandratal Lake. Pass through Atal Tunnel, Gramphoo, Batal and the spectacular Kunzum Pass before reaching the Chandratal region. Enjoy the breathtaking landscapes of the Lahaul and Spiti valleys and spend the night at a campsite near Chandratal.",
        meals: "Breakfast & Dinner",
        overnight: "Chandratal",
      },

      {
        day: 4,
        title: "Chandratal Lake to Kaza",
        description:
          "Wake up to beautiful Himalayan views and enjoy the serene surroundings of Chandratal Lake. After breakfast, continue your journey towards Kaza through the rugged landscapes of Spiti Valley. Visit Losar and other scenic villages en route before reaching Kaza and checking in to your hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },

      {
        day: 5,
        title: "Kaza Local Sightseeing – Key, Kibber & Chicham",
        description:
          "After breakfast, explore the highlights around Kaza. Visit the ancient Key Monastery, followed by Kibber Village and the spectacular Chicham Bridge. Enjoy panoramic views of the Spiti Valley and return to Kaza by evening.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },

      {
        day: 6,
        title: "Langza, Hikkim & Komic Excursion",
        description:
          "After breakfast, visit the high-altitude villages of Langza, Hikkim and Komic. Explore traditional Spitian villages, admire the surrounding Himalayan peaks and visit the famous Hikkim Post Office. Return to Kaza by evening and relax at your hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },

      {
        day: 7,
        title: "Kaza to Manali via Kunzum Pass",
        description:
          "After breakfast, begin your return journey from Kaza towards Manali. Drive through the dramatic landscapes of Spiti Valley, crossing Kunzum Pass, Batal and the Atal Tunnel. Arrive in Manali by evening, check in to your hotel and relax.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 8,
        title: "Manali to Delhi Departure",
        description:
          "After breakfast, check out from the hotel and begin your return journey from Manali to Delhi. Enjoy the scenic mountain roads and carry unforgettable memories of your Manali, Chandratal, Kaza and Spiti Valley adventure.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Snow Valley Resorts",
        stars: 3,
        type: "Mountain Resort",
        amenities: [
          "Mountain View",
          "WiFi",
          "Restaurant",
          "Bonfire",
          "Parking",
        ],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: [
          "Mountain View",
          "Restaurant",
          "Hot Water",
          "WiFi",
        ],
      },
      {
        name: "Chandratal Lake Camp",
        stars: 3,
        type: "Mountain Camp",
        amenities: [
          "Mountain View",
          "Campfire",
          "Meals",
          "Tent Stay",
        ],
      },
    ],

    transferInfo:
      "Private Innova Crysta for the complete Manali–Chandratal–Kaza–Manali route with an experienced driver familiar with Himalayan roads.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "All bookings are confirmed after advance payment. Payment can be made via bank transfer, UPI or credit/debit card. Minimum 30% advance is required to confirm the booking.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "Cancellation 30+ days before departure: 90% refund. Cancellation 15–30 days: 50% refund. Cancellation 7–15 days: 25% refund. Less than 7 days: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is sent via email or WhatsApp within 2 hours of payment. Balance payment is due 15 days before the trip start date.",
      },
    ],

    primaryColor: "#1565C0",
    accentColor: "#FF8C00",
  },
  {
    id: "tirthan-valley-tour-package",
    destination: "himachal",
    title: "Tirthan Valley Tour Package",
    subtitle:
      "A peaceful Himalayan escape through Tirthan Valley, Jibhi, Jalori Pass and nearby mountain villages",

    route: "Delhi → Tirthan Valley → Jibhi → Jalori Pass → Tirthan Valley → Delhi",

    nights: "6N",
    days: "7D",

    badge: "Top Rated",
    badgeGrad: "from-[#1565C0] to-[#1976D2]",

    tag: "⭐ Top Rated",
    tagColor: "text-blue-600 bg-blue-50 border-blue-200",

    discount: "15% OFF",
    rating: 4.95,
    reviews: 189,

    price: "Price on Request",
    category: "family",

    image: "/images/packagesimages/jibhi-tirthan.webp",

    overview:
      "Escape into the peaceful beauty of Tirthan Valley, one of Himachal Pradesh’s most scenic destinations. Surrounded by dense deodar forests, snow-capped Himalayan peaks, the crystal-clear Tirthan River and charming mountain villages, this package offers the perfect blend of nature, relaxation and adventure. Explore Jibhi, visit its famous waterfall, enjoy peaceful riverside moments, discover traditional Himalayan villages and experience the spectacular landscapes around Jalori Pass.",

    highlights: [
      "Explore the peaceful beauty of Tirthan Valley",
      "Visit the charming village of Jibhi and Jibhi Waterfall",
      "Enjoy relaxing riverside walks along the Tirthan River",
      "Scenic drive through dense forests towards Jalori Pass",
      "Visit Jalori Pass and Serolsar Lake",
      "Explore traditional Himalayan villages and local culture",
      "Enjoy nature walks, waterfalls and peaceful mountain surroundings",
      "Stay in comfortable properties surrounded by Himalayan landscapes",
    ],

    includes: ["stay", "meals", "car", "sightseeing"],

    included: [
      "6 Nights accommodation in comfortable 3★ hotels/resorts",
      "Daily Breakfast & Dinner",
      "Private vehicle for all transfers and sightseeing",
      "Tirthan Valley & Jibhi sightseeing",
      "Jalori Pass & Serolsar Lake excursion",
      "All sightseeing as per itinerary",
      "Driver allowance, toll taxes & parking charges",
    ],

    excluded: [
      "Airfare / Train Fare",
      "Adventure activities such as River Crossing, Trekking, Fishing, etc.",
      "Lunch and personal expenses",
      "Monument and attraction entry fees",
      "Guide charges, if required",
      "Travel insurance",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi to Tirthan Valley",
        description:
          "Begin your journey from Delhi towards the peaceful Tirthan Valley. Travel through the scenic Himalayan foothills and beautiful mountain roads before reaching Tirthan Valley. Check in to your resort and relax amidst the serene surroundings. In the evening, enjoy a peaceful riverside walk along the Tirthan River.",
        meals: "Dinner",
        overnight: "Tirthan Valley",
      },

      {
        day: 2,
        title: "Tirthan Valley Nature & Riverside Experience",
        description:
          "After breakfast, spend the day exploring the natural beauty of Tirthan Valley. Enjoy peaceful walks along the river, explore nearby forest trails and discover the charming surroundings of the valley. Spend the evening relaxing at the resort amidst the beautiful Himalayan landscape.",
        meals: "Breakfast & Dinner",
        overnight: "Tirthan Valley",
      },

      {
        day: 3,
        title: "Jibhi Village & Waterfall Sightseeing",
        description:
          "After breakfast, drive to the picturesque village of Jibhi. Explore the famous Jibhi Waterfall, traditional wooden houses and lush green surroundings. Enjoy leisure time at local cafés and take a peaceful walk through the village before returning to Tirthan Valley.",
        meals: "Breakfast & Dinner",
        overnight: "Tirthan Valley",
      },

      {
        day: 4,
        title: "Jalori Pass & Serolsar Lake Excursion",
        description:
          "After breakfast, head towards Jalori Pass through beautiful cedar and pine forests. Enjoy spectacular Himalayan views from the pass and, depending on weather and trail conditions, take a short trek towards the peaceful Serolsar Lake. Return to Tirthan Valley by evening.",
        meals: "Breakfast & Dinner",
        overnight: "Tirthan Valley",
      },

      {
        day: 5,
        title: "Gushaini & Traditional Himalayan Villages",
        description:
          "After breakfast, explore Gushaini and nearby mountain villages around Tirthan Valley. Experience the local Himalayan lifestyle, traditional architecture and beautiful natural surroundings. Spend a relaxed evening at your resort with the peaceful sound of the river.",
        meals: "Breakfast & Dinner",
        overnight: "Tirthan Valley",
      },

      {
        day: 6,
        title: "Tirthan Valley Leisure Day",
        description:
          "Enjoy a relaxed day amidst the beautiful surroundings of Tirthan Valley. Spend your time at leisure with optional nature walks, riverside relaxation, photography or exploring nearby cafés and local areas. Enjoy your final evening in the peaceful Himalayan environment.",
        meals: "Breakfast & Dinner",
        overnight: "Tirthan Valley",
      },

      {
        day: 7,
        title: "Tirthan Valley to Delhi Departure",
        description:
          "After breakfast, check out from the resort and begin your return journey to Delhi. Enjoy the scenic mountain roads as you travel back from the peaceful Tirthan Valley. Arrive in Delhi with wonderful memories of your Himalayan getaway.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Tirthan Riverside Cottage",
        stars: 3,
        type: "Riverside Eco Cottage",
        amenities: [
          "River View",
          "WiFi",
          "Restaurant",
          "Bonfire",
          "Parking",
        ],
      },
      {
        name: "Jibhi Mountain Retreat",
        stars: 3,
        type: "Mountain Retreat",
        amenities: [
          "Mountain View",
          "Restaurant",
          "Bonfire",
          "WiFi",
        ],
      },
    ],

    transferInfo:
      "Private Innova Crysta for all transfers and sightseeing. Experienced driver familiar with Himalayan hill roads.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance required to confirm the booking. Balance payment is due 15 days before departure.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days: 50% refund. Under 7 days: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is sent via email or WhatsApp within 2 hours of payment.",
      },
    ],

    primaryColor: "#1565C0",
    accentColor: "#FF8C00",
  },
  {
    id: "shimla-kullu-manali-honeymoon-tour-package",
    destination: "himachal",
    title: "Shimla Kullu Manali Honeymoon Package",
    subtitle:
      "A romantic Himalayan escape through Shimla, Kullu and Manali",

    route: "Delhi → Shimla → Kufri → Kullu → Manali → Solang Valley → Delhi",

    nights: "5N",
    days: "6D",

    badge: "Fastest Selling",
    badgeGrad: "from-[#059669] to-[#10B981]",

    tag: "🔥 Fastest Selling",
    tagColor: "text-emerald-700 bg-emerald-50 border-emerald-200",

    discount: "20% OFF",
    rating: 4.8,
    reviews: 421,

    price: "Price on Request",
    category: "honeymoon",

    image: "/images/destinations/Shimla-During-Monsoon.jpg",

    overview:
      "Celebrate your love with a memorable Himalayan honeymoon across Shimla, Kullu and Manali. Explore the romantic charm of Shimla, enjoy scenic drives through the beautiful Kullu Valley, experience the peaceful surroundings of Manali and spend quality time together amidst breathtaking mountain landscapes. From cozy evenings on Mall Road to scenic views of Solang Valley, this package is designed especially for couples looking for a perfect Himachal honeymoon experience.",

    highlights: [
      "Romantic Shimla sightseeing including The Ridge, Mall Road and Christ Church",
      "Scenic Kufri excursion with beautiful Himalayan mountain views",
      "Romantic drive through the picturesque Kullu Valley along the Beas River",
      "Visit Pandoh Dam and enjoy scenic Himalayan landscapes",
      "Couple-friendly Manali sightseeing including Hadimba Temple and Vashisht",
      "Full-day Solang Valley excursion with optional adventure activities",
      "Peaceful evenings and beautiful mountain views for couples",
    ],

    includes: ["stay", "meals", "car", "sightseeing"],

    included: [
      "5 Nights accommodation in comfortable hotels",
      "Daily Breakfast & Dinner",
      "Delhi–Shimla and Manali–Delhi Volvo/AC bus tickets, if applicable",
      "Private cab for all hill transfers and sightseeing",
      "Shimla & Kufri sightseeing",
      "Kullu Valley sightseeing",
      "Manali local sightseeing",
      "Solang Valley & Atal Tunnel excursion",
      "Driver allowance, toll taxes & parking charges",
    ],

    excluded: [
      "Airfare / Train Fare",
      "Rohtang Pass permit & vehicle charges, if applicable",
      "Adventure activities such as Paragliding, ATV Ride, Skiing, etc.",
      "Lunch and personal expenses",
      "Monument and attraction entry fees",
      "Travel insurance",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla",
        description:
          "Begin your romantic journey from Delhi to Shimla. Upon arrival, check in to your hotel and relax. In the evening, enjoy a romantic walk along Mall Road, The Ridge and Christ Church while taking in the beautiful Himalayan surroundings.",
        meals: "Dinner",
        overnight: "Shimla",
      },

      {
        day: 2,
        title: "Romantic Shimla & Kufri Sightseeing",
        description:
          "After breakfast, enjoy a romantic excursion to Kufri. Visit Green Valley, Himalayan Nature Park and Mahasu Peak while enjoying beautiful Himalayan views. Later, explore Shimla Mall Road and Lakkar Bazaar before returning to your hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Shimla",
      },

      {
        day: 3,
        title: "Shimla to Manali via Kullu Valley",
        description:
          "After breakfast, check out from your Shimla hotel and drive towards Manali through the scenic Kullu Valley. En route, enjoy beautiful views of the Beas River, visit Pandoh Dam and explore Kullu. Continue your scenic journey towards Manali and check in to your romantic hotel by evening.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 4,
        title: "Manali Local Sightseeing",
        description:
          "After breakfast, explore the romantic charm of Manali. Visit Hadimba Devi Temple, Manu Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar and Mall Road. Spend the evening at leisure exploring Old Manali or enjoying a cozy café experience together.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 5,
        title: "Solang Valley & Atal Tunnel Excursion",
        description:
          "After breakfast, enjoy a scenic excursion towards Solang Valley and Atal Tunnel. Experience breathtaking mountain views, waterfalls and beautiful Himalayan landscapes. Optional adventure activities can be enjoyed at your own cost. Return to Manali by evening for a relaxing final night.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 6,
        title: "Manali to Delhi Departure",
        description:
          "After breakfast, check out from your hotel and enjoy some leisure time in Manali for shopping or a final romantic walk along Mall Road. Later, begin your return journey to Delhi with beautiful memories of your Shimla, Kullu and Manali honeymoon.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Hotel Willow Banks",
        stars: 3,
        type: "Valley View Hotel",
        amenities: [
          "Valley View",
          "WiFi",
          "Restaurant",
          "Parking",
        ],
      },
      {
        name: "Manali Inn",
        stars: 3,
        type: "Honeymoon Hill Hotel",
        amenities: [
          "Mountain View",
          "WiFi",
          "Restaurant",
          "Bonfire",
        ],
      },
    ],

    transferInfo:
      "Private vehicle for all hill transfers and sightseeing. Experienced driver familiar with Shimla, Kullu and Manali mountain roads.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance required to confirm the booking. Balance payment is due 15 days before departure.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days: 50% refund. Under 7 days: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Confirmation within 2 hours via email or WhatsApp after receiving the advance payment.",
      },
    ],

    primaryColor: "#059669",
    accentColor: "#FF8C00",
  },
  {
    id: "dharamshala-dalhousie-amritsar-tour",
    destination: "himachal",
    title: "Dharamshala Dalhousie Amritsar Tour",
    subtitle:
      "A soulful journey through Amritsar, Dalhousie and Dharamshala",

    route: "Amritsar → Dalhousie → Khajjiar → Dharamshala → Amritsar",

    nights: "5N",
    days: "6D",

    badge: "On Special Tour",
    badgeGrad: "from-[#7C3AED] to-[#9333EA]",

    tag: "✨ Special Tour",
    tagColor: "text-purple-700 bg-purple-50 border-purple-200",

    discount: "10% OFF",
    rating: 4.85,
    reviews: 156,

    price: "Price on Request",
    category: "culture",

    image: "/images/packagesimages/dharmashanreimage.webp",

    overview:
      "Discover the spiritual, cultural and scenic beauty of Punjab and Himachal Pradesh with this memorable Amritsar, Dalhousie and Dharamshala tour. Begin with the sacred Golden Temple and historic Jallianwala Bagh in Amritsar, continue to the charming hill station of Dalhousie and the beautiful meadows of Khajjiar, and end your journey in Dharamshala and McLeod Ganj with its Tibetan culture, monasteries and Himalayan landscapes.",

    highlights: [
      "Golden Temple and Jallianwala Bagh in Amritsar",
      "Optional Wagah Border ceremony experience",
      "Scenic Dalhousie sightseeing and colonial-era churches",
      "Khajjiar – the beautiful Mini Switzerland of India",
      "McLeod Ganj and Dalai Lama Temple Complex",
      "Bhagsunag Waterfall and peaceful Himalayan surroundings",
      "Kangra Fort and historic Masrur Temple",
      "Comfortable 3★ stays with daily breakfast & dinner",
    ],

    includes: ["stay", "meals", "car", "sightseeing"],

    included: [
      "5 Nights accommodation in comfortable 3★ hotels",
      "Daily Breakfast & Dinner",
      "Private cab for all transfers and sightseeing",
      "Amritsar sightseeing including Golden Temple & Jallianwala Bagh",
      "Dalhousie & Khajjiar sightseeing",
      "Dharamshala & McLeod Ganj sightseeing",
      "Driver allowance, toll taxes & parking charges",
    ],

    excluded: [
      "Flights / Train tickets to Amritsar",
      "Wagah Border ceremony, if selected as an optional add-on",
      "Lunch and personal expenses",
      "Monument and attraction entry fees",
      "Guide charges, if required",
      "Travel insurance",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Amritsar – Golden Temple & Jallianwala Bagh",
        description:
          "Arrive in Amritsar and check in to your hotel. After some rest, visit the sacred Golden Temple and experience its peaceful atmosphere. Later, visit the historic Jallianwala Bagh and explore the local surroundings before returning to the hotel.",
        meals: "Dinner",
        overnight: "Amritsar",
      },

      {
        day: 2,
        title: "Amritsar to Dalhousie",
        description:
          "After breakfast, you may optionally visit the Wagah Border for the famous flag-lowering ceremony, subject to timing and availability. Later, drive towards the beautiful hill station of Dalhousie through scenic mountain roads. On arrival, check in to your hotel and relax.",
        meals: "Breakfast & Dinner",
        overnight: "Dalhousie",
      },

      {
        day: 3,
        title: "Dalhousie & Khajjiar Sightseeing",
        description:
          "After breakfast, enjoy a full-day sightseeing tour of Dalhousie and Khajjiar. Visit the picturesque Khajjiar meadows, often known as the Mini Switzerland of India, along with St. Francis Church, Subhash Baoli and other scenic viewpoints. Return to Dalhousie by evening.",
        meals: "Breakfast & Dinner",
        overnight: "Dalhousie",
      },

      {
        day: 4,
        title: "Dalhousie to Dharamshala – McLeod Ganj",
        description:
          "After breakfast, check out and drive towards Dharamshala through beautiful Himalayan landscapes. On arrival, explore McLeod Ganj, visit the Dalai Lama Temple Complex and enjoy the peaceful Tibetan atmosphere. Later, visit Bhagsunag Waterfall before checking in to your hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Dharamshala",
      },

      {
        day: 5,
        title: "Dharamshala & Kangra Sightseeing",
        description:
          "After breakfast, explore the cultural and historical attractions around Dharamshala. Visit Kangra Fort, Masrur Rock-Cut Temple and other scenic locations. Later, explore the local market and enjoy the beautiful mountain surroundings before returning to the hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Dharamshala",
      },

      {
        day: 6,
        title: "Dharamshala Departure",
        description:
          "After breakfast, check out from the hotel and enjoy some leisure time depending on your departure schedule. Later, transfer to Dharamshala airport or railway station/your onward destination with wonderful memories of your Amritsar, Dalhousie and Dharamshala journey.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Hotel Grand Amritsar",
        stars: 3,
        type: "Comfort City Hotel",
        amenities: [
          "WiFi",
          "Restaurant",
          "Parking",
          "AC",
        ],
      },
      {
        name: "Snow Peak Retreat",
        stars: 3,
        type: "Hill Hotel",
        amenities: [
          "Mountain View",
          "WiFi",
          "Restaurant",
          "Parking",
        ],
      },
    ],

    transferInfo:
      "Private vehicle for the complete Amritsar–Dalhousie–Dharamshala tour with an experienced hill-road driver.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance required to confirm the booking. Confirmation is subject to hotel and vehicle availability.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days: 50% refund. Under 7 days: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is sent within 2 hours via email or WhatsApp after receiving the advance payment. Balance payment is due 15 days before departure.",
      },
    ],

    primaryColor: "#7C3AED",
    accentColor: "#FF8C00",
  },
  {
    id: "spiti-valley-tour-package",
    destination: "himachal",
    title: "Spiti Valley Tour Package From Manali",
    subtitle:
      "Explore the breathtaking cold desert landscapes, ancient monasteries and high-altitude villages of Spiti Valley",

    route: "Manali → Kaza → Kibber → Langza → Hikkim → Komic → Chandratal → Manali",

    nights: "6N",
    days: "7D",

    badge: "Adventure Special",
    badgeGrad: "from-[#EA580C] to-[#F97316]",

    tag: "🏔️ Spiti Adventure",
    tagColor: "text-orange-700 bg-orange-50 border-orange-200",

    discount: "25% OFF",
    rating: 4.92,
    reviews: 98,

    price: "Price on Request",
    category: "adventure",

    image: "/images/packagesimages/sptvalley.webp",


    overview:
      "Embark on an unforgettable adventure from Manali to the remote and breathtaking landscapes of Spiti Valley. Experience dramatic Himalayan mountains, ancient Buddhist monasteries, high-altitude villages, winding mountain roads and the unique culture of the Spiti region. Explore Kaza, Key Monastery, Kibber, Chicham Bridge, Langza, Hikkim, Komic and the stunning Chandratal Lake before returning to Manali.",

    highlights: [
      "Scenic Manali to Spiti Valley drive through Atal Tunnel",
      "Cross the spectacular Kunzum Pass",
      "Explore the ancient Key Monastery",
      "Visit Kibber Village and Chicham Bridge",
      "Explore high-altitude villages of Langza, Hikkim & Komic",
      "Visit the famous Hikkim Post Office",
      "Experience the unique culture and landscapes of Spiti Valley",
      "Explore the breathtaking Chandratal Lake",
    ],

    includes: ["stay", "meals", "car", "sightseeing"],

    included: [
      "Accommodation in comfortable hotels and camps",
      "Daily Breakfast & Dinner",
      "Private cab for Manali–Spiti–Manali journey",
      "Manali local sightseeing",
      "Kaza local sightseeing",
      "Chandratal Lake excursion",
      "Driver allowance, toll tax & parking charges",
      "Fuel charges for the entire itinerary",
    ],

    excluded: [
      "Airfare / Train Fare",
      "Volvo tickets to and from Manali",
      "Rohtang Pass permit & vehicle charges, if applicable",
      "Adventure activities such as ATV Ride, River Rafting, etc.",
      "Lunch and personal expenses",
      "Monument and monastery entry fees",
      "Travel insurance",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali and check in to your hotel. Spend the day relaxing and acclimatizing to the mountain environment. In the evening, explore Mall Road and the local market. Enjoy a peaceful evening in the beautiful surroundings of Manali.",
        meals: "Dinner",
        overnight: "Manali",
      },

      {
        day: 2,
        title: "Manali to Kaza via Atal Tunnel & Kunzum Pass",
        description:
          "After breakfast, begin your scenic journey from Manali towards Spiti Valley. Drive through the Atal Tunnel and continue towards Gramphoo, Chhatru and Batal. Cross the spectacular Kunzum Pass and enter the remote landscapes of Spiti Valley before reaching Kaza. Check in to your hotel and relax.",
        meals: "Breakfast, Lunch & Dinner",
        overnight: "Kaza",
      },

      {
        day: 3,
        title: "Kaza Local Sightseeing – Key, Kibber & Chicham",
        description:
          "After breakfast, explore the famous attractions around Kaza. Visit the magnificent Key Monastery, followed by Kibber Village and the spectacular Chicham Bridge. Enjoy panoramic views of the Spiti Valley and return to Kaza by evening.",
        meals: "Breakfast, Lunch & Dinner",
        overnight: "Kaza",
      },

      {
        day: 4,
        title: "Kaza to Langza, Hikkim & Komic Excursion",
        description:
          "After breakfast, visit the high-altitude villages of Langza, Hikkim and Komic. Explore traditional Spitian villages, admire the surrounding Himalayan peaks and visit the famous Hikkim Post Office. Return to Kaza by evening and relax at the hotel.",
        meals: "Breakfast, Lunch & Dinner",
        overnight: "Kaza",
      },

      {
        day: 5,
        title: "Kaza to Chandratal Lake",
        description:
          "After breakfast, depart from Kaza and drive towards the breathtaking Chandratal Lake. Travel through the rugged Himalayan terrain and enjoy spectacular views of the Spiti and Lahaul valleys. On arrival, explore the beautiful crescent-shaped lake surrounded by majestic mountains. Spend the night at a comfortable campsite near Chandratal.",
        meals: "Breakfast & Dinner",
        overnight: "Chandratal",
      },

      {
        day: 6,
        title: "Chandratal to Manali",
        description:
          "Wake up to beautiful Himalayan views and enjoy breakfast at the campsite. Begin the return journey towards Manali through Batal, Chhatru and the Atal Tunnel. Reach Manali by evening, check in to your hotel and relax after the adventurous journey.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 7,
        title: "Manali Sightseeing & Departure",
        description:
          "After breakfast, check out from the hotel and enjoy a short Manali sightseeing tour covering Hadimba Devi Temple, Vashisht Hot Springs and the local market, depending on your departure time. Later, proceed towards your onward destination with unforgettable memories of your Spiti Valley, Kaza and Chandratal adventure.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Hotel Snow Valley Manali",
        stars: 3,
        type: "Comfort Hotel",
        amenities: ["Mountain View", "Restaurant", "Bonfire", "WiFi"],
      },
      {
        name: "Hotel Kaza Heritage",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: ["Mountain View", "Restaurant", "Hot Water", "WiFi"],
      },
      {
        name: "Chandratal Lake Camp",
        stars: 3,
        type: "Mountain Camp",
        amenities: ["Mountain View", "Campfire", "Meals", "Tents"],
      },
    ],

    transferInfo:
      "Private cab for the complete Manali–Spiti–Chandratal–Manali route with experienced mountain driver.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance required to confirm the booking. Confirmation is subject to availability.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–29 days: 50% refund. Under 15 days: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation after advance payment. Balance amount is due 15 days before departure.",
      },
    ],

    primaryColor: "#1565C0",
    accentColor: "#FF8C00",
  },
  {
    id: "manali-shimla-honeymoon-tour-package",
    destination: "himachal",
    title: "Manali Shimla Honeymoon Package",
    subtitle:
      "A romantic Himalayan escape covering the scenic beauty of Shimla and Manali",

    route: "Delhi → Shimla → Manali → Solang Valley → Kullu → Delhi",

    nights: "6N",
    days: "7D",

    badge: "Honeymoon Special",
    badgeGrad: "from-[#E11D48] to-[#F43F5E]",

    tag: "💖 Honeymoon Special",
    tagColor: "text-rose-700 bg-rose-50 border-rose-200",

    discount: "20% OFF",
    rating: 4.78,
    reviews: 267,

    price: "Price on Request",
    category: "honeymoon",

    image: "/images/packagesimages/honeymoonnew.webp",


    overview:
      "Celebrate your love with a romantic journey through the breathtaking hills of Shimla and Manali. Explore Shimla Mall Road, The Ridge and Kufri, enjoy scenic drives through the Himalayan mountains and Kullu Valley, experience the beauty of Solang Valley, and spend quality time together surrounded by peaceful mountain landscapes. This honeymoon package combines sightseeing, romantic stays and unforgettable Himalayan experiences.",

    highlights: [
      "Romantic evening at Shimla Mall Road & The Ridge",
      "Scenic Kufri sightseeing and Himalayan mountain views",
      "Visit the historic Christ Church and Jakhoo Temple",
      "Beautiful Shimla to Manali mountain drive",
      "Romantic sightseeing in Manali",
      "Scenic Solang Valley excursion",
      "Visit to Hadimba Devi Temple and Vashisht Hot Springs",
      "Naggar Castle and Kullu Valley excursion",
      "Couple-friendly hotel stays with mountain views",
    ],

    includes: ["stay", "meals", "car", "sightseeing"],

    included: [
      "Accommodation in comfortable honeymoon-friendly hotels",
      "Daily Breakfast & Dinner",
      "Delhi–Shimla and Manali–Delhi Volvo/AC bus tickets, if applicable",
      "Private cab for Shimla and Manali sightseeing",
      "Shimla & Kufri sightseeing",
      "Manali local sightseeing",
      "Solang Valley & Kullu sightseeing",
      "Driver allowance, toll tax & parking charges",
    ],

    excluded: [
      "Airfare / Train Fare",
      "Rohtang Pass permit & vehicle charges, if applicable",
      "Adventure activities such as Paragliding, ATV Ride, River Rafting, etc.",
      "Lunch and personal expenses",
      "Monument and attraction entry fees",
      "Travel insurance",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla – Romantic Journey",
        description:
          "Begin your romantic honeymoon journey from Delhi to Shimla. On arrival, check in to your hotel and relax. In the evening, enjoy a romantic walk along Shimla Mall Road and The Ridge, followed by a visit to the beautiful Christ Church.",
        meals: "Dinner",
        overnight: "Shimla",
      },

      {
        day: 2,
        title: "Shimla & Kufri Sightseeing",
        description:
          "After breakfast, enjoy a romantic sightseeing tour of Shimla and Kufri. Visit Green Valley, Kufri, Himalayan Nature Park and Jakhoo Temple. Spend the evening at leisure and enjoy the pleasant mountain atmosphere together.",
        meals: "Breakfast & Dinner",
        overnight: "Shimla",
      },

      {
        day: 3,
        title: "Shimla to Manali via Kullu Valley",
        description:
          "After breakfast, check out from your Shimla hotel and drive towards Manali through the beautiful Kullu Valley. Enjoy scenic mountain roads, forests, rivers and picturesque Himalayan landscapes. On arrival in Manali, check in to your hotel and relax.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 4,
        title: "Manali Local Sightseeing",
        description:
          "After breakfast, explore the romantic charm of Manali. Visit Hadimba Devi Temple, Manu Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar and Manali Mall Road. Spend the evening at leisure with your partner.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 5,
        title: "Solang Valley Excursion",
        description:
          "After breakfast, head towards the breathtaking Solang Valley. Enjoy panoramic Himalayan views and spend quality time together amidst the beautiful mountain scenery. Optional adventure activities can be enjoyed at your own cost. Depending on weather and road conditions, Atal Tunnel may also be visited.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 6,
        title: "Naggar & Kullu Valley Excursion",
        description:
          "After breakfast, enjoy a peaceful excursion to Naggar and Kullu. Visit the historic Naggar Castle, Roerich Art Gallery and scenic locations around the Kullu Valley. Enjoy beautiful views of the Beas River before returning to Manali.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },

      {
        day: 7,
        title: "Manali to Delhi Departure",
        description:
          "After breakfast, check out from the hotel and begin your return journey to Delhi. Take back beautiful memories of your romantic Shimla and Manali honeymoon surrounded by the majestic Himalayas.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Himalayan Heights Hotel",
        stars: 3,
        type: "Honeymoon Mountain Hotel",
        amenities: [
          "Mountain View",
          "WiFi",
          "Restaurant",
          "Bonfire",
          "Couple-Friendly Rooms",
        ],
      },
    ],

    transferInfo:
      "AC Volvo/comfortable bus for Delhi–Shimla and Manali–Delhi transfers, with private cab for Shimla, Manali, Solang Valley and Kullu sightseeing.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance required to confirm the booking. Confirmation is subject to hotel and transport availability.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–29 days: 50% refund. Under 15 days: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation after advance payment. Balance amount is due 15 days before departure.",
      },
    ],

    primaryColor: "#E11D48",
    accentColor: "#F43F5E",
  },
  {
    id: "kullu-manali-kasol-tour-package",
    destination: "himachal",
    title: "Kullu Manali Kasol & Jibhi Tour Package",
    subtitle: "The backpacker's dream — Parvati Valley to Kullu",
    route: "Delhi → Kullu → Kasol → Jibhi",
    nights: "6N", days: "7D",
    badge: "Group Choice", badgeGrad: "from-[#0284C7] to-[#0EA5E9]",
    tag: "👥 Group Choice", tagColor: "text-sky-700 bg-sky-50 border-sky-200",
    discount: "20% OFF", rating: 4.9, reviews: 143,
    price: "Price on Request", category: "group",
    image: "/images/packagesimages/beas-river-near-kullu.webp",

    overview: "The ultimate Parvati Valley to Kullu exploration — covering the hippie haven of Kasol, the serene Jibhi forests, and the adventure capital of Kullu Manali. Perfect for groups and adventure-seeking friends.",
    highlights: [
      "Kheerganga Kasol Kufri Trail Himalayan Trek & Jibhi",
      "Cozy Stays with Scenic Views & Bonfire Mountain Nights",
      "Dedicated Private Cab for Complete Sightseeing",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "6 Nights accommodation",
      "Daily Breakfast & Dinner",
      "Private cab for all transfers",
      "Kheerganga trek entry",
      "All sightseeing",
    ],
    excluded: [
      "Personal expenses",
      "Trekking gear",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Delhi to Kasol", description: "Overnight journey to Kasol via Bhuntar.", meals: "—", overnight: "Volvo Bus" },
      { day: 2, title: "Arrive Kasol", description: "Arrive and explore Kasol village, riverside walks.", meals: "Dinner", overnight: "Kasol" },
      { day: 3, title: "Kheerganga Trek", description: "Full day trek to Kheerganga hot springs (13km round trip).", meals: "Breakfast & Dinner", overnight: "Kasol" },
      { day: 4, title: "Kasol to Jibhi", description: "Drive to Jibhi via scenic Kullu valley.", meals: "Breakfast & Dinner", overnight: "Jibhi" },
      { day: 5, title: "Jibhi Exploration", description: "Jalori Pass trek, Serolsar Lake and Jibhi Waterfall.", meals: "Breakfast & Dinner", overnight: "Jibhi" },
      { day: 6, title: "Jibhi to Manali", description: "Drive to Manali. Hadimba Temple and Old Manali.", meals: "Breakfast & Dinner", overnight: "Manali" },
      { day: 7, title: "Manali to Delhi", description: "Depart for Delhi after breakfast. Arrive by late night.", meals: "Breakfast", overnight: "Departure" },
    ],
    hotels: [
      { name: "Kasol Riverside Camp", stars: 3, type: "Camp & Cottage", amenities: ["River View", "Bonfire", "WiFi", "Organic Meals"] },
      { name: "Jibhi Nature Stay", stars: 3, type: "Forest Cottage", amenities: ["Forest View", "Bonfire", "WiFi"] },
    ],
    transferInfo: "Private cab for all local transfers and sightseeing.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Group bookings need 50% advance." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours via email/WhatsApp." },
    ],
    primaryColor: "#1565C0",
    accentColor: "#FF8C00",
  },
  {
    id: "him-8",
    destination: "himachal",
    title: "Romantic Himachal Honeymoon",
    subtitle: "Love in the mountains — a honeymoon to remember forever",
    route: "Delhi → Shimla → Manali → Chandigarh",
    nights: "6N", days: "7D",
    badge: "Must Try", badgeGrad: "from-[#DB2777] to-[#EC4899]",
    tag: "💑 Must Try", tagColor: "text-pink-700 bg-pink-50 border-pink-200",
    discount: "20% OFF", rating: 4.97, reviews: 201,
    price: "Price on Request", category: "honeymoon",
    image: "/images/packagesimages/Honeymoon-Cover-image.webp",
    overview: "Begin your love story in the romantic mountains of Himachal Pradesh. From the charming colonial lanes of Shimla to the snow-capped peaks of Manali, every moment of this honeymoon package is crafted for pure romance and togetherness.",
    highlights: [
      "Special Candle Light Dinner, Flower Bed & Cake",
      "Luxury Mountain View Honeymoon Suite with Jacuzzi",
      "Air-Heated Cab for Couples Sightseeing",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "6 Nights in honeymoon suites",
      "Daily Breakfast & Candlelight Dinner",
      "Flower bed decoration on arrival",
      "Welcome cake",
      "Air-heated private cab",
      "All couple sightseeing",
    ],
    excluded: [
      "Flights/train to Delhi",
      "Personal expenses",
      "Spa treatments",
      "Adventure activities",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Delhi to Shimla — Romantic Arrival", description: "Drive to Shimla. Flower-decorated room welcome. Candlelight dinner.", meals: "Dinner", overnight: "Shimla" },
      { day: 2, title: "Shimla Couple Sightseeing", description: "Jakhu Temple, Mall Road, Christ Church. Sunset at The Ridge.", meals: "Breakfast & Dinner", overnight: "Shimla" },
      { day: 3, title: "Shimla to Manali", description: "Scenic drive. Arrival and romantic welcome at Manali resort.", meals: "Breakfast & Dinner", overnight: "Manali" },
      { day: 4, title: "Solang Valley Snow Date", description: "Snow activities at Solang. Private cable car ride for couples.", meals: "Breakfast & Dinner", overnight: "Manali" },
      { day: 5, title: "Manali Romantic Sightseeing", description: "Hadimba Temple, riverside walk in Old Manali, sunset at Rozy Point.", meals: "Breakfast & Dinner", overnight: "Manali" },
      { day: 6, title: "Manali to Chandigarh", description: "Drive to Chandigarh. Visit Rock Garden. Hotel stay in Chandigarh.", meals: "Breakfast & Dinner", overnight: "Chandigarh" },
      { day: 7, title: "Chandigarh Departure", description: "Check out. Transfer to Chandigarh airport/station. Tour ends.", meals: "Breakfast", overnight: "Departure" },
    ],
    hotels: [
      { name: "Honeymoon Inn Shimla", stars: 4, type: "Honeymoon Suite Hotel", amenities: ["Jacuzzi", "Mountain View", "WiFi", "Restaurant", "Spa"] },
      { name: "Manali Romantic Resort", stars: 4, type: "Luxury Mountain Resort", amenities: ["Jacuzzi", "Fireplace", "WiFi", "Restaurant"] },
    ],
    transferInfo: "Air-heated luxury cab for the entire tour. Decorated for the honeymoon couple.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Honeymoon packages are non-transferable." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 15 days before." },
    ],
    primaryColor: "#1565C0",
    accentColor: "#FF8C00",
  },

  // ─── SPITI ─────────────────────────────────────────────────────────────────
  {
    id: "best-of-spiti-valley-tour-package",
    destination: "spiti",
    title: "Best of Spiti Valley Tour Package",
    subtitle:
      "The definitive cold desert adventure through the world's highest villages",
    route:
      "Shimla → Narkanda → Nako → Tabo → Kaza → Chandratal → Manali",
    nights: "7N",
    days: "8D",
    badge: "Best Seller",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value",
    tagColor:
      "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF",
    rating: 4.9,
    reviews: 278,
    price: "Price on Request",
    category: "all",
    image:
      "/images/destinations/spitiherobaner.webp",
    overview:
      "Embark on an unforgettable journey through the mystical Spiti Valley, a land of ancient monasteries, breathtaking landscapes, high-altitude villages and unique Himalayan culture. Explore Shimla, Narkanda, Nako, Tabo and Kaza before experiencing the spectacular Chandratal Lake and returning towards Manali.",
    highlights: [
      "Shimla & Narkanda Himalayan Experience",
      "Nako Lake & High-Altitude Village",
      "Ancient Tabo Monastery",
      "Key Monastery - Iconic Spiti Monastery",
      "Kibber Village & Chicham Bridge",
      "Langza, Hikkim & Komic High-Altitude Villages",
      "Chandratal Lake - The Moon Lake",
      "Scenic Kunzum Pass & Atal Tunnel Drive",
    ],
    includes: [
      "stay",
      "meals",
      "car",
      "sightseeing",
      "guide",
    ],
    included: [
      "7 Nights accommodation in comfortable 3-Star Hotels, Homestays & Camps",
      "Daily Breakfast & Dinner",
      "Private sanitized SUV with experienced mountain driver",
      "Shimla local sightseeing",
      "Narkanda sightseeing",
      "Nako & Tabo sightseeing",
      "Kaza local sightseeing",
      "Key Monastery, Kibber & Chicham Bridge excursion",
      "Langza, Hikkim & Komic sightseeing",
      "Chandratal Lake excursion",
      "Driver allowance, toll taxes & parking charges",
      "All applicable inner line permits",
    ],

    excluded: [
      "Airfare / Train tickets",
      "Lunch and personal expenses",
      "Monument and monastery entrance tickets",
      "Adventure activity charges",
      "Travel insurance",
      "Personal expenses such as laundry, tips and shopping",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title:
          "Delhi to Shimla | Himalayan Journey Begins",
        description:
          "Begin your Himalayan adventure with a scenic drive from Delhi to Shimla. On arrival, check in to your hotel and relax. In the evening, explore Mall Road and The Ridge at your own pace.",
        meals: "Dinner",
        overnight: "Shimla",
      },

      {
        day: 2,
        title:
          "Shimla to Narkanda | Mountain Landscapes",
        description:
          "After breakfast, drive towards Narkanda through beautiful Himalayan landscapes. Enjoy the peaceful surroundings and explore the local area. Spend the evening relaxing amidst the mountains.",
        meals: "Breakfast & Dinner",
        overnight: "Narkanda",
      },
      {
        day: 3,
        title:
          "Narkanda to Nako | Entering Spiti Valley",
        description:
          "Continue your journey towards the remote Spiti region. Drive through spectacular mountain roads and changing Himalayan landscapes before reaching Nako. Explore the village and beautiful Nako Lake.",
        meals: "Breakfast & Dinner",
        overnight: "Nako",
      },

      {
        day: 4,
        title:
          "Nako to Tabo to Kaza | Ancient Monasteries",
        description:
          "After breakfast, continue deeper into Spiti Valley. Visit the ancient Tabo Monastery, one of the most important Buddhist monasteries in the region. Continue towards Kaza through dramatic mountain landscapes.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },

      {
        day: 5,
        title:
          "Kaza Local Sightseeing | Key, Kibber & Chicham",
        description:
          "Explore the cultural and scenic highlights around Kaza. Visit the iconic Key Monastery followed by Kibber village and the spectacular Chicham Bridge. Enjoy the unique landscapes and traditional Himalayan settlements.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },

      {
        day: 6,
        title:
          "Langza, Hikkim & Komic | Highest Villages",
        description:
          "Discover some of the highest inhabited villages in the Spiti Valley. Visit Langza with its famous Buddha statue, Hikkim and its renowned high-altitude post office, followed by Komic, one of the highest motorable villages in the world.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },

      {
        day: 7,
        title:
          "Kaza to Chandratal Lake | Moon Lake Adventure",
        description:
          "Leave Kaza and travel towards the spectacular Chandratal Lake. Drive through rugged Himalayan terrain and cross the beautiful Kunzum region before reaching the famous Moon Lake. Enjoy the breathtaking surroundings and evening at the campsite.",
        meals: "Breakfast & Dinner",
        overnight: "Chandratal Camp",
      },

      {
        day: 8,
        title:
          "Chandratal to Manali | Tour Ends",
        description:
          "Wake up to beautiful mountain views around Chandratal Lake. After breakfast, begin the return journey towards Manali via Kunzum Pass and Atal Tunnel. Your memorable Spiti Valley adventure concludes on arrival in Manali.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],

    hotels: [
      {
        name: "Shimla Mountain Hotel",
        stars: 3,
        type: "Comfort Hill Hotel",
        amenities: [
          "Mountain View",
          "Restaurant",
          "WiFi",
          "Parking",
        ],
      },
      {
        name: "Narkanda Mountain Hotel",
        stars: 3,
        type: "Mountain Hotel",
        amenities: [
          "Mountain View",
          "Restaurant",
          "Hot Water",
          "WiFi",
        ],
      },
      {
        name: "Spiti Valley Homestay",
        stars: 3,
        type: "Traditional Mud House Homestay",
        amenities: [
          "Traditional Cuisine",
          "Mountain View",
          "Local Experience",
        ],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: [
          "Mountain View",
          "Restaurant",
          "Hot Water",
          "WiFi",
        ],
      },
      {
        name: "Chandratal Camp",
        stars: 3,
        type: "Luxury Mountain Camping",
        amenities: [
          "Mountain View",
          "Bonfire",
          "Stargazing",
          "Meals",
        ],
      },
    ],
    transferInfo:
      "Private 4×4 SUV / Innova Crysta for the complete Shimla–Spiti–Chandratal–Manali circuit with an experienced mountain driver. Oxygen cylinder available in the vehicle for high-altitude emergencies.",
    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance payment is required to confirm the booking. Spiti Valley trips are subject to road, weather and mountain pass conditions. The itinerary may be modified when required for passenger safety.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure.",
      },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#0D9488",
  },
  {
    id: "chandigarh-to-spiti-bike-expedition",
    destination: "spiti",
    title: "Chandigarh To Spiti Bike Expedition",
    subtitle:
      "The ultimate Himalayan motorcycle expedition through Spiti Valley, Kinnaur and the world's highest villages",
    route:
      "Chandigarh → Manali → Jispa → Kaza → Nako → Kalpa → Shimla → Chandigarh",
    nights: "8N",
    days: "9D",
    badge: "Adventure Special",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "🏍️ Bike Expedition",
    tagColor:
      "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF",
    rating: 4.9,
    reviews: 278,
    price: "Price on Request",
    category: "adventure",
    image:
      "/images/packagesimages/Chandigarh-To-Spiti-Bike-Expedition.webp",
    overview:
      "Embark on an unforgettable motorcycle expedition from Chandigarh through the spectacular landscapes of Himachal Pradesh. Ride towards Manali and Jispa before crossing the mighty Kunzum Pass into the remote Spiti Valley. Explore Kaza, Langza, Hikkim, Komic, Tabo and Dhankar, experience the breathtaking Chandratal region, continue towards Nako and Kalpa through Kinnaur Valley, and finish the expedition in Shimla.",
    highlights: [
      "Thrilling motorcycle ride from Chandigarh through the Himalayas",
      "Scenic Manali to Jispa Himalayan ride",
      "Cross the spectacular Kunzum Pass into Spiti Valley",
      "Explore Kaza, Langza, Hikkim and Komic",
      "Visit ancient Tabo and Dhankar Monasteries",
      "Ride through the dramatic Pin and Spiti Valleys",
      "Experience the breathtaking Chandratal region",
      "Ride through the scenic Kinnaur Valley",
      "Visit Nako and Kalpa",
      "Spectacular Kinnaur Kailash mountain views",
      "Scenic return journey through Shimla hills",
    ],
    includes: [
      "stay",
      "meals",
      "car",
      "sightseeing",
      "guide",
    ],

    included: [
      "8 Nights accommodation in comfortable hotels, homestays and camps",
      "Daily Breakfast & Dinner",
      "Royal Enfield / Adventure motorcycle for the expedition",
      "Experienced motorcycle road captain / expedition leader",
      "Backup support vehicle throughout the expedition",
      "Experienced mountain support staff",
      "Accommodation in Manali, Jispa, Kaza, Nako, Kalpa and Shimla",
      "Kaza local sightseeing",
      "Langza, Hikkim & Komic excursion",
      "Tabo & Dhankar Monastery excursion",
      "Pin Valley excursion",
      "Chandratal Lake excursion, subject to road and weather conditions",
      "Nako sightseeing",
      "Kalpa & Kinnaur Valley sightseeing",
      "Driver / support staff allowance",
      "Toll taxes and parking charges",
      "Basic first-aid support",
      "Oxygen cylinder in support vehicle",
      "Applicable permits and documentation assistance",
    ],

    excluded: [
      "Airfare / Train tickets",
      "Fuel charges for the motorcycle, if applicable as per package policy",
      "Motorcycle security deposit, if applicable",
      "Riding gear such as helmet, riding jacket, gloves and riding boots",
      "Lunch and personal expenses",
      "Monument and monastery entrance tickets",
      "Adventure activity charges",
      "Travel insurance",
      "Medical expenses",
      "Personal expenses such as laundry, tips and shopping",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title:
          "Chandigarh to Manali | Gateway to the Himalayan Expedition",
        description:
          "Meet the expedition team in Chandigarh and begin the journey towards Manali. Travel through the scenic foothills of Himachal Pradesh along the Beas River. Arrive in Manali, check in to the hotel and attend the motorcycle briefing, safety briefing and expedition preparation session.",
        meals: "Dinner",
        overnight: "Manali",
      },
      {
        day: 2,
        title:
          "Manali to Jispa | Rohtang Pass & Lahaul Valley Ride",
        description:
          "Begin the first major riding day as you leave Manali and climb towards the high-altitude landscapes of Lahaul. Ride through the Rohtang region and continue towards Jispa through dramatic mountain roads, glaciers, barren peaks and the Bhaga River valley.",
        meals: "Breakfast & Dinner",
        overnight: "Jispa",
      },
      {
        day: 3,
        title:
          "Jispa to Kaza | Cross Kunzum Pass & Enter Spiti Valley",
        description:
          "Today is one of the most exciting riding days of the expedition. Ride through the rugged Lahaul landscape and cross the spectacular Kunzum Pass before descending into the remote Spiti Valley. Continue towards Kaza through dramatic valleys and high-altitude terrain.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 4,
        title:
          "Kaza Local Ride | Langza, Hikkim & Komic",
        description:
          "Explore the high-altitude villages surrounding Kaza. Ride towards Langza, famous for its giant Buddha statue and fossil-rich terrain. Continue to Hikkim and visit its famous high-altitude post office before riding to Komic, one of the highest motorable villages in the world.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 5,
        title:
          "Kaza to Tabo & Dhankar | Ancient Monasteries",
        description:
          "Ride through the beautiful Spiti Valley towards Tabo and Dhankar. Visit the historic Tabo Monastery and continue towards the spectacular Dhankar region. Experience the ancient Buddhist heritage and dramatic landscapes surrounding the Spiti River valley.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 6,
        title:
          "Kaza to Pin Valley | Mud Village & Kungri Monastery",
        description:
          "Leave Kaza and ride towards the beautiful Pin Valley. Explore the unique landscapes of the valley, visit Mud village and experience the peaceful surroundings. Depending on road and weather conditions, visit Kungri Monastery before returning towards Kaza.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 7,
        title:
          "Kaza to Nako | Spiti to Kinnaur Transition",
        description:
          "Leave the heart of Spiti Valley and begin the journey towards Kinnaur. Ride through rugged mountain roads and remote settlements before reaching Nako, a beautiful high-altitude village known for its sacred lake and traditional stone houses.",
        meals: "Breakfast & Dinner",
        overnight: "Nako",
      },
      {
        day: 8,
        title:
          "Nako to Kalpa | Scenic Kinnaur Valley Ride",
        description:
          "Continue riding through the spectacular Kinnaur Valley towards Kalpa. Follow the mountain roads through dramatic landscapes and traditional villages before arriving in Kalpa. Enjoy spectacular views of the Kinnaur Kailash range.",
        meals: "Breakfast & Dinner",
        overnight: "Kalpa",
      },
      {
        day: 9,
        title:
          "Kalpa to Shimla | Expedition Finale & Departure",
        description:
          "Enjoy the final riding day as you leave Kalpa and travel through the scenic Kinnaur and Shimla hills. Ride past mountain villages, apple orchards and beautiful valleys before reaching Shimla. After the expedition concludes, continue towards your onward destination.",
        meals: "Breakfast",
        overnight: "Departure",
      },
    ],
    hotels: [
      {
        name: "Manali Mountain Hotel",
        stars: 3,
        type: "Comfort Hill Hotel",
        amenities: [
          "Mountain View",
          "Restaurant",
          "WiFi",
          "Parking",
        ],
      },
      {
        name: "Jispa Valley Camp",
        stars: 3,
        type: "Mountain Camp / Hotel",
        amenities: [
          "Mountain View",
          "Bonfire",
          "Restaurant",
          "Hot Water",
        ],
      },
      {
        name: "Spiti Valley Homestay",
        stars: 3,
        type: "Traditional Mountain Homestay",
        amenities: [
          "Traditional Cuisine",
          "Mountain View",
          "Local Experience",
        ],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: [
          "Mountain View",
          "Restaurant",
          "Hot Water",
          "WiFi",
        ],
      },
      {
        name: "Nako Mountain Stay",
        stars: 3,
        type: "High-Altitude Mountain Hotel",
        amenities: [
          "Mountain View",
          "Traditional Rooms",
          "Restaurant",
          "Hot Water",
        ],
      },
      {
        name: "Kalpa Mountain Resort",
        stars: 3,
        type: "Kinnaur Valley Hotel",
        amenities: [
          "Kinnaur Kailash View",
          "Restaurant",
          "WiFi",
          "Parking",
        ],
      },
    ],
    transferInfo:
      "Motorcycle expedition supported by an experienced road captain and backup support vehicle throughout the Chandigarh–Manali–Spiti–Kinnaur–Shimla route. Oxygen cylinder and basic first-aid support available in the support vehicle.",
    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance payment is required to confirm the booking. Motorcycle expeditions are subject to road, weather, snowfall and mountain pass conditions. The expedition route may be modified when required for passenger safety.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure.",
      },
    ],
    primaryColor: "#F59E0B",
    accentColor: "#FF8C00",
  },
  {
    id: "kinnaur-spiti-road-trip", destination: "spiti", title: "Kinnaur Spiti Road Trip", subtitle: "The ultimate 12-day Himalayan motorcycle expedition through Spiti Valley, Kinnaur and the world's highest villages", route: "Chandigarh → Manali → Jispa → Kaza → Nako → Kalpa → Shimla → Chandigarh", nights: "11N", days: "12D", badge: "Adventure Special", badgeGrad: "from-[#FF8C00] to-[#F59E0B]", tag: "🏍️ Bike Expedition", tagColor: "text-orange-700 bg-orange-50 border-orange-200", discount: "15% OFF", rating: 4.9, reviews: 278, price: "Price on Request", category: "adventure",
    image:
      "/images/packagesimages/sptbike.webp",
    overview:
      "Embark on an unforgettable 12-day road trip through the spectacular landscapes of Kinnaur and Spiti Valley. Starting from Shimla, travel through the beautiful Sangla Valley and remote village of Chitkul before reaching Kalpa, known for its breathtaking views of the Kinnaur Kailash range. Continue towards the high-altitude landscapes of Nako, Tabo and Kaza, explore ancient Buddhist monasteries and visit the famous villages of Langza, Hikkim and Komic. The journey continues towards the stunning Chandratal Lake before crossing Kunzum Pass and descending into Manali, making this a complete Kinnaur-Spiti Himalayan adventure.",
    highlights: ["Scenic ride through the Himalayan foothills from Chandigarh to Manali", "Ride through the dramatic landscapes of Lahaul and Jispa", "Experience the rugged beauty of Spiti Valley", "Explore Kaza, the cultural heart of Spiti", "Visit the famous Key Monastery", "Explore Kibber and Chicham Bridge", "Visit the high-altitude villages of Langza, Hikkim and Komic", "Visit ancient Tabo and Dhankar Monasteries", "Ride through the spectacular Pin Valley", "Experience the breathtaking Chandratal region", "Cross the dramatic Kunzum Pass", "Visit the beautiful high-altitude village of Nako", "Explore Kalpa and enjoy Kinnaur Kailash mountain views", "Ride through the scenic Kinnaur Valley", "Scenic return journey through Shimla hills", "Experienced motorcycle road captain and backup support vehicle"],
    includes: ["stay", "meals", "bike", "sightseeing", "guide", "backup"],

    included: ["11 Nights accommodation in comfortable hotels, homestays and camps", "Daily Breakfast & Dinner", "Royal Enfield / Adventure motorcycle for the expedition", "Experienced motorcycle road captain / expedition leader", "Backup support vehicle throughout the expedition", "Experienced mountain support staff", "Accommodation in Manali, Jispa, Kaza, Tabo, Chandratal, Nako, Kalpa and Shimla", "Kaza local sightseeing", "Key Monastery, Kibber & Chicham excursion", "Langza, Hikkim & Komic excursion", "Tabo Monastery excursion", "Dhankar Monastery excursion", "Pin Valley excursion", "Chandratal Lake excursion, subject to road and weather conditions", "Nako sightseeing", "Kalpa & Kinnaur Valley sightseeing", "Driver / support staff allowance", "Toll taxes and parking charges", "Basic first-aid support", "Oxygen cylinder in support vehicle", "Applicable permits and documentation assistance"],
    excluded: ["Airfare / Train tickets", "Fuel charges for the motorcycle, if applicable as per package policy", "Motorcycle security deposit, if applicable", "Riding gear such as helmet, riding jacket, gloves and riding boots", "Lunch and personal expenses", "Monument and monastery entrance tickets", "Adventure activity charges", "Travel insurance", "Medical expenses", "Personal expenses such as laundry, tips and shopping", "Any cost arising due to road blockage, landslide, snowfall, weather conditions or natural calamities", "Emergency evacuation or rescue expenses", "Anything not mentioned under Inclusions"],
    itinerary: [{ day: 1, title: "Chandigarh to Manali | Gateway to the Himalayan Adventure", description: "Meet the expedition team in Chandigarh and begin your Himalayan motorcycle adventure towards Manali. Ride through the scenic foothills as the landscape gradually changes from plains to mountains. Continue along the Beas River and reach Manali by evening. Check into the hotel, complete the motorcycle handover and attend the expedition briefing before the adventure begins.", meals: "Dinner", overnight: "Manali" }, { day: 2, title: "Manali to Jispa | Ride into the High Himalayas", description: "After breakfast, begin your ride towards Jispa. Cross the spectacular Atal Tunnel and enter the beautiful Lahaul Valley. Continue through mountain villages and dramatic landscapes along the Chandra River. The route gradually becomes more rugged as you approach Jispa. Arrive in the evening, check into your accommodation and relax amidst the peaceful Himalayan surroundings.", meals: "Breakfast & Dinner", overnight: "Jispa" }, { day: 3, title: "Jispa to Kaza | Enter the Magical Spiti Valley", description: "Start early from Jispa and ride towards Kaza through remote Trans-Himalayan landscapes. Continue through rugged mountain terrain towards the Kunzum region, subject to road and weather conditions. As you enter Spiti Valley, the landscape transforms into a dramatic cold desert surrounded by towering mountains. Continue towards Kaza and check into your hotel.", meals: "Breakfast & Dinner", overnight: "Kaza" }, { day: 4, title: "Kaza Local Sightseeing | Key Monastery, Kibber & Chicham", description: "Spend the day exploring the iconic attractions around Kaza. Visit the magnificent Key Monastery, one of the most important Buddhist monasteries in Spiti. Continue towards Kibber and ride to Chicham Bridge for spectacular views of the surrounding Himalayan valleys. Return to Kaza by evening and enjoy some free time to explore the local market.", meals: "Breakfast & Dinner", overnight: "Kaza" }, { day: 5, title: "Kaza to Langza, Hikkim & Komic | High-Altitude Village Expedition", description: "Today explore the famous high-altitude villages surrounding Kaza. Ride to Langza, known for its giant Buddha statue and spectacular mountain views. Continue towards Hikkim and visit its famous post office before heading to Komic, one of the highest villages accessible by road. Enjoy the unique cold-desert landscapes before returning to Kaza.", meals: "Breakfast & Dinner", overnight: "Kaza" }, { day: 6, title: "Kaza to Tabo via Pin Valley | Ancient Buddhist Heritage", description: "Leave Kaza after breakfast and begin the journey towards Tabo. En route, take an excursion into the spectacular Pin Valley, known for its rugged mountains, remote villages and unique Himalayan landscapes. Continue towards Tabo and visit the ancient Tabo Monastery. Spend the evening exploring the peaceful surroundings of this historic Himalayan village.", meals: "Breakfast & Dinner", overnight: "Tabo" }, { day: 7, title: "Tabo to Chandratal via Dhankar | Into the Moon Lake Region", description: "After breakfast, continue through the dramatic landscapes of Spiti Valley. En route visit the spectacular Dhankar Monastery and enjoy panoramic views over the Spiti River valley. Continue towards the Kunzum region and proceed towards Chandratal, subject to road and weather conditions. Reach the Chandratal camping area and enjoy the breathtaking mountain surroundings.", meals: "Breakfast & Dinner", overnight: "Chandratal" }, { day: 8, title: "Chandratal to Manali | Kunzum Pass & Himalayan Descent", description: "Wake up to beautiful mountain views around Chandratal and begin your journey towards Manali. Cross the rugged Kunzum Pass region and continue through the spectacular landscapes of Lahaul. Gradually descend from the high-altitude terrain towards the greener valleys before reaching Manali. Check into the hotel and relax after the adventurous ride.", meals: "Breakfast & Dinner", overnight: "Manali" }, { day: 9, title: "Manali to Nako | Journey towards Kinnaur", description: "After breakfast, begin the journey from Manali towards Nako and the Kinnaur region. Travel through changing Himalayan landscapes as the lush green mountains gradually give way to dry Trans-Himalayan terrain. Continue towards Nako, a beautiful high-altitude village surrounded by spectacular mountains. Explore the village and enjoy the peaceful Himalayan atmosphere.", meals: "Breakfast & Dinner", overnight: "Nako" }, { day: 10, title: "Nako to Kalpa | Scenic Journey through Kinnaur Valley", description: "Leave Nako after breakfast and continue towards Kalpa through the dramatic landscapes of Kinnaur. Ride through the Sutlej Valley and pass through scenic mountain villages before reaching Reckong Peo and Kalpa. The landscape gradually becomes greener with forests and apple orchards. In the evening, enjoy spectacular views of the Kinnaur Kailash range.", meals: "Breakfast & Dinner", overnight: "Kalpa" }, { day: 11, title: "Kalpa to Shimla | Kinnaur Hills & Mountain Roads", description: "Start the day with beautiful Himalayan views from Kalpa before beginning your ride towards Shimla. Travel through the scenic Kinnaur hills, winding mountain roads, apple orchards and traditional Himalayan villages. Continue towards Shimla and check into your hotel. In the evening, explore Mall Road and nearby areas depending on arrival time.", meals: "Breakfast & Dinner", overnight: "Shimla" }, { day: 12, title: "Shimla to Chandigarh | End of Kinnaur Spiti Road Trip", description: "After breakfast, begin the final journey from Shimla towards Chandigarh. Enjoy the last stretches of Himalayan roads as the mountains gradually give way to the plains. Reach Chandigarh and conclude your unforgettable Kinnaur-Spiti motorcycle expedition with memories of high mountain passes, ancient monasteries, remote villages and spectacular Himalayan landscapes.", meals: "Breakfast", overnight: "Departure" }],
    hotels: [
      { name: "Kaza Valley Hotel", stars: 3, type: "Spiti Valley Hotel", amenities: ["Mountain View", "Restaurant", "Hot Water", "WiFi"] },
      { name: "Tabo Mountain Homestay", stars: 3, type: "Traditional Himalayan Homestay", amenities: ["Mountain View", "Traditional Rooms", "Local Cuisine", "Hot Water"] },
      { name: "Chandratal Mountain Camp", stars: 3, type: "Mountain Camp", amenities: ["Mountain View", "Bonfire", "Dinner", "Camping Experience"] },
      { name: "Nako Mountain Stay", stars: 3, type: "High-Altitude Mountain Hotel", amenities: ["Mountain View", "Traditional Rooms", "Restaurant", "Hot Water"] },
      { name: "Kalpa Mountain Resort", stars: 3, type: "Kinnaur Valley Hotel", amenities: ["Kinnaur Kailash View", "Restaurant", "WiFi", "Parking"] },
      { name: "Shimla Hill Hotel", stars: 3, type: "Comfort Hill Hotel", amenities: ["Mountain View", "Restaurant", "WiFi", "Parking"] }
    ],
    transferInfo:
      "Motorcycle expedition supported by an experienced road captain and backup support vehicle throughout the Chandigarh–Manali–Spiti–Kinnaur–Shimla route. Oxygen cylinder and basic first-aid support available in the support vehicle.",
    policies: [{ title: "Terms & Conditions", content: "30% advance payment is required to confirm the booking. Motorcycle expeditions are subject to road, weather, snowfall and mountain pass conditions. The expedition route may be modified when required for passenger safety." }, { title: "Cancellation & Refund Policy", content: "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund." }, { title: "Instant Confirmation & Payment Window", content: "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure." }],
    primaryColor: "#F59E0B",
    accentColor: "#FF8C00",
  },
  {
    id: "spiti-honeymoon-special-tour-package",
    destination: "spiti",
    title: "Spiti Honeymoon Special - 6 Days",
    subtitle:
      "A romantic Himalayan escape through Spiti Valley, Key Monastery and the moon lake of Chandratal",
    route: "Manali → Kaza → Chandratal → Manali",
    nights: "5N",
    days: "6D",
    badge: "Honeymoon Special",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "💑 Honeymoon Special",
    tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF",
    rating: 4.9,
    reviews: 278,
    price: "Price on Request",
    category: "honeymoon",
    image:
      "/images/packagesimages/Honeymoon-Cover-image.webp",
    overview:
      "A romantic honeymoon escape to the mystical Spiti Valley with comfortable stays, private transfers, and intimate experiences in the cold desert.",
    highlights: [
      "Luxury Swiss Camp Stay at Chandratal",
      "Private Candlelight Dinner",
      "Sunrise at Chandratal Lake",
      "Romantic Stargazing Sessions",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],

    included: [
      "5 Nights accommodation in comfortable hotels and luxury camps",
      "Accommodation in Manali, Kaza and Chandratal",
      "Daily Breakfast & Dinner",
      "Private vehicle for the entire journey with experienced mountain driver",
      "Honeymoon welcome on arrival in Manali",
      "One private candlelight dinner during the trip",
      "Guided stargazing session at Chandratal, subject to weather conditions",
      "Kaza local sightseeing",
      "Key Monastery, Kibber & Chicham excursion",
      "Chandratal Lake excursion, subject to road and weather conditions",
      "Local guide assistance during sightseeing",
      "Driver allowance, toll taxes and parking charges",
      "Basic first-aid support",
      "Oxygen cylinder in the vehicle",
      "Applicable permits and documentation assistance",
    ],

    excluded: [
      "Airfare / Train tickets",
      "Travel to and from Manali",
      "Lunch and personal expenses",
      "Monument and monastery entrance tickets",
      "Adventure activity charges",
      "Travel insurance",
      "Medical expenses",
      "Personal expenses such as laundry, tips and shopping",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Manali Arrival | Romantic Himalayan Welcome",
        description:
          "Arrive in Manali and meet your travel representative. Transfer to your romantic hotel and spend the evening relaxing together amidst the beautiful Himalayan surroundings. Enjoy a special honeymoon welcome and prepare for your Spiti adventure.",
        meals: "Dinner",
        overnight: "Manali",
      },
      {
        day: 2,
        title: "Manali to Kaza | Scenic Himalayan Journey",
        description:
          "Begin your journey towards the mystical Spiti Valley. Drive through spectacular Himalayan landscapes, crossing high mountain passes and remote valleys before arriving in Kaza. Enjoy the changing scenery from lush green mountains to the dramatic cold desert.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 3,
        title: "Kaza Exploration | Monasteries & High-Altitude Villages",
        description:
          "Explore the fascinating surroundings of Kaza together. Visit the historic Key Monastery, discover the high-altitude villages of Kibber and Chicham, and experience the unique culture and landscapes of Spiti Valley.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 4,
        title: "Kaza to Chandratal | Journey to the Moon Lake",
        description:
          "Travel towards the breathtaking Chandratal Lake, one of the most romantic and scenic destinations in the Himalayas. Surrounded by snow-capped peaks and pristine landscapes, Chandratal offers the perfect setting for a memorable honeymoon evening under the stars.",
        meals: "Breakfast & Dinner",
        overnight: "Chandratal",
      },
      {
        day: 5,
        title: "Chandratal to Manali | Sunrise & Romantic Mountain Drive",
        description:
          "Wake up to a beautiful Himalayan sunrise at Chandratal Lake. After breakfast, begin your scenic journey back towards Manali through the rugged landscapes of Lahaul and the Rohtang region. Enjoy a special honeymoon evening after arriving in Manali.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },
      {
        day: 6,
        title: "Manali Departure | Sweet Memories of Spiti",
        description:
          "Enjoy your final morning together in the beautiful surroundings of Manali. After breakfast, check out from the hotel and transfer to the airport or bus stand for your onward journey with unforgettable honeymoon memories from the Himalayas.",
        meals: "Breakfast",
        overnight: "—",
      },
    ],

    hotels: [
      {
        name: "Manali Mountain Hotel",
        stars: 3,
        type: "Comfort Hill Hotel",
        amenities: ["Mountain View", "Restaurant", "WiFi", "Parking"],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: ["Mountain View", "Restaurant", "Hot Water", "WiFi"],
      },
      {
        name: "Chandratal Luxury Swiss Camp",
        stars: 3,
        type: "Luxury Alpine Camp",
        amenities: [
          "Lake View",
          "Bonfire",
          "Stargazing Deck",
          "Attached Washroom",
        ],
      },
    ],

    transferInfo:
      "Private vehicle with an experienced mountain driver for the entire Manali–Kaza–Chandratal–Manali route. Oxygen cylinder and basic first-aid support available in the vehicle.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance payment is required to confirm the booking. The itinerary is subject to road, weather, snowfall and mountain pass conditions. The route may be modified when required for passenger safety.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure.",
      },
    ],

    primaryColor: "#F59E0B",
    accentColor: "#FF8C00",
  },
  {
    id: "spiti-valley-family-tour-package",
    destination: "spiti",
    title: "Spiti Valley Family Tour Package",
    subtitle:
      "A comfortable Himalayan family holiday through Spiti Valley, Key Monastery and the moon lake of Chandratal",
    route: "Manali → Kaza → Chandratal → Manali",
    nights: "5N",
    days: "6D",
    badge: "Family Special",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "👨‍👩‍👧 Family Tour",
    tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF",
    rating: 4.9,
    reviews: 278,
    price: "Price on Request",
    category: "family",
    image:
      "/images/packagesimages/sptfamily.webp",
    overview:
      "A relaxed, family-friendly journey to the mystical Spiti Valley with comfortable stays, private transfers and an easy-paced itinerary suitable for children and elders.",
    highlights: [
      "Comfortable Family Rooms & Swiss Camp Stay",
      "Easy-Paced Itinerary with Acclimatisation Day",
      "Key Monastery, Kibber & Chicham Bridge",
      "Sunrise & Stargazing at Chandratal Lake",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],

    included: [
      "5 Nights accommodation in comfortable hotels and camps",
      "Accommodation in Manali, Kaza and Chandratal",
      "Family rooms / adjoining rooms subject to availability",
      "Daily Breakfast & Dinner",
      "Private vehicle for the entire journey with experienced mountain driver",
      "Kaza local sightseeing",
      "Key Monastery, Kibber & Chicham excursion",
      "Chandratal Lake excursion, subject to road and weather conditions",
      "Guided stargazing session at Chandratal, subject to weather conditions",
      "Local guide assistance during sightseeing",
      "Driver allowance, toll taxes and parking charges",
      "Basic first-aid support",
      "Oxygen cylinder in the vehicle",
      "Applicable permits and documentation assistance",
    ],

    excluded: [
      "Airfare / Train tickets",
      "Travel to and from Manali",
      "Lunch and personal expenses",
      "Monument and monastery entrance tickets",
      "Adventure activity charges",
      "Extra bed / extra mattress charges, if required",
      "Travel insurance",
      "Medical expenses",
      "Personal expenses such as laundry, tips and shopping",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Manali Arrival | Relaxed Himalayan Welcome",
        description:
          "Arrive in Manali and meet your travel representative. Transfer to your hotel and spend the evening relaxing as a family amidst the beautiful Himalayan surroundings. Rest well and prepare for the Spiti journey ahead.",
        meals: "Dinner",
        overnight: "Manali",
      },
      {
        day: 2,
        title: "Manali to Kaza | Scenic Himalayan Drive",
        description:
          "Begin your journey towards the mystical Spiti Valley. Drive through spectacular Himalayan landscapes, crossing high mountain passes and remote valleys before arriving in Kaza, with plenty of photo and refreshment stops along the way.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 3,
        title: "Kaza Exploration | Monasteries & High-Altitude Villages",
        description:
          "An easy-paced day to acclimatise while exploring the surroundings of Kaza. Visit the historic Key Monastery, the high-altitude village of Kibber and the Chicham Bridge, and experience the unique culture and landscapes of Spiti Valley.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 4,
        title: "Kaza to Chandratal | Journey to the Moon Lake",
        description:
          "Travel towards the breathtaking Chandratal Lake, one of the most scenic destinations in the Himalayas. Surrounded by snow-capped peaks and pristine landscapes, Chandratal offers a memorable evening under a sky full of stars.",
        meals: "Breakfast & Dinner",
        overnight: "Chandratal",
      },
      {
        day: 5,
        title: "Chandratal to Manali | Sunrise & Mountain Drive",
        description:
          "Wake up to a beautiful Himalayan sunrise at Chandratal Lake. After breakfast, begin your scenic journey back towards Manali through the rugged landscapes of Lahaul and the Rohtang region. Enjoy a relaxed evening after arriving in Manali.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },
      {
        day: 6,
        title: "Manali Departure | Sweet Memories of Spiti",
        description:
          "Enjoy your final morning in the beautiful surroundings of Manali. After breakfast, check out from the hotel and transfer to the airport or bus stand for your onward journey with unforgettable family memories from the Himalayas.",
        meals: "Breakfast",
        overnight: "—",
      },
    ],

    hotels: [
      {
        name: "Manali Mountain Hotel",
        stars: 3,
        type: "Comfort Hill Hotel",
        amenities: ["Mountain View", "Family Rooms", "Restaurant", "Parking"],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: ["Mountain View", "Restaurant", "Hot Water", "WiFi"],
      },
      {
        name: "Chandratal Swiss Camp",
        stars: 3,
        type: "Alpine Camp",
        amenities: [
          "Lake View",
          "Bonfire",
          "Stargazing Deck",
          "Attached Washroom",
        ],
      },
    ],

    transferInfo:
      "Private vehicle with an experienced mountain driver for the entire Manali–Kaza–Chandratal–Manali route. Oxygen cylinder and basic first-aid support available in the vehicle.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance payment is required to confirm the booking. The itinerary is subject to road, weather, snowfall and mountain pass conditions. The route may be modified when required for passenger safety. Travellers with young children, elderly members or existing medical conditions should consult a doctor before travelling to high altitude.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure.",
      },
    ],

    primaryColor: "#F59E0B",
    accentColor: "#FF8C00",
  },
  {
    id: "spiti-monastery-tour-package",
    destination: "spiti",
    title: "Spiti Monastery Tour Package",
    subtitle:
      "A Buddhist heritage trail through Key, Dhankar, Lhalung and the thousand-year-old Tabo Monastery",
    route: "Manali → Kaza → Dhankar → Tabo → Kaza → Manali",
    nights: "5N",
    days: "6D",
    badge: "Heritage Special",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "🛕 Monastery Trail",
    tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF",
    rating: 4.9,
    reviews: 278,
    price: "Price on Request",
    category: "cultural",
    image:
      "/images/packagesimages/buddhist-monastery-kaza-spiti-valley.webp",
    overview:
      "A culture-focused journey through the ancient Buddhist monasteries of Spiti Valley, covering Key, Komic, Dhankar, Lhalung and the thousand-year-old Tabo Monastery with comfortable stays and private transfers.",
    highlights: [
      "Key Monastery, the largest in Spiti",
      "Tabo Monastery, over 1,000 years old",
      "Cliffside Dhankar Monastery & Lhalung",
      "Tangyud Monastery at Komic, world's highest village",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],

    included: [
      "5 Nights accommodation in comfortable hotels and homestays",
      "Accommodation in Manali and Kaza",
      "Daily Breakfast & Dinner",
      "Private vehicle for the entire journey with experienced mountain driver",
      "Key Monastery, Kibber & Chicham excursion",
      "Komic (Tangyud Monastery), Langza & Hikkim excursion",
      "Dhankar, Lhalung & Tabo Monastery excursion",
      "Local guide with knowledge of Spitian Buddhist heritage",
      "Driver allowance, toll taxes and parking charges",
      "Basic first-aid support",
      "Oxygen cylinder in the vehicle",
      "Applicable permits and documentation assistance",
    ],

    excluded: [
      "Airfare / Train tickets",
      "Travel to and from Manali",
      "Lunch and personal expenses",
      "Monastery entrance tickets, donations and camera charges",
      "Chandratal Lake excursion, available on request at extra cost",
      "Adventure activity charges",
      "Travel insurance",
      "Medical expenses",
      "Personal expenses such as laundry, tips and shopping",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Manali Arrival | Gateway to the Spiti Valley",
        description:
          "Arrive in Manali and meet your travel representative. Transfer to your hotel and spend the evening relaxing amidst the Himalayan surroundings. Your expedition leader will brief you on the monastery trail ahead.",
        meals: "Dinner",
        overnight: "Manali",
      },
      {
        day: 2,
        title: "Manali to Kaza | Over Kunzum La into the Cold Desert",
        description:
          "Drive through the Atal Tunnel into the Lahaul Valley and cross the 4,590 m Kunzum La, where prayer flags and the Kunzum Mata temple mark the entry into Spiti. Continue past Losar to Kaza, watching the landscape turn into a stark Buddhist cold desert.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 3,
        title: "Key, Kibber & Komic | Monasteries of the High Plateau",
        description:
          "Visit Key Monastery, the largest and most photographed gompa in Spiti, home to monks, ancient murals and rare manuscripts. Continue to Kibber and the Chicham Bridge, then on to Komic and its Tangyud Monastery, one of the highest monasteries in the world, returning via Langza and Hikkim.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 4,
        title: "Dhankar, Lhalung & Tabo | The Ancient Heritage Trail",
        description:
          "Drive down the valley to Dhankar Monastery, dramatically perched on a cliff above the confluence of the Spiti and Pin rivers. Visit the quiet Golden Temple at Lhalung, then continue to Tabo Monastery, founded in 996 AD and known as the Ajanta of the Himalayas for its mud-walled shrines and murals. Return to Kaza in the evening.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 5,
        title: "Kaza to Manali | Return Across the Passes",
        description:
          "After a final morning in Kaza, begin the scenic drive back across Kunzum La and through the Lahaul Valley to Manali, with photo stops at viewpoints along the way. Arrive in Manali by evening and relax at your hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },
      {
        day: 6,
        title: "Manali Departure | Memories of the Monasteries",
        description:
          "Enjoy your final morning in Manali. After breakfast, check out from the hotel and transfer to the airport or bus stand for your onward journey with lasting memories of Spiti's ancient gompas.",
        meals: "Breakfast",
        overnight: "—",
      },
    ],

    hotels: [
      {
        name: "Manali Mountain Hotel",
        stars: 3,
        type: "Comfort Hill Hotel",
        amenities: ["Mountain View", "Restaurant", "WiFi", "Parking"],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: ["Mountain View", "Restaurant", "Hot Water", "WiFi"],
      },
      {
        name: "Spiti Traditional Homestay",
        stars: 3,
        type: "Traditional Mountain Homestay",
        amenities: [
          "Traditional Cuisine",
          "Valley View",
          "Local Experience",
          "Hot Water",
        ],
      },
    ],

    transferInfo:
      "Private vehicle with an experienced mountain driver for the entire Manali–Kaza–Tabo–Manali monastery circuit. Oxygen cylinder and basic first-aid support available in the vehicle.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance payment is required to confirm the booking. The itinerary is subject to road, weather, snowfall and mountain pass conditions. The route may be modified when required for passenger safety. Monastery visits are subject to prayer timings and local customs; modest dress and silence inside prayer halls are requested.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure.",
      },
    ],

    primaryColor: "#F59E0B",
    accentColor: "#FF8C00",
  },
  {
    id: "spiti-winter-expedition",
    destination: "spiti",
    title: "Spiti Winter Expedition",
    subtitle:
      "A Buddhist heritage trail through Key, Dhankar, Lhalung and the thousand-year-old Tabo Monastery",
    route: "Manali → Kaza → Dhankar → Tabo → Kaza → Manali",
    nights: "5N",
    days: "6D",
    badge: "Heritage Special",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "🛕 Monastery Trail",
    tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF",
    rating: 4.9,
    reviews: 278,
    price: "Price on Request",
    category: "cultural",
    image:
      "/images/packagesimages/sptwinterexp.webp",
    overview:
      "A culture-focused journey through the ancient Buddhist monasteries of Spiti Valley, covering Key, Komic, Dhankar, Lhalung and the thousand-year-old Tabo Monastery with comfortable stays and private transfers.",
    highlights: [
      "Key Monastery, the largest in Spiti",
      "Tabo Monastery, over 1,000 years old",
      "Cliffside Dhankar Monastery & Lhalung",
      "Tangyud Monastery at Komic, world's highest village",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],

    included: [
      "5 Nights accommodation in comfortable hotels and homestays",
      "Accommodation in Manali and Kaza",
      "Daily Breakfast & Dinner",
      "Private vehicle for the entire journey with experienced mountain driver",
      "Key Monastery, Kibber & Chicham excursion",
      "Komic (Tangyud Monastery), Langza & Hikkim excursion",
      "Dhankar, Lhalung & Tabo Monastery excursion",
      "Local guide with knowledge of Spitian Buddhist heritage",
      "Driver allowance, toll taxes and parking charges",
      "Basic first-aid support",
      "Oxygen cylinder in the vehicle",
      "Applicable permits and documentation assistance",
    ],

    excluded: [
      "Airfare / Train tickets",
      "Travel to and from Manali",
      "Lunch and personal expenses",
      "Monastery entrance tickets, donations and camera charges",
      "Chandratal Lake excursion, available on request at extra cost",
      "Adventure activity charges",
      "Travel insurance",
      "Medical expenses",
      "Personal expenses such as laundry, tips and shopping",
      "Anything not mentioned under Inclusions",
    ],

    itinerary: [
      {
        day: 1,
        title: "Manali Arrival | Gateway to the Spiti Valley",
        description:
          "Arrive in Manali and meet your travel representative. Transfer to your hotel and spend the evening relaxing amidst the Himalayan surroundings. Your expedition leader will brief you on the monastery trail ahead.",
        meals: "Dinner",
        overnight: "Manali",
      },
      {
        day: 2,
        title: "Manali to Kaza | Over Kunzum La into the Cold Desert",
        description:
          "Drive through the Atal Tunnel into the Lahaul Valley and cross the 4,590 m Kunzum La, where prayer flags and the Kunzum Mata temple mark the entry into Spiti. Continue past Losar to Kaza, watching the landscape turn into a stark Buddhist cold desert.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 3,
        title: "Key, Kibber & Komic | Monasteries of the High Plateau",
        description:
          "Visit Key Monastery, the largest and most photographed gompa in Spiti, home to monks, ancient murals and rare manuscripts. Continue to Kibber and the Chicham Bridge, then on to Komic and its Tangyud Monastery, one of the highest monasteries in the world, returning via Langza and Hikkim.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 4,
        title: "Dhankar, Lhalung & Tabo | The Ancient Heritage Trail",
        description:
          "Drive down the valley to Dhankar Monastery, dramatically perched on a cliff above the confluence of the Spiti and Pin rivers. Visit the quiet Golden Temple at Lhalung, then continue to Tabo Monastery, founded in 996 AD and known as the Ajanta of the Himalayas for its mud-walled shrines and murals. Return to Kaza in the evening.",
        meals: "Breakfast & Dinner",
        overnight: "Kaza",
      },
      {
        day: 5,
        title: "Kaza to Manali | Return Across the Passes",
        description:
          "After a final morning in Kaza, begin the scenic drive back across Kunzum La and through the Lahaul Valley to Manali, with photo stops at viewpoints along the way. Arrive in Manali by evening and relax at your hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Manali",
      },
      {
        day: 6,
        title: "Manali Departure | Memories of the Monasteries",
        description:
          "Enjoy your final morning in Manali. After breakfast, check out from the hotel and transfer to the airport or bus stand for your onward journey with lasting memories of Spiti's ancient gompas.",
        meals: "Breakfast",
        overnight: "—",
      },
    ],

    hotels: [
      {
        name: "Manali Mountain Hotel",
        stars: 3,
        type: "Comfort Hill Hotel",
        amenities: ["Mountain View", "Restaurant", "WiFi", "Parking"],
      },
      {
        name: "Kaza Valley Hotel",
        stars: 3,
        type: "Spiti Valley Hotel",
        amenities: ["Mountain View", "Restaurant", "Hot Water", "WiFi"],
      },
      {
        name: "Spiti Traditional Homestay",
        stars: 3,
        type: "Traditional Mountain Homestay",
        amenities: [
          "Traditional Cuisine",
          "Valley View",
          "Local Experience",
          "Hot Water",
        ],
      },
    ],

    transferInfo:
      "Private vehicle with an experienced mountain driver for the entire Manali–Kaza–Tabo–Manali monastery circuit. Oxygen cylinder and basic first-aid support available in the vehicle.",

    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance payment is required to confirm the booking. The itinerary is subject to road, weather, snowfall and mountain pass conditions. The route may be modified when required for passenger safety. Monastery visits are subject to prayer timings and local customs; modest dress and silence inside prayer halls are requested.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: 90% refund. 15–30 days before departure: 50% refund. 7–15 days before departure: 25% refund. Less than 7 days before departure: No refund.",
      },
      {
        title: "Instant Confirmation & Payment Window",
        content:
          "Booking confirmation is provided after receipt of the advance payment. The remaining balance is payable 20 days before departure.",
      },
    ],

    primaryColor: "#F59E0B",
    accentColor: "#FF8C00",
  },
  // ─── LADAKH ────────────────────────────────────────────────────────────────
  {
    id: "best-of-ladakh-tour-package",
    destination: "ladakh",
    title: "Best Of Ladakh Tour Package",
    subtitle: "The ultimate high-altitude adventure through the Land of High Passes",
    route: "Leh → Nubra Valley → Pangong Tso → Leh",
    nights: "5N", days: "6D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 412,
    price: "Price on Request", category: "adventure",
    image: "/images/packagesimages/lehhh.webp",

    overview: "Fly directly into Leh and dive into the ultimate bucket-list Ladakh journey — crossing Khardung La and Chang La, camping beside the turquoise Pangong Lake, and riding camels among the dunes of Nubra Valley. This 6-day adventure will change the way you see the world.",
    highlights: [
      "Pangong Tso, Nubra Valley & Khardung La World's Highest Pass",
      "Premium Camp Stay at Pangong Lake Shore with All Meals",
      "Private 4×4 Vehicle for All High-Altitude Transfers",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],
    included: [
      "5 Nights accommodation",
      "Daily Breakfast & Dinner",
      "Private 4×4 vehicle (Toyota Fortuner or equivalent)",
      "Inner Line Permits",
      "Oxygen cylinder in vehicle",
      "Experienced local guide",
    ],
    excluded: [
      "Flights to/from Leh",
      "Personal expenses",
      "Travel insurance",
      "Adventure activities",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh | Acclimatization & Local Exploration", description: "Arrive at Leh Kushok Bakula Rimpochee Airport and experience the dramatic Himalayan landscapes of Ladakh. Meet your driver and transfer to the hotel. Since Leh is located at a high altitude, spend the day relaxing and allowing your body to acclimatize. In the evening, take a gentle walk around Leh Market and, if your health and weather conditions permit, visit Shanti Stupa for beautiful sunset views. Overnight stay in Leh.", meals: "Dinner", overnight: "Leh" },
      { day: 2, title: "Leh Local Sightseeing | Monasteries & Heritage", description: "After breakfast, explore the cultural and historical highlights of Leh. Visit Shanti Stupa for panoramic views of Leh town and the surrounding mountains. Continue to Leh Palace, a historic royal residence overlooking the valley. Explore the bustling Leh Market and discover local handicrafts, Tibetan souvenirs and traditional products. Later, visit the Hall of Fame and enjoy views around the Indus River. Overnight stay in Leh.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 3, title: "Leh to Nubra Valley via Khardung La Pass", description: "After breakfast, begin your exciting drive towards Nubra Valley via the legendary Khardung La Pass. Enjoy spectacular views of the rugged Himalayan terrain as you cross one of Ladakh's most famous high-altitude mountain passes. Continue towards Hunder in Nubra Valley, known for its beautiful sand dunes surrounded by snow-covered mountains. In the evening, enjoy an optional Bactrian camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley.", meals: "Breakfast & Dinner", overnight: "Nubra Valley" },
      { day: 4, title: "Nubra Valley to Pangong Tso via Shyok Route", description: "After breakfast, leave Nubra Valley and drive towards the spectacular Pangong Tso Lake via the scenic Shyok River route. The journey takes you through dramatic mountain landscapes, remote villages and rugged Himalayan terrain. Upon reaching Pangong, admire the lake's ever-changing shades of blue and enjoy the peaceful surroundings. Spend the evening beside the lake and, weather permitting, experience the incredible night sky. Overnight stay at Pangong Tso.", meals: "Breakfast & Dinner", overnight: "Pangong Tso" },
      { day: 5, title: "Pangong Tso to Leh via Chang La Pass", description: "Wake up early to witness the spectacular sunrise over Pangong Tso. After breakfast, begin the return journey towards Leh via the mighty Chang La Pass. Enjoy breathtaking views of the surrounding mountains along the way. On the return route, visit Thiksey Monastery, one of Ladakh's most impressive monasteries, before continuing to Leh. Check in to your hotel and relax after the journey. Overnight stay in Leh.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 6, title: "Departure from Leh | Trip Ends", description: "After breakfast, check out from the hotel and transfer to Leh Kushok Bakula Rimpochee Airport for your onward journey. Depart with unforgettable memories of Ladakh's dramatic mountains, high-altitude passes, Nubra Valley, and the magical Pangong Tso Lake.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Leh City Hotel", stars: 3, type: "Boutique Hotel", amenities: ["Mountain View", "WiFi", "Restaurant", "Oxygen"] },
      { name: "Nubra Valley Camp", stars: 3, type: "Desert Camp", amenities: ["Sand Dune View", "Bonfire", "Attached Washroom", "All Meals"] },
      { name: "Pangong Resort", stars: 3, type: "Luxury Lakeside Camp", amenities: ["Lake View", "Bonfire", "All Meals", "Stargazing"] },
    ],
    transferInfo: "Private 4×4 vehicle (Toyota Fortuner or equivalent) throughout. Oxygen cylinder on board. Inner Line Permits included.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Ladakh trips subject to weather and permit conditions." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 20 days before." },
    ],
    primaryColor: "#1E40AF",
    accentColor: "#D97706",
  },
  {
    id: "pangong-lake-tour-package",
    destination: "ladakh",
    title: "Leh Ladakh with Pangong Lake Tour Package",
    subtitle: "The ultimate high-altitude adventure through the Land of High Passes",
    route: "Leh → Nubra Valley → Pangong Tso → Leh",
    nights: "5N", days: "6D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 412,
    price: "Price on Request", category: "adventure",
    image: "/images/packagesimages/lehimage.webp",

    overview: "Fly directly into Leh and dive into the ultimate bucket-list Ladakh journey — crossing Khardung La and Chang La, camping beside the turquoise Pangong Lake, and riding camels among the dunes of Nubra Valley. This 6-day adventure will change the way you see the world.",
    highlights: [
      "Pangong Tso, Nubra Valley & Khardung La World's Highest Pass",
      "Premium Camp Stay at Pangong Lake Shore with All Meals",
      "Private 4×4 Vehicle for All High-Altitude Transfers",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],
    included: [
      "5 Nights accommodation",
      "Daily Breakfast & Dinner",
      "Private 4×4 vehicle (Toyota Fortuner or equivalent)",
      "Inner Line Permits",
      "Oxygen cylinder in vehicle",
      "Experienced local guide",
    ],
    excluded: [
      "Flights to/from Leh",
      "Personal expenses",
      "Travel insurance",
      "Adventure activities",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh | Acclimatization & Local Exploration", description: "Arrive at Leh Kushok Bakula Rimpochee Airport and experience the dramatic Himalayan landscapes of Ladakh. Meet your driver and transfer to the hotel. Since Leh is located at a high altitude, spend the day relaxing and allowing your body to acclimatize. In the evening, take a gentle walk around Leh Market and, if your health and weather conditions permit, visit Shanti Stupa for beautiful sunset views. Overnight stay in Leh.", meals: "Dinner", overnight: "Leh" },
      { day: 2, title: "Leh Local Sightseeing | Monasteries & Heritage", description: "After breakfast, explore the cultural and historical highlights of Leh. Visit Shanti Stupa for panoramic views of Leh town and the surrounding mountains. Continue to Leh Palace, a historic royal residence overlooking the valley. Explore the bustling Leh Market and discover local handicrafts, Tibetan souvenirs and traditional products. Later, visit the Hall of Fame and enjoy views around the Indus River. Overnight stay in Leh.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 3, title: "Leh to Nubra Valley via Khardung La Pass", description: "After breakfast, begin your exciting drive towards Nubra Valley via the legendary Khardung La Pass. Enjoy spectacular views of the rugged Himalayan terrain as you cross one of Ladakh's most famous high-altitude mountain passes. Continue towards Hunder in Nubra Valley, known for its beautiful sand dunes surrounded by snow-covered mountains. In the evening, enjoy an optional Bactrian camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley.", meals: "Breakfast & Dinner", overnight: "Nubra Valley" },
      { day: 4, title: "Nubra Valley to Pangong Tso via Shyok Route", description: "After breakfast, leave Nubra Valley and drive towards the spectacular Pangong Tso Lake via the scenic Shyok River route. The journey takes you through dramatic mountain landscapes, remote villages and rugged Himalayan terrain. Upon reaching Pangong, admire the lake's ever-changing shades of blue and enjoy the peaceful surroundings. Spend the evening beside the lake and, weather permitting, experience the incredible night sky. Overnight stay at Pangong Tso.", meals: "Breakfast & Dinner", overnight: "Pangong Tso" },
      { day: 5, title: "Pangong Tso to Leh via Chang La Pass", description: "Wake up early to witness the spectacular sunrise over Pangong Tso. After breakfast, begin the return journey towards Leh via the mighty Chang La Pass. Enjoy breathtaking views of the surrounding mountains along the way. On the return route, visit Thiksey Monastery, one of Ladakh's most impressive monasteries, before continuing to Leh. Check in to your hotel and relax after the journey. Overnight stay in Leh.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 6, title: "Departure from Leh | Trip Ends", description: "After breakfast, check out from the hotel and transfer to Leh Kushok Bakula Rimpochee Airport for your onward journey. Depart with unforgettable memories of Ladakh's dramatic mountains, high-altitude passes, Nubra Valley, and the magical Pangong Tso Lake.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Leh City Hotel", stars: 3, type: "Boutique Hotel", amenities: ["Mountain View", "WiFi", "Restaurant", "Oxygen"] },
      { name: "Nubra Valley Camp", stars: 3, type: "Desert Camp", amenities: ["Sand Dune View", "Bonfire", "Attached Washroom", "All Meals"] },
      { name: "Pangong Resort", stars: 3, type: "Luxury Lakeside Camp", amenities: ["Lake View", "Bonfire", "All Meals", "Stargazing"] },
    ],
    transferInfo: "Private 4×4 vehicle (Toyota Fortuner or equivalent) throughout. Oxygen cylinder on board. Inner Line Permits included.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Ladakh trips subject to weather and permit conditions." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 20 days before." },
    ],
    primaryColor: "#1E40AF",
    accentColor: "#D97706",
  },
  {
    id: "manali-leh-srinagar-bike-adventure",
    destination: "ladakh",
    title: "Manali Leh Srinagar Bike Adventure",
    subtitle: "The ultimate Himalayan motorcycle expedition across the highest passes, from Manali to Srinagar",
    route: "Delhi → Manali → Jispa → Sarchu → Leh → Nubra Valley → Pangong Tso → Leh → Kargil → Srinagar",
    nights: "9N", days: "10D",
    badge: "Adventure Special", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "🏍️ Bike Expedition", tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "20% OFF", rating: 4.9, reviews: 412,
    price: "Price on Request", category: "adventure",
    image: "/images/packagesimages/lehbike.webp",

    overview: "Ride a Royal Enfield across the highest motorable passes on earth on this epic 10-day motorcycle expedition from Manali to Srinagar. Cross Baralacha La, Tanglang La and Khardung La, camp beside Pangong Tso, ride the dunes of Nubra Valley, and descend through Kargil and Zoji La into the green meadows of Kashmir — all with an experienced road captain and backup support vehicle throughout.",
    highlights: [
      "Ride Khardung La, Chang La & Tanglang La — Among the World's Highest Passes",
      "Overnight Camps at Sarchu, Nubra Valley & Pangong Tso",
      "Royal Enfield Motorcycle with Road Captain & Backup Support Vehicle",
      "Journey's End Through Zoji La & the Meadows of Sonamarg to Srinagar",
    ],
    includes: ["stay", "meals", "bike", "sightseeing", "guide"],
    included: [
      "9 Nights accommodation in hotels and camps along the route",
      "Overnight Volvo bus from Delhi to Manali",
      "Daily Breakfast & Dinner",
      "Royal Enfield motorcycle for the expedition",
      "Experienced road captain / expedition leader",
      "Backup support vehicle carrying luggage and spares",
      "Inner Line Permits for Nubra, Pangong and the Ladakh region",
      "Oxygen cylinder and basic first-aid kit in the support vehicle",
      "Bike documentation and route briefing on Day 2",
    ],
    excluded: [
      "Flight from Srinagar (or onward travel after trip end)",
      "Fuel charges for the motorcycle",
      "Motorcycle security deposit",
      "Riding gear such as helmet, riding jacket, gloves and riding boots",
      "Personal expenses",
      "Travel insurance",
      "Monument and monastery entrance tickets",
      "Adventure activities",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Delhi | Transfer to Manali", description: "Welcome to Delhi, the starting point of your epic Himalayan motorcycle adventure. Arrive in Delhi and proceed to Majnu Ka Tila for your overnight Volvo bus journey towards Manali. Enjoy the changing landscapes as the journey takes you from the plains towards the lush green valleys and majestic Himalayan mountains.", meals: "Dinner", overnight: "Overnight Bus to Manali" },
      { day: 2, title: "Arrival in Manali | Bike Handover & Local Exploration", description: "Arrive in Manali in the morning and transfer to your hotel. Complete the check-in formalities and relax after the overnight journey. Later, meet the tour coordinator, complete the bike documentation and receive your motorcycle. Attend a detailed safety and route briefing before exploring Manali at leisure. Visit Mall Road, Hadimba Temple or Manu Temple depending on available time. Overnight stay in Manali.", meals: "Breakfast & Dinner", overnight: "Manali" },
      { day: 3, title: "Ride from Manali to Jispa via Atal Tunnel", description: "After breakfast, begin your exciting motorcycle journey towards Jispa. Ride through the famous Atal Tunnel and continue towards Sissu, where you can enjoy views of the Sissu Waterfall and surrounding Himalayan peaks. Proceed through the scenic Lahaul Valley, crossing beautiful mountain roads and remote landscapes before reaching Jispa. Check in to your camp and relax after the day's ride.", meals: "Breakfast & Dinner", overnight: "Jispa" },
      { day: 4, title: "Ride from Jispa to Sarchu via Baralacha La Pass", description: "After breakfast, continue your thrilling Himalayan motorcycle adventure towards Sarchu. Ride through the spectacular landscapes of Lahaul and cross the high-altitude Baralacha La Pass. Along the way, stop at Deepak Tal and Suraj Tal, two beautiful high-altitude lakes surrounded by dramatic mountains. Continue through ZingZing Bar and the rugged terrain before reaching Sarchu. Check in to your campsite and enjoy the peaceful surroundings.", meals: "Breakfast & Dinner", overnight: "Sarchu" },
      { day: 5, title: "Ride from Sarchu to Leh via Gata Loops, Nakee La & Lachung La", description: "Begin your ride towards Leh after breakfast. Experience the thrilling Gata Loops and continue across the high-altitude passes of Nakee La and Lachung La. Ride through the More Plains and cross the mighty Tanglang La Pass before descending towards the Indus Valley. Continue to Leh and check in to your hotel. Spend the evening resting after the long and adventurous ride.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 6, title: "Leh Local Sightseeing | Sham Valley & Indus-Zanskar Sangam", description: "After breakfast, explore the cultural and historical attractions around Leh on your motorcycle. Visit the Hall of Fame, Spituk Monastery, Gurudwara Pathar Sahib and the fascinating Magnetic Hill. Continue to the Indus-Zanskar Sangam viewpoint to witness the confluence of the two rivers. If time permits, visit SECMOL before returning to Leh. Spend the evening exploring Leh Market and relaxing at the hotel.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 7, title: "Ride from Leh to Nubra Valley via Khardung La Pass", description: "After breakfast, begin one of the most exciting rides of the expedition towards Nubra Valley. Cross the legendary Khardung La Pass and enjoy spectacular views of the surrounding Himalayan ranges. Descend into Nubra Valley and continue towards Hunder. Visit Diskit Monastery and the giant Maitreya Buddha statue overlooking the valley. Later, explore the famous Hunder Sand Dunes and enjoy an optional Bactrian camel ride. Overnight stay in Nubra Valley.", meals: "Breakfast & Dinner", overnight: "Nubra Valley" },
      { day: 8, title: "Ride from Nubra Valley to Pangong Tso via Shyok", description: "After breakfast, continue your motorcycle adventure from Nubra Valley towards the spectacular Pangong Tso Lake via the scenic Shyok River route. Ride through remote mountain landscapes and dramatic valleys before reaching the famous lake. Spend time exploring the lakeshore and enjoy the breathtaking changing shades of blue across Pangong Tso. Visit the famous 3 Idiots movie point and enjoy a spectacular Himalayan sunset before settling into your lakeside camp.", meals: "Breakfast & Dinner", overnight: "Pangong Tso" },
      { day: 9, title: "Ride from Pangong Tso to Leh via Chang La | Transfer towards Kargil", description: "Wake up early to witness the beautiful sunrise over Pangong Lake. After breakfast, begin your return ride towards Leh via the mighty Chang La Pass. Stop at Chang La for photographs before continuing towards Leh. Depending on the group schedule and road conditions, continue towards the Kargil route. Enjoy the changing landscapes as you leave the Ladakh plateau and enter the western Himalayan region. Overnight stay in Kargil.", meals: "Breakfast & Dinner", overnight: "Kargil" },
      { day: 10, title: "Ride from Kargil to Srinagar | Drass & Sonamarg", description: "After breakfast, begin your final motorcycle ride towards Srinagar. Ride through Drass, known for its dramatic mountain landscapes, and continue towards Zoji La Pass before descending into the greener Kashmir Valley. Continue through Sonamarg, the Meadow of Gold, and finally reach Srinagar. Complete the bike handover formalities and conclude your epic Manali-Leh-Srinagar motorcycle adventure with unforgettable memories of the Himalayas.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Manali Mountain Hotel", stars: 3, type: "Comfort Hill Hotel", amenities: ["Mountain View", "Restaurant", "WiFi", "Parking"] },
      { name: "Jispa Valley Camp", stars: 3, type: "Riverside Camp / Hotel", amenities: ["Riverside", "Bonfire", "Restaurant", "Hot Water"] },
      { name: "Sarchu Swiss Camp", stars: 3, type: "High-Altitude Tented Camp", amenities: ["Mountain View", "Dining Tent", "Attached Washroom", "Bonfire"] },
      { name: "Leh City Hotel", stars: 3, type: "Boutique Hotel", amenities: ["Mountain View", "WiFi", "Restaurant", "Oxygen"] },
      { name: "Nubra Valley Camp", stars: 3, type: "Desert Camp", amenities: ["Sand Dune View", "Bonfire", "Attached Washroom", "All Meals"] },
      { name: "Pangong Lakeside Camp", stars: 3, type: "Lakeside Tented Camp", amenities: ["Lake View", "Bonfire", "All Meals", "Stargazing"] },
      { name: "Kargil Transit Hotel", stars: 3, type: "Transit Hotel", amenities: ["Restaurant", "Hot Water", "Parking"] },
    ],
    transferInfo: "Royal Enfield motorcycle throughout the expedition, supported by an experienced road captain and a backup vehicle carrying luggage, spares, an oxygen cylinder and first-aid kit from Manali to Srinagar. Inner Line Permits included for the Ladakh region.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. This is a motorcycle expedition subject to road, weather, snowfall and mountain pass conditions; the route or overnight halts may be modified for rider safety. Riders should be reasonably fit and comfortable riding at high altitude for extended hours." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 20 days before." },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#F59E0B",
  },
  {
    id: "ladakh-family-couple-escape",
    destination: "ladakh",
    title: "Ladakh Family & Couple Escape",
    subtitle: "A comfortable, easy-paced Himalayan getaway through Leh, Nubra Valley and Pangong Tso",
    route: "Leh → Nubra Valley → Pangong Tso → Leh",
    nights: "6N", days: "7D",
    badge: "Family & Couple Special", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "👨‍👩‍👧 Family & Couple Friendly", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "15% OFF", rating: 4.9, reviews: 234,
    price: "Price on Request", category: "family",
    image: "/images/packagesimages/Ladakh-honeymoon.webp",

    overview: "Fly directly into Leh and enjoy an easy-paced, comfortable Himalayan getaway suited to families with children and couples alike. With a full acclimatization day, private car transfers, comfortable hotels and camps, and a gentle sightseeing pace, this 7-day trip covers Ladakh's most iconic sights — Nubra Valley's sand dunes, the turquoise Pangong Tso, and Leh's monasteries and markets — without the strain of a high-altitude motorcycle expedition.",
    highlights: [
      "Full Acclimatization Day in Leh Before Any High-Altitude Travel",
      "Comfortable Camp Stay by Pangong Lake with All Meals",
      "Camel Ride & Sand Dunes at Nubra Valley",
      "Private Car with Driver for All Transfers & Sightseeing",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],
    included: [
      "6 Nights accommodation in comfortable hotels and camps",
      "Daily Breakfast & Dinner",
      "Private car (Innova or equivalent) with experienced driver for all transfers and sightseeing",
      "Inner Line Permits for Nubra and Pangong",
      "Oxygen cylinder in vehicle",
      "Local guide assistance during sightseeing",
      "Family / adjoining rooms subject to availability",
    ],
    excluded: [
      "Flights to/from Leh",
      "Lunch and personal expenses",
      "Monument and monastery entrance tickets",
      "Camel ride charges at Nubra (paid directly, optional)",
      "Travel insurance",
      "Medical expenses",
      "Extra bed / extra mattress charges, if required",
      "Anything not mentioned under Inclusions",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh | Rest & Acclimatize", description: "Arrive at Leh Kushok Bakula Rimpochee Airport and transfer to your hotel. Since Leh sits at a high altitude, spend the entire day resting at the hotel to let your body acclimatize — no sightseeing is planned today. A light evening walk near the hotel is fine if everyone is feeling well.", meals: "Dinner", overnight: "Leh" },
      { day: 2, title: "Leh Local Sightseeing | Monasteries & Market", description: "After breakfast, enjoy an easy day of local sightseeing. Visit Shanti Stupa for panoramic views, the historic Leh Palace, and stroll through Leh Market for local handicrafts and Tibetan souvenirs. Keep the pace relaxed, with breaks built in for children and elders.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 3, title: "Leh to Nubra Valley via Khardung La", description: "Drive towards Nubra Valley via Khardung La, stopping for photos at the top. Descend into Nubra and check in to your camp at Hunder. In the evening, enjoy a fun camel ride on the Hunder Sand Dunes, a favourite with children.", meals: "Breakfast & Dinner", overnight: "Nubra Valley" },
      { day: 4, title: "Nubra Valley to Pangong Tso via Shyok Route", description: "After breakfast, drive to Pangong Tso via the scenic Shyok River route. Arrive by afternoon and spend the rest of the day relaxing by the ever-changing blue waters of the lake. Enjoy a quiet evening together as a family, with clear skies for stargazing if weather permits.", meals: "Breakfast & Dinner", overnight: "Pangong Tso" },
      { day: 5, title: "Pangong Tso to Leh via Chang La", description: "Watch the sunrise over Pangong before breakfast, then begin the drive back to Leh via Chang La. En route, visit Thiksey Monastery, one of Ladakh's most photogenic gompas. Arrive in Leh by evening and rest at the hotel.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 6, title: "Sham Valley Sightseeing | Magnetic Hill & Sangam", description: "A gentle sightseeing day covering the Sham Valley — the Hall of Fame war memorial, Gurudwara Pathar Sahib, the curious Magnetic Hill, and the Indus-Zanskar Sangam viewpoint. Return to Leh for a relaxed evening at Leh Market.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 7, title: "Departure from Leh", description: "After breakfast, check out and transfer to Leh Airport for your onward journey, taking home warm memories of the mountains, the lake and time spent together.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Leh City Hotel", stars: 3, type: "Boutique Hotel", amenities: ["Mountain View", "Family Rooms", "Restaurant", "Oxygen"] },
      { name: "Nubra Valley Camp", stars: 3, type: "Desert Camp", amenities: ["Sand Dune View", "Bonfire", "Attached Washroom", "All Meals"] },
      { name: "Pangong Lakeside Camp", stars: 3, type: "Lakeside Tented Camp", amenities: ["Lake View", "Bonfire", "All Meals", "Attached Washroom"] },
    ],
    transferInfo: "Private car (Innova or equivalent) with an experienced driver throughout, at a relaxed pace suited to families and couples. Oxygen cylinder on board and Inner Line Permits included.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Ladakh trips are subject to weather and permit conditions; the itinerary may be adjusted for passenger comfort and safety. Families travelling with young children, elderly members or anyone with existing medical conditions should consult a doctor before travelling to high altitude." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. 15–30 days: 50% refund. 7–15 days: 25% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 20 days before departure." },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#F59E0B",
  },
  {
    id: "ladakh-monastery-culture-tour",
    destination: "ladakh",
    title: "Ladakh Monastery & Culture Tour",
    subtitle: "A gentle heritage trail through Leh's ancient monasteries — Alchi, Thiksey and Hemis",
    route: "Leh (with excursions to Alchi, Thiksey & Hemis)",
    nights: "4N", days: "5D",
    badge: "Heritage Special", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "🛕 Monastery Trail", tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF", rating: 4.9, reviews: 234,
    price: "Price on Request", category: "cultural",
    image: "/images/packagesimages/ladakh-tours-packages.webp",

    overview: "Fly directly into Leh and spend an easy-paced 5 days exploring the Buddhist heritage of Ladakh — from Alchi's 11th-century murals in the Sham Valley to Thiksey's Potala-like tiered monastery and the grand Hemis Monastery in the Indus Valley. With a full acclimatization day, private car transfers and comfortable stays, this trip is built for travellers who want the culture and history of Ladakh without a high-altitude expedition.",
    highlights: [
      "Alchi Monastery, Home to Ladakh's Oldest Surviving Murals",
      "Thiksey Monastery, Resembling a Miniature Potala Palace",
      "Hemis Monastery, the Largest and Wealthiest Gompa in Ladakh",
      "Shanti Stupa, Leh Palace & the Sham Valley Heritage Trail",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],
    included: [
      "4 Nights accommodation in a comfortable Leh hotel",
      "Daily Breakfast & Dinner",
      "Private car (Innova or equivalent) with experienced driver for all transfers and sightseeing",
      "Sham Valley excursion covering Alchi, Magnetic Hill, Gurudwara Pathar Sahib and the Indus-Zanskar Sangam",
      "Indus Valley monastery excursion covering Thiksey and Hemis",
      "Local guide with knowledge of Ladakhi Buddhist heritage",
      "Oxygen cylinder in vehicle",
    ],
    excluded: [
      "Flights to/from Leh",
      "Lunch and personal expenses",
      "Monastery entrance tickets, donations and camera charges",
      "Nubra Valley & Pangong Tso excursion, available on request at extra cost",
      "Travel insurance",
      "Medical expenses",
      "Anything not mentioned under Inclusions",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh | Acclimatization Day", description: "Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, enjoy a gentle visit to Leh Market and explore the local atmosphere.", meals: "Dinner", overnight: "Leh" },
      { day: 2, title: "Leh Sightseeing | Palace, Stupa & Local Heritage", description: "After breakfast, explore the major attractions of Leh. Visit Shanti Stupa, Leh Palace and Hall of Fame. Spend some time exploring the local market before returning to your hotel.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 3, title: "Sham Valley | Magnetic Hill & Alchi Monastery", description: "Drive through the scenic Sham Valley and visit the Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill and the famous Indus-Zanskar Sangam. Continue towards Alchi to explore its ancient monastery complex, renowned for its 11th-century wall paintings and wood carvings, before returning to Leh.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 4, title: "Thiksey & Hemis Monastery Tour", description: "After breakfast, drive towards the famous monasteries of the Indus Valley. Visit Thiksey Monastery, one of Ladakh's most impressive monasteries with its tiered architecture, followed by Hemis Monastery, the largest and richest in the region. Return to Leh in the evening.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 5, title: "Departure from Leh", description: "After breakfast, check out from the hotel and transfer to Leh Airport for your onward journey, carrying home memories of Ladakh's ancient monasteries.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Leh City Hotel", stars: 3, type: "Boutique Hotel", amenities: ["Mountain View", "Restaurant", "WiFi", "Oxygen"] },
    ],
    transferInfo: "Private car (Innova or equivalent) with an experienced driver throughout, at a relaxed pace for all sightseeing and monastery excursions. Oxygen cylinder on board.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. The itinerary may be adjusted for weather, monastery prayer schedules, or passenger comfort and safety. Modest dress and silence inside prayer halls are requested during monastery visits." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. 15–30 days: 50% refund. 7–15 days: 25% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 20 days before departure." },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#F59E0B",
  },
  {
    id: "nubra-valley-pangong-adventure-tour",
    destination: "ladakh",
    title: "Nubra Valley & Pangong Adventure",
    subtitle: "An easy Leh fly-in adventure across Khardung La to the dunes of Nubra and the blue waters of Pangong Tso",
    route: "Leh → Nubra Valley → Pangong Tso → Leh",
    nights: "4N", days: "5D",
    badge: "Adventure Special", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "🏔️ Adventure Special", tagColor: "text-orange-700 bg-orange-50 border-orange-200",
    discount: "15% OFF", rating: 4.9, reviews: 234,
    price: "Price on Request", category: "adventure",
    image: "/images/packagesimages/Ladakh-Nubra-Valley.webp",

    overview: "Fly directly into Leh and spend an easy-paced 5 days covering Ladakh's most iconic sights — crossing the legendary Khardung La to Nubra Valley's sand dunes, driving the scenic Shyok River route to the turquoise Pangong Tso, and returning to Leh via Chang La. With a full acclimatization day, private car transfers and comfortable stays throughout, this trip delivers Ladakh's big-ticket adventures without a multi-day expedition.",
    highlights: [
      "Khardung La, One of the World's Highest Motorable Passes",
      "Camel Ride & Sand Dunes at Nubra Valley",
      "Comfortable Camp Stay by Pangong Lake with All Meals",
      "Scenic Return via Chang La with a Stop at Thiksey Monastery",
    ],
    includes: ["stay", "meals", "car", "sightseeing", "guide"],
    included: [
      "4 Nights accommodation in comfortable hotels and camps",
      "Daily Breakfast & Dinner",
      "Private car (Innova or equivalent) with experienced driver for all transfers and sightseeing",
      "Inner Line Permits for Nubra and Pangong",
      "Nubra Valley excursion covering Diskit Monastery, the Maitreya Buddha statue and Hunder Sand Dunes",
      "Pangong Tso excursion via the Shyok River route",
      "Thiksey Monastery stop on the return route",
      "Oxygen cylinder in vehicle",
    ],
    excluded: [
      "Flights to/from Leh",
      "Lunch and personal expenses",
      "Monastery entrance tickets, donations and camera charges",
      "Camel ride charges at Nubra (paid directly, optional)",
      "Travel insurance",
      "Medical expenses",
      "Anything not mentioned under Inclusions",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh | Acclimatization & Leh Market", description: "Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, explore Leh Market and enjoy the unique atmosphere of Ladakh.", meals: "Dinner", overnight: "Leh" },
      { day: 2, title: "Leh to Nubra Valley via Khardung La", description: "Start your adventure with a drive across the legendary Khardung La Pass. Continue towards Nubra Valley and visit Diskit Monastery and the giant Maitreya Buddha Statue. Later explore the Hunder Sand Dunes with an optional camel ride.", meals: "Breakfast & Dinner", overnight: "Nubra Valley" },
      { day: 3, title: "Nubra Valley to Pangong Tso via Shyok", description: "After breakfast, begin a spectacular drive through the Shyok River route towards Pangong Tso. Enjoy the changing mountain landscapes before reaching the famous blue lake. Spend the evening at your lakeside camp.", meals: "Breakfast & Dinner", overnight: "Pangong Tso" },
      { day: 4, title: "Pangong Tso to Leh via Chang La", description: "Wake up to a beautiful sunrise over Pangong Lake. After breakfast, drive towards Leh via Chang La Pass. Stop at Chang La Baba Temple and visit Thiksey Monastery before reaching Leh.", meals: "Breakfast & Dinner", overnight: "Leh" },
      { day: 5, title: "Departure from Leh", description: "After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey with unforgettable memories of the Ladakh Himalayas.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Leh City Hotel", stars: 3, type: "Boutique Hotel", amenities: ["Mountain View", "Restaurant", "WiFi", "Oxygen"] },
      { name: "Nubra Valley Camp", stars: 3, type: "Desert Camp", amenities: ["Sand Dune View", "Bonfire", "Attached Washroom", "All Meals"] },
      { name: "Pangong Lakeside Camp", stars: 3, type: "Lakeside Tented Camp", amenities: ["Lake View", "Bonfire", "All Meals", "Attached Washroom"] },
    ],
    transferInfo: "Private car (Innova or equivalent) with an experienced driver throughout, covering the Leh–Nubra–Pangong–Leh circuit. Oxygen cylinder on board and Inner Line Permits included.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Ladakh trips are subject to weather, road and permit conditions; the itinerary may be adjusted for passenger comfort and safety." },
      { title: "Cancellation & Refund Policy", content: "30+ days: 90% refund. 15–30 days: 50% refund. 7–15 days: 25% refund. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 20 days before departure." },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#F59E0B",
  },


  // ─── KASHMIR ───────────────────────────────────────────────────────────────
  {
    id: "majestic-kashmir-escape",
    destination: "kashmir",
    title: "Majestic Kashmir Escape",
    subtitle: "Heaven on Earth — the complete Kashmir experience",
    route: "Delhi → Srinagar → Sonamarg → Gulmarg → Pahalgam → Srinagar",
    nights: "7N", days: "8D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 534,
    price: "Price on Request", category: "family",
    image: "/images/packagesimages/mkashmir.webp",

    overview: "Experience the timeless beauty of Kashmir — the crown jewel of Indian tourism. From a romantic Shikara ride on Dal Lake to the snow peaks of Gulmarg, the meadows of Pahalgam and the glaciers of Sonamarg, this 8-day journey covers the very best of Paradise on Earth.",
    highlights: [
      "Dal Lake Shikara Ride at Sunrise & Mughal Garden Tour",
      "Gulmarg Gondola Phase II & Pahalgam Betaab Valley",
      "Luxury Houseboat Stay on Dal Lake with All Meals",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "2 Nights luxury houseboat on Dal Lake",
      "5 Nights hotel accommodation in Srinagar, Gulmarg and Pahalgam",
      "Daily Breakfast & Dinner",
      "Shikara ride on Dal Lake",
      "Private cab for all transfers",
      "All sightseeing as per itinerary",
    ],
    excluded: [
      "Flights to Srinagar",
      "Gulmarg Gondola tickets",
      "Pony / vehicle charges at Thajiwas Glacier, Sonamarg",
      "Personal expenses",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar | Houseboat Stay & Shikara Ride", description: "Arrive at Srinagar Airport and transfer to a traditional Kashmiri houseboat on Dal Lake. Relax and enjoy a peaceful Shikara ride while experiencing the calm waters and floating gardens of Dal Lake.", meals: "Dinner", overnight: "Dal Lake Houseboat" },
      { day: 2, title: "Srinagar Local Sightseeing", description: "After breakfast, explore the famous attractions of Srinagar. Visit the beautiful Mughal Gardens including Nishat Bagh, Shalimar Bagh and Chashme Shahi, followed by Pari Mahal, Hazratbal Shrine and Shankaracharya Temple. Overnight stay on your houseboat.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 3, title: "Excursion to Sonamarg | Meadow of Gold", description: "After breakfast, drive to Sonamarg, famously known as the Meadow of Gold. Enjoy the spectacular mountain scenery and visit Thajiwas Glacier by pony or local vehicle, at own cost and subject to weather and road conditions. Return to Srinagar for an overnight stay at your hotel.", meals: "Breakfast & Dinner", overnight: "Srinagar" },
      { day: 4, title: "Srinagar to Gulmarg | Gondola Experience", description: "After breakfast, drive to Gulmarg, one of Kashmir's most beautiful mountain destinations. Enjoy the scenic surroundings and visit the famous Gulmarg Golf Course. An optional Gulmarg Gondola cable car ride can be arranged at own cost, subject to weather and operational conditions. Overnight stay in Gulmarg.", meals: "Breakfast & Dinner", overnight: "Gulmarg" },
      { day: 5, title: "Gulmarg to Pahalgam | Scenic Valley Drive", description: "After breakfast, check out and drive towards Pahalgam through beautiful countryside, saffron fields and apple orchards. Upon arrival, check in to your hotel and spend the evening relaxing beside the scenic Lidder River. Overnight stay in Pahalgam.", meals: "Breakfast & Dinner", overnight: "Pahalgam" },
      { day: 6, title: "Pahalgam Sightseeing | Betaab Valley & Aru Valley", description: "Explore the stunning valleys around Pahalgam. Visit Betaab Valley, Aru Valley and Chandanwari by local union cab. Enjoy the breathtaking landscapes and optional activities such as horse riding or river rafting. Overnight stay in Pahalgam.", meals: "Breakfast & Dinner", overnight: "Pahalgam" },
      { day: 7, title: "Pahalgam to Srinagar | Shopping & Leisure", description: "After breakfast, check out from the hotel and drive back to Srinagar. Spend the rest of the day at leisure. Explore local markets for Kashmiri handicrafts, Pashmina products, dry fruits, spices and traditional souvenirs. Overnight stay in Srinagar.", meals: "Breakfast & Dinner", overnight: "Srinagar" },
      { day: 8, title: "Departure from Srinagar", description: "After breakfast, check out from the hotel and transfer to Srinagar International Airport for your onward journey. Take home unforgettable memories of the beautiful valleys, lakes and mountains of Kashmir.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Luxury Dal Lake Houseboat", stars: 4, type: "Premium Houseboat", amenities: ["Lake View", "Shikara", "Traditional Décor", "All Meals"] },
      { name: "Srinagar City Hotel", stars: 3, type: "City Hotel", amenities: ["Restaurant", "WiFi", "Room Service", "Parking"] },
      { name: "Gulmarg Mountain Resort", stars: 3, type: "Mountain Hotel", amenities: ["Snow View", "WiFi", "Restaurant", "Fireplace"] },
      { name: "Pahalgam Riverside Hotel", stars: 3, type: "Valley Hotel", amenities: ["Lidder River View", "Restaurant", "WiFi", "Parking"] },
    ],
    transferInfo: "Private cab for all Kashmir transfers. Shikara included for Dal Lake rides.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Kashmir trips may be subject to government advisories." },
      { title: "Cancellation & Refund Policy", content: "30+ days: Full refund less processing. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 15 days before." },
    ],
    primaryColor: "#065F46",
    accentColor: "#B45309",
  },
  {
    id: "vaishnodevi-darshan-tour",
    destination: "kashmir",
    title: "Vaishnodevi Darshan & Kashmir Classic Tour",
    subtitle: "Divine blessings at Vaishno Devi, followed by Heaven on Earth — the complete Kashmir experience",
    route: "Jammu → Katra → Vaishno Devi → Srinagar → Sonamarg → Gulmarg → Pahalgam → Srinagar",
    nights: "7N", days: "8D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 534,
    price: "Price on Request", category: "family",
    image: "/images/packagesimages/vashnodeviimage.webp",

    overview: "Begin with the sacred pilgrimage to Mata Vaishno Devi at Katra, then fly into Srinagar for the timeless beauty of Kashmir — a romantic Shikara ride on Dal Lake, the snow peaks of Gulmarg, the meadows of Pahalgam and the glaciers of Sonamarg. This 8-day journey combines a spiritual start with the very best of Paradise on Earth.",
    highlights: [
      "Sacred Darshan at the Vaishno Devi Holy Shrine, Katra",
      "Dal Lake Shikara Ride at Sunrise & Mughal Garden Tour",
      "Gulmarg Gondola Phase II & Pahalgam Betaab Valley",
      "Luxury Houseboat Stay on Dal Lake with All Meals",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "2 Nights hotel accommodation in Katra",
      "2 Nights luxury houseboat on Dal Lake",
      "3 Nights hotel accommodation in Srinagar, Gulmarg and Pahalgam",
      "Daily Breakfast & Dinner",
      "Assistance with Vaishno Devi Yatra registration slip",
      "Shikara ride on Dal Lake",
      "Private cab for all transfers",
      "All sightseeing as per itinerary",
    ],
    excluded: [
      "Flights / train fare to Jammu and Srinagar",
      "Helicopter, pony, palki or battery car charges at Vaishno Devi",
      "Gulmarg Gondola tickets",
      "Pony / vehicle charges at Thajiwas Glacier, Sonamarg",
      "Personal expenses",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jammu | Transfer to Katra", description: "Arrive at Jammu Railway Station or Airport and proceed to Katra. Check in to your hotel and relax. In the evening, explore the local market and prepare for the sacred Vaishno Devi pilgrimage. Overnight stay in Katra.", meals: "Dinner", overnight: "Katra" },
      { day: 2, title: "Vaishno Devi Darshan | Return to Katra", description: "Start early morning for the sacred Vaishno Devi pilgrimage. Trek or use available travel options to reach the Holy Shrine of Mata Vaishno Devi and seek blessings. After darshan, return to Katra and relax at the hotel. Overnight stay in Katra.", meals: "Breakfast & Dinner", overnight: "Katra" },
      { day: 3, title: "Katra to Jammu to Srinagar | Houseboat Stay & Shikara Ride", description: "After breakfast, check out from Katra and transfer to Jammu for your onward journey to Srinagar. On arrival, transfer to a traditional Kashmiri houseboat on Dal Lake and enjoy a peaceful Shikara ride while experiencing the calm waters and floating gardens of Dal Lake.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 4, title: "Srinagar Local Sightseeing", description: "After breakfast, explore the famous attractions of Srinagar. Visit the beautiful Mughal Gardens including Nishat Bagh, Shalimar Bagh and Chashme Shahi, followed by Pari Mahal, Hazratbal Shrine and Shankaracharya Temple. Overnight stay on your houseboat.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 5, title: "Excursion to Sonamarg | Meadow of Gold, then Gulmarg", description: "After breakfast, drive to Sonamarg, famously known as the Meadow of Gold. Enjoy the spectacular mountain scenery, with an optional pony or local-vehicle ride to Thajiwas Glacier at own cost. Continue on to Gulmarg, one of Kashmir's most beautiful mountain destinations, and check in to your hotel. Overnight stay in Gulmarg.", meals: "Breakfast & Dinner", overnight: "Gulmarg" },
      { day: 6, title: "Gulmarg to Pahalgam | Scenic Valley Drive", description: "After breakfast, enjoy the scenic surroundings of Gulmarg and visit the famous Gulmarg Golf Course, with an optional Gondola cable car ride at own cost. Later, check out and drive towards Pahalgam through beautiful countryside, saffron fields and apple orchards. Overnight stay in Pahalgam.", meals: "Breakfast & Dinner", overnight: "Pahalgam" },
      { day: 7, title: "Pahalgam Sightseeing | Betaab Valley & Aru Valley, then Return to Srinagar", description: "Explore the stunning valleys around Pahalgam, including Betaab Valley, Aru Valley and Chandanwari by local union cab, with optional activities such as horse riding or river rafting. In the afternoon, drive back to Srinagar and spend the evening exploring local markets for Kashmiri handicrafts, Pashmina products, dry fruits and spices. Overnight stay in Srinagar.", meals: "Breakfast & Dinner", overnight: "Srinagar" },
      { day: 8, title: "Departure from Srinagar", description: "After breakfast, check out from the hotel and transfer to Srinagar International Airport for your onward journey. Take home divine blessings and unforgettable memories of the beautiful valleys, lakes and mountains of Kashmir.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Katra Hotel", stars: 3, type: "Pilgrim Comfort Hotel", amenities: ["Restaurant", "WiFi", "Luggage Storage", "Parking"] },
      { name: "Luxury Dal Lake Houseboat", stars: 4, type: "Premium Houseboat", amenities: ["Lake View", "Shikara", "Traditional Décor", "All Meals"] },
      { name: "Srinagar City Hotel", stars: 3, type: "City Hotel", amenities: ["Restaurant", "WiFi", "Room Service", "Parking"] },
      { name: "Gulmarg Mountain Resort", stars: 3, type: "Mountain Hotel", amenities: ["Snow View", "WiFi", "Restaurant", "Fireplace"] },
      { name: "Pahalgam Riverside Hotel", stars: 3, type: "Valley Hotel", amenities: ["Lidder River View", "Restaurant", "WiFi", "Parking"] },
    ],
    transferInfo: "Private cab for all Jammu, Katra and Kashmir transfers. Shikara included for Dal Lake rides.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Vaishno Devi Yatra is subject to weather, trek conditions and shrine board regulations. Kashmir trips may be subject to government advisories." },
      { title: "Cancellation & Refund Policy", content: "30+ days: Full refund less processing. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 15 days before." },
    ],
    primaryColor: "#065F46",
    accentColor: "#B45309",
  },
  {
    id: "kashmir-bliss-getaway",
    destination: "kashmir",
    title: "Kashmir Bliss Getaway",
    subtitle: "A quick escape to Heaven on Earth — Srinagar, Gulmarg and Pahalgam in one relaxed trip",
    route: "Srinagar (with day excursions to Gulmarg & Pahalgam)",
    nights: "3N", days: "4D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 534,
    price: "Price on Request", category: "family",
    image: "/images/packagesimages/Kashmirnewww.webp",

    overview: "A short, relaxed getaway to the timeless beauty of Kashmir — stay aboard a traditional houseboat on Dal Lake and enjoy day excursions to the snow peaks of Gulmarg and the meadows of Pahalgam. This 4-day trip is perfect for travellers short on time who still want to experience the very best of Paradise on Earth.",
    highlights: [
      "Dal Lake Shikara Ride & Mughal Garden Tour",
      "Day Excursion to Gulmarg with Optional Gondola Ride",
      "Day Excursion to Pahalgam's Betaab Valley & Aru Valley",
      "Luxury Houseboat Stay on Dal Lake with All Meals",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "3 Nights luxury houseboat on Dal Lake",
      "Daily Breakfast & Dinner",
      "Shikara ride on Dal Lake",
      "Private cab for all transfers and day excursions",
      "All sightseeing as per itinerary",
    ],
    excluded: [
      "Flights to/from Srinagar",
      "Gulmarg Gondola tickets",
      "Local union cab charges for Aru Valley / Chandanwari at Pahalgam",
      "Personal expenses",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar | Mughal Gardens & Shikara Ride", description: "Arrive at Srinagar Airport and transfer to your houseboat on Dal Lake. Visit the beautiful Mughal Gardens including Nishat Bagh, Shalimar Bagh, Chashme Shahi and Pari Mahal. In the evening, enjoy a relaxing Shikara ride on Dal Lake and experience the beautiful surroundings. Overnight stay on your houseboat.", meals: "Dinner", overnight: "Dal Lake Houseboat" },
      { day: 2, title: "Day Excursion to Gulmarg | Gondola Ride", description: "After breakfast, drive to Gulmarg, known for its beautiful meadows and spectacular Himalayan scenery. Explore the Gulmarg Golf Course and St. Mary Church, with an optional Gulmarg Gondola ride at own cost, subject to weather and operational conditions. Return to Srinagar for an overnight stay on your houseboat.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 3, title: "Day Excursion to Pahalgam | Betaab Valley & Aru Valley", description: "After breakfast, drive to Pahalgam through scenic countryside, saffron fields and apple orchards. Explore the beautiful Betaab Valley, Aru Valley and Chandanwari by local union cab at additional cost. Enjoy the peaceful surroundings of the Lidder River before returning to Srinagar. Overnight stay on your houseboat.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 4, title: "Departure from Srinagar", description: "After breakfast, check out from your houseboat and transfer to Srinagar International Airport for your onward journey. Take home unforgettable memories of the beautiful Kashmir Valley.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Luxury Dal Lake Houseboat", stars: 4, type: "Premium Houseboat", amenities: ["Lake View", "Shikara", "Traditional Décor", "All Meals"] },
    ],
    transferInfo: "Private cab for all Srinagar transfers and day excursions to Gulmarg and Pahalgam. Shikara included for Dal Lake rides.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Kashmir trips may be subject to weather conditions and government advisories." },
      { title: "Cancellation & Refund Policy", content: "30+ days: Full refund less processing. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 15 days before." },
    ],
    primaryColor: "#065F46",
    accentColor: "#B45309",
  },
  {
    id: "trails-of-kashmir",
    destination: "kashmir",
    title: "Trails of Kashmir | Shikara Rides, Glaciers & Meadows",
    subtitle: "From Dal Lake's Shikara rides to the glacier trails of Sonamarg and the meadows of Gulmarg and Pahalgam",
    route: "Srinagar → Sonamarg → Srinagar → Gulmarg → Pahalgam → Srinagar",
    nights: "4N", days: "5D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 534,
    price: "Price on Request", category: "family",
    image: "/images/packagesimages/kashmirtrails.webp",

    overview: "Experience the full sweep of Kashmir's beauty on this 5-day trail — a Shikara ride on Dal Lake and the Mughal Gardens in Srinagar, a day trip to the glacier trails of Sonamarg, and overnight stays in the snow-capped meadows of Gulmarg and the riverside valleys of Pahalgam. A well-rounded introduction to Paradise on Earth for travellers who want more than just a quick city stopover.",
    highlights: [
      "Dal Lake Shikara Ride & Mughal Garden Tour in Srinagar",
      "Day Trip to Sonamarg with a Trek Towards Thajiwas Glacier",
      "Overnight Stay in Gulmarg with Optional Gondola Ride",
      "Overnight Stay in Pahalgam with Aru & Betaab Valley Sightseeing",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "2 Nights luxury houseboat on Dal Lake, Srinagar",
      "1 Night hotel accommodation in Gulmarg",
      "1 Night hotel accommodation in Pahalgam",
      "Daily Breakfast & Dinner",
      "Shikara ride on Dal Lake",
      "Private cab for all transfers and sightseeing",
      "All sightseeing as per itinerary",
    ],
    excluded: [
      "Flights to/from Srinagar",
      "Pony ride to Thajiwas Glacier, Sonamarg",
      "Gulmarg Gondola tickets (Phase 1 & Phase 2)",
      "Local union cab charges for Aru Valley, Baisaran Valley & Betaab Valley at Pahalgam",
      "Personal expenses",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar | Srinagar Sightseeing Tour | Shikara Ride Experience", description: "Welcome to Kashmir! Upon arrival at the Srinagar airport, get transferred to your houseboat for check-in. Later, get driven to Pari Mahal, offering historic charm and city views. Also, stroll through Shalimar Bagh and Nishat Bagh, the iconic Mughal gardens by Dal Lake. Head to Shankaracharya Temple for panoramic valley views, and later in the evening, enjoy a peaceful Shikara ride on Dal Lake before returning for an overnight stay.", meals: "Dinner", overnight: "Dal Lake Houseboat" },
      { day: 2, title: "Excursion to Sonamarg", description: "In the morning, get driven to Sonamarg, the \"Meadow of Gold.\" On arrival, you can hire a pony (at your own cost) for a short trek towards Thajiwas Glacier, a scenic spot where snow stays year-round. Later, proceed towards Zero Point near Zojila Pass to witness dramatic mountain landscapes along the India-Pakistan border road. In the evening, get transferred back to your houseboat in Srinagar for an overnight stay.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 3, title: "Transfer to Gulmarg | Gulmarg Sightseeing Tour", description: "After check-out, you will be driven to Gulmarg. Upon arrival, get driven to the Union Cab Stand, from where you can either hire a cab or take a walk to the world-famous Gulmarg Golf Course, one of the world's highest green golf courses. Later, head to the Gondola cable car station and, at own cost, ascend through Phase 1 and Phase 2 to reach the towering Apharwat Peak, where sweeping views of the Himalayas await. Afterwards, check in to your hotel for an overnight stay.", meals: "Breakfast & Dinner", overnight: "Gulmarg" },
      { day: 4, title: "Transfer to Pahalgam | En Route Pahalgam Sightseeing", description: "Check out from your hotel in Gulmarg and get transferred to Pahalgam, enjoying scenic views of saffron fields and apple orchards en route. On arrival at the Pahalgam Union Cab Stand, hire a cab (at your own expense) to explore attractions such as Aru Valley, Baisaran Valley and Betaab Valley, each known for its lush meadows and alpine beauty. After sightseeing, return to the Pahalgam Union Cab Stand and check in to your hotel for the evening at leisure.", meals: "Breakfast & Dinner", overnight: "Pahalgam" },
      { day: 5, title: "Departure Day", description: "Today, check out of your hotel and get driven to Srinagar airport for your onward journey, carrying with you cherished memories of Kashmir's valleys, gardens and mountain landscapes.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Luxury Dal Lake Houseboat", stars: 4, type: "Premium Houseboat", amenities: ["Lake View", "Shikara", "Traditional Décor", "All Meals"] },
      { name: "Gulmarg Mountain Resort", stars: 3, type: "Mountain Hotel", amenities: ["Snow View", "WiFi", "Restaurant", "Fireplace"] },
      { name: "Pahalgam Riverside Hotel", stars: 3, type: "Valley Hotel", amenities: ["Lidder River View", "Restaurant", "WiFi", "Parking"] },
    ],
    transferInfo: "Private cab for all Srinagar, Sonamarg, Gulmarg and Pahalgam transfers and sightseeing. Shikara included for Dal Lake rides.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Kashmir trips may be subject to weather conditions and government advisories; Sonamarg and Zero Point access is subject to road and weather conditions." },
      { title: "Cancellation & Refund Policy", content: "30+ days: Full refund less processing. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 15 days before." },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    id: "gulmarg-family-tour-package",
    destination: "kashmir",
    title: "Gulmarg Family Tour Package",
    subtitle: "A relaxed family trip to Dal Lake's Shikara rides and the snow-capped meadows of Gulmarg",
    route: "Srinagar → Gulmarg → Srinagar",
    nights: "3N", days: "4D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 534,
    price: "Price on Request", category: "family",
    image: "/images/packagesimages/gulmarghero.webp",

    overview: "A relaxed 4-day family holiday covering the two sides of Kashmir everyone loves — the calm waters of Dal Lake in Srinagar and the snow-capped meadows of Gulmarg. With comfortable stays, a Shikara ride, the Mughal Gardens and an optional Gulmarg Gondola ride, this trip is an easy, well-paced introduction to Paradise on Earth for the whole family.",
    highlights: [
      "Dal Lake Shikara Ride & Mughal Garden Tour in Srinagar",
      "Overnight Stay in Gulmarg with Optional Gondola Ride",
      "Gulmarg Golf Course, Strawberry Valley & Drung Waterfall",
      "Comfortable Houseboat Stay on Dal Lake with All Meals",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "2 Nights luxury houseboat on Dal Lake, Srinagar",
      "1 Night hotel accommodation in Gulmarg",
      "Daily Breakfast & Dinner",
      "Shikara ride on Dal Lake",
      "Private cab for all transfers and sightseeing",
      "All sightseeing as per itinerary",
    ],
    excluded: [
      "Flights to/from Srinagar",
      "Gulmarg Gondola tickets (Phase 1 & Phase 2)",
      "Personal expenses",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar | Evening at Dal Lake", description: "Welcome to Srinagar, the beautiful gateway to Kashmir. Upon arrival at Srinagar International Airport, meet your driver and proceed towards your houseboat. Complete the check-in formalities and take some time to relax. In the evening, visit the iconic Dal Lake and enjoy a peaceful Shikara ride across the calm waters. Experience the beautiful Himalayan surroundings, floating gardens and traditional Kashmiri lifestyle before returning for an overnight stay.", meals: "Dinner", overnight: "Dal Lake Houseboat" },
      { day: 2, title: "Srinagar to Gulmarg | Gulmarg Sightseeing & Gondola Ride", description: "After breakfast, check out and drive towards Gulmarg, one of Kashmir's most popular hill stations. Enjoy a scenic journey through beautiful mountain landscapes. Upon arrival, explore the famous Gulmarg meadows and visit the Gulmarg Golf Course. Later, enjoy the spectacular Gulmarg Gondola cable car ride, at own cost and subject to weather and operational conditions. You may also explore Strawberry Valley and Drung Waterfall, subject to local conditions. Spend the evening relaxing amidst the peaceful Himalayan surroundings. Overnight stay in Gulmarg.", meals: "Breakfast & Dinner", overnight: "Gulmarg" },
      { day: 3, title: "Gulmarg to Srinagar | Mughal Gardens & Local Sightseeing", description: "After breakfast, check out from the Gulmarg hotel and drive back to Srinagar. On arrival, begin a sightseeing tour of the city and explore the famous Mughal Gardens. Visit Chashme Shahi, Nishat Bagh and Shalimar Bagh, known for their beautiful terraced gardens, fountains and views of Dal Lake. Continue to Pari Mahal for panoramic views of Srinagar. Later, return to your houseboat and spend the evening at leisure. You can explore the local market and shop for Kashmiri handicrafts, dry fruits, saffron and souvenirs. Overnight stay on your houseboat.", meals: "Breakfast & Dinner", overnight: "Dal Lake Houseboat" },
      { day: 4, title: "Departure from Srinagar | Trip Ends", description: "Enjoy your final breakfast in Kashmir and check out. Depending on your departure schedule, you may have some free time for last-minute shopping or a short local visit. Later, your private vehicle will transfer you to Srinagar International Airport for your onward journey. Depart with beautiful memories of Dal Lake, the Gulmarg mountains and your memorable family holiday in Kashmir.", meals: "Breakfast", overnight: "—" },
    ],
    hotels: [
      { name: "Luxury Dal Lake Houseboat", stars: 4, type: "Premium Houseboat", amenities: ["Lake View", "Shikara", "Traditional Décor", "All Meals"] },
      { name: "Gulmarg Mountain Resort", stars: 3, type: "Mountain Hotel", amenities: ["Snow View", "WiFi", "Restaurant", "Fireplace"] },
    ],
    transferInfo: "Private cab for all Srinagar and Gulmarg transfers and sightseeing. Shikara included for Dal Lake rides.",
    policies: [
      { title: "Terms & Conditions", content: "30% advance required. Kashmir trips may be subject to weather conditions and government advisories; Gulmarg Gondola operations are subject to weather conditions." },
      { title: "Cancellation & Refund Policy", content: "30+ days: Full refund less processing. Under 7 days: No refund." },
      { title: "Instant Confirmation & Payment Window", content: "Confirmation within 2 hours. Balance due 15 days before." },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#F59E0B",
  },
  {
    id: "romantic-escape-kashmir",
    destination: "kashmir",
    title: "Romantic Escape to Kashmir",
    subtitle: "A relaxed 4-day couple getaway covering Srinagar and Gulmarg with scenic valleys, a Dal Lake Shikara ride and optional Gondola experience",
    route: "Srinagar → Gulmarg → Srinagar",
    nights: "3N",
    days: "4D",
    badge: "Best Seller",
    badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "❤️ Romantic Getaway",
    tagColor: "text-rose-600 bg-rose-50 border-rose-200",
    discount: "20% OFF",
    rating: 4.9,
    reviews: 534,
    price: "Price on Request",
    category: "family",
    image:
      "/images/packagesimages/romantic.webp",
    overview:
      "A relaxed 4-day romantic getaway to Kashmir covering the serene beauty of Srinagar and the snow-capped meadows of Gulmarg. Enjoy a peaceful Shikara ride on Dal Lake, explore Srinagar's famous Mughal Gardens and spend a memorable evening in the mountains of Gulmarg. With comfortable stays, private transfers and a flexible pace, this package is designed for couples looking for a short and scenic Kashmir escape.",
    highlights: [
      "Romantic Shikara Ride on Dal Lake",
      "Srinagar Mughal Gardens & Scenic Sightseeing",
      "Gulmarg Meadows & Famous Golf Course",
      "Optional Gulmarg Gondola Ride to Apharwat Peak",
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "2 Nights accommodation in Srinagar",
      "1 Night accommodation in Gulmarg",
      "Daily Breakfast & Dinner",
      "Private cab for transfers and sightseeing",
      "Shikara ride on Dal Lake",
      "Srinagar Mughal Gardens sightseeing",
      "Gulmarg sightseeing as per itinerary",
    ],
    excluded: [
      "Flights to/from Srinagar",
      "Gulmarg Gondola tickets",
      "Personal expenses",
      "Lunch",
      "Travel insurance",
      "Any activity not mentioned in the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar | Mughal Gardens & Shikara Ride",
        description:
          "Arrive at Srinagar Airport and meet your private driver. Transfer to your accommodation and relax before exploring Srinagar. Visit the beautiful Mughal Gardens including Nishat Bagh and Shalimar Bagh, followed by a visit to Pari Mahal. In the evening, enjoy a peaceful Shikara ride on Dal Lake and experience the romantic beauty of Kashmir at sunset. Overnight stay in Srinagar.",
        meals: "Dinner",
        overnight: "Srinagar",
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg | Meadows & Gondola Experience",
        description:
          "After breakfast, drive from Srinagar to Gulmarg, one of Kashmir's most scenic mountain destinations. On arrival, explore the beautiful Gulmarg meadows and visit the famous Gulmarg Golf Course. You can also enjoy the Gondola cable car ride to the higher reaches of Gulmarg, subject to weather and operational conditions. Spend the evening relaxing amidst the mountains. Overnight stay in Gulmarg.",
        meals: "Breakfast & Dinner",
        overnight: "Gulmarg",
      },
      {
        day: 3,
        title: "Gulmarg to Srinagar | Scenic Drive & Leisure Evening",
        description:
          "After breakfast, check out from your Gulmarg hotel and drive back to Srinagar. Enjoy the scenic mountain and valley views along the way. After check-in, keep the evening free for a relaxed couple experience. Take a peaceful walk around Dal Lake, explore the local markets or shop for Kashmiri handicrafts, saffron and dry fruits. Overnight stay in Srinagar.",
        meals: "Breakfast & Dinner",
        overnight: "Srinagar",
      },
      {
        day: 4,
        title: "Srinagar Departure | Trip Ends",
        description:
          "Enjoy breakfast and check out from your accommodation. Depending on your flight schedule, you may have some free time for shopping or a short local visit. Later, your private vehicle will transfer you to Srinagar Airport for your onward journey. Your romantic Kashmir escape ends with beautiful memories of Dal Lake, Srinagar and Gulmarg.",
        meals: "Breakfast",
        overnight: "—",
      },
    ],
    hotels: [
      {
        name: "Luxury Dal Lake Houseboat",
        stars: 4,
        type: "Premium Houseboat",
        amenities: [
          "Lake View",
          "Traditional Décor",
          "Private Room",
          "Breakfast & Dinner",
        ],
      },
      {
        name: "Gulmarg Mountain Resort",
        stars: 3,
        type: "Mountain Hotel",
        amenities: [
          "Mountain View",
          "WiFi",
          "Restaurant",
          "Comfortable Rooms",
        ],
      },
    ],
    transferInfo:
      "Private cab for all Srinagar and Gulmarg transfers and sightseeing. Shikara ride on Dal Lake is included as per itinerary.",
    policies: [
      {
        title: "Terms & Conditions",
        content:
          "30% advance required to confirm the booking. Kashmir travel and Gulmarg Gondola operations are subject to weather conditions and local operational advisories. The itinerary may be adjusted for safety or operational reasons.",
      },
      {
        title: "Cancellation & Refund Policy",
        content:
          "30+ days before departure: Full refund less applicable processing charges. 15–30 days: 50% refund. 7–15 days: 25% refund. Under 7 days: No refund.",
      },
      {
        title: "Payment Policy",
        content:
          "Booking confirmation is provided after the advance payment. Remaining balance is payable 15 days before departure.",
      },
    ],
    primaryColor: "#FF8C00",
    accentColor: "#F59E0B",
  },


  // ─── KERALA ────────────────────────────────────────────────────────────────
  {
    id: "kerala-backwaters-tour",
    destination: "kerala",
    title: "Kerala Hills, Backwaters & Beach Escape",
    subtitle: "A scenic Kerala journey through misty hills, peaceful backwaters and golden beaches",
    route: "Kochi → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum",
    nights: "6N", days: "7D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 678,
    price: "Price on Request", category: "all",
    image: "/images/packagesimages/keralahero.webp",
    overview: "Experience the best of Kerala in 7 days with a perfect blend of hill stations, wildlife, backwaters and beaches. Explore the tea gardens of Munnar, enjoy the spice plantations and wildlife of Thekkady, cruise through the serene backwaters of Alleppey on a private houseboat, relax on the beaches of Kovalam and conclude your journey in Trivandrum.",
    highlights: [
      "Stay on a private luxury houseboat in Alleppey with scenic backwater views",
      "Explore Munnar tea gardens, Mattupetty Dam, Echo Point and Eravikulam National Park",
      "Visit Thekkady spice plantations and enjoy Periyar Lake boating",
      "Enjoy a relaxing beach stay at Kovalam",
      "Private AC cab for transfers and sightseeing throughout the tour"
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "1 Night private luxury houseboat stay in Alleppey",
      "5 Nights hotel accommodation",
      "Daily breakfast and dinner",
      "Private AC cab for all transfers and sightseeing",
      "Munnar sightseeing including tea gardens, Mattupetty Dam and Echo Point",
      "Eravikulam National Park visit",
      "Thekkady spice plantation visit",
      "Periyar Lake boating",
      "Kovalam beach sightseeing",
      "All applicable hotel and vehicle charges"
    ],
    excluded: [
      "Flights or train tickets to Kochi and from Trivandrum",
      "Personal expenses such as shopping, laundry and telephone calls",
      "Ayurvedic treatments and spa services",
      "Travel insurance",
      "Entry fees and activities not specifically mentioned in the itinerary"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi & Transfer to Munnar",
        description: "Arrive at Kochi Airport or Railway Station and meet your driver. Begin your scenic journey to Munnar through the lush Western Ghats. En route, enjoy views of Cheeyappara and Valara Waterfalls. On arrival, check in to your hotel and relax.",
        meals: "Dinner",
        overnight: "Munnar"
      },
      {
        day: 2,
        title: "Munnar Sightseeing – Tea Gardens & Eravikulam National Park",
        description: "After breakfast, visit Eravikulam National Park and explore its beautiful mountain landscapes. Continue to the Tea Museum, tea plantations, Mattupetty Dam, Echo Point and Kundala Lake. Return to the hotel and enjoy a relaxing evening.",
        meals: "Breakfast & Dinner",
        overnight: "Munnar"
      },
      {
        day: 3,
        title: "Munnar to Thekkady – Spice Plantation & Wildlife",
        description: "After breakfast, drive from Munnar to Thekkady through scenic forest and mountain roads. On arrival, visit a spice plantation and learn about cardamom, pepper, cinnamon and other local spices. Later, enjoy boating on Periyar Lake and explore the surroundings of Periyar Wildlife Sanctuary.",
        meals: "Breakfast & Dinner",
        overnight: "Thekkady"
      },
      {
        day: 4,
        title: "Thekkady to Alleppey – Luxury Houseboat Experience",
        description: "After breakfast, proceed to Alleppey, the heart of Kerala's famous backwaters. Board your private luxury houseboat and cruise through peaceful canals, paddy fields and coconut groves. Enjoy the changing scenery and freshly prepared Kerala-style meals on board.",
        meals: "Breakfast & Dinner",
        overnight: "Alleppey Houseboat"
      },
      {
        day: 5,
        title: "Alleppey to Kovalam – Beachside Relaxation",
        description: "Enjoy breakfast on the houseboat before check-out. Drive towards Kovalam, one of Kerala's most popular beach destinations. On arrival, check in to your hotel and spend the evening relaxing by the beach or exploring the local surroundings.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 6,
        title: "Kovalam Sightseeing & Leisure",
        description: "After breakfast, enjoy a relaxed day in Kovalam. Visit Lighthouse Beach, Hawa Beach and Samudra Beach, or spend time relaxing by the Arabian Sea. The evening is free for shopping and leisure activities.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 7,
        title: "Kovalam to Trivandrum Departure",
        description: "After breakfast, check out from the hotel and drive to Trivandrum. Based on your departure schedule, you may enjoy a short city visit before being transferred to Trivandrum Airport or Railway Station for your onward journey.",
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    hotels: [
      {
        name: "Munnar Tea County Resort",
        stars: 3,
        type: "Plantation Resort",
        amenities: ["Tea Garden View", "WiFi", "Restaurant", "Trekking"]
      },
      {
        name: "Thekkady Spice Garden Resort",
        stars: 3,
        type: "Nature Resort",
        amenities: ["Garden View", "Restaurant", "WiFi", "Nature Walk"]
      },
      {
        name: "Alleppey Houseboat Premium",
        stars: 4,
        type: "Luxury Houseboat",
        amenities: ["Backwater View", "AC Bedroom", "Sun Deck", "All Meals"]
      },
      {
        name: "Kovalam Beach Resort",
        stars: 4,
        type: "Beach Resort",
        amenities: ["Beach Access", "Swimming Pool", "Restaurant", "Sea View"]
      }
    ],
    transferInfo: "Private AC cab with an experienced driver for all Kerala transfers and sightseeing. Houseboat transfers arranged locally.",
    policies: [
      {
        title: "Terms & Conditions",
        content: "30% advance payment is required to confirm the booking. The remaining balance must be paid as per the booking schedule."
      },
      {
        title: "Cancellation & Refund Policy",
        content: "Cancellation charges will depend on the cancellation date and the applicable hotel, transport and houseboat policies."
      },
      {
        title: "Instant Confirmation & Payment Window",
        content: "Booking confirmation is shared within 2 hours after payment confirmation via email or WhatsApp."
      }
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    id: "kerala-adventure-tour-package",
    destination: "kerala",
    title: "Kerala Adventure Tour Package",
    subtitle: "A scenic Kerala adventure through misty hills, wildlife, backwaters and golden beaches",
    route: "Kochi → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum",
    nights: "6N", days: "7D",
    badge: "Best Seller", badgeGrad: "from-[#FF8C00] to-[#F59E0B]",
    tag: "⭐ Best Value", tagColor: "text-amber-600 bg-amber-50 border-amber-200",
    discount: "20% OFF", rating: 4.9, reviews: 678,
    price: "Price on Request", category: "all",
    image: "/images/packagesimages/k2.webp",
    overview: "Experience an exciting Kerala journey combining hill stations, wildlife, spice plantations, backwaters and beaches. Explore the lush tea gardens of Munnar, discover the wildlife and spices of Thekkady, cruise through the serene backwaters of Alleppey on a private houseboat, relax at the beaches of Kovalam and enjoy the vibrant surroundings of Trivandrum.",
    highlights: [
      "Private luxury houseboat experience in Alleppey with scenic backwater views",
      "Munnar tea gardens, Eravikulam National Park, Mattupetty Dam and Echo Point",
      "Thekkady spice plantation visit and Periyar Lake boating",
      "Kathakali or Kalaripayattu cultural performance in Thekkady",
      "Kovalam beach experience with private AC transfers throughout the journey"
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "1 Night private luxury houseboat stay in Alleppey",
      "5 Nights hotel accommodation",
      "Daily breakfast and dinner",
      "Private AC cab for all transfers and sightseeing",
      "Munnar sightseeing including tea gardens, Tea Museum, Mattupetty Dam and Echo Point",
      "Eravikulam National Park visit",
      "Thekkady spice plantation visit",
      "Periyar Lake boating",
      "Kovalam beach sightseeing",
      "All applicable hotel and vehicle charges"
    ],
    excluded: [
      "Flights or train tickets to Kochi and from Trivandrum",
      "Personal expenses such as shopping, laundry and telephone calls",
      "Ayurvedic treatments and spa services",
      "Travel insurance",
      "Entry fees and activities not specifically mentioned in the itinerary"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin to Munnar – Waterfalls & Tea Trails",
        description: "Upon arrival in Cochin, begin your scenic drive to Munnar through the lush Western Ghats. En route, stop at the beautiful Cheeyappara and Valara Waterfalls and visit a spice plantation to experience Kerala’s famous aromas. On reaching Munnar, check into your hotel, visit the Tea Museum and enjoy a relaxed evening surrounded by tea gardens.",
        meals: "Dinner",
        overnight: "Munnar"
      },
      {
        day: 2,
        title: "Munnar Adventure – Wildlife, Lakes & Tea Gardens",
        description: "After breakfast, explore Eravikulam National Park, home to the endangered Nilgiri Tahr. Continue to Mattupetty Dam and Echo Point for scenic views and boating opportunities. Visit the Tea Museum and surrounding tea plantations to learn about Kerala’s tea-making heritage. Later, explore Kundala Lake and Blossom Park before returning to the hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Munnar"
      },
      {
        day: 3,
        title: "Munnar to Thekkady – Wildlife & Spice Trails",
        description: "After breakfast, drive to Thekkady through scenic mountain roads. Visit the Periyar Wildlife Sanctuary and enjoy a boat safari on Periyar Lake, where you may spot elephants and other wildlife. Explore a spice plantation featuring cardamom, pepper and cinnamon. In the evening, enjoy a traditional Kathakali or Kalaripayattu cultural performance.",
        meals: "Breakfast & Dinner",
        overnight: "Thekkady"
      },
      {
        day: 4,
        title: "Thekkady to Alleppey – Luxury Houseboat Cruise",
        description: "After breakfast, depart for Alleppey, the heart of Kerala’s famous backwaters. Board your private luxury houseboat and cruise through peaceful canals, paddy fields and coconut groves. Relax on deck while enjoying the changing scenery and authentic Kerala cuisine prepared on board.",
        meals: "Breakfast & Dinner",
        overnight: "Alleppey Houseboat"
      },
      {
        day: 5,
        title: "Alleppey to Kovalam – Backwaters to Beaches",
        description: "Enjoy breakfast on the houseboat before check-out and continue your journey towards Kovalam. On arrival, check into your beach resort and spend the evening relaxing at the seaside. Explore Lighthouse Beach or Hawa Beach and enjoy the coastal atmosphere.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 6,
        title: "Kovalam Beach & Leisure Day",
        description: "After breakfast, enjoy a relaxed day exploring Kovalam. Visit Lighthouse Beach, Hawa Beach and Samudra Beach, or spend time enjoying the sea and resort facilities. The evening is free for leisure, local shopping and enjoying the sunset by the Arabian Sea.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 7,
        title: "Kovalam to Trivandrum Departure",
        description: "After breakfast, check out from the hotel and drive to Trivandrum. Depending on your departure schedule, you can enjoy a short city visit before being transferred to Trivandrum Airport or Railway Station for your onward journey, marking the end of your Kerala adventure.",
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    hotels: [
      {
        name: "Munnar Tea County Resort",
        stars: 3,
        type: "Plantation Resort",
        amenities: ["Tea Garden View", "WiFi", "Restaurant", "Trekking"]
      },
      {
        name: "Thekkady Spice Garden Resort",
        stars: 3,
        type: "Nature Resort",
        amenities: ["Garden View", "WiFi", "Restaurant", "Nature Walk"]
      },
      {
        name: "Alleppey Houseboat Premium",
        stars: 4,
        type: "Luxury Houseboat",
        amenities: ["Backwater View", "AC Bedroom", "Sun Deck", "All Meals"]
      },
      {
        name: "Kovalam Beach Resort",
        stars: 4,
        type: "Beach Resort",
        amenities: ["Beach Access", "Swimming Pool", "Restaurant", "Sea View"]
      }
    ],
    transferInfo: "Private AC cab with an experienced driver for all Kerala transfers and sightseeing. Houseboat boarding and local transfers arranged as per the itinerary.",
    policies: [
      {
        title: "Terms & Conditions",
        content: "30% advance payment is required to confirm the booking. The remaining balance must be paid as per the booking schedule."
      },
      {
        title: "Cancellation & Refund Policy",
        content: "Cancellation charges will depend on the cancellation date and the applicable hotel, transport and houseboat policies."
      },
      {
        title: "Instant Confirmation & Payment Window",
        content: "Booking confirmation is shared within 2 hours after payment confirmation via email or WhatsApp."
      }
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    id: "munnar-rolling-tea-hills-scenic-retreat",
    destination: "kerala",
    title: "Munnar & Vagamon Rolling Tea Hills Scenic Retreat",
    subtitle: "A refreshing escape through Kerala’s rolling tea estates, misty mountains and peaceful hill towns",
    route: "Kochi → Munnar → Vagamon → Thekkady → Kochi",
    nights: "5N", days: "6D",
    badge: "Scenic Escape", badgeGrad: "from-[#16A34A] to-[#15803D]",
    tag: "⭐ Hill Station Special", tagColor: "text-green-700 bg-green-50 border-green-200",
    discount: "15% OFF", rating: 4.8, reviews: 486,
    price: "Price on Request", category: "all",
    image: "/images/packagesimages/munnar.webp",
    overview: "Discover the tranquil beauty of Kerala’s highlands on a scenic 6-day journey through Munnar and Vagamon. Walk through endless tea plantations, explore mist-covered viewpoints and waterfalls, enjoy peaceful hill landscapes and experience the natural charm of Thekkady. This itinerary is designed for travelers looking for a relaxing mountain holiday filled with greenery, fresh air and memorable scenic experiences.",
    highlights: [
      "Panoramic tea estate experiences and rolling green hills in Munnar",
      "Eravikulam National Park, Mattupetty Dam, Echo Point and Kundala Lake",
      "Scenic drive through Kerala’s Western Ghats to the peaceful hill station of Vagamon",
      "Explore Vagamon Meadows, Pine Forest, viewpoints and tea plantations",
      "Thekkady spice plantation visit with optional Periyar Lake boating"
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "5 Nights hotel accommodation",
      "Daily breakfast and dinner",
      "Private AC cab for all transfers and sightseeing",
      "Munnar local sightseeing",
      "Eravikulam National Park visit",
      "Tea plantation and Tea Museum experience in Munnar",
      "Vagamon sightseeing",
      "Vagamon Pine Forest and meadows visit",
      "Thekkady spice plantation visit",
      "All applicable hotel and vehicle charges"
    ],
    excluded: [
      "Flights or train tickets to Kochi",
      "Personal expenses such as shopping, laundry and telephone calls",
      "Adventure activities and boating charges unless specifically mentioned",
      "Ayurvedic treatments and spa services",
      "Travel insurance",
      "Entry fees not specifically included in the package"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi to Munnar – Waterfalls, Spice Gardens & Tea Hills",
        description: "Arrive at Kochi Airport or Railway Station and meet your driver. Begin your scenic journey towards Munnar through the lush Western Ghats. Stop at the beautiful Cheeyappara and Valara Waterfalls and visit a local spice plantation. Continue to Munnar and check into your hotel. Spend the evening relaxing among the rolling tea-covered hills.",
        meals: "Dinner",
        overnight: "Munnar"
      },
      {
        day: 2,
        title: "Munnar – Tea Plantations, Lakes & Mountain Views",
        description: "After breakfast, explore the scenic attractions of Munnar. Visit Eravikulam National Park and enjoy views of the surrounding mountains and tea estates. Continue to Mattupetty Dam, Echo Point and Kundala Lake. Visit the Tea Museum to learn about the history and production of Kerala tea. Return to the hotel and enjoy a peaceful evening in the hills.",
        meals: "Breakfast & Dinner",
        overnight: "Munnar"
      },
      {
        day: 3,
        title: "Munnar to Vagamon – Rolling Hills & Misty Landscapes",
        description: "After breakfast, leave Munnar and drive towards Vagamon through picturesque mountain roads. Enjoy the changing landscape of tea plantations, forests and valleys along the way. On arrival, check into your hotel and explore the beautiful Vagamon hills. Visit Vagamon Meadows and enjoy the cool mountain climate and panoramic views.",
        meals: "Breakfast & Dinner",
        overnight: "Vagamon"
      },
      {
        day: 4,
        title: "Vagamon Sightseeing – Pine Forests, Tea Gardens & Viewpoints",
        description: "After breakfast, spend the day exploring Vagamon’s peaceful natural attractions. Visit the famous Pine Forest, lush green meadows and scenic viewpoints overlooking the surrounding valleys. Explore nearby tea plantations and enjoy leisurely walks through the rolling countryside. Return to your hotel for a relaxing evening surrounded by misty hills.",
        meals: "Breakfast & Dinner",
        overnight: "Vagamon"
      },
      {
        day: 5,
        title: "Vagamon to Thekkady – Spice Trails & Wildlife Surroundings",
        description: "After breakfast, drive to Thekkady through scenic forest and mountain roads. Visit a spice plantation and learn about cardamom, pepper, cinnamon and other local spices. Later, explore the surroundings of Periyar Wildlife Sanctuary. Guests may enjoy optional boating on Periyar Lake based on availability and ticket arrangements. Return to the hotel for a relaxed evening.",
        meals: "Breakfast & Dinner",
        overnight: "Thekkady"
      },
      {
        day: 6,
        title: "Thekkady to Kochi – Departure",
        description: "After breakfast, check out from the hotel and begin your return journey to Kochi. Enjoy the scenic drive through Kerala’s countryside and Western Ghats. Depending on your departure schedule, you may have time for a short stop in Kochi before being transferred to Kochi Airport or Railway Station for your onward journey.",
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    hotels: [
      {
        name: "Munnar Tea Valley Resort",
        stars: 3,
        type: "Tea Estate Resort",
        amenities: ["Tea Garden View", "WiFi", "Restaurant", "Nature Walk"]
      },
      {
        name: "Vagamon Hills Retreat",
        stars: 3,
        type: "Hill Resort",
        amenities: ["Mountain View", "Garden", "Restaurant", "Bonfire Area"]
      },
      {
        name: "Thekkady Nature Resort",
        stars: 3,
        type: "Nature Resort",
        amenities: ["Garden View", "WiFi", "Restaurant", "Spice Garden"]
      }
    ],
    transferInfo: "Private AC cab with an experienced driver for all transfers and sightseeing. Comfortable hill-road transfers between Kochi, Munnar, Vagamon and Thekkady.",
    policies: [
      {
        title: "Terms & Conditions",
        content: "30% advance payment is required to confirm the booking. The remaining balance must be paid according to the agreed booking schedule."
      },
      {
        title: "Cancellation & Refund Policy",
        content: "Cancellation charges depend on the cancellation date and the applicable hotel, transport and activity policies."
      },
      {
        title: "Instant Confirmation & Payment Window",
        content: "Booking confirmation is shared within 2 hours after payment confirmation via email or WhatsApp."
      }
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    id: "kerala-honeymoon-tour-package",
    destination: "kerala",
    title: "Kerala Honeymoon Sojourn | Hills, Backwaters & Golden Shores",
    subtitle: "A romantic Kerala escape through misty tea hills, serene backwaters, lush forests and golden beaches",
    route: "Kochi → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum",
    nights: "6N", days: "7D",
    badge: "Honeymoon Special", badgeGrad: "from-[#E11D48] to-[#BE123C]",
    tag: "💕 Romantic Escape", tagColor: "text-rose-600 bg-rose-50 border-rose-200",
    discount: "20% OFF", rating: 4.9, reviews: 592,
    price: "Price on Request", category: "all",
    image: "/images/packagesimages/kerala-honeymoon.webp",
    overview: "Celebrate your honeymoon with a romantic 7-day journey through Kerala’s most beautiful destinations. Begin among the misty tea plantations of Munnar, continue through the lush landscapes and spice gardens of Thekkady, enjoy a peaceful private houseboat cruise through Alleppey’s backwaters and relax together on the golden shores of Kovalam. Designed for couples seeking scenic beauty, peaceful stays and memorable experiences, this journey combines Kerala’s hills, forests, waterways and beaches.",
    highlights: [
      "Romantic stay amid the misty tea gardens and rolling hills of Munnar",
      "Scenic sightseeing through Munnar including tea estates, Mattupetty Dam and Echo Point",
      "Thekkady spice plantation experience surrounded by lush Western Ghats",
      "Private luxury houseboat cruise through the serene Alleppey backwaters",
      "Romantic beach evenings and leisure time at Kovalam"
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "6 Nights accommodation in selected hotels and private houseboat",
      "1 Night private luxury houseboat stay in Alleppey",
      "Daily breakfast and dinner",
      "Private AC cab for all transfers and sightseeing",
      "Munnar local sightseeing",
      "Tea plantation and Tea Museum experience",
      "Eravikulam National Park visit",
      "Thekkady spice plantation visit",
      "Periyar Lake boating subject to availability",
      "Alleppey backwater houseboat cruise",
      "Kovalam beach sightseeing",
      "All applicable hotel and vehicle charges"
    ],
    excluded: [
      "Flights or train tickets to Kochi and from Trivandrum",
      "Personal expenses such as shopping, laundry and telephone calls",
      "Adventure activities and boating charges unless specifically mentioned",
      "Ayurvedic treatments and spa services",
      "Travel insurance",
      "Entry fees not specifically included in the package",
      "Any romantic decoration or special celebration arrangements unless requested separately"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi to Munnar – Scenic Drive into the Hills",
        description: "Arrive at Kochi Airport or Railway Station and meet your private driver. Begin your romantic journey towards Munnar through the lush Western Ghats. En route, stop at Cheeyappara and Valara Waterfalls and visit a local spice plantation. Continue to Munnar and check into your hotel. Spend the evening relaxing together amidst the beautiful tea-covered hills.",
        meals: "Dinner",
        overnight: "Munnar"
      },
      {
        day: 2,
        title: "Munnar – Tea Gardens, Lakes & Romantic Mountain Views",
        description: "After breakfast, explore the scenic beauty of Munnar. Visit Eravikulam National Park and enjoy spectacular views of the surrounding mountains. Continue to Mattupetty Dam, Echo Point and Kundala Lake. Visit the Tea Museum and walk through the lush tea plantations. Return to your hotel and enjoy a peaceful evening surrounded by cool mountain air.",
        meals: "Breakfast & Dinner",
        overnight: "Munnar"
      },
      {
        day: 3,
        title: "Munnar to Thekkady – Spice Gardens & Forest Landscapes",
        description: "After breakfast, drive towards Thekkady through scenic mountain roads and lush forests. On arrival, visit a spice plantation and discover Kerala’s famous cardamom, pepper and cinnamon. Explore the surroundings of Periyar Wildlife Sanctuary and enjoy leisure time together in the peaceful natural setting of Thekkady.",
        meals: "Breakfast & Dinner",
        overnight: "Thekkady"
      },
      {
        day: 4,
        title: "Thekkady to Alleppey – Private Houseboat Romance",
        description: "After breakfast, depart for Alleppey, the heart of Kerala’s backwaters. Board your private luxury houseboat and begin a peaceful cruise through narrow canals, paddy fields and coconut groves. Relax on the deck while enjoying the tranquil scenery and freshly prepared Kerala cuisine. Watch the sunset together over the backwaters for a memorable honeymoon evening.",
        meals: "Breakfast & Dinner",
        overnight: "Alleppey Houseboat"
      },
      {
        day: 5,
        title: "Alleppey to Kovalam – Backwaters to Golden Beaches",
        description: "Enjoy breakfast on the houseboat before checking out and continuing towards Kovalam. On arrival, check into your beach resort and spend the afternoon relaxing. Visit Lighthouse Beach or Hawa Beach and enjoy a romantic sunset by the Arabian Sea.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 6,
        title: "Kovalam – Beach Leisure & Couple’s Day",
        description: "After breakfast, enjoy a relaxed day together in Kovalam. Explore Lighthouse Beach, Hawa Beach and Samudra Beach or simply unwind at your resort. Spend the evening enjoying the coastal atmosphere, watching the sunset and exploring local cafés or shops at your own pace.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 7,
        title: "Kovalam to Trivandrum – Honeymoon Departure",
        description: "After breakfast, check out from the hotel and drive to Trivandrum. Depending on your departure schedule, enjoy a short city visit or some leisure time before being transferred to Trivandrum Airport or Railway Station. Depart with beautiful memories of your Kerala honeymoon.",
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    hotels: [
      {
        name: "Munnar Romantic Tea Resort",
        stars: 4,
        type: "Hillside Resort",
        amenities: ["Tea Garden View", "Couple-Friendly", "Restaurant", "Nature Walk"]
      },
      {
        name: "Thekkady Spice Garden Resort",
        stars: 4,
        type: "Nature Resort",
        amenities: ["Garden View", "WiFi", "Restaurant", "Private Balcony"]
      },
      {
        name: "Alleppey Private Premium Houseboat",
        stars: 4,
        type: "Luxury Houseboat",
        amenities: ["Private Houseboat", "Backwater View", "AC Bedroom", "All Meals"]
      },
      {
        name: "Kovalam Beach Resort",
        stars: 4,
        type: "Beach Resort",
        amenities: ["Beach Access", "Sea View", "Swimming Pool", "Restaurant"]
      }
    ],
    transferInfo: "Private AC cab with an experienced driver for all transfers and sightseeing. Comfortable transfers between Kochi, Munnar, Thekkady, Alleppey, Kovalam and Trivandrum. Private houseboat experience included in Alleppey.",
    policies: [
      {
        title: "Terms & Conditions",
        content: "30% advance payment is required to confirm the booking. The remaining balance must be paid according to the agreed booking schedule."
      },
      {
        title: "Cancellation & Refund Policy",
        content: "Cancellation charges depend on the cancellation date and the applicable hotel, transport, houseboat and activity policies."
      },
      {
        title: "Instant Confirmation & Payment Window",
        content: "Booking confirmation is shared within 2 hours after payment confirmation via email or WhatsApp."
      }
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    id: "wayanad-wildlife-adventure",
    destination: "kerala",
    title: "Wayanad Wildlife & Ancient Tribal Trails Adventure",
    subtitle: "Explore misty mountains, dense forests, waterfalls and the rich tribal heritage of Wayanad",
    route: "Kochi → Wayanad → Tholpetty → Chembra → Edakkal → Kozhikode",
    nights: "5N", days: "6D",
    badge: "Adventure Special", badgeGrad: "from-[#15803D] to-[#166534]",
    tag: "🌿 Wildlife & Nature", tagColor: "text-green-700 bg-green-50 border-green-200",
    discount: "15% OFF", rating: 4.8, reviews: 428,
    price: "Price on Request", category: "all",
    image: "/images/packagesimages/reserve-forest.webp",
    overview: "Experience the wild and cultural side of Kerala with a 6-day Wayanad adventure covering misty mountains, wildlife sanctuaries, ancient caves, waterfalls, tribal heritage and lush spice plantations. From thrilling wildlife encounters in Tholpetty to the historic Edakkal Caves and scenic Chembra Hills, this itinerary combines nature, adventure and the traditional character of Wayanad.",
    highlights: [
      "Wildlife safari experience at Tholpetty Wildlife Sanctuary",
      "Explore the historic Edakkal Caves and ancient rock carvings",
      "Scenic Chembra Hills, tea plantations and mountain viewpoints",
      "Visit Wayanad waterfalls, forests and lush spice plantations",
      "Experience the traditional culture and tribal heritage of Wayanad"
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "5 Nights hotel accommodation",
      "Daily breakfast and dinner",
      "Private AC cab for all transfers and sightseeing",
      "Wayanad local sightseeing",
      "Tholpetty Wildlife Sanctuary safari subject to availability",
      "Edakkal Caves visit",
      "Chembra Hills sightseeing",
      "Wayanad waterfall visits",
      "Spice plantation visit",
      "All applicable hotel and vehicle charges"
    ],
    excluded: [
      "Flights or train tickets to Kochi and from Kozhikode",
      "Personal expenses such as shopping, laundry and telephone calls",
      "Wildlife safari charges and activity fees unless specifically mentioned",
      "Adventure activities and trekking permits",
      "Travel insurance",
      "Entry fees not specifically included in the package"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi to Wayanad – Scenic Drive into the Western Ghats",
        description: "Arrive at Kochi Airport or Railway Station and meet your private driver. Begin your journey towards Wayanad through the scenic landscapes of Kerala. Drive through lush forests, winding mountain roads and green valleys before reaching Wayanad. Check into your hotel and spend the evening relaxing in the peaceful surroundings.",
        meals: "Dinner",
        overnight: "Wayanad"
      },
      {
        day: 2,
        title: "Wayanad – Edakkal Caves, Heritage & Spice Trails",
        description: "After breakfast, begin your Wayanad exploration with a visit to the historic Edakkal Caves, known for their ancient rock carvings and fascinating archaeological significance. Continue to nearby viewpoints and tea plantations. Later, visit a local spice plantation to discover cardamom, pepper, coffee and other crops grown in the region. Return to the hotel for a relaxed evening.",
        meals: "Breakfast & Dinner",
        overnight: "Wayanad"
      },
      {
        day: 3,
        title: "Tholpetty Wildlife Safari – Forests & Wildlife Adventure",
        description: "Start the day with an early breakfast and proceed towards Tholpetty Wildlife Sanctuary. Enjoy a wildlife safari through the forest landscape where you may encounter elephants, deer, wild boar, gaur and a variety of bird species. After the safari, explore the surrounding forest region and enjoy the peaceful natural environment before returning to the hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Wayanad"
      },
      {
        day: 4,
        title: "Chembra Hills – Tea Estates, Meadows & Mountain Views",
        description: "After breakfast, head towards the Chembra Hills region. Enjoy scenic views of rolling green mountains, tea plantations and mist-covered valleys. Explore the meadows and surrounding viewpoints at your own pace. The area offers excellent opportunities for nature walks and photography. Return to the hotel in the evening.",
        meals: "Breakfast & Dinner",
        overnight: "Wayanad"
      },
      {
        day: 5,
        title: "Wayanad Waterfalls & Ancient Tribal Heritage",
        description: "After breakfast, explore the natural and cultural side of Wayanad. Visit a scenic waterfall and enjoy the surrounding forest landscape. Continue to villages and cultural areas where you can learn about the traditional lifestyle and tribal heritage of the region. Spend the evening relaxing at the hotel or exploring local markets.",
        meals: "Breakfast & Dinner",
        overnight: "Wayanad"
      },
      {
        day: 6,
        title: "Wayanad to Kozhikode – Departure",
        description: "After breakfast, check out from the hotel and begin your journey towards Kozhikode. Enjoy the scenic drive through Kerala’s countryside. Depending on your departure schedule, you may have time for a short stop in Kozhikode before being transferred to Kozhikode Airport or Railway Station for your onward journey.",
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    hotels: [
      {
        name: "Wayanad Forest View Resort",
        stars: 4,
        type: "Nature Resort",
        amenities: ["Forest View", "Swimming Pool", "Restaurant", "Nature Walk"]
      },
      {
        name: "Wayanad Hills Retreat",
        stars: 3,
        type: "Hill Resort",
        amenities: ["Mountain View", "Garden", "WiFi", "Campfire Area"]
      },
      {
        name: "Wayanad Heritage Resort",
        stars: 4,
        type: "Heritage Resort",
        amenities: ["Traditional Architecture", "Restaurant", "Garden", "Cultural Experience"]
      }
    ],
    transferInfo: "Private AC cab with an experienced driver for all transfers and sightseeing. Comfortable mountain-road transfers between Kochi, Wayanad and Kozhikode.",
    policies: [
      {
        title: "Terms & Conditions",
        content: "30% advance payment is required to confirm the booking. The remaining balance must be paid according to the agreed booking schedule."
      },
      {
        title: "Cancellation & Refund Policy",
        content: "Cancellation charges depend on the cancellation date and the applicable hotel, transport, wildlife and activity policies."
      },
      {
        title: "Instant Confirmation & Payment Window",
        content: "Booking confirmation is shared within 2 hours after payment confirmation via email or WhatsApp."
      }
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    id: "kerala-family-grand-tour",
    destination: "kerala",
    title: "Kerala Family Grand Tour | Beaches, Backwaters & Wildlife",
    subtitle: "A fun-filled Kerala family holiday covering beaches, backwaters, hill stations, wildlife and cultural experiences",
    route: "Kochi → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum",
    nights: "6N", days: "7D",
    badge: "Family Favourite", badgeGrad: "from-[#2563EB] to-[#1D4ED8]",
    tag: "👨‍👩‍👧‍👦 Family Special", tagColor: "text-blue-700 bg-blue-50 border-blue-200",
    discount: "15% OFF", rating: 4.8, reviews: 735,
    price: "Price on Request", category: "all",
    image: "/images/packagesimages/alleppey.webp",
    overview: "Enjoy a memorable 7-day family holiday through Kerala’s most loved destinations. Discover the cool tea-covered hills of Munnar, explore the wildlife and spice gardens of Thekkady, experience a traditional houseboat cruise through the peaceful backwaters of Alleppey and relax on the beautiful beaches of Kovalam. With comfortable transfers, family-friendly sightseeing and a balanced mix of nature, culture and leisure, this itinerary is designed for families travelling together.",
    highlights: [
      "Explore Munnar’s tea gardens, waterfalls, lakes and scenic mountain viewpoints",
      "Wildlife and spice plantation experience in Thekkady",
      "Enjoy a relaxing family-friendly houseboat cruise through Alleppey backwaters",
      "Spend quality family time at the beaches of Kovalam",
      "Private AC cab and comfortable accommodation throughout the journey"
    ],
    includes: ["stay", "meals", "car", "sightseeing"],
    included: [
      "6 Nights hotel and houseboat accommodation",
      "1 Night private houseboat stay in Alleppey",
      "Daily breakfast and dinner",
      "Private AC cab for all transfers and sightseeing",
      "Munnar local sightseeing",
      "Tea plantation and Tea Museum visit",
      "Eravikulam National Park visit",
      "Thekkady spice plantation visit",
      "Periyar Lake boating subject to availability",
      "Alleppy backwater houseboat cruise",
      "Kovalam beach sightseeing",
      "All applicable hotel and vehicle charges"
    ],
    excluded: [
      "Flights or train tickets to Kochi and from Trivandrum",
      "Personal expenses such as shopping, laundry and telephone calls",
      "Adventure activities and boating charges unless specifically mentioned",
      "Ayurvedic treatments and spa services",
      "Travel insurance",
      "Entry fees not specifically included in the package"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi to Munnar – Waterfalls & Tea Hills",
        description: "Arrive at Kochi Airport or Railway Station and meet your private driver. Begin your journey to Munnar through the scenic Western Ghats. Stop at Cheeyappara and Valara Waterfalls and enjoy the lush greenery along the route. Continue to Munnar, check into your family-friendly hotel and spend the evening relaxing in the pleasant hill climate.",
        meals: "Dinner",
        overnight: "Munnar"
      },
      {
        day: 2,
        title: "Munnar Family Sightseeing – Tea Gardens, Lakes & Wildlife",
        description: "After breakfast, visit Eravikulam National Park and enjoy views of the surrounding hills. Continue to Mattupetty Dam, Echo Point and Kundala Lake, where the family can enjoy the scenic surroundings and optional boating. Visit the Tea Museum and explore the famous tea plantations of Munnar before returning to the hotel.",
        meals: "Breakfast & Dinner",
        overnight: "Munnar"
      },
      {
        day: 3,
        title: "Munnar to Thekkady – Spice Plantation & Nature",
        description: "After breakfast, drive to Thekkady through beautiful mountain roads and forest landscapes. On arrival, visit a spice plantation and learn about cardamom, pepper, cinnamon and other crops. Explore the surroundings of Periyar Wildlife Sanctuary and enjoy leisure time with the family in the peaceful natural environment.",
        meals: "Breakfast & Dinner",
        overnight: "Thekkady"
      },
      {
        day: 4,
        title: "Thekkady to Alleppey – Family Houseboat Experience",
        description: "After breakfast, depart for Alleppey, the famous backwater destination of Kerala. Board your private houseboat and cruise through peaceful canals, paddy fields and coconut groves. Enjoy the scenic views and freshly prepared meals while spending quality time together on the backwaters. Relax and enjoy the sunset before an overnight stay on the houseboat.",
        meals: "Breakfast & Dinner",
        overnight: "Alleppey Houseboat"
      },
      {
        day: 5,
        title: "Alleppey to Kovalam – Backwaters to Beaches",
        description: "Enjoy breakfast on the houseboat before check-out and continue towards Kovalam. On arrival, check into your family-friendly beach resort. Spend the afternoon relaxing by the sea and enjoy a leisurely visit to Lighthouse Beach or Hawa Beach. The evening is free for family time and beachside relaxation.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 6,
        title: "Kovalam – Beach, Leisure & Family Fun",
        description: "After breakfast, enjoy a relaxed day in Kovalam. Visit Lighthouse Beach, Hawa Beach and Samudra Beach or spend the day enjoying the resort facilities. Families can use the free time for beach walks, local shopping, photography and enjoying the coastal atmosphere together.",
        meals: "Breakfast & Dinner",
        overnight: "Kovalam"
      },
      {
        day: 7,
        title: "Kovalam to Trivandrum – Departure",
        description: "After breakfast, check out from the hotel and drive to Trivandrum. Depending on your departure schedule, enjoy some free time or a short city visit before being transferred to Trivandrum Airport or Railway Station. Depart with wonderful memories of your Kerala family holiday.",
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    hotels: [
      {
        name: "Munnar Family Hills Resort",
        stars: 4,
        type: "Family Resort",
        amenities: ["Mountain View", "Family Rooms", "Restaurant", "Garden"]
      },
      {
        name: "Thekkady Nature Resort",
        stars: 4,
        type: "Nature Resort",
        amenities: ["Garden View", "Family Rooms", "Restaurant", "Nature Walk"]
      },
      {
        name: "Alleppey Premium Family Houseboat",
        stars: 4,
        type: "Luxury Houseboat",
        amenities: ["Backwater View", "AC Bedrooms", "Sun Deck", "All Meals"]
      },
      {
        name: "Kovalam Family Beach Resort",
        stars: 4,
        type: "Beach Resort",
        amenities: ["Beach Access", "Swimming Pool", "Family Rooms", "Restaurant"]
      }
    ],
    transferInfo: "Private AC cab with an experienced driver for all transfers and sightseeing. Comfortable transfers between Kochi, Munnar, Thekkady, Alleppey, Kovalam and Trivandrum. Private houseboat experience included in Alleppey.",
    policies: [
      {
        title: "Terms & Conditions",
        content: "30% advance payment is required to confirm the booking. The remaining balance must be paid according to the agreed booking schedule."
      },
      {
        title: "Cancellation & Refund Policy",
        content: "Cancellation charges depend on the cancellation date and the applicable hotel, transport, houseboat and activity policies."
      },
      {
        title: "Instant Confirmation & Payment Window",
        content: "Booking confirmation is shared within 2 hours after payment confirmation via email or WhatsApp."
      }
    ],
    primaryColor: "#FF8C00",
    accentColor: "#FF8C00",
  },
];

export function getPackageById(id: string): TourPackage | undefined {
  return allPackages.find((p) => p.id === id);
}

export function getDestinationLabel(dest: TourPackage["destination"]): string {
  const labels: Record<TourPackage["destination"], string> = {
    himachal: "Himachal Pradesh",
    spiti: "Spiti Valley",
    ladakh: "Ladakh",
    kashmir: "Kashmir",
    kerala: "Kerala",
  };
  return labels[dest];
}
