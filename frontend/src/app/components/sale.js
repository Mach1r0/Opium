"use client";
import React, { useEffect, useState } from "react";
import banner1 from '../imgs/banner1.jpg';
import banner2 from '../imgs/banner2.jpg';
import banner3 from '../imgs/banner3.jpg';
import banner4 from '../imgs/banner4.jpg';
import { ImNext, ImPrevious } from "react-icons/im";
import './Sale.css'; // Import the custom CSS file

export default function Sale() {
  const banners = [banner1, banner2, banner3, banner4];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBannerIndex]);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner" style={{ backgroundImage: `url(${banners[currentBannerIndex].src})` }}>
      <button
        onClick={prevBanner}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-white text-3xl"
      >
        <ImPrevious />
      </button>
      <button
        onClick={nextBanner}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-white text-3xl"
      >
        <ImNext />
      </button>
    </div>
  );
}