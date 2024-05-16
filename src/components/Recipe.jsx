import { useState } from "react";
// import {useParams} from 'react-router-dom';

function Recipe({ data }) {
  console.log(data);
  // const { id } = useParams()
  return (
    <div>
      <h2></h2>
      <div></div>
      {/* method find */}
      {data.map((recipe, index) => (
        <div className="flex flex-col">
          <section key={recipe.sys.id}>
            <div className="relative mt-4 bg-white rounded overflow-hidden shadow-md">
              <img
                src={recipe.fields.image.fields.file.url}
                alt="About Us"
                className="w-full"
              />
              <div className="flex gap-20 flex-col justify-center items-start absolute top-1/4 left-1/5 transform -translate-y-1/2 mr-40 ml-20 mt-20">
                <h1 className="text-4xl px-4 py-2 font-serif mt-40 text-top bg-white text-black px-4 py-2 rounded-lg rounded-lg shadow-md border-2 border-gray-900">
                  {recipe.fields.title}
                </h1>
                <div className="flex flex-col gap-12 bg-white p-3 mt-10 rounded-lg shadow-md border-2 border-gray-900">
                  <div>
                    <img src="src\assets\icons\calories.svg" alt="calories" />
                    <h6 className="text-center text-black pt-2">
                      {recipe.fields.calories} calories
                    </h6>
                  </div>
                  <div className="">
                    <img src="src\assets\icons\portion.svg" alt="portion" />
                    <h6 className="text-center text-black pt-2 ">
                      {recipe.fields.portions} portions
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full fixed-sec-size flex p-16">
            <div className="w-1/3 align-center">
              <ol className="flex grid gap-8">
                <span className="text-5xl pb-4 pl-5 pt-1 w-1/2 rounded-lg rounded-lg shadow-md border-2 border-gray-900">Ingredients</span>
                {recipe.fields.ingredients.map((ingredient, index) => (
                  <div>
                    <li key={index} className="text-black text-2xl">
                      {ingredient}
                    </li>
                  </div>
                ))}
              </ol>
            </div>
            <div className="divider"></div>
            <div className="w-2/3 pl-12">
              <ol className="flex grid gap-8">
                <h1 className="text-5xl pb-4 pl-8 pt-2 w-1/6 rounded-lg rounded-lg shadow-md border-2 border-gray-900">Steps</h1>
                {recipe.fields.steps.map((step, index) => (
                  <li key={index} className="text-black text-2xl">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Recipe;
