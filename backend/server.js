const cookie = require('cookie');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
// const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

// app.use(cookieParser());

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
  //   secure: true,
  //   sameSite: 'none',
  //   maxAge: 60 * 60 * 60 * 1000,
  // });

  const cookieOptions = {
    secure: true,
    sameSite: 'none',
    maxAge: 60 * 60 * 1000 // 1 hour
  };

  const cookieValue = 'Hello';

  res.setHeader('Set-Cookie', cookie.serialize('cookie', cookieValue, cookieOptions));
  res.send('Cookie set successfully!');
  // res.status(200).json({ message: "Your Cookie set" });
});

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
