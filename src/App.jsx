import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
        <Route path="/blogList" element={<BlogList />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
