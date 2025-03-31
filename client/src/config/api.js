import axios from "axios";

const API_BASE_URL = "https://todo-app-que8.onrender.com/api/todos";

export const getTodos = async () => {
  try {
    const { data } = await axios.get(API_BASE_URL);
    return data; 
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    return []; 
  }
};

export const createTodo = async (todoData) => {
  try {
    const { data } = await axios.post(API_BASE_URL, todoData);
    return data;
  } catch (error) {
    console.error("Error creating todo:", error.message);
    return null;
  }
};

export const updateTodo = async (id, updatedData) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/updateTodo/${id}`, updatedData);
    return data;
  } catch (error) {
    console.error("Error updating todo:", error.message);
    return null;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    return false;
  }
};
