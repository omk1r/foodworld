import React from 'react';
import { Link } from 'react-router-dom';
import facebookImg from '../assets/icons/001-facebook.png';
import twitterImg from '../assets/icons/003-twitter.png';
import instagramImg from '../assets/icons/004-instagram.png';

const Footer = () => {
  return (
    <div className="mx-8 mt-10 lg:mt-20">
      {/* Top Section */}
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-8 my-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start lg:text-left text-center">
          <span className="flex flex-row font-lobster text-2xl">
            FoodWorld <span className="text-[#FF7426]">.</span>
          </span>
          <p className="opacity-60 mt-2 text-xs md:text-base line-clamp-2 md:leading-7">
            Lorem ipsum dolor sit amet, consectetuipisicing elit.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex lg:flex-row flex-col items-center gap-4 lg:gap-8 font-medium text-base tracking-tight">
            <li>
              <Link to={'/recipes'}>Recipes</Link>
            </li>
            <li>
              <Link to={'/blogList'}>Blog</Link>
            </li>
            <li>
              <Link to={'/contactUs'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-4 border-gray-300 border-t" />

      {/* Bottom Section */}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-4 my-8">
        {/* Copyright */}
        <div className="opacity-60 lg:text-left text-center">
          © 2024 Omkar Jadhav. Powered by VS Code
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6">
          <a href="#">
            <img src={facebookImg} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitterImg} alt="Twitter" />
          </a>
          <a href="#">
            <img src={instagramImg} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
