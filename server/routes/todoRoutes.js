import express from "express";
import {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoControllers.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/", getTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
