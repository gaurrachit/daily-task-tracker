const express = require("express");
const mongoose = require("mongoose"); // ✅ Ye line zarur chahiye
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB local connection
mongoose
  .connect("mongodb://127.0.0.1:27017/taskDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Connection failed:", err));

// Routes
const taskRoutes = require("./routes/taskroutes");
app.use("/api/tasks", taskRoutes);
