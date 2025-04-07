import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Building2, Home, Layers, Play, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  href = "#",
}: ServiceCardProps) => {
  return (
    <Card className="bg-white h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="p-0 h-auto" asChild>
          <a
            href={href}
            className="flex items-center gap-2 text-primary font-medium"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const services = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "3D Exterior Rendering",
    description:
      "Photorealistic visualizations of building exteriors, showcasing architectural details, materials, and landscaping with stunning accuracy.",
    href: "/services#exterior",
  },
  {
    icon: <Sofa className="h-6 w-6" />,
    title: "3D Interior Rendering",
    description:
      "Lifelike interior visualizations that highlight spatial design, lighting, materials, and furnishings to bring indoor spaces to life.",
    href: "/services#interior",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "3D Floor Plans",
    description:
      "Detailed and clear floor plan visualizations that communicate spatial relationships, room layouts, and circulation paths.",
    href: "/services#floorplans",
  },
  {
    icon: <Play className="h-6 w-6" />,
    title: "3D Animations",
    description:
      "Dynamic walkthrough animations that provide immersive experiences of spaces, allowing viewers to explore designs from multiple perspectives.",
    href: "/services#animations",
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Virtual Staging",
    description:
      "Transform empty spaces into fully furnished environments, helping clients visualize the potential of properties with virtual furniture and decor.",
    href: "/services#staging",
  },
];

interface ServicesOverviewProps {
  className?: string;
}

const ServicesOverview = ({ className }: ServicesOverviewProps = {}) => {
  return (
    <section className={cn("py-20 bg-slate-50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Rendering Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of architectural visualization
            services to bring your designs to life with photorealistic quality
            and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
