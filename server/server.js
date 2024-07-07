import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()) 
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port  ${PORT}`);
});
