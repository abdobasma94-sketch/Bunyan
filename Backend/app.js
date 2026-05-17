require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

//simple logger
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next();
  });
}
app.get("/test", (req, res) => {
    res.json({ message: "Test Router" });
});

const connectDB = require("./config/db");
connectDB();

  const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });