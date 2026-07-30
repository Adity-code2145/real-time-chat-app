import express from "express";
import "dotenv/config.js";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";

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

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`🚀 Server is running on PORT: ${PORT}`);
});