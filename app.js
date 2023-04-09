const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const { connectDB } = require("./config/db");
require("dotenv").config();
const { notFound, errorHandler } = require("./middelware/notFound");
//middleware
app.use(express.static("./public/"));
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

// routes

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(`server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
