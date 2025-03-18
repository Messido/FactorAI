
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  PenLine, Megaphone, BarChart2, Users, Video, Computer,
  CheckCircle, ArrowLeft, Calendar, Users2, BarChart, Clock
} from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = {
  copywriting: {
    icon: PenLine,
    title: 'Copywriting',
    headline: 'Compelling Copywriting That Converts',
    description: 'Our expert copywriters craft compelling content that engages your audience and drives conversions through strategic storytelling and brand messaging.',
    overview: 'At Factor., we believe that powerful copy is the backbone of effective digital marketing. Our copywriting services are designed to capture your brand's voice and connect with your target audience in meaningful ways. From website copy to email campaigns, blog posts to social media content, we create messaging that resonates and drives action.',
    benefits: [
      'Increased engagement and conversion rates',
      'Consistent brand voice across all platforms',
      'SEO-optimized content that ranks well',
      'Compelling calls-to-action that drive results',
      'Content strategy aligned with business goals'
    ],
    process: [
      { title: 'Discovery', description: 'We learn about your brand, audience, and goals.' },
      { title: 'Strategy', description: 'We develop a content strategy tailored to your needs.' },
      { title: 'Creation', description: 'Our writers craft compelling copy that resonates.' },
      { title: 'Review', description: 'We collaborate with you to refine the messaging.' },
      { title: 'Delivery', description: 'Final copy is delivered ready for implementation.' }
    ],
    faqs: [
      { 
        question: 'What types of copywriting do you offer?', 
        answer: 'We offer website copy, email marketing, blog posts, social media content, ad copy, product descriptions, and more.' 
      },
      { 
        question: 'How do you ensure the copy matches our brand voice?', 
        answer: 'Our process includes an in-depth discovery phase where we learn your brand's unique voice and tone. We create detailed brand guidelines that inform all content creation.' 
      },
      { 
        question: 'How is SEO incorporated into the copywriting?', 
        answer: 'We conduct keyword research and strategically incorporate relevant terms into your content to improve search rankings while maintaining natural, engaging language.' 
      }
    ]
  },
  'digital-ads': {
    icon: Megaphone,
    title: 'Digital Ads',
    headline: 'Data-Driven Digital Advertising',
    description: 'We create and manage high-performing digital ad campaigns that target the right audience across search, social, and display platforms.',
    overview: 'Our digital advertising services help you reach potential customers at every stage of their journey. Using advanced targeting and optimization techniques, we ensure your ad budget is spent efficiently to maximize ROI. Our team stays current with the latest platform updates and advertising trends to give your campaigns a competitive edge.',
    benefits: [
      'Highly targeted campaigns that reach your ideal customers',
      'Detailed performance tracking and regular reporting',
      'Continuous optimization for improved results',
      'Cross-platform strategy for maximum visibility',
      'A/B testing to refine messaging and creative'
    ],
    process: [
      { title: 'Research', description: 'We analyze your audience and competition.' },
      { title: 'Strategy', description: 'We develop a comprehensive ad strategy.' },
      { title: 'Creation', description: 'We design compelling ad creative and copy.' },
      { title: 'Launch', description: 'We set up and launch optimized campaigns.' },
      { title: 'Optimize', description: 'We continuously monitor and improve performance.' }
    ],
    faqs: [
      { 
        question: 'Which ad platforms do you work with?', 
        answer: 'We manage campaigns across Google Ads, Facebook, Instagram, LinkedIn, Twitter, TikTok, and other relevant platforms based on your target audience.' 
      },
      { 
        question: 'How do you measure ad performance?', 
        answer: 'We track key metrics including impressions, clicks, conversions, cost per acquisition, and return on ad spend. We provide regular reports with actionable insights.' 
      },
      { 
        question: 'What's your approach to budget management?', 
        answer: 'We develop strategies that align with your budget and goals, continually optimizing to ensure efficient spending and maximum ROI.' 
      }
    ]
  },
  'seo': {
    icon: BarChart2,
    title: 'SEO',
    headline: 'Strategic SEO for Sustainable Growth',
    description: 'Our comprehensive SEO services improve your visibility in search results and drive qualified organic traffic to your website.',
    overview: 'Our SEO strategies are built on a foundation of technical excellence, content optimization, and authoritative link building. We focus on sustainable, white-hat techniques that improve your search rankings while building long-term domain authority. Our approach is data-driven, allowing us to identify opportunities and measure the impact of our work.',
    benefits: [
      'Increased organic traffic and visibility',
      'Higher rankings for targeted keywords',
      'Improved website architecture and user experience',
      'Comprehensive technical SEO optimization',
      'Content strategy aligned with search intent'
    ],
    process: [
      { title: 'Audit', description: 'We perform a comprehensive SEO audit of your site.' },
      { title: 'Research', description: 'We conduct keyword and competitor research.' },
      { title: 'Optimize', description: 'We implement on-page and technical SEO improvements.' },
      { title: 'Content', description: 'We develop and optimize strategic content.' },
      { title: 'Monitor', description: 'We track rankings and continuously improve.' }
    ],
    faqs: [
      { 
        question: 'How long does it take to see results from SEO?', 
        answer: 'SEO is a long-term strategy, typically taking 3-6 months to see significant results. However, we often achieve quick wins within the first few weeks through technical fixes and optimization.' 
      },
      { 
        question: 'How do you stay current with algorithm changes?', 
        answer: 'Our team continuously monitors industry news, participates in SEO communities, and tests strategies to ensure our approaches remain effective as search algorithms evolve.' 
      },
      { 
        question: 'Do you offer local SEO services?', 
        answer: 'Yes, we provide specialized local SEO services including Google Business Profile optimization, local citation building, and location-specific content strategies.' 
      }
    ]
  },
  'social-media': {
    icon: Users,
    title: 'Social Media Management',
    headline: 'Strategic Social Media Management',
    description: 'We build and manage your social media presence with strategic content creation, community engagement, and performance analysis.',
    overview: 'Our social media management services help brands build meaningful connections with their audience across relevant platforms. We develop platform-specific strategies that align with your business goals and audience preferences, creating content that educates, entertains, and engages. Our approach combines creative content with data-driven optimization to maximize reach and impact.',
    benefits: [
      'Consistent brand presence across social platforms',
      'Increased engagement and community growth',
      'Content tailored to each platform's unique audience',
      'Timely response to comments and messages',
      'Regular reporting on key performance metrics'
    ],
    process: [
      { title: 'Strategy', description: 'We develop a comprehensive social media strategy.' },
      { title: 'Planning', description: 'We create content calendars and posting schedules.' },
      { title: 'Creation', description: 'We produce platform-optimized content.' },
      { title: 'Management', description: 'We post content and engage with your audience.' },
      { title: 'Analysis', description: 'We track performance and optimize strategy.' }
    ],
    faqs: [
      { 
        question: 'Which social media platforms do you manage?', 
        answer: 'We work with all major platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and YouTube, focusing on those most relevant to your audience and goals.' 
      },
      { 
        question: 'How often do you post on social media?', 
        answer: 'Posting frequency depends on your strategy, audience, and platform. We typically recommend 3-5 posts per week on primary platforms, adjusted based on performance data and platform best practices.' 
      },
      { 
        question: 'Do you create the content or do we need to provide it?', 
        answer: 'Our team handles full content creation including copywriting, graphic design, and basic video production. We can also work with client-provided assets or collaborate with your team on content development.' 
      }
    ]
  },
  'video-editing': {
    icon: Video,
    title: 'Video Editing',
    headline: 'Professional Video Production & Editing',
    description: 'We create compelling video content that tells your brand story and drives engagement across digital platforms.',
    overview: 'Video is one of the most powerful mediums for digital communication. Our video production and editing services help brands create engaging visual content for marketing campaigns, social media, websites, and more. From concept to final edit, we focus on quality storytelling that resonates with your audience and achieves your marketing objectives.',
    benefits: [
      'Professional-quality video content for all platforms',
      'Storytelling that aligns with brand messaging',
      'Optimized formats for different distribution channels',
      'Enhanced audience engagement and retention',
      'Increased conversion rates through visual persuasion'
    ],
    process: [
      { title: 'Concept', description: 'We develop creative concepts and storyboards.' },
      { title: 'Pre-production', description: 'We plan and prepare for efficient filming.' },
      { title: 'Production', description: 'We capture high-quality footage and assets.' },
      { title: 'Editing', description: 'We craft the raw footage into polished videos.' },
      { title: 'Delivery', description: 'We provide optimized files for all platforms.' }
    ],
    faqs: [
      { 
        question: 'What types of video content do you create?', 
        answer: 'We produce a wide range of video content including brand videos, product demos, testimonials, social media clips, advertisements, explainer videos, event coverage, and more.' 
      },
      { 
        question: 'How long does video production typically take?', 
        answer: 'Timeline varies by project complexity. Simple editing projects may take 1-2 weeks, while full production videos typically require 3-6 weeks from concept to final delivery.' 
      },
      { 
        question: 'Do you provide on-location filming services?', 
        answer: 'Yes, we offer on-location filming services with professional equipment and experienced videographers. We can also work remotely with client-provided footage or stock video when appropriate.' 
      }
    ]
  },
  'web-development': {
    icon: Computer,
    title: 'Website Development',
    headline: 'Custom Website Development',
    description: 'We build high-performance, user-focused websites that deliver exceptional experiences and drive business results.',
    overview: 'Our web development team creates custom websites that combine striking design with seamless functionality. We build responsive, accessible, and optimized sites that perform well for both users and search engines. From simple landing pages to complex e-commerce platforms, we develop digital experiences that help businesses achieve their goals.',
    benefits: [
      'Custom designs tailored to your brand and objectives',
      'Responsive sites that work perfectly on all devices',
      'SEO-friendly architecture and optimized performance',
      'Intuitive user experience and navigation',
      'Secure, reliable, and scalable solutions'
    ],
    process: [
      { title: 'Planning', description: 'We define project goals, scope, and requirements.' },
      { title: 'Design', description: 'We create wireframes and visual designs.' },
      { title: 'Development', description: 'We build the site following best practices.' },
      { title: 'Testing', description: 'We ensure quality across devices and browsers.' },
      { title: 'Launch', description: 'We deploy and provide ongoing support.' }
    ],
    faqs: [
      { 
        question: 'What technologies do you use for web development?', 
        answer: 'We work with modern frameworks including React, Next.js, Vue, and WordPress. Our technology choices are guided by project requirements, focusing on performance, security, and maintainability.' 
      },
      { 
        question: 'Do you provide website maintenance after launch?', 
        answer: 'Yes, we offer ongoing maintenance and support packages to keep your site secure, updated, and performing optimally. This includes regular updates, security monitoring, and technical support.' 
      },
      { 
        question: 'Can you integrate third-party tools and APIs?', 
        answer: 'Absolutely. We regularly integrate CRMs, payment gateways, marketing automation tools, analytics platforms, and various APIs to create comprehensive solutions that connect with your broader tech stack.' 
      }
    ]
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug as keyof typeof services] : null;
  
  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }
  
  const ServiceIcon = service.icon;
  
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-factor-black">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <Link 
              to="/#services" 
              className="inline-flex items-center text-gray-400 hover:text-factor-red mb-10 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-factor-red/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 inline-block">
                  <span className="text-sm font-medium text-factor-red">Our Services</span>
                </div>
                
                <AnimatedText
                  text={service.headline}
                  tag="h1"
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                />
                
                <p className="text-lg text-gray-300 mb-8">
                  {service.description}
                </p>
                
                <a href="#contact" className="btn-primary px-8 py-3 inline-block">
                  Get Started
                </a>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-factor-red/20 rounded-full blur-2xl"></div>
                  <div className="relative bg-factor-black-light border border-gray-800 w-48 h-48 rounded-full flex items-center justify-center">
                    <ServiceIcon size={64} className="text-factor-red" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-20 bg-factor-black-light">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
                <p className="text-gray-300">
                  {service.overview}
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-factor-black p-8 rounded-xl border border-gray-800">
                  <Calendar size={32} className="text-factor-red mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Strategic Planning</h3>
                  <p className="text-gray-400">
                    We develop comprehensive strategies tailored to your unique business goals and audience needs.
                  </p>
                </div>
                
                <div className="bg-factor-black p-8 rounded-xl border border-gray-800">
                  <Users2 size={32} className="text-factor-red mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                  <p className="text-gray-400">
                    Our specialists bring years of experience and industry knowledge to every project.
                  </p>
                </div>
                
                <div className="bg-factor-black p-8 rounded-xl border border-gray-800">
                  <BarChart size={32} className="text-factor-red mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Data-Driven</h3>
                  <p className="text-gray-400">
                    We use analytics and performance data to continuously optimize and improve results.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* Benefits & Process Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="w-full max-w-md mx-auto flex justify-between mb-10 bg-factor-black-light border border-gray-800">
                <TabsTrigger 
                  value="benefits" 
                  className="flex-1 data-[state=active]:bg-factor-red data-[state=active]:text-white"
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger 
                  value="process" 
                  className="flex-1 data-[state=active]:bg-factor-red data-[state=active]:text-white"
                >
                  Our Process
                </TabsTrigger>
                <TabsTrigger 
                  value="faq" 
                  className="flex-1 data-[state=active]:bg-factor-red data-[state=active]:text-white"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="benefits" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                    <p className="text-gray-300 mb-8">
                      Our {service.title} services are designed to deliver measurable results and long-term value for your business.
                    </p>
                    <a href="#contact" className="btn-primary">Get Started</a>
                  </div>
                  
                  <div>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={20} className="text-factor-red mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Our {service.title} Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="bg-factor-black-light p-6 rounded-xl border border-gray-800 text-center">
                      <div className="w-12 h-12 rounded-full bg-factor-red flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
                <div className="max-w-3xl mx-auto space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="bg-factor-black-light p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-factor-black-light to-factor-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedText
                text={`Ready to elevate your ${service.title.toLowerCase()} strategy?`}
                tag="h2"
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              />
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.
              </p>
              <a href="#contact" className="btn-primary px-8 py-3 text-lg inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
