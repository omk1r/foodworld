// RecipeCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-custom-gradient p-4 rounded-xl min-w-40 max-w-96 hover:cursor-pointer"
      onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
    >
      <div className="rounded-2xl overflow-hidden">
        <img src={recipe.img} alt="recipe" className="w-full" />
      </div>
      <p className="my-2 md:my-4 font-semibold text-xl md:text-2xl leading-8 tracking-tight">
        {recipe.title}
      </p>
      <div className="flex flex-row items-center">
        <span className="flex flex-row gap-2 py-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/wuxzxamhbwd6em998td1"
            alt="timer"
          />
          <p className="opacity-60 font-medium text-sm">30 Minutes</p>
        </span>
        <span className="flex flex-row gap-2 px-4 py-2 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dd85jrb4b/image/upload/f_auto,q_auto/v1/assets/zg5w1yssxvitwkxjq9dc"
            alt="knife"
          />
          <p className="opacity-60 font-medium text-sm">{recipe.type}</p>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
