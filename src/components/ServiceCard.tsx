
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="service-card bg-factor-black-light border border-gray-800 group">
      <div className="w-12 h-12 rounded-lg bg-factor-red flex items-center justify-center mb-5 transform transition-transform group-hover:scale-110">
        <Icon size={24} className="text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      
      <p className="text-gray-400 mb-5">{description}</p>
      
      <a 
        href="#contact" 
        className="inline-flex items-center text-factor-red hover:text-factor-red-light transition-colors font-medium"
      >
        Learn more
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path 
            d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default ServiceCard;
