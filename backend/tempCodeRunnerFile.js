const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const taskRoutes = require("./routes/task.route");

app.use("/tasks", taskRoutes);

app.use(((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
      error: err.message || "Internal server error"
    });
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 