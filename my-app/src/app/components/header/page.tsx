"use client";

import React, { useState } from "react";
import Image from "next/image";
import { imagesPNG } from "@/app/utils/constants/images";
import { navData } from "./type";

export default function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleHamburger = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="bg-gradient-to-r from-[#1049b3] to-[#2268eb] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="text-title-sm2 font-bold lg:text-title-xxl">
            <a href="#">Solicy</a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navData.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={handleHamburger}>
              <Image
                src={imagesPNG.burger}
                alt="burger"
                width={25}
                height={30}
                className="filter invert brightness-0"
              />
            </button>
          </div>
        </div>
        {isVisible && (
          <nav className="md:hidden absolute left-0 bg-gradient-to-r from-[#1049b3] to-[#2268eb] w-full z-999 flex flex-col items-center hover:none">
            {navData.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-200 hover:bg-blue-600"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
