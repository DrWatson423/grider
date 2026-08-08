import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"

const app = express();

app.use(cors());
app.use((req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.url);
  console.log("CONTENT TYPE:", req.headers["content-type"]);
  next();
});

app.use(express.json());



app.get("/", (req, res) => {
    res.json({
        message: "Grider API Running"
    });
});

app.use("/api/auth", authRoutes);

export default app;