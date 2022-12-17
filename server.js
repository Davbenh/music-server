require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3625;

require("./DL/db").connect().then(() => {console.log("DATABASE IS CONNECTED!!");}).finally(() => {app.listen(PORT, () => {
  console.log("SERVER IS RUNNING!!! : listening to port " + PORT);
});});

const userRouter = require("./routes/userRouter");
const playlistRouter = require("./routes/playlistRouter");


app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/playlist", playlistRouter);


