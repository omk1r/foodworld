// RecipeCard.jsx
import React from 'react';
import timer from '../assets/Timer.png';
import knife from '../assets/ForkKnife.png';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-custom-gradient rounded-xl p-4 max-w-96 min-w-40 hover:cursor-pointer"
      onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
    >
      <div className="overflow-hidden rounded-2xl">
        <img src={recipe.img} alt="recipe" className="w-full" />
      </div>
      <p className="text-2xl font-semibold leading-8 tracking-tight my-4">
        {recipe.title}
      </p>
      <div className="flex flex-row items-center">
        <span className="rounded-3xl flex flex-row gap-2 py-2">
          <img src={timer} alt="timer" />
          <p className="opacity-60 text-sm font-medium">30 Minutes</p>
        </span>
        <span className="rounded-3xl flex flex-row gap-2 px-4 py-2">
          <img src={knife} alt="knife" />
          <p className="opacity-60 text-sm font-medium">{recipe.type}</p>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
