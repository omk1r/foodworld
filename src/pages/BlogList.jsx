import React from 'react';
import { blogs, combinedRecipes } from '../../data';
import { useNavigate } from 'react-router-dom';
import SubscribeCard from '../components/SubscribeCard';

const BlogList = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8 my-auto">
      <section className="my-10 lg:my-20">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-2xl md:text-4xl xl:text-6xl tracking-tighter">
            Blog & Article
          </h1>
          <p className="opacity-60 my-7 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="flex lg:flex-row flex-col my-4 overflow-hidden">
          <div className="px-4 w-full lg:w-2/3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex md:flex-row flex-col justify-evenly items-center gap-3 my-8 cursor-pointer"
                onClick={() => navigate(`/blogDetails/${blog.id}`)}
              >
                <img src={blog.img} alt="img" className="rounded-2xl" />
                <div className="flex flex-col px-1 md:px-3">
                  <h5 className="font-semibold text-2xl tracking-tighter">
                    {blog.title}
                  </h5>
                  <p className="opacity-60 my-2 md:my-5 line-clamp-2 leading-7">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                    enim{' '}
                  </p>
                  <div className="flex items-center">
                    <span className="px-3 border-r font-bold tracking-tight">
                      {blog.author}
                    </span>
                    <span className="opacity-60 px-3 font-medium text-sm tracking-tight">
                      12 November 2021
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="px-4 w-3/4 lg:w-1/3">
            <span className="font-semibold text-2xl lg:text-4xl tracking-tighter">
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
        </div>
      </section>

      {/* subscribe card */}
      <SubscribeCard />
    </div>
  );
};

export default BlogList;

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
