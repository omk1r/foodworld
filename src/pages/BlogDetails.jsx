import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogs, combinedRecipes } from '../../data';
import SubscribeCard from '../components/SubscribeCard';
import SmallRecipeCard from '../components/SmallRecipeCard';

const BlogDetails = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // Or show a message like 'Blog not found'
  }

  return (
    <div className="my-auto mx-8">
      <section className="lg:my-20 my-10">
        {/* blog post */}
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-6xl tracking-tighter">
            {blog.title}
          </h1>
          <div className="flex items-center my-4">
            <span className="font-bold tracking-tight border-r px-3">
              {blog.author}
            </span>
            <span className="tracking-tight font-medium text-sm opacity-60 px-3">
              12 November 2021
            </span>
          </div>
          <p className="leading-7 opacity-60 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <img src={blog.img} alt="" className="w-2/3 rounded-3xl my-4" />
          <div className="my-4 flex flex-row ">
            <div className="w-3/4 flex items-start  flex-col px-14">
              {blog.questions.map((question, index) => (
                <div className="mb-10" key={index}>
                  <h5 className="text-2xl leading-9 tracking-tighter font-semibold">
                    {question}
                  </h5>
                  <p className="leading-7 opacity-60 my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ac ultrices odio. Nulla at congue diam, at
                    dignissim turpis. Ut vehicula sed velit a faucibus. In
                    feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.
                    Praesent feugiat elementum ex ut suscipit.
                  </p>
                </div>
              ))}
            </div>
            <aside className="w-1/4 px-4">
              <span className="font-semibold text-4xl tracking-tighter">
                Other Recipe
              </span>
              <div className="flex flex-col gap-4 my-4">
                {blogs
                  .filter((item) => item.id <= 3)
                  .map((recipe) => (
                    <OtherRecipeCard recipe={recipe} key={recipe.id} />
                  ))}
              </div>
            </aside>
          </div>
        </div>

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
      </section>
    </div>
  );
};

export default BlogDetails;

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
