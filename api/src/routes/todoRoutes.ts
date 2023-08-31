import express from 'express';
import * as todoController from '../controllers/todoController';

const router = express.Router();

router.get('/todos', todoController.getTodos);
router.post('/todo/new', todoController.createTodo);
router.delete('/todo/delete/:id', todoController.deleteTodo);
router.put('/todo/complete/:id', todoController.completeTodo);

export default router;