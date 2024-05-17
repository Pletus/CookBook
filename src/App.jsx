import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createClient } from "contentful";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import Main from "./components/Main";
import Recipe from "./components/Recipe";
import Layout from "./components/Layout";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Recipes from "./components/Recipes";

const contentfulClient = createClient({
  space: "pr9cy2bmpopx",
  accessToken: "a_BYJ3l6XTHr9msqs8m8UXVCSmlEeqfZcjtP14YqFGo",
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await contentfulClient.getEntries({});
        setData(response.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <ContentfulProvider client={contentfulClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/recipe/:id" element={<Recipe data={data} />} />
          <Route path="/recipes/recipe/:id" element={<Recipe data={data} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/recipes" element={<Recipes />} />
        </Route>
      </Routes>  
    </ContentfulProvider>
  );
}

export default App;