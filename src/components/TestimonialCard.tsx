
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  company, 
  image 
}) => {
  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-factor-black-light to-factor-black border border-gray-800">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6 text-factor-red"
      >
        <path 
          d="M12.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5V25C15 26.3261 14.4732 27.5979 13.5355 28.5355C12.5979 29.4732 11.3261 30 10 30H7.5M27.5 20H22.5C21.837 20 21.2011 19.7366 20.7322 19.2678C20.2634 18.7989 20 18.163 20 17.5V12.5C20 11.837 20.2634 11.2011 20.7322 10.7322C21.2011 10.2634 21.837 10 22.5 10H27.5C28.163 10 28.7989 10.2634 29.2678 10.7322C29.7366 11.2011 30 11.837 30 12.5V25C30 26.3261 29.4732 27.5979 28.5355 28.5355C27.5979 29.4732 26.3261 30 25 30H22.5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      <p className="text-lg text-gray-300 mb-8">{quote}</p>
      
      <div className="flex items-center">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-factor-red flex items-center justify-center mr-4">
            <span className="text-white font-medium text-lg">
              {author.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
