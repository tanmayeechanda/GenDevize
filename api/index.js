import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "../server/routes/auth.js";
import deviceRoutes from "../server/routes/devices.js";
import adminRoutes from "../server/routes/admin.js";

const app = express();

app.use(cors());
app.use(express.json());

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(process.env.MONGODB_URI);

  return cached.conn;
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database connection failed" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/admin", adminRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "API Running" });
});

export default app;
