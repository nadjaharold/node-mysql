require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const env = process.env;

const app = express();

const connection = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("success");
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (error, results) => {
    console.log(results);
    res.render("hello.ejs");
  });
});

app.listen(3000);
