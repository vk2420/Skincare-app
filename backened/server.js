const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;

const skincareData = require("./skincareData.json");

app.use(cors());
app.use(express.json());

app.get("/api/skincare", (req, res) => {
  const { gender, skinType, age } = req.query;
  const recommendations = skincareData[skinType] || {};
  res.json(recommendations);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
