import React, { useEffect, useState } from 'react';
import { combinedRecipes } from '../../data';
import { useNavigate, useParams } from 'react-router-dom';
import ellipse from '../assets/Ellipse 2.png';
import timer from '../assets/Timer.png';
import knife from '../assets/ForkKnife.png';
import printIcon from '../assets/icons/printer.png';
import shareIcon from '../assets/icons/share.png';
import directionImage from '../assets/directionImage.png';
import SubscribeCard from '../components/SubscribeCard';
import SmallRecipeCard from '../components/SmallRecipeCard';

const RecipeDetails = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const recipe = combinedRecipes.find((item) => item.id === parseInt(id));

    setCurrentRecipe(recipe);
  }, [id]);

  if (!currentRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-auto mx-8">
      {/* main section */}
      <article className="lg:my-20 my-10">
        {/* header section */}
        <header className="flex flex-row justify-between items-center gap-10 overflow-hidden">
          <div className="flex flex-col justify-start gap-8 ">
            <h1 className="font-semibold lg:text-6xl text-2xl tracking-tighter lg:mr-10 ">
              {currentRecipe.title}
            </h1>
            <div className="flex flex-row items-center ">
              <div
                className="flex flex-row items-center gap-2 justify-center border-r pr-6"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <img
                  src={ellipse}
                  alt="john"
                  loading="lazy"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col items-start justify-center">
                  <p className="font-bold md:text-base text-sm">John Smith</p>
                  <p className="opacity-60 text-sm font-medium">
                    15 March 2022
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-4 border-r px-5"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <img src={timer} alt="timer" loading="lazy" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-medium md:text-xs tracking-widest text-xs">
                    PREP TIME
                  </p>
                  <p className="opacity-60 text-sm font-medium tracking-tight">
                    15 Minutes
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-4 border-r h-full px-5"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <img src={timer} alt="timer" loading="lazy" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-medium md:text-xs text-xs tracking-widest">
                    COOK TIME
                  </p>
                  <p className="opacity-60 text-sm font-medium tracking-tight">
                    15 Minutes
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 px-5">
                <img src={knife} alt="knife" loading="lazy" />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="opacity-60 text-sm font-medium tracking-tight">
                    Chicken
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <span className="bg-[#E7FAFE] rounded-full p-5 mx-2 ">
              <img src={printIcon} alt="print" />
            </span>
            <span className="bg-[#E7FAFE] rounded-full p-5 mx-2">
              <img src={shareIcon} alt="share" />
            </span>
          </div>
        </header>

        {/* banner image and nutrional info */}
        <div className="flex flew-row w-full my-10 gap-8">
          <figure className="w-2/3">
            <img
              src={currentRecipe.img}
              alt=""
              className="w-full rounded-3xl"
            />
            <figcaption className="sr-only">{currentRecipe.title}</figcaption>
          </figure>
          <section className="rounded-3xl bg-[#E7FAFE] flex flex-col px-6 py-7 w-1/3 justify-between">
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl tracking-tighter">
                Nutrition Information
              </h2>
              <ul className="my-5">
                <li className="flex justify-between items-center">
                  <span className="font-medium text-lg tracking-tighter opacity-60">
                    Calories
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    219.9 kcal
                  </span>
                </li>
                <hr className="border-t border-gray-300 my-4" />
                <li className="flex justify-between items-center">
                  <span className="font-medium text-lg tracking-tighter opacity-60">
                    Total Fat
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    10.7 g
                  </span>
                </li>
                <hr className="border-t border-gray-300 my-4" />
                <li className="flex justify-between items-center">
                  <span className="font-medium text-lg tracking-tighter opacity-60">
                    Protein
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    7.9 g
                  </span>
                </li>
                <hr className="border-t border-gray-300 my-4" />
                <li className="flex justify-between items-center">
                  <span className="font-medium text-lg tracking-tighter opacity-60">
                    Carbohydrate
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    22.3 g
                  </span>
                </li>
                <hr className="border-t border-gray-300 my-4" />
                <li className="flex justify-between items-center">
                  <span className="font-medium text-lg tracking-tighter opacity-60">
                    Cholestrol
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    27.4 mg
                  </span>
                </li>
                <hr className="border-t border-gray-300 my-4" />
              </ul>
            </div>
            <div>
              <p className="leading-7 opacity-60 text-center">
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{' '}
              </p>
            </div>
          </section>
        </div>

        <p className="opacity-60 text-sm lg:text-base my-8 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>

      {/* ingradients section */}
      <section className="lg:my-20 my-10 gap-8 flex flex-row">
        <div className="w-2/3 flex flex-col">
          <h2 className="font-semibold text-4xl tracking-tighter">
            Ingredients
          </h2>
          <ul className="my-5 list-inside list-disc">
            <p className="text-2xl font-semibold tracking-tighter my-2">
              For main dish
            </p>
            <li className="text-base leading-7 opacity-60 py-2">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="text-base leading-7 opacity-60 py-2">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="text-base leading-7 opacity-60 py-2">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="text-base leading-7 opacity-60 py-2">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="text-base leading-7 opacity-60 py-3">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
          </ul>
          <ul className=" list-inside list-disc">
            <p className="text-2xl font-semibold tracking-tighter my-2">
              For the sause
            </p>
            <li className="text-base leading-7 opacity-60 py-2">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="text-base leading-7 opacity-60 py-2">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="text-base leading-7 opacity-60 py-3">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="border-t border-gray-300 my-4" />
          </ul>
        </div>
        <aside className="w-1/3">
          <span className="font-semibold text-4xl tracking-tighter">
            Other Recipe
          </span>
          <div className="flex flex-col gap-4 my-4">
            {combinedRecipes
              .filter((item) => item.id <= 3)
              .map((recipe) => (
                <OtherRecipeCard recipe={recipe} key={recipe.id} />
              ))}
          </div>
        </aside>
      </section>

      {/*directions section */}
      <section className="lg:my-20 my-10">
        <div className="w-2/3 flex flex-col">
          <h2 className="font-semibold text-4xl tracking-tighter">
            Directions
          </h2>
          <ul className="my-5">
            <li className="px-4 py-3">
              <h5 className="text-2xl font-semibold tracking-tighter my-3">
                1. Lorem ipsum dolor sit amet
              </h5>
              <p className="text-base leading-6 tracking-tight opacity-60 my-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <img src={directionImage} alt="" className="my-4" />
              <p className="text-base leading-6 tracking-tight opacity-60 my-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="px-4 py-3">
              <h5 className="text-2xl font-semibold tracking-tighter my-2">
                1. Lorem ipsum dolor sit amet
              </h5>
              <p className="text-base leading-6 tracking-tight opacity-60 my-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </li>
            <hr className="border-t border-gray-300 my-4" />
            <li className="px-4 py-3">
              <h5 className="text-2xl font-semibold tracking-tighter my-2">
                3. Lorem ipsum dolor sit amet
              </h5>
              <p className="text-base leading-6 tracking-tight opacity-60 py-2">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </li>
            <hr className="border-t border-gray-300 my-4" />
          </ul>
        </div>
      </section>

      {/* subscribe card */}
      <SubscribeCard />

      {/* recipe recommendation */}
      <section className="lg:my-20 my-10">
        <h2 className="font-semibold text-4xl tracking-tighter text-center">
          You may like these recipe too
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

export default RecipeDetails;

const OtherRecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row justify-between items-center gap-4 cursor-pointer"
      onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
    >
      <div>
        <img
          src={recipe.img}
          alt="recipe image"
          className="rounded-xl max-w-40 max-h-40"
        />
      </div>
      <div className="flex flex-col justify-between items-start">
        <p className="font-semibold text-xl leading-7 tracking-tighter line-clamp-2">
          {recipe.title}
        </p>
        <p className="font-medium text-sm tracking-tight opacity-70">
          {recipe.type}
        </p>
      </div>
    </div>
  );
};
