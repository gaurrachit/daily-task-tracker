const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Har task me text hona zaruri hai
  },
  completed: {
    type: Boolean,
    default: false, // Default: task complete nahi hai
  },
});

module.exports = mongoose.model("Task", TaskSchema);
