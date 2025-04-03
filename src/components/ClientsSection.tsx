import React from "react";
import TestimonialCard from "./TestimonialCard";
import ScrollReveal from "./ScrollReveal";
import { TypingAnimation } from "../components/magicui/typing-animation";

const ClientsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Their creative approach to our social media campaigns drove engagement levels we hadn't seen before. The Factor team feels like an extension of our own marketing department.",
      author: "Lappy Sale",
      company: "Lappy Sale",
      link: "https://www.lappysale.com",
    },
    {
      quote:
        "Factor transformed our recruitment process with a sleek and highly functional website. Our candidate engagement has never been better!",
      author: "Talent21",
      company: "Talent21",
      link: "https://talent21llc.com ",
    },
    {
      quote:
        "Working with Factor was a game-changer for our consulting firm. Their web solutions have significantly enhanced our client interactions and credibility",
      author: "Multani Consulting ",
      company: "Multani Consulting ",
      link: "https://www.multaniconsulting.in",
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
                company={
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {testimonial.company}
                  </a>
                }
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
