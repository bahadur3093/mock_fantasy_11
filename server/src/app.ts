import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import connectDB from "./utils/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API is ready to accept requests');
});

export default app;