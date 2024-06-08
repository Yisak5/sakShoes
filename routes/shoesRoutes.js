const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// 모든 Todo 항목 조회
router.get('/', todoController.getAllTodos);

// 특정 Todo 항목 조회
router.get('/:id', todoController.getTodoById);

// 새로운 Todo 항목 생성
router.post('/', todoController.createTodo);

// Todo 항목 업데이트
router.put('/:id', todoController.updateTodo);

// Todo 항목 삭제
router.delete('/:id', todoController.deleteTodo);

module.exports = router;