import React, { useState, useRef } from 'react';
import facebookImg from '../assets/icons/001-facebook.png';
import twitterImg from '../assets/icons/003-twitter.png';
import instagramImg from '../assets/icons/004-instagram.png';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    gsap.to(sidebarRef.current, {
      transform: showSidebar ? 'translateX(100%)' : 'translateX(0)',
      duration: 0.3,
    });
  };

  return (
    <>
      <div className="my-8 px-8 w-full h-[30px]">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex flex-row font-lobster text-2xl cursor-pointer"
            onClick={() => navigate(`/`)}
          >
            FoodWorld <span className="text-[#FF7426]">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex gap-8 font-medium text-base">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
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

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden flex items-center"
          >
            <i className="text-2xl ri-menu-line"></i>
          </button>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        ref={sidebarRef}
        className="md:hidden top-0 right-0 z-10 fixed flex flex-col justify-between items-center gap-y-4 bg-white shadow-lg px-4 py-20 w-2/3 h-screen translate-x-full"
      >
        <button
          onClick={toggleSidebar}
          className="top-4 right-4 absolute text-2xl"
        >
          <i className="ri-close-line"></i>
        </button>
        <ul className="flex flex-col gap-8 font-medium text-base">
          <li>
            <Link to={'/'} onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/recipes'} onClick={toggleSidebar}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to={'/blogList'} onClick={toggleSidebar}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={'/contactUs'} onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6 mt-8">
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

      <hr className="my-4 border-gray-300 border-t" />
    </>
  );
};

export default Navbar;
