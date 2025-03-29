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
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-8 my-auto overflow-hidden">
      {/* Main Section */}
      <section className="my-10 lg:my-20">
        {/* Header Section */}
        <header className="flex md:flex-row flex-col justify-between items-center gap-10">
          <div className="flex flex-col gap-8 w-full">
            <h1 className="font-semibold text-2xl lg:text-6xl tracking-tighter">
              {blog.title}
            </h1>
            <div className="flex md:flex-row flex-col md:items-center gap-4">
              <span className="pr-4 border-r font-bold tracking-tight">
                {blog.author}
              </span>
              <span className="opacity-60 font-medium text-sm">
                12 November 2021
              </span>
            </div>
          </div>
        </header>

        {/* Blog Image */}
        <figure className="my-10">
          <img src={blog.img} alt={blog.title} className="rounded-3xl w-full" />
          <figcaption className="sr-only">{blog.title}</figcaption>
        </figure>

        {/* Blog Content */}
        <div className="flex md:flex-row flex-col gap-8">
          <div className="md:w-2/3">
            {blog.questions.map((question, index) => (
              <div className="mb-10" key={index}>
                <h5 className="font-semibold text-2xl tracking-tighter">
                  {question}
                </h5>
                <p className="opacity-60 my-4 text-base leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="md:w-1/3">
            <h2 className="font-semibold text-4xl tracking-tighter">
              Other Blogs
            </h2>
            <div className="flex flex-col gap-4 my-4">
              {blogs
                .filter((item) => item.id <= 3)
                .map((blog) => (
                  <OtherBlogCard blog={blog} key={blog.id} />
                ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Subscribe Card */}
      <SubscribeCard />

      {/* Recipe Recommendations */}
      <section className="my-10 lg:my-20">
        <h2 className="font-semibold text-4xl text-center tracking-tighter">
          You may like these recipes too
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

export default BlogDetails;

const OtherBlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row justify-between items-center gap-4 cursor-pointer"
      onClick={() => navigate(`/blogDetails/${blog.id}`)}
    >
      <div>
        <img
          src={blog.img}
          alt="blog image"
          className="rounded-xl max-w-40 max-h-40"
        />
      </div>
      <div className="flex flex-col justify-between items-start">
        <p className="font-semibold text-xl line-clamp-2 leading-7 tracking-tighter">
          {blog.title}
        </p>
        <p className="opacity-70 font-medium text-sm tracking-tight">
          {blog.author}
        </p>
      </div>
    </div>
  );
};
