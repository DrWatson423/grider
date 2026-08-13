import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import riderRoutes from "./routes/riderRoutes.js";

const app = express();


// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://grider.adjeiboatengelvis423.workers.dev/"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);


// Body parser
app.use(express.json());


// Request logger
app.use((req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.url);
  console.log("ORIGIN:", req.headers.origin);
  next();
});


// Root
app.get("/", (req, res) => {
  res.json({
    message: "Grider API Running"
  });
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/riders", riderRoutes);


export default app;