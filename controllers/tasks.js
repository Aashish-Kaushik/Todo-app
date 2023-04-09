const Task = require("../models/tasksModel");

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createTask = async (req, res) => {
  try {
    if (req.body) {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
    } else {
      res.status(400).json({ message: "Please provide a task" });
    }
  } catch (error) {
    res.json(error);
  }
};
exports.getTask = async (req, res) => {
  try {
    if (req.params.id) {
      const { id: taskID } = req.params;
      console.log(req.params.id);
      const task = await Task.findOne({ _id: taskID });
      if (!task) {
        res.status(200).json({ message: "Task not found" });
      }
      res.status(200).json({ task });
    } else {
      res.status(400).json({ message: "Please provide a task ID" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body);

    if (!task) {
      res.status(200).json({ message: "Task not found" });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      res.status(200).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};
