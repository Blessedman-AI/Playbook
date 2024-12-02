'use client';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ title, details, authors, tag }) => {
  return (
    <Link href="/details" className="block">
      <div
        className=" cursor-pointer bg-gradient-to-br from-gradientFrom
       to-gradientTo rounded-md w-[270px] lg:w-[400px]
        lg:min-h-[180px] h-50 flex flex-col justify-between
         px-4 py-8 shrink-0"
      >
        <h3
          className="text-white text-[18px] lg:text-[22px]
       font-medium break-words w-full whitespace-normal
        overflow-wrap-break-word mb-6 lg:mb-0"
        >
          {title}
        </h3>
        <button className="primaryButton lg:px-4 px-3 py-2 lg:py-3  transition">
          {tag}
        </button>
      </div>
    </Link>
  );
};

export const HoveredCardDetails = ({ title, details, authors, tag }) => {
  return (
    <Link href="/content" className="block">
      <div
        className="hidden cursor-pointer bg-gradient-to-br
       from-gradientFrom to-gradientTo rounded-md 
         max-w-[400px] lg:min-h-[250px] lg:flex flex-col justify-between
          p-4 shrink-0 border border-secondary
      "
      >
        <div className="mb-6">
          <h3>{title}</h3>
          <div className="bg-white w-full h-[1px] my-6"></div>
          <p>{details}</p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-between">
          <button
            className="primaryButton lg:px-4 px-3 py-2 lg:py-3 
         transition"
          >
            {tag}
          </button>
          <h3
            className="text-white text-[18px] lg:text-[22px]
       font-medium break-words w-full whitespace-normal
        overflow-wrap-break-word"
          >
            {authors?.join(' / ')}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export const CatCards = ({
  icon,
  image,
  categoryTitle,
  backgroundColor,
  cardData,
}) => {
  const containerRef = React.useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div
      className="relative py-[28px] lg:py-[44px] px-8 lg:px-[64px]"
      style={{ backgroundColor }}
    >
      <div className="flex gap-1 items-end">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
        <div>{icon}</div>
        <h2 className="text-white lg:text-2xl text-[20px] font-medium">
          {categoryTitle}
        </h2>
      </div>
      <div className="border-t border-white mb-6 lg:mb-10 mt-2 lg:mt-3"></div>

      {scrollPosition > 0 && (
        <button
          className="absolute hidden lg:flex left-0 top-[62%]
           transform -translate-y-1/2 bg-gradient-to-br from-gradientFrom to-gradientTo
           text-white w-12 h-40 items-center justify-center hover:bg-gray-700 rounded-md"
          onClick={handlePrev}
        >
          <ChevronLeftIcon size={24} />
        </button>
      )}

      <div className=" relative overflow-y-visible">
        <div
          ref={containerRef}
          className="hide-scrollbar overflow-y-visible flex gap-4 scroll-smooth 
          whitespace-nowrap"
          style={{ overflowX: 'scroll' }}
        >
          {cardData?.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              className=""
            >
              <Card title={card.title} tag={card.tag} />

              {hoveredCard === index && (
                <div
                  className="absolute -top-[60px] -bottom-0 
                    z-10 "
                  style={{
                    pointerEvents: 'none',
                  }}
                >
                  <HoveredCardDetails
                    title={card.title}
                    details={card.details}
                    tag={card.tag}
                    authors={card.authors}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {scrollPosition <
        containerRef.current?.scrollWidth -
          containerRef.current?.clientWidth && (
        <button
          className="absolute hidden lg:flex right-0 top-[62%] transform -translate-y-1/2
           bg-gradient-to-br from-gradientFrom to-gradientTo text-white w-12 h-40 items-center
           justify-center hover:bg-gray-700 rounded-md"
          onClick={handleNext}
        >
          <ChevronRightIcon size={24} />
        </button>
      )}
    </div>
  );
};
