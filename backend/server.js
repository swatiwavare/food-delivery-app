import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();
//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

// test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
