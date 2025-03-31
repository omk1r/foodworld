import React from 'react';
import SubscribeCard from '../components/SubscribeCard';
import SmallRecipeCard from '../components/SmallRecipeCard';
import { combinedRecipes } from '../../data';

const Contact = () => {
  return (
    <div className="mx-8 my-auto">
      {/* contact form */}
      <section className="my-10 lg:my-20">
        <h2 className="font-semibold text-6xl text-center">Contact us</h2>

        <article className="flex flex-row gap-4 my-10 w-full h-full">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/aosfs7cfygjvdrirnm2o"
            alt="Chef Image"
            className="hidden lg:block w-2/6"
          />
          <form action="" className="flex flex-col gap-4 p-2 w-full">
            <div className="flex lg:flex-row flex-col gap-8">
              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="opacity-60 my-2 font-medium text-xs leading-5 tracking-widest"
                >
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="py-4 ps-4 border focus:border-2 rounded-2xl focus:outline-none font-normal text-sm leading-5 tracking-tight"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="opacity-60 my-2 font-medium text-xs leading-5 tracking-widest"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="text"
                  placeholder="Your email address..."
                  className="py-4 ps-4 border focus:border-2 rounded-2xl focus:outline-none font-normal text-sm leading-5 tracking-tight"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8">
              <div className="flex flex-col lg:w-1/2">
                <label
                  htmlFor="subject"
                  className="opacity-60 my-2 font-medium text-xs leading-5 tracking-widest"
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="py-4 ps-4 border focus:border-2 rounded-2xl focus:outline-none font-normal text-sm leading-5 tracking-tight"
                />
              </div>
              <div className="flex flex-col lg:w-1/2">
                <label
                  htmlFor="subject"
                  className="opacity-60 my-2 font-medium text-xs leading-5 tracking-widest"
                >
                  ENQUIRY TYPE
                </label>
                <input
                  type="text"
                  placeholder="Advertising..."
                  className="py-4 ps-4 border focus:border-2 rounded-2xl focus:outline-none font-normal text-sm leading-5 tracking-tight"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="subject"
                className="opacity-60 my-2 font-medium text-xs leading-5 tracking-widest"
              >
                MESSAGES
              </label>
              <textarea
                type="text"
                placeholder="Enter your messages"
                className="py-4 ps-4 border focus:border-2 rounded-2xl focus:outline-none h-32 lg:h-60 font-normal text-sm leading-5 tracking-tight resize-none"
              />
            </div>
          </form>
        </article>
        <button className="flex place-self-center bg-black px-6 py-3 rounded-xl w-fit font-semibold text-white text-sm text-center tracking-tight">
          Submit
        </button>
      </section>

      {/* subscribe card */}
      <SubscribeCard />

      {/* recipe recommendation */}
      <section className="my-10 lg:my-20">
        <h2 className="font-semibold text-4xl text-center tracking-tighter">
          Check out this delicious recipes
        </h2>
        <div className="flex flex-wrap justify-center my-10">
          {combinedRecipes.slice(-4).map((recipe) => (
            <SmallRecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
