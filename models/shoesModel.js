const mongoose = require('mongoose');

// 스키마 정의
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

// 모델 생성
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;