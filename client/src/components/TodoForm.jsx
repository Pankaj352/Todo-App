import React, { useState, useEffect } from "react";

const TodoForm = ({ onSubmit, editingTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("pending");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title || "");
      setDescription(editingTodo.description || "");
      setPriority(editingTodo.priority || "medium");
      setStatus(editingTodo.status || "pending");
      setDeadline(editingTodo.deadline ? new Date(editingTodo.deadline).toISOString().split("T")[0] : "");
    } else {
      setTitle("");
      setDescription("");
      setPriority("medium");
      setStatus("pending");
      setDeadline("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newTodo = { title, description, priority, status, deadline: deadline ? new Date(deadline) : null };
    
    onSubmit(newTodo);

    // Reset form after submission
    setTitle("");
    setDescription("");
    setPriority("medium");
    setStatus("pending");
    setDeadline("");
  };

  return (
    <div className="border p-4 shadow-sm">
      <h3 className="text-center mb-4">{editingTodo ? "Edit Task" : "Add New Task"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            cols={10}
            rows={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">Priority</label>
          <select
            id="priority"
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            type="date"
            id="deadline"
            className="form-control"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {editingTodo ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
