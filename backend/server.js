import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRouter.js";
import blogRoutes from "./routes/blogRouter.js";
// import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials : true
}))

app.use("/", userRoutes);
app.use("/blog", blogRoutes);

const PORT =  5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
