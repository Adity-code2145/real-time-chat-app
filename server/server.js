import express from "express";
import "dotenv/config.js";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Connect Database
connectDB();

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Test Route
app.get("/api/status", (req, res) => {
    res.send("Server is live");
});

//Routes setup
app.use("/api/auth", userRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`🚀 Server is running on PORT: ${PORT}`);
});