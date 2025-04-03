import React from "react";
import ScrollReveal from "./ScrollReveal";
import { TypingAnimation } from "../components/magicui/typing-animation";

const HowWeWork = () => {
  const steps = [
    {
      step: "1. Discovery",
      description:
        "We dive deep into your vision, goals, and requirements to lay a strong foundation.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Discovery-related image
    },
    {
      step: "2. Planning & Design",
      description:
        "Our team crafts wireframes and designs tailored to your brand and audience.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Design-related image
    },
    {
      step: "3. Development",
      description:
        "We bring your project to life with clean, efficient, and scalable code.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Development-related image
    },
    {
      step: "4. Launch & Support",
      description:
        "We deploy your site and provide ongoing support to ensure success.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Launch-related image
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-factor-black">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-factor-red/10 rounded-full text-factor-red text-sm font-medium mb-4">
              Our Process
            </span>
            <TypingAnimation className="text-3xl md:text-4xl font-bold text-white mb-5">
              How We Work
            </TypingAnimation>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A seamless process designed to turn your ideas into reality with
              precision and creativity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 100}>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={step.image}
                    alt={step.step}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-factor-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white">{step.step}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
