import Todo from "../models/todo.js";

// to create a new task
export const addTodo = async (req, res) => {
  try {
    const { title, description, status, priority, deadline } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    const isAlreadyExist = await Todo.findOne({ title });
    if (isAlreadyExist) {
      return res
        .status(409)
        .json({ message: "A task with this title already exists." });
    }

    //status of the task
    const allowedStatuses = ["pending", "completed", "in-progress"];
    //priorities of the task
    const allowedPriorities = ["low", "medium", "high"];

    if (status && !allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status provided." });
    }

    if (priority && !allowedPriorities.includes(priority)) {
      return res.status(400).json({ message: "Invalid priority provided." });
    }

    const newTask = await Todo.create({
      title,
      description,
      status: status || "pending",
      priority: priority || "medium",
      deadline: deadline ? new Date(deadline) : undefined,
    });

    return res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// get all todo tasks
export const getTodo = async (req, res) => {
  try {
    const todoList = await Todo.find({});
    res.status(200).json(todoList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Update a todo task
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      deadline: req.body.deadline ? new Date(req.body.deadline) : undefined,
      updatedAt: Date.now(),
    };

    const updatedTodo = await Todo.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a todo task
export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res
      .status(200)
      .json({ message: "Todo deleted successfully.", deletedTodo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
