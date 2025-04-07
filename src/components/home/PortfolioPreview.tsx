import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "exterior" | "interior" | "floorplan" | "animation" | "staging";
  imageUrl: string;
  description: string;
}

interface PortfolioPreviewProps {
  items?: PortfolioItem[];
  title?: string;
  description?: string;
}

const PortfolioPreview = ({
  items = [
    {
      id: "1",
      title: "Modern Lakeside Villa",
      category: "exterior",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      description: "Contemporary exterior rendering with panoramic lake views",
    },
    {
      id: "2",
      title: "Minimalist Living Room",
      category: "interior",
      imageUrl:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      description: "Open concept living space with natural lighting",
    },
    {
      id: "3",
      title: "Urban Apartment Complex",
      category: "exterior",
      imageUrl:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      description: "Multi-unit residential building in downtown setting",
    },
    {
      id: "4",
      title: "Luxury Kitchen Design",
      category: "interior",
      imageUrl:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e8d?w=800&q=80",
      description:
        "High-end kitchen with marble countertops and custom cabinetry",
    },
    {
      id: "5",
      title: "Executive Office Layout",
      category: "floorplan",
      imageUrl:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      description: "Detailed floor plan for corporate headquarters",
    },
    {
      id: "6",
      title: "Beachfront Property Walkthrough",
      category: "animation",
      imageUrl:
        "https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&q=80",
      description: "Animated tour of oceanside luxury residence",
    },
  ],
  title = "Our Portfolio",
  description = "Browse our selection of high-quality architectural visualizations across various project types and styles.",
}: PortfolioPreviewProps) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-ratio-4/3 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span
                  className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-full mb-2 w-fit",
                    item.category === "exterior" && "bg-blue-500 text-white",
                    item.category === "interior" && "bg-green-500 text-white",
                    item.category === "floorplan" && "bg-purple-500 text-white",
                    item.category === "animation" && "bg-red-500 text-white",
                    item.category === "staging" && "bg-amber-500 text-white",
                  )}
                >
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{item.description}</p>
                <button className="mt-4 text-white flex items-center text-sm font-medium">
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="group" size="lg">
            View Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
