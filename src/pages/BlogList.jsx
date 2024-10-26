import React from 'react';
import { blogs, combinedRecipes } from '../../data';
import { useNavigate } from 'react-router-dom';
import SubscribeCard from '../components/SubscribeCard';

const BlogList = () => {
  const navigate = useNavigate();
  return (
    <div className="my-auto mx-8">
      <section className="lg:my-20 my-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-6xl tracking-tighter">
            Blog & Article
          </h1>
          <p className="leading-7 opacity-60 my-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="my-4 flex flex-row ">
          <div className="w-2/3 px-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-row justify-evenly items-center gap-3 my-4 cursor-pointer"
                onClick={() => navigate(`/blogDetails/${blog.id}`)}
              >
                <img src={blog.img} alt="img" className="rounded-2xl " />
                <div className="flex flex-col px-3">
                  <h5 className="text-2xl font-semibold tracking-tighter">
                    {blog.title}
                  </h5>
                  <p className="leading-7 opacity-60 my-5 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                    enim{' '}
                  </p>
                  <div className="flex items-center">
                    <span className="font-bold tracking-tight border-r px-3">
                      {blog.author}
                    </span>
                    <span className="tracking-tight font-medium text-sm opacity-60 px-3">
                      12 November 2021
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="w-1/3 px-4">
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
