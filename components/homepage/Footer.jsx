import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10">
      <div
        className="container mx-auto flex justify-between
       items-center flex-col gap-6"
      >
        <p className="text-gray-500">v1.0.0</p>
        <div className="flex  space-x-4">
          <Link
            href="/"
            className="text-white hover:text-secondary
             transition-colors duration-300 text-sm"
          >
            Terms and conditions
          </Link>
          <Link
            href="/"
            className="text-white hover:text-orange-500
             transition-colors duration-300 text-sm"
          >
            Privacy policy
          </Link>
        </div>
        <p className="text-gray-500  text-[16px]">
          Copyright © Athena {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
