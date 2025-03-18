
import React from 'react';
import TestimonialCard from './TestimonialCard';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';

const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'Innovative Tech', logo: 'logo1.svg' },
    { name: 'Global Finance', logo: 'logo2.svg' },
    { name: 'Modern Retail', logo: 'logo3.svg' },
    { name: 'Creative Studios', logo: 'logo4.svg' },
    { name: 'Health Direct', logo: 'logo5.svg' },
  ];

  const testimonials = [
    {
      quote: "Factor completely transformed our digital strategy. Their expertise in SEO and content creation led to a 200% increase in our organic traffic within just 3 months.",
      author: "Sarah Johnson",
      company: "Innovative Tech"
    },
    {
      quote: "Their creative approach to our social media campaigns drove engagement levels we hadn't seen before. The Factor team feels like an extension of our own marketing department.",
      author: "David Chen",
      company: "Global Finance"
    },
    {
      quote: "The website Factor built for us perfectly balances aesthetics and performance. We've seen conversion rates improve by 40% since the launch.",
      author: "Michael Rodriguez",
      company: "Modern Retail"
    }
  ];

  const projects = [
    {
      title: "Ecommerce Redesign",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Brand Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Product Launch",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-factor-black to-factor-black-light">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-factor-red/10 rounded-full text-factor-red text-sm font-medium mb-4">
              Our Work
            </span>
            <AnimatedText
              text="Success Stories & Case Studies"
              tag="h2"
              className="text-3xl md:text-4xl font-bold text-white mb-5"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how we've helped our clients achieve remarkable results through strategic digital solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="group relative h-80 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80">
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-factor-red/80 rounded-full text-white text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-factor-red/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-white mb-10 text-center">What Our Clients Say</h3>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 100}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Clients Logos */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
            {clients.map((client) => (
              <div 
                key={client.name} 
                className="w-32 h-16 bg-factor-black-light rounded-lg flex items-center justify-center px-4 py-2 border border-gray-800"
              >
                <span className="text-white font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientsSection;
