import React, { useEffect, useState } from 'react';
import { combinedRecipes } from '../../data';
import { useNavigate, useParams } from 'react-router-dom';
import printIcon from '../assets/icons/printer.png';
import shareIcon from '../assets/icons/share.png';
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
    <div className="mx-8 my-auto overflow-hidden">
      {/* main section */}
      <article className="my-10 lg:my-20">
        {/* header section */}
        <header className="flex md:flex-row flex-col justify-between items-center gap-10 overflow-hidden">
          <div className="flex flex-col justify-start gap-8 w-full">
            <h1 className="lg:mr-10 w-full font-semibold text-2xl lg:text-6xl tracking-tighter">
              {currentRecipe.title}
            </h1>
            <div className="flex md:flex-row flex-col md:items-center">
              <div
                className="flex flex-row justify-start items-center gap-2 pr-2 md:pr-6 border-r"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <img
                  src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/tf3sufygrlujcbo7cj1j"
                  alt="john"
                  loading="lazy"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col justify-center items-start">
                  <p className="font-bold text-sm md:text-base">John Smith</p>
                  <p className="opacity-60 font-medium text-sm">
                    15 March 2022
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-4 px-5 border-r"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <img
                  src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/wuxzxamhbwd6em998td1"
                  alt="timer"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <p className="font-medium text-xs md:text-xs tracking-widest">
                    PREP TIME
                  </p>
                  <p className="opacity-60 font-medium text-sm tracking-tight">
                    15 Minutes
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-4 px-5 border-r h-full"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <img
                  src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/wuxzxamhbwd6em998td1"
                  alt="timer"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <p className="font-medium text-xs md:text-xs tracking-widest">
                    COOK TIME
                  </p>
                  <p className="opacity-60 font-medium text-sm tracking-tight">
                    15 Minutes
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 px-5">
                <img
                  src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/zg5w1yssxvitwkxjq9dc"
                  alt="knife"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <p className="opacity-60 font-medium text-sm tracking-tight">
                    Chicken
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <span className="bg-[#E7FAFE] mx-2 p-5 rounded-full">
              <img src={printIcon} alt="print" />
            </span>
            <span className="bg-[#E7FAFE] mx-2 p-5 rounded-full">
              <img src={shareIcon} alt="share" />
            </span>
          </div>
        </header>

        {/* banner image and nutrional info */}
        <div className="flex md:flex-row flex-col gap-8 my-10 w-full">
          <figure className="w-full md:w-2/3">
            <img
              src={currentRecipe.img}
              alt=""
              className="rounded-3xl w-full"
            />
            <figcaption className="sr-only">{currentRecipe.title}</figcaption>
          </figure>
          <section className="flex flex-col justify-between bg-[#E7FAFE] px-3 md:px-6 py-4 md:py-7 rounded-3xl w-full md:w-1/3">
            <div className="flex flex-col">
              <h2 className="font-semibold text-2xl tracking-tighter">
                Nutrition Information
              </h2>
              <ul className="my-5">
                <li className="flex justify-between items-center">
                  <span className="opacity-60 font-medium text-lg tracking-tighter">
                    Calories
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    219.9 kcal
                  </span>
                </li>
                <hr className="my-4 border-gray-300 border-t" />
                <li className="flex justify-between items-center">
                  <span className="opacity-60 font-medium text-lg tracking-tighter">
                    Total Fat
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    10.7 g
                  </span>
                </li>
                <hr className="my-4 border-gray-300 border-t" />
                <li className="flex justify-between items-center">
                  <span className="opacity-60 font-medium text-lg tracking-tighter">
                    Protein
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    7.9 g
                  </span>
                </li>
                <hr className="my-4 border-gray-300 border-t" />
                <li className="flex justify-between items-center">
                  <span className="opacity-60 font-medium text-lg tracking-tighter">
                    Carbohydrate
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    22.3 g
                  </span>
                </li>
                <hr className="my-4 border-gray-300 border-t" />
                <li className="flex justify-between items-center">
                  <span className="opacity-60 font-medium text-lg tracking-tighter">
                    Cholestrol
                  </span>
                  <span className="font-medium text-lg tracking-tighter">
                    27.4 mg
                  </span>
                </li>
                <hr className="my-4 border-gray-300 border-t" />
              </ul>
            </div>
            <div>
              <p className="opacity-60 text-center leading-5 md:leading-7">
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{' '}
              </p>
            </div>
          </section>
        </div>

        <p className="opacity-60 my-8 text-sm lg:text-base leading-5 md:leading-7">
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
      <section className="flex flex-row gap-8 my-10 lg:my-20">
        <div className="flex flex-col w-2/3">
          <h2 className="font-semibold text-4xl tracking-tighter">
            Ingredients
          </h2>
          <ul className="my-5 list-disc list-inside">
            <p className="my-2 font-semibold text-2xl tracking-tighter">
              For main dish
            </p>
            <li className="opacity-60 py-2 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="opacity-60 py-2 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="opacity-60 py-2 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="opacity-60 py-2 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="opacity-60 py-3 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
          </ul>
          <ul className="list-disc list-inside">
            <p className="my-2 font-semibold text-2xl tracking-tighter">
              For the sause
            </p>
            <li className="opacity-60 py-2 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="opacity-60 py-2 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="opacity-60 py-3 text-base leading-7">
              Lorem ipsum dolor sit amet
            </li>
            <hr className="my-4 border-gray-300 border-t" />
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
      <section className="my-10 lg:my-20">
        <div className="flex flex-col w-2/3">
          <h2 className="font-semibold text-4xl tracking-tighter">
            Directions
          </h2>
          <ul className="my-5">
            <li className="px-4 py-3">
              <h5 className="my-3 font-semibold text-2xl tracking-tighter">
                1. Lorem ipsum dolor sit amet
              </h5>
              <p className="opacity-60 my-3 text-base leading-6 tracking-tight">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <img
                src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/hqnbedrhhub7iksbzprm"
                alt=""
                className="my-4"
              />
              <p className="opacity-60 my-3 text-base leading-6 tracking-tight">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="px-4 py-3">
              <h5 className="my-2 font-semibold text-2xl tracking-tighter">
                1. Lorem ipsum dolor sit amet
              </h5>
              <p className="opacity-60 my-3 text-base leading-6 tracking-tight">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </li>
            <hr className="my-4 border-gray-300 border-t" />
            <li className="px-4 py-3">
              <h5 className="my-2 font-semibold text-2xl tracking-tighter">
                3. Lorem ipsum dolor sit amet
              </h5>
              <p className="opacity-60 py-2 text-base leading-6 tracking-tight">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </li>
            <hr className="my-4 border-gray-300 border-t" />
          </ul>
        </div>
      </section>

      {/* subscribe card */}
      <SubscribeCard />

      {/* recipe recommendation */}
      <section className="my-10 lg:my-20">
        <h2 className="font-semibold text-4xl text-center tracking-tighter">
          You may like these recipe too
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
        <p className="font-semibold text-xl line-clamp-2 leading-7 tracking-tighter">
          {recipe.title}
        </p>
        <p className="opacity-70 font-medium text-sm tracking-tight">
          {recipe.type}
        </p>
      </div>
    </div>
  );
};
