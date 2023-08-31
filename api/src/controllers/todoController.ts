import { Request, Response } from 'express';
const Todo = require('../models/todoModel');

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = new Todo({
      text: req.body.text,
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const completeTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
