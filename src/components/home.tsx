import React from "react";
import HeroSection from "./home/HeroSection";
import ServicesOverview from "./home/ServicesOverview";
import BenefitsSection from "./home/BenefitsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import PortfolioPreview from "./home/PortfolioPreview";
import ProcessOverview from "./home/ProcessOverview";
import CtaSection from "./home/CtaSection";
import Navbar from "@/components/layout/Navbar"; // Import shared Navbar
import Footer from "@/components/layout/Footer"; // Import shared Footer

// Removed local Navbar and Footer component definitions

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main> {/* Removed pt-20 */}
        <HeroSection />
        <ServicesOverview />
        <BenefitsSection />
        <TestimonialsSection />
        <PortfolioPreview />
        <ProcessOverview />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
