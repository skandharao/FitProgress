const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let progress = [
  {
    id: 1,
    date: "03/10/2026",
    weight: 65,
    steps: 10000,
    workout: true
  }
];

app.get("/api/progress", (req, res) => {
  res.json(progress);
});

app.post("/api/progress", (req, res) => {
  const newProgress = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    weight: req.body.weight,
    steps: req.body.steps,
    workout: req.body.workout
  };

  progress.push(newProgress);

  res.status(201).json(newProgress);
});

app.delete("/api/progress/:id", (req, res) => {
  const id = Number(req.params.id);

  progress = progress.filter(item => item.id !== id);

  res.json({
    message: "Progress deleted successfully"
  });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});