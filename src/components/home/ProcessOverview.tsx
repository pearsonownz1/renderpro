import React from "react";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  PenTool,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessOverviewProps {
  steps?: ProcessStep[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const ProcessOverview = ({
  steps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Initial Consultation",
      description: "Submit your project details and requirements for review.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Concept Development",
      description: "We discuss your vision and develop a concept plan.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Draft Rendering",
      description: "Receive initial drafts for your feedback and approval.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Final Delivery",
      description: "Get your high-quality final renderings ready for use.",
    },
  ],
  title = "Our Simple Process",
  subtitle = "How we transform your ideas into stunning visualizations",
  ctaText = "Learn More",
  ctaLink = "/how-it-works",
}: ProcessOverviewProps) => {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs mx-auto md:mx-0"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-full">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link to={ctaLink}>
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
