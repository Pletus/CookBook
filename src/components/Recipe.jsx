import { useState } from "react";

function Recipe({ data }) {
  console.log(data);

  return (
    <div>
      <h2></h2>
      <div></div>
      {data.map((recipe, index) => (
        <div>
          <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} width='2048' height='1365' />
          <h1 className="text-black text-center text-4xl" key={recipe.sys.id}>
            {recipe.fields.title}
          </h1>
        </div>  
      ))}
    </div>
  );
}

export default Recipe;
