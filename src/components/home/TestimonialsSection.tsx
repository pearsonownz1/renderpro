import React from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      quote:
        "The 3D renderings exceeded our expectations. The attention to detail and realistic lighting made our project come to life before construction even began.",
      author: "Sarah Johnson",
      company: "Johnson Architects",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      quote:
        "Working with this team was a seamless experience. They captured our vision perfectly and delivered the renderings ahead of schedule.",
      author: "Michael Chen",
      company: "Modern Homes Development",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      quote:
        "The virtual staging service transformed our empty property listings into beautifully furnished spaces that helped us sell 40% faster.",
      author: "Emily Rodriguez",
      company: "Elite Real Estate Group",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      quote:
        "Their 3D floor plans gave our clients a clear understanding of the spatial layout that 2D plans simply couldn't convey. An invaluable service.",
      author: "David Thompson",
      company: "Thompson Building Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
    {
      quote:
        "The animation walkthrough created for our commercial project was instrumental in securing investor funding. Professional quality and impressive detail.",
      author: "Jennifer Lee",
      company: "Innovative Commercial Properties",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    },
  ],
}: {
  testimonials?: TestimonialProps[];
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our architectural rendering services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Quote className="text-blue-500 w-10 h-10 mb-4" />
                      <p className="text-gray-700 mb-6 text-lg italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center flex-col">
                        {testimonial.image && (
                          <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.author} avatar`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold text-lg">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
