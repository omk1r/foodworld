import React from 'react';

const SubscribeCard = () => {
  return (
    <div className="relative flex flex-col items-center bg-[#E7F9FD] my-10 lg:my-20 px-20 py-6 md:py-12 rounded-3xl">
      <div className="z-10 flex flex-col items-center max-w-xl">
        <div className="px-4 py-2 font-semibold text-3xl lg:text-5xl text-center tracking-tighter">
          Deliciousness to your inbox
        </div>
        <p className="opacity-60 px-4 py-4 text-sm lg:text-base text-center leading-7">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="flex flex-row justify-between bg-white my-8 px-2 py-2 ps-2 md:ps-8 rounded-2xl md:w-3/4">
          <input
            className="opacity-40 focus:outline-none font-medium text-sm tracking-tight"
            placeholder="Your email address..."
          ></input>
          <button className="bg-black px-2 md:px-6 py-1 md:py-3 rounded-xl font-semibold text-white text-sm tracking-tight">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bottom-0 left-0 absolute">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/subscribe%20card/a2stxzjrakd5qzru0yfn"
          alt=""
        />
      </div>
      <div className="hidden md:block right-0 bottom-0 absolute">
        <img
          src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/subscribe%20card/e44m1tqcntmkpwvlolev"
          alt=""
        />
      </div>
    </div>
  );
};

export default SubscribeCard;
