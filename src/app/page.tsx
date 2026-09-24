import React from "react";
import Hero from "@/app/components/Hero";
import NearestStarts from "@/app/components/NearestStarts";
import WhyUs from "@/app/components/WhyUs";
import CuratedShowcase from "@/app/components/CuratedShowcase";
import FeaturedTrips from "@/app/components/FeaturedTrips";
import TravelDeals from "@/app/components/TravelDeals";
import TopSights from "@/app/components/TopSights";
import ThingsToDo from "@/app/components/ThingsToDo";
import ExploreInMotion from "@/app/components/ExploreInMotion";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import WhyTravelersTrust from "@/app/components/WhyTravelersTrust";
import SideFloatingTabs from "@/app/components/SideFloatingTabs";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      {/* <WhyTravelersTrust/> */}
      <NearestStarts />
      <WhyUs />
      {/* <CuratedShowcase /> */}
      <FeaturedTrips />
      <TravelDeals />
      <TopSights />
      <ThingsToDo />
      <ExploreInMotion />
      <TestimonialsSection/>
      <SideFloatingTabs />
    </main>
  );
}
