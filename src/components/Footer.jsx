import React from 'react';
import { Link } from 'react-router-dom';
import facebookImg from '../assets/icons/001-facebook.png';
import twitterImg from '../assets/icons/003-twitter.png';
import instagramImg from '../assets/icons/004-instagram.png';

const Footer = () => {
  return (
    <div className="lg:mt-20 mt-10 mx-8">
      <div className="flex flex-row justify-between items-center my-8">
        <div className="flex flex-col items-start">
          <span className="text-2xl font-lobster flex flex-row">
            FoodWorld <span className="text-[#FF7426]">.</span>
          </span>
          <p className="opacity-60 md:leading-7 line-clamp-2 md:text-base text-xs">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{' '}
          </p>
        </div>
        <div>
          <ul className="flex gap-8 text-base tracking-tight font-medium">
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
      <hr className="border-t border-gray-300 my-4" />
      <div className="my-8 relative flex  items-center">
        <div className=" absolute left-1/2  transform -translate-x-1/2 opacity-60">
          © 2024 Omkar Jadhav. Powered by VS Code
        </div>
        <div className="ml-auto flex gap-6 items-center">
          <a href="#">
            <img src={facebookImg} alt="" />
          </a>
          <a href="#">
            <img src={twitterImg} alt="" />
          </a>
          <a href="#">
            <img src={instagramImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
