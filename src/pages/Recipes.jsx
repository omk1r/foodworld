import React from 'react';
import { combinedRecipes } from '../../data';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  return (
    <div className="my-auto mx-8">
      <section className="lg:my-20 my-10">
        <div className="md:text-5xl text-3xl font-semibold text-center tracking-tight">
          Simple and tasty recipes
        </div>
        <p className="text-center md:text-base text-sm opacity-60 md:mx-48 md:my-8 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          cupiditate expedita aperiam natus blanditiis reprehenderit itaque ex
          perferendis{' '}
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {combinedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recipes;
