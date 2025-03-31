import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo, updateTodo } from "./config/api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 2;

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(Array.isArray(res) ? res : []); // ✅ FIXED
    } catch (err) {
      console.error("Error fetching todos:", err);
      setTodos([]);
    }
  };

  const handleAddTodo = async (todo) => {
    try {
      if (editingTodo) {
        await updateTodo(editingTodo._id, todo);
        setEditingTodo(null);
      } else {
        await createTodo(todo);
      }
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  // **Filtered todos based on search**
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // **Pagination logic**
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Todolist App
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TodoForm onSubmit={handleAddTodo} editingTodo={editingTodo} />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TodoList
              todos={currentTodos}
              deleteTodo={handleDeleteTodo}
              editTodo={handleEditTodo}
            />
            {/* Pagination Buttons */}
            <div className="d-flex justify-content-center mt-3">
              {Array.from(
                { length: Math.ceil(filteredTodos.length / todosPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm mx-1 ${
                      currentPage === i + 1
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
