const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const db = require("./config/db.js");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

/* const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234",
  database: "movie_board2",
}); */

app.get("/", (req, res) => {
  console.log("root");
});

app.get("/movies", (req, res) => {
  console.log("/movies");
  db.query("select * from movie2", (err, data) => {
    if (!err) {
      // console.log("data",data);
      res.send(data);
    } else {
      console.log("err", err);
    }
  });
});

app.post("/movie2", (req, res) => {
  const sql = "insert into movie2(`title`,`pd`,`au` ) value (?)";
  const values = [req.body.title, req.body.pd, req.body.au];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("실패");
      return res.json(err);
    } else {
      console.log("성공");
      return res.json(data);
    }
  });
});

app.listen(PORT, () => {
  console.log("서버실행");
  console.log(`Sever on:http://localhost:${PORT}`);
});
