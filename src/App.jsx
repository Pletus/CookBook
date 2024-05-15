import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { createClient } from "contentful";
import Main from './components/Main';

const client = createClient({
  space: "pr9cy2bmpopx",
  accessToken: "a_BYJ3l6XTHr9msqs8m8UXVCSmlEeqfZcjtP14YqFGo",
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({});
        setData(response.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
        <Main />
      </div>
      <div className="pl-28">
        <Footer />
      </div>
    </div>
  );
}

export default App;
