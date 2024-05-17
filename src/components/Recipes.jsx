import "../App.css";
import { NavLink } from "react-router-dom";
import person1Image from "../assets/imgs/person1.png";
import person2Image from "../assets/imgs/person2.png";
import person3Image from "../assets/imgs/person3.png";
import person4Image from "../assets/imgs/person4.png";
import salmonImage from "../assets/imgs/salmon.png";
import masalaImage from "../assets/imgs/masala.png";
import stewImage from "../assets/imgs/stew.png";
import cakeImage from "../assets/imgs/cake.png";
import calories from '../assets/icons/calories.svg';
import portion from '../assets/icons/portion.svg';
import Recipe from "./Recipe";


function Recipes() {
  return (
    <div>
      <section className="mx-40 my-20">
        <h2 className="text-gray-700 text-4xl mt-10 font-serif">
          Our Newest Recipes
        </h2>
        <hr className="border-orange-500 border-1 mt-2" />
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="my-10 shadow-md rounded overflow-hidden">
            <NavLink to="./recipe/2">
              <img
                className="w-full h-32 sm:h-64 object-cover"
                src={salmonImage}
                alt="Lachs"
              />
            </NavLink>
            <h3 className="my-5 pl-3 text-md font-bold">Steamed Salmon</h3>
            <div className="pl-40 flex">
              <img
                className="rounded-full size-12"
                src={person1Image}
                alt="denis"
              />
              <h3 className="my-5 pl-3 text-md font-bold">Denis</h3>
            </div>
          </div>
          <div className="my-10 shadow-md rounded overflow-hidden">
            <NavLink to="./recipe/3">
              <img
                className="w-full h-32 sm:h-64 object-cover"
                src={masalaImage}
                alt="masala"
              />
            </NavLink>
            <h3 className="my-5 pl-3 text-md font-bold">Chicken Masala</h3>
            <div className="pl-40 flex">
              <img
                className="rounded-full size-12"
                src={person2Image}
                alt="anitha"
              />
              <h3 className="my-5 pl-3 text-md font-bold">Anitha</h3>
            </div>
          </div>
          <div className="my-10 shadow-md rounded overflow-hidden">
            <NavLink to="./recipe/4">
              <img
                className="w-full h-32 sm:h-64 object-cover"
                src={stewImage}
                alt="rabbit"
              />
            </NavLink>
            <h3 className="my-5 pl-3 text-md font-bold">Rabbit Stew</h3>
            <div className="pl-40 flex">
              <img
                className="rounded-full size-12"
                src={person3Image}
                alt="yago"
              />
              <h3 className="my-5 pl-3 text-md font-bold">Yago</h3>
            </div>
          </div>
          <div className="my-10 shadow-md rounded overflow-hidden">
            <NavLink to="./recipe/1">
              <img
                className="w-full h-32 sm:h-64 object-cover"
                src={cakeImage}
                alt="vanilla"
              />
            </NavLink>
            <h3 className="my-5 pl-3 text-md font-bold">Vanilla Cake</h3>
            <div className="pl-40 flex">
              <img
                className="rounded-full size-12"
                src={person4Image}
                alt="rabia"
              />
              <h3 className="my-3 pl-3 text-md font-bold">Rabia</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recipes;
