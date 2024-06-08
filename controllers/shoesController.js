const Shoes = require('../models/shoesModel');

// 모든 Shoes 항목 조회
exports.getAllShoes = async (req, res) => {
  try {
    const shoes = await Shoes.find();
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 특정 Shoes 항목 조회
exports.getTodoById = async (req, res) => {
  try {
    const shoes = await Shoes.findById(req.params.id);
    if (!shoes) {
      return res.status(404).json({ message: "Shoes not found" });
    }
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 새로운 Todo 항목 생성
exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Todo 항목 업데이트
exports.updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Todo 항목 삭제
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};