import React, { useState } from 'react';

const HoverCard = ({ children, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [originalBackgroundColor, setOriginalBackgroundColor] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOriginalBackgroundColor(document.getElementById('card').style.color);
    document.getElementById('card').style.color = hoverColor || '#eb5a00';
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.getElementById('card').style.color = originalBackgroundColor;
  };

  return (
    <div
      id="card" 
      className={`w-64 h-32 p-4 ${
        isHovered ? 'text-[#eb5a00]' : 'text-[#ffffff]'
      } shadow-md transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverCard;
