import React from 'react';
import { PenLine, Megaphone, BarChart2, Users, Video, Computer } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';

const Services: React.FC = () => {
  const services = [
    {
      icon: PenLine,
      title: 'Copywriting',
      description: 'Compelling content that drives engagement and conversions through strategic storytelling and brand messaging.',
      slug: 'copywriting'
    },
    {
      icon: Megaphone,
      title: 'Digital Ads',
      description: 'Data-driven advertising campaigns that target the right audience across search, social, and display platforms.',
      slug: 'digital-ads'
    },
    {
      icon: BarChart2,
      title: 'SEO',
      description: 'Technical optimization and content strategies that improve visibility and drive organic traffic to your website.',
      slug: 'seo'
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Strategic content creation and community management that builds brand presence and engagement.',
      slug: 'social-media'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and editing services that tell your brand story through compelling visual content.',
      slug: 'video-editing'
    },
    {
      icon: Computer,
      title: 'Website Development',
      description: 'Custom web solutions built with cutting-edge technology to deliver exceptional user experiences and results.',
      slug: 'web-development'
    }
  ];

  return (
    <section id="services" className="py-24 bg-factor-black">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-factor-red/10 rounded-full text-factor-red text-sm font-medium mb-4">
              Our Services
            </span>
            <AnimatedText
              text="Comprehensive Digital Solutions"
              tag="h2"
              className="text-3xl md:text-4xl font-bold text-white mb-5"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide end-to-end digital services designed to elevate your brand, engage your audience, and drive measurable results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
