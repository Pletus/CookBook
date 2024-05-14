import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "pr9cy2bmpopx",
  accessToken: "a_BYJ3l6XTHr9msqs8m8UXVCSmlEeqfZcjtP14YqFGo",
});

function App() {
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({});
        setData(response.items);
      } catch (error) {
        console.error(error);
      }
    };
    console.log(data);
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="pl-28">
        <Footer />
      </div>
      <div>
        <Recipe />
        <h1>{}</h1>
      </div>
    </div>
  );
}

export default App;
