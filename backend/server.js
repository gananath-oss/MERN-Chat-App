const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const Xpress = require("xpress");
const { notFound, errorHAndler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

// to accept the json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHAndler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);
