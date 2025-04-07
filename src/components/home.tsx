import React from "react";
import HeroSection from "./home/HeroSection";
import ServicesOverview from "./home/ServicesOverview";
import BenefitsSection from "./home/BenefitsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import PortfolioPreview from "./home/PortfolioPreview";
import ProcessOverview from "./home/ProcessOverview";
import CtaSection from "./home/CtaSection";

interface NavbarProps {
  logo?: string;
  links?: Array<{ text: string; href: string }>;
  ctaText?: string;
  ctaHref?: string;
}

const Navbar = ({
  logo = "ArchViz Studio",
  links = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "How It Works", href: "/how-it-works" },
    { text: "Contact", href: "/contact" },
  ],
  ctaText = "Get a Quote",
  ctaHref = "/get-a-quote",
}: NavbarProps) => {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="/" className="text-2xl font-bold text-primary">
          {logo}
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <a
          href={ctaHref}
          className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </header>
  );
};

interface FooterProps {
  logo?: string;
  navigationLinks?: Array<{
    heading: string;
    links: Array<{ text: string; href: string }>;
  }>;
  contactInfo?: {
    address?: string;
    email?: string;
    phone?: string;
  };
  socialLinks?: Array<{ icon: string; href: string }>;
  copyright?: string;
}

const Footer = ({
  logo = "ArchViz Studio",
  navigationLinks = [
    {
      heading: "Services",
      links: [
        { text: "3D Exterior Rendering", href: "/services#exterior" },
        { text: "3D Interior Rendering", href: "/services#interior" },
        { text: "3D Floor Plans", href: "/services#floorplans" },
        { text: "3D Animations", href: "/services#animations" },
        { text: "Virtual Staging", href: "/services#staging" },
      ],
    },
    {
      heading: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Portfolio", href: "/portfolio" },
        { text: "How It Works", href: "/how-it-works" },
        { text: "Testimonials", href: "/#testimonials" },
        { text: "Contact", href: "/contact" },
      ],
    },
  ],
  contactInfo = {
    address: "123 Rendering Street, Design District, NY 10001",
    email: "info@archvizstudio.com",
    phone: "+1 (555) 123-4567",
  },
  socialLinks = [
    { icon: "Facebook", href: "https://facebook.com" },
    { icon: "Instagram", href: "https://instagram.com" },
    { icon: "LinkedIn", href: "https://linkedin.com" },
    { icon: "Pinterest", href: "https://pinterest.com" },
  ],
  copyright = "© 2023 ArchViz Studio. All rights reserved.",
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{logo}</h2>
            <address className="not-italic text-gray-400 mb-4">
              {contactInfo.address}
            </address>
            <p className="mb-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.heading}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest projects and news
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section with Social Links and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
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
