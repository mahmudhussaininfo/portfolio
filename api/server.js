import express, { urlencoded } from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { mongoDbConnect } from "./config/db.js";
import userRoute from "./routes/UserRoute.js";

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 9090;

//routes
app.use("/api/v1/portfolio", userRoute);

//server lesten
app.listen(PORT, () => {
  mongoDbConnect();
  console.log(`server is running on ${PORT}`.bgCyan.gray);
});
