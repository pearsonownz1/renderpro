import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Placeholder data for portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Modern Residential Villa",
    category: "Exterior Rendering",
    imageUrl: "https://picsum.photos/seed/project1/600/400", // Placeholder image
    description: "A stunning visualization of a contemporary home design.",
  },
  {
    id: 2,
    title: "Luxury Apartment Interior",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    description: "Detailed rendering showcasing the ambiance of a high-end living space.",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    category: "Interior Rendering",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    description: "Photorealistic view of a modern office layout and design.",
  },
  {
    id: 4,
    title: "Urban Development Complex",
    category: "Exterior Rendering",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    description: "Large-scale visualization of a multi-building urban project.",
  },
  {
    id: 5,
    title: "Interactive 3D Floor Plan",
    category: "3D Floor Plan",
    imageUrl: "https://picsum.photos/seed/project5/600/400",
    description: "Engaging top-down view with interactive elements.",
  },
  {
    id: 6,
    title: "Architectural Animation",
    category: "Animation",
    imageUrl: "https://picsum.photos/seed/project6/600/400", // Static image for animation placeholder
    description: "A dynamic fly-through showcasing a property's key features.",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
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
