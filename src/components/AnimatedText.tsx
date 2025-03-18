
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  gradient?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  tag = 'h2',
  gradient = false
}) => {
  const words = text.split(' ');
  const Tag = tag;
  
  const baseClasses = gradient ? 'text-gradient' : '';
  
  return (
    <Tag className={`${baseClasses} ${className}`}>
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className="inline-block animate-fade-in-up"
          style={{ animationDelay: `${wordIndex * 0.1}s` }}
        >
          {word}
          {wordIndex !== words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
