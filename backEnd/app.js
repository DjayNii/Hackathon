const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.routes");
const homeRoutes = require("./routes/home.routes");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const connectToDb = require("./Config/db");
connectToDb();

const corsOptions = {
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true, // Allows cookies to be sent
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/user", userRoutes);
app.use("/", homeRoutes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
