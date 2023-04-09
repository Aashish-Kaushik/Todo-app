const mongooes = require("mongoose");

const taskSchema = new mongooes.Schema(
  {
    name: {
      type: "String",
      required: [true, "must be provided"],
      trim: true,
    },
    completed: {
      type: "Boolean",
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = mongooes.model("Task", taskSchema);
