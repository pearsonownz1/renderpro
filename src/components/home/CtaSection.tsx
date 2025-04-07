import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const CtaSection = ({
  title = "Ready to Transform Your Architectural Designs?",
  subtitle = "Get photorealistic 3D renderings that bring your vision to life. Our team of experts is ready to help you impress your clients and win more projects.",
  buttonText = "Get a Quote",
  buttonLink = "/get-a-quote",
  backgroundImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
}: CtaSectionProps) => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>

          <p className="text-lg sm:text-xl opacity-90 mb-10 leading-relaxed">
            {subtitle}
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 h-auto text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href={buttonLink} className="inline-flex items-center gap-2">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/20 to-transparent z-0" />
    </section>
  );
};

export default CtaSection;
