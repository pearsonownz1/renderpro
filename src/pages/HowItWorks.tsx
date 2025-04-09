import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, ScanSearch, PencilRuler, Image, CheckSquare, Send } from 'lucide-react'; // Icons for steps

const processSteps = [
  {
    step: 1,
    title: "Submit Your Project Details",
    description: "Provide us with your project files (CAD drawings, sketches, mood boards) and requirements through our 'Get a Quote' form or email.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Consultation & Quote",
    description: "We'll review your materials, discuss the project scope, clarify details, and provide a detailed quote and timeline.",
    icon: ScanSearch,
  },
  {
    step: 3,
    title: "3D Modeling & Texturing",
    description: "Our artists create the 3D model based on your plans, applying realistic textures and materials.",
    icon: PencilRuler,
  },
  {
    step: 4,
    title: "Draft Renderings & Revisions",
    description: "We'll send draft renderings for your review. You provide feedback, and we make necessary adjustments (typically includes 1-2 rounds of revisions).",
    icon: Image,
  },
  {
    step: 5,
    title: "Final Rendering & Post-Production",
    description: "Once approved, we produce the high-resolution final renderings, adding post-production touches for maximum impact.",
    icon: CheckSquare,
  },
  {
    step: 6,
    title: "Delivery",
    description: "We deliver the final high-quality images or animations in your desired format.",
    icon: Send,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Helmet>
        <title>How It Works | RenderPro 3D Rendering Process</title>
        <meta name="description" content="Learn about RenderPro's simple, step-by-step process for creating stunning 3D architectural visualizations, from consultation to final delivery." />
      </Helmet>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our streamlined process ensures a smooth collaboration and delivers exceptional results. Here's a step-by-step overview of how we bring your vision to life.
        </p>
      </div>

      <div className="relative pl-8 md:pl-0">
        {/* Vertical line for timeline effect on larger screens */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

        {processSteps.map((item, index) => (
          <div key={item.step} className="mb-12 md:mb-16 relative">
            <div className="md:flex items-center md:justify-center">
              {/* Icon Circle */}
              <div className={`absolute left-4 md:left-1/2 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground -translate-x-1/2 z-10`}>
                <item.icon className="h-5 w-5" />
              </div>

              {/* Content Card */}
              <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:ml-[calc(50%+2rem)]' : 'md:mr-[calc(50%+2rem)] md:text-right'}`}>
                <CardHeader className={`${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                  <CardDescription className="text-primary font-semibold">Step {item.step}</CardDescription>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
