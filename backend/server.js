import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRouter.js";
import blogRoutes from "./routes/blogRouter.js";
// import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("Server is running");
// });
app.use("/", userRoutes);
app.use("/blog", blogRoutes);

const PORT =  5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
