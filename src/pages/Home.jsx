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
    <main className="my-auto mx-8">
      {/* featured recipe banner */}
      <header
        id="featured recipe"
        className="flex flex-row rounded-3xl w-full overflow-hidden relative lg:my-20 my-10"
      >
        <div className="bg-[#E7FAFE] w-1/2 lg:px-10 lg:py-8 px-4 py-3 overflow-hidden">
          <div className="w-fit my-4">
            <span className="flex flex-row items-center lg:gap-4 gap-2 bg-white lg:px-4 lg:py-2 px-2 py-1 rounded-[30px]">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/ipfc5ewfrhtlqwrcvr3k"
                alt=""
                loading="lazy"
              />
              <p className="text-sm font-semibold">Hot Recipes</p>
            </span>
          </div>
          <div className="lg:my-8">
            <h1 className="font-semibold lg:text-6xl tracking-tighter leading-tight text-2xl">
              Spicy delicious chicken wings
            </h1>
          </div>
          <div className="lg:my-6 my-3">
            <p className="opacity-60 md:leading-7 line-clamp-2 md:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              quibusdam eveniet nisi! Velit laboriosam saepe itaque illo. Hic,
              ea voluptatibus
            </p>
          </div>
          <div className="flex flex-row lg:gap-4 gap-2">
            <span className="rounded-3xl bg-[#000] bg-opacity-5 flex flex-row gap-2 md:px-4 md:py-2 px-2 py-1 items-center">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/wuxzxamhbwd6em998td1"
                alt="timer"
                loading="lazy"
              />
              <p className="opacity-60 md:text-sm text-xs font-medium">
                30 Minutes
              </p>
            </span>
            <span className="rounded-3xl bg-[#000] bg-opacity-5 flex flex-row items-center gap-2 px-4 py-2">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/zg5w1yssxvitwkxjq9dc"
                alt="chicken"
                loading="lazy"
              />
              <p className="opacity-60 md:text-sm text-xs font-medium">
                Chicken
              </p>
            </span>
          </div>
          <div className="lg:mt-16 mt-2 lg:flex flex-row justify-between hidden">
            <div className="flex flex-row items-center gap-2">
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/tf3sufygrlujcbo7cj1j"
                alt="john"
                loading="lazy"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold md:text-base text-sm">John Smith</p>
                <p className="opacity-60 text-sm font-medium">15 March 2022</p>
              </div>
            </div>
            <button
              className="bg-black text-white flex flex-row rounded-xl md:px-8 items-center md:gap-3 hover:cursor-pointer"
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
        <div className=" w-1/2">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/pdrmxzogpj9xm6c64oun"
            alt="Baked Chiken banner"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="md:absolute hidden md:flex left-[46%] top-10 border-red-600">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/rjk0hdikrixzflfuktbk"
            alt="badge"
            loading="lazy"
          />
        </div>
      </header>

      {/* categories */}
      <section id="categories" className="lg:my-20 my-10 ">
        <h2 className="md:text-5xl text-2xl font-semibold tracking-tighter">
          Categories
        </h2>
        <div className="flex flex-row flex-wrap justify-between items-center my-4 ">
          {categories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center md:gap-4 gap-2 bg-gradient-to-b px-4 rounded-2xl my-4 "
            >
              <img
                src={item.img}
                alt="no image"
                className="md:w-full w-1/2"
                loading="lazy"
              />
              <p className="font-semibold md:text-lg tracking-tight my-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* simple recipes */}
      <section className="lg:my-20 my-10">
        <h2 className="md:text-5xl text-3xl font-semibold text-center tracking-tight">
          Simple and tasty recipes
        </h2>
        <p className="text-center md:text-base text-sm opacity-60 md:mx-48 md:my-8 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
          perferendis{' '}
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* learn more */}
      <section className="lg:my-20 my-10 ">
        <div className="flex flex-row ">
          <div className="min-w-[45%] lg:my-40 my-20 px-7">
            <h3 className="font-semibold lg:text-5xl text-2xl tracking-tight">
              Everyone can be a chef in their own kitchen
            </h3>
            <p className="opacity-60 text-sm lg:text-base my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              cupiditate expedita aperiam natus blanditiis reprehenderit itaque
              ex perferendis{' '}
            </p>
            <button className="font-semibold text-sm text-white bg-black w-fit px-10 py-4 rounded-xl tracking-tight mt-16">
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
      <section className="bg-custom-gradient lg:my-20 my-10">
        <h2 className="font-semibold lg:text-5xl text-2xl tracking-tight text-center">
          Check out @foodieland on Instagram
        </h2>
        <p className="opacity-60 text-sm lg:text-base my-8 lg:px-48 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
          perferendis{' '}
        </p>
        <div className="flex flex-wrap lg:gap-6 gap-4 justify-center lg:my-8 my-4">
          {instaPost.map((post) => (
            <div className="min-w-40 w-60" key={post.id}>
              <img src={post.img} alt="post" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-10 pb-10">
          <div className="bg-black flex justify-center items-center w-fit text-center gap-4 px-6 py-3 rounded-xl">
            <button className="text-white text-sm font-semibold tracking-tight">
              Visit our Instagram
            </button>
            <img src={instalogo} alt="logo" loading="lazy" />
          </div>
        </div>
      </section>

      {/* more recipes */}
      <section className="lg:my-20 my-10 ">
        <div className="flex flex-row gap-4 justify-between">
          <h2 className="font-semibold lg:text-5xl text-2xl tracking-tighter lg:mr-10">
            Try this delicious recipe to make your day
          </h2>
          <p className="opacity-60 text-sm lg:text-base my-8 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
            perferendis{' '}
          </p>
        </div>
        <div className="flex flex-wrap my-10 justify-center">
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
