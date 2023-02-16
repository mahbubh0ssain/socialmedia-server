import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/posts.js";

const app = express();

app.use("/posts", router);

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const port = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`Social Media server is running on port ${port}`);
    })
  )
  .catch((err) => console.log(err?.message));
