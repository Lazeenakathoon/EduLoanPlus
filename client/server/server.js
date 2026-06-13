const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const apiRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "EMI Calculator API is running" });
});

// Mount all API routes
app.use("/api", apiRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
