import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
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
      <Helmet>
        <title>RenderPro | Professional 3D Rendering & Visualization Services</title>
        <meta name="description" content="RenderPro delivers high-quality 3D rendering and visualization solutions for architects, designers, and businesses. Bring your designs to life with stunning realism." />
      </Helmet>
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
