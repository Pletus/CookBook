import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContentful } from "react-contentful";
import calories from '../assets/icons/calories.svg';
import portion from '../assets/icons/portion.svg';
import "../App.css";

function Recipe({ data }) {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = data.find((recipe) => recipe.recipe_id === recipeId);
console.log(recipe)
  return (
    <div key={recipeId}>
      <div className="flex flex-col">
        <section>
          <div className="relative mt-4 bg-white rounded overflow-hidden shadow-md">
            <img
              // src={recipe.fields.image.fields.file.url}
              alt="About Us"
              className="w-full"
            />
            <div className="flex gap-20 flex-col justify-center items-start absolute top-1/4 left-1/5 transform -translate-y-1/2 mr-40 ml-20 mt-20">
              <h1 className="gradient2 font-extrabold text-4xl px-4 py-2 font-serif mt-40 text-top bg-white text-black px-4 py-2 rounded-lg rounded-lg shadow-md border-2 border-gray-900">
                {recipe.recipe_name}
              </h1>
              <div className="gradient2 flex flex-col gap-12 bg-white p-3 mt-10 rounded-lg shadow-md border-2 border-gray-900">
                <div>
                  <img src={calories} alt="calories" />
                  <h6 className="text-center text-black pt-2 font-bold">
                    {/* {recipe.fields.calories} calories */}
                  </h6>
                </div>
                <div className="">
                  <img src={portion} alt="portion" />
                  <h6 className="text-center text-black pt-2 font-bold">
                    {/* {recipe.fields.portions} portions */}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full fixed-sec-size flex p-16  gradient2">
          <div className="w-1/3 align-center">
            <ol className="flex grid gap-8">
              <span className="text-5xl pb-4 pl-5 pt-1 w-2/3 rounded-lg rounded-lg shadow-md border-2 border-gray-900 gradient font-medium italic">
                Ingredients
              </span>
              {/* {recipe.ingredients.map((ingredient, index) => (
                <div>
                  <li key={index} className="text-black text-2xl border-b-4 border-amber-100 font-bold italic">
                    {ingredient}
                  </li>
                </div>
              ))} */}
            </ol>
          </div>
          <div className="divider"></div>
          <div className="w-2/3 pl-12">
            <ol className="flex grid gap-8">
              <h1 className="text-5xl pb-4 pl-8 pt-2 w-1/5 rounded-lg rounded-lg shadow-md border-2 border-gray-900 gradient font-medium italic">
                Steps
              </h1>
              {/* {recipe.fields.steps.map((step, index) => (
                <li key={index} className="text-black text-2xl border-b-4 border-amber-100 font-bold italic">
                  {step}
                </li>
              ))} */}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recipe;
