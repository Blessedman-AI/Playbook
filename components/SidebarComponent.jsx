'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Sidebar = ({
  href = '/',
  category,
  title,
  tagName,
  tagLink,
  authorName1,
  authorName2,
  authorLink1 = '/',
  authorLink2 = '/',
  overviewText,
  resultText,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollThreshold = pageHeight * 0.5;

      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="hide-scrollbar flex flex-col py-16 px-8 gap-8 lg:gap-10
       bg-primary lg:w-[420px] w-full shadow-md lg:overflow-y-scroll
        flex-shrink-0 lg:fixed lg:top-0 lg:left-0 lg:h-screen min-h-full"
    >
      {/* Logo section */}
      <div
        className="w-full lg:w-[30%] flex flex-col items-start
         justify-center space-x-4 mb-4 lg:mb-0"
      >
        <Link href="/">
          <div className="flex">
            <Image
              src="/images/athena-logo.svg"
              alt="Athena"
              width={140}
              height={140}
            />

            <div className="flex items-center space-x-2">
              <div className="w-[2px] h-[50px] mx-3 bg-white"></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl">Playbook</h3>
                <div className="flex items-center space-x-2">
                  <span
                    className="px-4 py-1 text-[10px] font-medium bg-secondary
                 rounded-md text-white"
                  >
                    Beta
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Link href={href}>
        <button
          className="primaryButton items-center gap-10 justify-center
           lg:px-4 px-6 py-4 lg:py-3 
         transition"
        >
          VIEW LIBRARY
          <Image
            src="./bookIcon.svg"
            width={15}
            height={15}
            alt="book icon"
          ></Image>
        </button>
      </Link>

      {/* Heading */}
      <div className="flex flex-col gap-4 mt-8">
        <p className="customText uppercase "> {category}</p>
        <h2>{title}</h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <Link href={tagLink}>
            <button
              className="primaryButton items-center gap-3 justify-center
               lg:px-4 px-3 py-2 lg:py-3  transition"
            >
              {tagName}
            </button>
          </Link>
          <div className=" text-[16px] ">
            <Link
              href={authorLink1}
              className="customText text-[16px] underline"
            >
              {authorName1}
            </Link>
            {' / '}
            <Link
              href={authorLink2}
              className="customText text-[16px] underline"
            >
              {authorName2}
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 my-6">
        <p className="font-bold">Overview</p>
        <p className="text-[14px]">{overviewText}</p>
      </div>
      <div className="flex flex-col gap-4 my-6">
        <p className="font-bold">Result</p>
        <p className="text-[14px]">{resultText}</p>
      </div>
    </div>
  );
};

export default Sidebar;
