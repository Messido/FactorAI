import React from "react";
import TestimonialCard from "./TestimonialCard";
import ScrollReveal from "./ScrollReveal";
import { TypingAnimation } from "../components/magicui/typing-animation";

const ClientsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Their creative approach to our social media campaigns drove engagement levels we hadn't seen before. The Factor team feels like an extension of our own marketing department.",
      author: "David Chen",
      company: "Global Finance",
    },
    {
      quote:
        "The website Factor built for us perfectly balances aesthetics and performance. We've seen conversion rates improve by 40% since the launch.",
      author: "Michael Rodriguez",
      company: "Modern Retail",
    },
    {
      quote:
        "The website Factor built for us perfectly balances aesthetics and performance. We've seen conversion rates improve by 40% since the launch.",
      author: "Michael Rodriguez",
      company: "Modern Retail",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 bg-gradient-to-b from-factor-black to-factor-black-light"
    >
      <div className="container mx-auto px-6">
        {/* Testimonials */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            What Our Clients Say
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 100}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                image={undefined}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
