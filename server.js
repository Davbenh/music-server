const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const middleware = require("./middleware");
const bcrypt =require("bcrypt");
const app = express();
app.use(cors());


app.post('/sign-up',(req,res)=>{
    const{userName}
})

app.use("/user",middleware,userRouter);

app.listen(4000, () => {
  console.log("connection SUCCESSFUL PORT 4000");
});
