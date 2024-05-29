import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import Layout from "./components/Layout";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Recipes from "./components/Recipes";
import { getAllRecipes } from "./Service/fetchDB";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllRecipes().then(data => setData(data))
  }, []);
console.log(data)
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/recipe/:id" element={<Recipe data={data} />} />
          <Route path="/recipes/recipe/:id" element={<Recipe data={data} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/recipes" element={<Recipes />} />
        </Route>
      </Routes>  
  );
}

export default App;