import React from 'react';
import dish from '../assets/subscribe-card/Photo.png';
import salad from '../assets/subscribe-card/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png';

const SubscribeCard = () => {
  return (
    <div className="bg-[#E7F9FD] py-12 rounded-3xl flex items-center flex-col relative overflow-hidden lg:my-20 my-10">
      <div className="max-w-xl flex items-center flex-col ">
        <div className="font-semibold lg:text-5xl text-2xl tracking-tighter py-2">
          Deliciousness to your inbox
        </div>
        <p className="opacity-60 text-sm lg:text-base leading-7 py-4 text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="w-3/4 bg-white rounded-2xl px-2 py-2 flex justify-between flex-row ps-8 my-8">
          <input
            className="font-medium text-sm tracking-tight  opacity-40 focus:outline-none"
            placeholder="Your email address..."
          ></input>
          <button className="bg-black text-white rounded-xl font-semibold text-sm tracking-tight py-3 px-6">
            Subscribe
          </button>
        </div>
      </div>
      <div className="absolute left-0 bottom-0">
        <img src={salad} alt="" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={dish} alt="" />
      </div>
    </div>
  );
};

export default SubscribeCard;
