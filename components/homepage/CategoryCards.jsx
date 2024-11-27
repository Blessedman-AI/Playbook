'use client';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import Image from 'next/image';

export const Card = ({ title, tag }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#1e1e33] to-[#030311]
           rounded-md w-[270px] lg:w-[300px] h-[180px] lg:h-40 flex flex-col
            justify-between p-4 shrink-0"
    >
      <h3 className="text-white text-[18px] lg:text-[22px] font-medium break-words w-full whitespace-normal overflow-wrap-break-word">
        {title}
      </h3>
      <button
        className="self-start inline-block text-center border
         border-gray-500 text-gray-200 rounded-md lg:px-4 px-3 py-2 lg:py-3 
         text-sm hover:bg-gray-700 transition"
      >
        {tag}
      </button>
    </div>
  );
};

export const CatCards = ({
  icon,
  categoryTitle,
  backgroundColor,
  cardData,
}) => {
  const containerRef = React.useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrev = () => {
    const newPosition = Math.max(scrollPosition - 300, 0);
    setScrollPosition(newPosition);
    containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  const handleNext = () => {
    const newPosition = Math.min(
      scrollPosition + 300,
      containerRef.current.scrollWidth - containerRef.current.clientWidth
    );
    setScrollPosition(newPosition);
    containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <div
      className="py-[28px] lg:py-[64px] px-8 lg:px-[64px]  relative"
      style={{ backgroundColor }}
    >
      <div className="flex gap-2 items-end">
        {icon && (
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        )}
        <h2 className="text-white lg:text-2xl text-[20px] font-medium">
          {categoryTitle}
        </h2>
      </div>
      <div className="border-t border-white mb-6 lg:mb-10 mt-2 lg:mt-3"></div>

      {/* Left Arrow Button */}
      {scrollPosition > 0 && (
        <button
          className="absolute hidden lg:flex left-0 top-[62%]
           transform -translate-y-1/2 bg-gradient-to-br
            from-[#1e1e33] to-[#030311] text-white w-12 h-40 
             items-center justify-center hover:bg-gray-700
             rounded-md"
          onClick={handlePrev}
        >
          <ChevronLeftIcon size={24} />
        </button>
      )}

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="hide-scrollbar flex gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap"
      >
        {cardData?.map((card, index) => (
          <Card key={index} title={card.title} tag={card.tag} />
        ))}
      </div>

      {/* Right Arrow Button */}
      {scrollPosition <
        containerRef.current?.scrollWidth -
          containerRef.current?.clientWidth && (
        <button
          className="absolute hidden lg:flex right-0 top-[62%]
           transform -translate-y-1/2 bg-gradient-to-br
            from-[#1e1e33] to-[#030311] text-white
             w-12 h-40  items-center justify-center
              hover:bg-gray-700 rounded-md"
          onClick={handleNext}
        >
          <ChevronRightIcon size={24} />
        </button>
      )}
    </div>
  );
};
