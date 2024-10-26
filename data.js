// Importing recipe images
import recipeImage1 from './src/assets/recipes/image 26.png';
import recipeImage2 from './src/assets/recipes/image 26-3.png';
import recipeImage3 from './src/assets/recipes/image 26-6.png';
import recipeImage4 from './src/assets/recipes/image 26-2.png';
import recipeImage5 from './src/assets/recipes/image 26-5.png';
import recipeImage6 from './src/assets/recipes/image 26-1.png';
import recipeImage7 from './src/assets/recipes/image 26-4.png';
import recipeImage8 from './src/assets/recipes/image 26-7.png';

// Importing more recipe images
import moreRecipeImage1 from './src/assets/more recipes/image 26.png';
import moreRecipeImage2 from './src/assets/more recipes/image 26-2.png';
import moreRecipeImage3 from './src/assets/more recipes/image 26-4.png';
import moreRecipeImage4 from './src/assets/more recipes/image 26-6.png';
import moreRecipeImage5 from './src/assets/more recipes/image 26-1.png';
import moreRecipeImage6 from './src/assets/more recipes/image 26-3.png';
import moreRecipeImage7 from './src/assets/more recipes/image 26-5.png';
import moreRecipeImage8 from './src/assets/more recipes/image 26-7.png';

// Importing category images
import categoryImage1 from './src/assets/categories/image 25.png';
import categoryImage2 from './src/assets/categories/image 20.png';
import categoryImage3 from './src/assets/categories/image 21.png';
import categoryImage4 from './src/assets/categories/image 22.png';
import categoryImage5 from './src/assets/categories/image 23.png';
import categoryImage6 from './src/assets/categories/image 24.png';

// Importing Instagram post images
import instaPostImage1 from './src/assets/instagram-post/Post.png';
import instaPostImage2 from './src/assets/instagram-post/Post-1.png';
import instaPostImage3 from './src/assets/instagram-post/Post-2.png';
import instaPostImage4 from './src/assets/instagram-post/Post-3.png';

// Importing blog cover images
import img1 from './src/assets/blog-covers/image 26-5.png';
import img2 from './src/assets/blog-covers/image 26-4.png';
import img3 from './src/assets/blog-covers/image 26-3.png';
import img4 from './src/assets/blog-covers/image 26.png';
import img5 from './src/assets/blog-covers/image 26-1.png';
import img6 from './src/assets/blog-covers/image 26-2.png';

// Categories data
export const categories = [
  {
    id: 1,
    title: 'Breakfast',
    img: categoryImage1,
  },
  {
    id: 2,
    title: 'Vegan',
    img: categoryImage2,
  },
  {
    id: 3,
    title: 'Meat',
    img: categoryImage3,
  },
  {
    id: 4,
    title: 'Dessert',
    img: categoryImage4,
  },
  {
    id: 5,
    title: 'Lunch',
    img: categoryImage5,
  },
  {
    id: 6,
    title: 'Chocolate',
    img: categoryImage6,
  },
];

// Instagram post data
export const instaPost = [
  {
    id: 1,
    img: instaPostImage1,
  },
  {
    id: 2,
    img: instaPostImage2,
  },
  {
    id: 3,
    img: instaPostImage3,
  },
  {
    id: 4,
    img: instaPostImage4,
  },
];

// Recipe data
export const recipes = [
  {
    id: 1,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    type: 'Snack',
    img: recipeImage1,
  },
  {
    id: 2,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    type: 'Fish',
    img: recipeImage2,
  },
  {
    id: 3,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    type: 'Breakfast',
    img: recipeImage3,
  },
  {
    id: 4,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    type: 'Healthy',
    img: recipeImage4,
  },
  {
    id: 5,
    title: 'Chicken Meatballs with Cream Cheese',
    type: 'Meat',
    img: recipeImage5,
  },
  {
    id: 6,
    title: 'Fruity Pancake with Orange & Blueberry',
    type: 'Sweet',
    img: recipeImage6,
  },
  {
    id: 7,
    title: 'The Best Easy One Pot Chicken and Rice',
    type: 'Snack',
    img: recipeImage7,
  },
  {
    id: 8,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    type: 'Noodles',
    img: recipeImage8,
  },
];

// More recipes
export const moreRecipes = [
  {
    id: 9,
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
    type: 'Healthy',
    img: moreRecipeImage1,
  },
  {
    id: 10,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    type: 'Western',
    img: moreRecipeImage2,
  },
  {
    id: 11,
    title: 'Healthy Japanese Fried Rice with Asparagus',
    type: 'Healthy',
    img: moreRecipeImage3,
  },
  {
    id: 12,
    title: 'Cauliflower Walnut Vegetarian Taco Meat',
    type: 'Eastern',
    img: moreRecipeImage4,
  },
  {
    id: 13,
    title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
    type: 'Healthy',
    img: moreRecipeImage5,
  },
  {
    id: 14,
    title: 'Barbeque Spicy Sandwiches with Chips',
    type: 'Snack',
    img: moreRecipeImage6,
  },
  {
    id: 15,
    title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
    type: 'Seafood',
    img: moreRecipeImage7,
  },
  {
    id: 16,
    title: 'Chicken Ramen Soup with Mushroom',
    type: 'Japanese',
    img: moreRecipeImage8,
  },
];

// Combine the recipes
export const combinedRecipes = [...recipes, ...moreRecipes];

export const blogs = [
  {
    id: 1,
    title: 'Crochet Projects for Noodle Lovers',
    author: 'Wade Warren',
    img: img1,
    questions: [
      'What materials are needed for crochet projects?',
      'What are some popular crochet patterns for noodle lovers?',
      'How long does it take to complete a crochet project for beginners?',
      'What tips can help improve crochet skills quickly?',
    ],
  },
  {
    id: 2,
    title: '10 Vegetarian Recipes To Eat This Month',
    author: 'Robert Fox',
    img: img2,
    questions: [
      'What are the health benefits of eating vegetarian?',
      'What are some easy-to-make vegetarian dishes?',
      'Which vegetarian ingredients are essential for a balanced diet?',
      'What are the best vegetarian meals for weight loss?',
    ],
  },
  {
    id: 3,
    title: 'Full Guide to Becoming a Professional Chef',
    author: 'Dianne Russel',
    img: img3,
    questions: [
      'What are the necessary skills to become a professional chef?',
      'How long does it take to train as a chef?',
      'What are some challenges faced by professional chefs?',
      'What are the most important kitchen tools for a chef?',
    ],
  },
  {
    id: 4,
    title: 'Simple & Delicious Vegetarian Lasagna',
    author: 'Leslie Alexandar',
    img: img4,
    questions: [
      'What are the key ingredients for making vegetarian lasagna?',
      'How can you make a vegetarian lasagna gluten-free?',
      'What are some tips for layering a lasagna perfectly?',
      'Can you freeze vegetarian lasagna for later?',
    ],
  },
  {
    id: 5,
    title: 'Plantain and Pinto Stew with Aji Verde',
    author: 'Courtney Henry',
    img: img5,
    questions: [
      'What are the health benefits of plantains and pinto beans?',
      'What makes Aji Verde sauce unique?',
      'How can you adjust the spice level in Aji Verde?',
      'What are some good side dishes to serve with plantain and pinto stew?',
    ],
  },
  {
    id: 6,
    title: 'We’re Hiring a Communications Assistant!',
    author: 'Albert Flores',
    img: img6,
    questions: [
      'What are the key responsibilities of a communications assistant?',
      'What skills are required to excel in a communications role?',
      'How can a communications assistant help improve brand presence?',
      'What qualifications are needed to apply for a communications assistant position?',
    ],
  },
];
