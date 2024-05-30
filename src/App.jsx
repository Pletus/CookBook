import { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import Layout from "./components/Layout";
import "./App.css";
import './index.css';
import AboutUs from "./components/AboutUs";
import Recipes from "./components/Recipes";
import { getAllRecipes } from "./Service/fetchDB";

function App() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch all recipe data when the component mounts
    getAllRecipes()
      .then(data => setData(data))
      .catch(error => console.error("Error fetching all recipes:", error));
  }, []);
  console.log(data)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        {/* Pass the recipe data as props to the Recipe component */}
        <Route path="/recipe/:id" element={<Recipe data={data} />} />
        <Route path="/recipes/recipe/:id" element={<Recipe data={data} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
}

export default App;
