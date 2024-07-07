import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port  ${PORT}`);
});
