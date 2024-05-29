import axios from 'axios';
const port = import.meta.env.VITE_BACKEND || 'http://localhost:8000';

const getAllRecipes = async () => {
  try {
    const { data } = await axios(`${port}/recipe_detail`);
    return data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

export { getAllRecipes };
