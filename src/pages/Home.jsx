import React from 'react';
import { categories, instaPost, moreRecipes, recipes } from '../../data';
import instalogo from '../assets/icons/004-instagram-white.png';
import RecipeCard from '../components/RecipeCard';
import SubscribeCard from '../components/SubscribeCard';
import { useNavigate } from 'react-router-dom';
import SmallRecipeCard from '../components/SmallRecipeCard';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recipes');
  };
  return (
    <main className="mx-8 my-auto">
      {/* featured recipe banner */}
      <header
        id="featured recipe"
        className="relative flex flex-row my-10 lg:my-20 rounded-3xl w-full overflow-hidden"
      >
        <div className="bg-[#E7FAFE] px-4 lg:px-10 py-3 lg:py-8 w-1/2 overflow-hidden">
          <div className="my-4 w-fit">
            <span className="flex flex-row items-center gap-2 lg:gap-4 bg-white px-2 lg:px-4 py-1 lg:py-2 rounded-[30px]">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/ipfc5ewfrhtlqwrcvr3k"
                alt=""
                loading="lazy"
              />
              <p className="font-semibold text-sm">Hot Recipes</p>
            </span>
          </div>
          <div className="lg:my-8">
            <h1 className="font-semibold text-2xl lg:text-6xl leading-tight tracking-tighter">
              Spicy delicious chicken wings
            </h1>
          </div>
          <div className="my-3 lg:my-6">
            <p className="opacity-60 text-xs md:text-base line-clamp-2 md:leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              quibusdam eveniet nisi! Velit laboriosam saepe itaque illo. Hic,
              ea voluptatibus
            </p>
          </div>
          <div className="flex flex-row gap-2 lg:gap-4">
            <span className="flex flex-row items-center gap-2 bg-[#000] bg-opacity-5 px-2 md:px-4 py-1 md:py-2 rounded-3xl">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/wuxzxamhbwd6em998td1"
                alt="timer"
                loading="lazy"
              />
              <p className="opacity-60 font-medium text-xs md:text-sm">
                30 Minutes
              </p>
            </span>
            <span className="flex flex-row items-center gap-2 bg-[#000] bg-opacity-5 px-4 py-2 rounded-3xl">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/zg5w1yssxvitwkxjq9dc"
                alt="chicken"
                loading="lazy"
              />
              <p className="opacity-60 font-medium text-xs md:text-sm">
                Chicken
              </p>
            </span>
          </div>
          <div className="hidden lg:flex flex-row justify-between mt-2 lg:mt-16">
            <div className="flex flex-row items-center gap-2">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/tf3sufygrlujcbo7cj1j"
                alt="john"
                loading="lazy"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-sm md:text-base">John Smith</p>
                <p className="opacity-60 font-medium text-sm">15 March 2022</p>
              </div>
            </div>
            <button
              className="flex flex-row items-center md:gap-3 bg-black md:px-8 rounded-xl text-white hover:cursor-pointer"
              onClick={handleClick}
            >
              <p className="font-semibold text-sm">View recipes</p>
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/gnyco4yvgzwldhks5jur"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/pdrmxzogpj9xm6c64oun"
            alt="Baked Chiken banner"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="top-10 left-[50%] absolute md:flex border-red-600 w-16 md:w-auto translate-x-[-40%]">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/rjk0hdikrixzflfuktbk"
            alt="badge"
            loading="lazy"
          />
        </div>
      </header>

      {/* categories */}
      <section id="categories" className="my-10 lg:my-20">
        <h2 className="font-semibold text-2xl md:text-5xl tracking-tighter">
          Categories
        </h2>
        <div className="flex flex-row flex-wrap justify-between items-center my-4">
          {categories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 md:gap-4 bg-gradient-to-b my-4 px-4 rounded-2xl"
            >
              <img
                src={item.img}
                alt="no image"
                className="w-1/2 md:w-full"
                loading="lazy"
              />
              <p className="my-3 font-semibold md:text-lg tracking-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* simple recipes */}
      <section className="my-10 lg:my-20">
        <h2 className="font-semibold text-3xl md:text-5xl text-center tracking-tight">
          Simple and tasty recipes
        </h2>
        <p className="opacity-60 md:mx-48 my-4 md:my-8 text-sm md:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
          perferendis{' '}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* learn more */}
      <section className="my-10 lg:my-20">
        <div className="flex md:flex-row flex-col">
          <div className="my-20 lg:my-40 px-7 min-w-[45%]">
            <h3 className="font-semibold text-2xl lg:text-5xl tracking-tight">
              Everyone can be a chef in their own kitchen
            </h3>
            <p className="opacity-60 my-8 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              cupiditate expedita aperiam natus blanditiis reprehenderit itaque
              ex perferendis{' '}
            </p>
            <button className="bg-black mt-4 lg:mt-16 px-10 py-4 rounded-xl w-fit font-semibold text-white text-sm tracking-tight">
              Learn more
            </button>
          </div>
          <div className="min-w-[55%]">
            <img
              src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/gxf2dnw0mhv0oi1rypyd"
              alt=""
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* instagram cards */}
      <section className="bg-custom-gradient my-10 lg:my-20">
        <h2 className="font-semibold text-2xl lg:text-5xl text-center tracking-tight">
          Check out @foodieland on Instagram
        </h2>
        <p className="opacity-60 my-8 lg:px-48 text-sm lg:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
          perferendis{' '}
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 my-4 lg:my-8">
          {instaPost.map((post) => (
            <div className="w-60 min-w-40" key={post.id}>
              <img src={post.img} alt="post" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-10 pb-10">
          <div className="flex justify-center items-center gap-4 bg-black px-6 py-3 rounded-xl w-fit text-center">
            <button className="font-semibold text-white text-sm tracking-tight">
              Visit our Instagram
            </button>
            <img src={instalogo} alt="logo" loading="lazy" />
          </div>
        </div>
      </section>

      {/* more recipes */}
      <section className="my-10 lg:my-20">
        <div className="flex md:flex-row flex-col justify-between gap-4">
          <h2 className="lg:mr-10 font-semibold text-2xl lg:text-5xl tracking-tighter">
            Try this delicious recipe to make your day
          </h2>
          <p className="opacity-60 my-4 lg:my-8 text-sm lg:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
            perferendis{' '}
          </p>
        </div>
        <div className="flex flex-wrap justify-center my-10">
          {moreRecipes.map((recipe) => (
            <SmallRecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </section>

      {/* subscribe card */}
      <SubscribeCard />
    </main>
  );
};

export default Home;
