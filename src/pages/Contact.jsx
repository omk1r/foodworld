import React from 'react';
import SubscribeCard from '../components/SubscribeCard';
import SmallRecipeCard from '../components/SmallRecipeCard';
import { combinedRecipes } from '../../data';
import chefImage2 from '../assets/chef-image-2.png';

const Contact = () => {
  return (
    <div className="my-auto mx-8">
      {/* contact form */}
      <section className="lg:my-20 my-10">
        <h2 className="font-semibold text-6xl text-center">Contact us</h2>

        <article className="flex flex-row gap-4 my-10 w-full h-full">
          <img src={chefImage2} alt="Chef Image" className="w-2/6" />
          <form action="" className="flex flex-col gap-4  w-full p-2">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium tracking-widest leading-5 opacity-60 my-2"
                >
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="border rounded-2xl ps-4 py-4 tracking-tight text-sm leading-5 font-normal focus:outline-none focus:border-2"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium tracking-widest leading-5 opacity-60 my-2"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="text"
                  placeholder="Your email address..."
                  className="border rounded-2xl ps-4 py-4 tracking-tight text-sm leading-5 font-normal focus:outline-none focus:border-2"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col lg:w-1/2">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium tracking-widest leading-5 opacity-60 my-2"
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="border rounded-2xl ps-4 py-4 tracking-tight text-sm leading-5 font-normal focus:outline-none focus:border-2"
                />
              </div>
              <div className="flex flex-col lg:w-1/2">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium tracking-widest leading-5 opacity-60 my-2"
                >
                  ENQUIRY TYPE
                </label>
                <input
                  type="text"
                  placeholder="Advertising..."
                  className="border rounded-2xl ps-4 py-4 tracking-tight text-sm leading-5 font-normal focus:outline-none focus:border-2"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="subject"
                className="text-xs font-medium tracking-widest leading-5 opacity-60 my-2"
              >
                MESSAGES
              </label>
              <textarea
                type="text"
                placeholder="Enter your messages"
                className="border rounded-2xl ps-4 py-4 tracking-tight text-sm leading-5 font-normal resize-none h-60 focus:outline-none focus:border-2"
              />
            </div>
          </form>
        </article>
        <button className="flex place-self-center bg-black text-white rounded-xl font-semibold text-sm tracking-tight py-3 px-6 w-fit text-center">
          Submit
        </button>
      </section>

      {/* subscribe card */}
      <SubscribeCard />

      {/* recipe recommendation */}
      <section className="lg:my-20 my-10">
        <h2 className="font-semibold text-4xl tracking-tighter text-center">
          Check out this delicious recipes
        </h2>
        <div className="flex flex-wrap my-10 justify-center">
          {combinedRecipes.slice(-4).map((recipe) => (
            <SmallRecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
