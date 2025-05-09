import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Placeholder data for portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/livingroom1/600/400",
    description: "A stunning visualization of a contemporary living space.",
  },
  {
    id: 2,
    title: "Luxury Bedroom Suite",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/bedroom2/600/400",
    description: "Detailed rendering showcasing the ambiance of a high-end bedroom.",
  },
  {
    id: 3,
    title: "Minimalist Kitchen Design",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/kitchen3/600/400",
    description: "Photorealistic view of a sleek and modern kitchen layout.",
  },
  {
    id: 4,
    title: "Cozy Reading Nook",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/nook4/600/400",
    description: "Visualization capturing the warmth of a comfortable reading space.",
  },
  {
    id: 5,
    title: "Elegant Dining Area",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/dining5/600/400",
    description: "Rendering of a sophisticated dining room setup.",
  },
  {
    id: 6,
    title: "Spa-like Bathroom Retreat",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/bathroom6/600/400",
    description: "A visualization of a serene and luxurious bathroom design.",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Portfolio | RenderPro 3D Visualization Projects</title>
        <meta name="description" content="Browse RenderPro's portfolio of high-quality 3D architectural renderings, including interior and exterior visualizations." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a selection of our high-quality architectural visualizations, showcasing our expertise across various project types.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="aspect-w-3 aspect-h-2"> {/* Maintain aspect ratio */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
