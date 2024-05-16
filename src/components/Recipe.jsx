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
          <section className="w-full fixed-sec-size flex">
            <div className="w-1/2">
              <ol>
                <li className="text-black flex flex-col p-40">
                  {recipe.fields.ingredients}
                </li>
              </ol>
            </div>
            <div className="w-1/2">
              <ol>
                <li className="text-black flex flex-col p-20">
                  {recipe.fields.steps}
                </li>
              </ol>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Recipe;
