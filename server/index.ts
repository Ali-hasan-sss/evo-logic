import express from "express";
import cors from "cors";
import { coursesRouter } from "./routes/courses";
import { servicesRouter } from "./routes/services";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/courses", coursesRouter);
app.use("/api/services", servicesRouter);

// Default route
app.get("/", (req, res) => {
  res.send("API Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
