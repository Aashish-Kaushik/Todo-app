const mongooes = require("mongoose");

const taskSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      required: [true, "must be provided"],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongooes.Schema.Type.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export const Task = mongooes.model("Task", taskSchema);
