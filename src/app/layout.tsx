import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import LeadPopupModal from "@/app/components/LeadPopupModal";

export const metadata: Metadata = {
  title: "Highline himalayas",
  description: "Find accommodations, plan relaxing vacations and embark on exciting adventures around the world.",
  icons: {
    icon: "/images/highline-himalaya-logo.png",
    shortcut: "/images/highline-himalaya-logo.png",
    apple: "/images/highline-himalaya-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
        <Header />
        {children}
        <Footer />
        <LeadPopupModal />
      </body>
    </html>
  );
}
