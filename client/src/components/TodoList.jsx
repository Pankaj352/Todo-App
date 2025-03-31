import React from "react";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-body-tertiary rounded">
          <div>
            <h5 className="text-center">{todo.title}</h5>
            <p>{todo.description}</p>
            <p className="" style={{ fontSize: "10px" }}>
              <strong>Status:</strong> {todo.status}
            </p>
            <p style={{ fontSize: "10px" }}>
              <strong>Priority:</strong> {todo.priority}
            </p>
            {todo.deadline && (
              <p style={{ fontSize: "10px" }}>
                <strong>Deadline:</strong>{" "}
                {new Date(todo.deadline).toLocaleDateString()}
              </p>
            )}
            <p>
              <small>
                <strong>Created At:</strong>{" "}
                {new Date(todo.createdAt).toLocaleString()}
              </small>
            </p>
          </div>
          <div>
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
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
