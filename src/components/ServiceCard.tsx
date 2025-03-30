
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, slug }) => {
  return (
    <div className="service-card bg-factor-black-light border border-gray-800 group hover:border-[#ff1a3e] transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#e30613] to-[#ff3a5c] flex items-center justify-center mb-5 transform transition-transform group-hover:scale-110">
        <Icon size={24} className="text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      
      <p className="text-gray-400 mb-5">{description}</p>
      
      <Link 
        to={`/services/${slug}`}
        className="inline-flex items-center text-[#ff1a3e] hover:text-[#ff3a5c] transition-colors font-medium group-hover:translate-x-1 transition-transform"
      >
        Learn more
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 group-hover:ml-2 transition-all"
        >
          <path 
            d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
