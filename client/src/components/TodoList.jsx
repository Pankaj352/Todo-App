import React from "react";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="list-group-item  shadow-sm p-3 mb-3 bg-body-tertiary rounded">
          <h5 className="text-center">{todo.title}</h5>
          <p className="text-center">{todo.description}</p>
          <div className="d-block justify-content-between align-items-center">
            <div className="d-flex justify-content-around">
              <p className="" style={{ fontSize: "12px" }}>
                <strong>Status:</strong> {todo.status}
              </p>
              <p style={{ fontSize: "12px" }}>
                <strong>Priority:</strong> {todo.priority}
              </p>
            </div>
            <div className="d-flex justify-content-around">
              {todo.deadline && (
                <p style={{ fontSize: "12px" }}>
                  <strong>Deadline:</strong>{" "}
                  {new Date(todo.deadline).toLocaleDateString()}
                </p>
              )}
              <p style={{ fontSize: "12px" }}>
                <small>
                  <strong>Created At:</strong>{" "}
                  {new Date(todo.createdAt).toLocaleString()}
                </small>
              </p>
            </div>
            <div className="d-flex justify-content-around">
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editTodo(todo)}>
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo._id)}>
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
