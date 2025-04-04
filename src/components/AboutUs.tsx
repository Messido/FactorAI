import React from "react";
import { TypingAnimation } from "../components/magicui/typing-animation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Users,
  Target,
  Rocket,
  Search,
  Code,
  Megaphone,
  Video,
  Share2,
} from "lucide-react";

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-factor-black">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-[#e30613]/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-[#e30613]/5 blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <div className="bg-[#e30613]/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in">
                <span className="text-sm font-medium text-white">
                  About Factor
                </span>
              </div>
              <div className="mb-4 text-6xl md:text-7xl font-bold text-white animate-fade-in">
                Factor
                <span
                  className="text-[#e30613] inline-block"
                  style={{ transformOrigin: "center" }}
                >
                  .
                </span>
              </div>



              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in animate-delay-500 pt-10">
                At Factor, we’re passionate about helping businesses succeed
                online with innovative digital solutions and creative strategies
                tailored to their goals. We transform your digital presence into
                a powerful tool for growth, using cutting-edge technology and
                thoughtful design to captivate audiences and deliver real
                results.
              </p>

              <a
                href="#contact"
                className="btn-primary px-8 py-3 text-lg animate-fade-in animate-delay-1000"
              >
                Get to Know Us
              </a>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-factor-black-light">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Founded with a vision to bridge the gap between creativity and
                technology, Factor has grown into a trusted partner for
                businesses worldwide. Our journey began with a simple idea: to
                create digital experiences that don’t just look good but also
                deliver measurable results. Today, we combine expertise in SEO,
                website development, digital ads, video editing, and social
                media management to help brands stand out in a crowded digital
                landscape.
              </p>
              <p className="text-lg text-gray-300">
                We’re a team of innovators, strategists, and creators united by
                a shared goal—making your success our priority.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-factor-black-light p-8 rounded-xl border border-gray-800 text-center">
                <Target size={40} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Strategic Solutions
                </h3>
                <p className="text-gray-400">
                  From SEO to digital ads, we craft strategies that hit your
                  business goals with precision.
                </p>
              </div>
              <div className="bg-factor-black-light p-8 rounded-xl border border-gray-800 text-center">
                <Users size={40} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-400">
                  Your vision drives us. We collaborate closely to bring your
                  ideas to life.
                </p>
              </div>
              <div className="bg-factor-black-light p-8 rounded-xl border border-gray-800 text-center">
                <Rocket size={40} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Innovative Growth
                </h3>
                <p className="text-gray-400">
                  We leverage cutting-edge tools and creativity to propel your
                  brand forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-20 bg-factor-black-light">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* SEO */}
              <div className="bg-factor-black p-6 rounded-xl border border-gray-800 text-center transition-transform transform hover:scale-105 hover:border-[#e30613] duration-300">
                <Search size={32} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">SEO</h3>
                <p className="text-sm text-gray-400">
                  Boosting your visibility on search engines with proven
                  strategies.
                </p>
              </div>

              {/* Website Development */}
              <div className="bg-factor-black p-6 rounded-xl border border-gray-800 text-center transition-transform transform hover:scale-105 hover:border-[#e30613] duration-300">
                <Code size={32} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Website Development
                </h3>
                <p className="text-sm text-gray-400">
                  Crafting responsive, high-performing websites tailored to your
                  needs.
                </p>
              </div>

              {/* Digital Ads */}
              <div className="bg-factor-black p-6 rounded-xl border border-gray-800 text-center transition-transform transform hover:scale-105 hover:border-[#e30613] duration-300">
                <Megaphone size={32} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Digital Ads
                </h3>
                <p className="text-sm text-gray-400">
                  Running targeted campaigns that maximize ROI.
                </p>
              </div>

              {/* Video Editing */}
              <div className="bg-factor-black p-6 rounded-xl border border-gray-800 text-center transition-transform transform hover:scale-105 hover:border-[#e30613] duration-300">
                <Video size={32} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Video Editing
                </h3>
                <p className="text-sm text-gray-400">
                  Producing engaging videos that captivate your audience.
                </p>
              </div>

              {/* Social Media Management */}
              <div className="bg-factor-black p-6 rounded-xl border border-gray-800 text-center transition-transform transform hover:scale-105 hover:border-[#e30613] duration-300">
                <Share2 size={32} className="text-[#e30613] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Social Media Management
                </h3>
                <p className="text-sm text-gray-400">
                  Building your brand’s presence with strategic content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-factor-black-light to-factor-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <TypingAnimation
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                text="Let’s Shape Your Digital Future Together"
              />
              <p className="text-lg text-gray-300 mb-8">
                Ready to elevate your brand? Contact us today to discover how
                Factor can help you achieve your goals.
              </p>
              <a href="#contact" className="btn-primary px-8 py-3 text-lg">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
