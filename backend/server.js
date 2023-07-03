const cookie = require("cookie");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(cookieParser());

app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/cookie", (req, res) => {
  // res.cookie("cookie", "Hello", {
  //   httpOnly: false,
  //   SameSite: "None",
  //   secure: true,
  //   maxAge: 60 * 60 * 60 * 1000,
  // });

  res.cookie('myCookie', 'cookieValue', {
    maxAge: 3600000,
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  });
  res.send("Cookie set successfully!");
});

app.post("/cokie", (req,res)=>{

  const token = req.cookies.myCookie;
  console.log(token)
  res.send(token);

})
const token = req.cookies.refreshToken;


// mongoose connect

// mongoose
//   .connect(process.env.MONGO_LINK)
//   .then(() => {
//     console.log("Database connect successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log(`Serving running at http://localhost:${port}`);
});
