import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react'; // Using lucide-react icons

const services = [
  {
    title: "Exterior Renderings",
    description: "High-quality visualizations of building exteriors, showcasing design, materials, and landscaping in realistic lighting.",
    features: [
      "Photorealistic lighting and shadows",
      "Detailed material representation",
      "Contextual environment integration",
      "Multiple camera angles",
    ],
    icon: "Building", // Placeholder for potential future icon mapping
  },
  {
    title: "Interior Renderings",
    description: "Bring interior designs to life with detailed renderings that highlight space, furniture, textures, and ambiance.",
    features: [
      "Accurate lighting simulation (natural & artificial)",
      "Realistic furniture and decor models",
      "Detailed texture and material mapping",
      "Atmospheric effects",
    ],
    icon: "Home",
  },
  {
    title: "3D Floor Plans",
    description: "Clear and engaging top-down views of property layouts, providing a better understanding of space and flow.",
    features: [
      "Furnished or unfurnished options",
      "Dimensionally accurate representation",
      "Clear room labeling",
      "Multiple style options",
    ],
    icon: "LayoutGrid",
  },
  {
    title: "Virtual Tours & Animations",
    description: "Immersive walkthroughs and fly-through animations that offer a dynamic perspective of the property.",
    features: [
      "Interactive 360° panoramas",
      "Smooth camera movements",
      "Background music and sound effects",
      "High-definition video output",
    ],
    icon: "Video",
  },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide a comprehensive range of 3D architectural visualization services to bring your projects to life with stunning realism.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              {/* Icon could go here */}
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
