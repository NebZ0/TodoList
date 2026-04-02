const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

const {validateTask} = require("../middlewares/validateTask");

router.get("/", taskController.getAll);
router.post("/", validateTask, taskController.addTask);
router.patch("/:id", taskController.taskDone);

module.exports = router;