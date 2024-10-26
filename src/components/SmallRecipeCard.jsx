import React from 'react';
import timer from '../assets/Timer.png';
import knife from '../assets/ForkKnife.png';
import { useNavigate } from 'react-router-dom';

const SmallRecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" rounded-xl p-4 w-52 md:min-w-72 hover:cursor-pointer"
      onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
    >
      <div className="overflow-hidden rounded-2xl">
        <img src={recipe.img} alt="recipe" loading="lazy" />
      </div>
      <p className="text-lg leading-6 font-semibold tracking-tight my-4">
        {recipe.title}
      </p>
      <div className="flex flex-row items-center">
        <span className="rounded-3xl flex flex-row gap-2 py-2">
          <img src={timer} alt="timer" loading="lazy" />
          <p className="opacity-60 md:text-sm text-xs font-medium tracking-tight">
            30 Minutes
          </p>
        </span>
        <span className="rounded-3xl flex flex-row gap-2 px-4 py-2">
          <img src={knife} alt="knife" loading="lazy" />
          <p className="opacity-60 md:text-sm font-medium tracking-tight text-xs">
            {recipe.type}
          </p>
        </span>
      </div>
    </div>
  );
};

export default SmallRecipeCard;