import React from 'react';
import facebookImg from '../assets/icons/001-facebook.png';
import twitterImg from '../assets/icons/003-twitter.png';
import instagramImg from '../assets/icons/004-instagram.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[30px] w-full my-8 px-8">
        <nav className="flex flex-row justify-between items-center">
          <div
            className="text-2xl font-lobster flex flex-row cursor-pointer"
            onClick={() => navigate(`/`)}
          >
            FoodWorld <span className="text-[#FF7426]">.</span>
          </div>
          <div>
            <ul className="flex gap-8 text-base font-medium">
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
          <div className="flex gap-6 items-center">
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
        </nav>
      </div>
      <hr className="border-t border-gray-300 my-4" />
    </>
  );
};

export default Navbar;
