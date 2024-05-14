import { useState } from "react";

function Recipe({ data }) {
  console.log(data);

  return (
    <div>
      <h2></h2>
      <div></div>
      {data.map((receta, index) => (
        <h1 className="text-black text-center" key={index}>
          {receta.fields.title}
        </h1>
      ))}
    </div>
  );
}

export default Recipe;
