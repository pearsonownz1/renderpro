import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, Award, Zap, HeartHandshake } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description = "" }: BenefitProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: BenefitProps[];
}

const BenefitsSection = ({
  title = "Why Choose Our Rendering Services",
  subtitle = "We deliver exceptional quality with a client-focused approach",
  benefits = [
    {
      icon: <CheckCircle size={48} />,
      title: "Exceptional Quality",
      description:
        "Ultra-realistic renderings that showcase your designs with stunning detail and accuracy.",
    },
    {
      icon: <Clock size={48} />,
      title: "Fast Turnaround",
      description:
        "Quick delivery times without compromising on quality, meeting your project deadlines.",
    },
    {
      icon: <Award size={48} />,
      title: "Industry Expertise",
      description:
        "Our team of specialists has years of experience in architectural visualization.",
    },
    {
      icon: <Zap size={48} />,
      title: "Unlimited Revisions",
      description:
        "We work with you until you're completely satisfied with the final result.",
    },
    {
      icon: <HeartHandshake size={48} />,
      title: "Dedicated Support",
      description:
        "Personalized service and communication throughout your entire project.",
    },
  ],
}: BenefitsSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
