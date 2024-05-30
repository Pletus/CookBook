import axios from 'axios';
const port = import.meta.env.VITE_BACKEND || 'http://localhost:8000';

const getAllRecipes = async () => {
  try {
    const { data } = await axios(`${port}/recipe_detail`);
    return data;
  } catch (error) {
    console.error('Error fetching all recipes:', error);
    throw error; // rethrow the error to handle it in the component
  }
};

const recipe_Id = async (id) => {
  try {
    const { data } = await axios(`${port}/recipe_detail/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error; // rethrow the error to handle it in the component
  }
};

export { getAllRecipes, recipe_Id };
