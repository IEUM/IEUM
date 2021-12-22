const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용
//const cookieParser = require("cookie-parser");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root", //mysql의 id
  password: "mysql1234",
  database: "ieum", //사용할 데이터베이스
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

//bodyParser를 사용
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//app.use(cookieParser()); //request, response부분에서 사용 가능

// 공식: app.통신방법("/통신할 주소", (req, res)....
// req(요청): 앞에서 보낸 객체를 받아 body가 앞에서 보낸 데이터
// res(응답): express에서 데이터를 보낼때에 사용

// app.get("/", (req, res) => {
//   const sql = "SELECT hospital_name FROM hospital LIMIT 10";
//   connection.query(sql, function (err, result, fields) {
//     if (err) throw err;
//     res.send(result);
//     console.log(result);
//   });
// });

app.post("/keyword", (req, res) => {
  const keyword = req.body.keyword;
  console.log(keyword);
  connection.query(
    "SELECT * FROM hospital WHERE hospital_name LIKE '%" +
      keyword +
      "%' LIMIT 1000",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        // console.log(err);
      } else {
        const sendAllReview = rows.filter((row) => {
          return row.hospital_name.indexOf(keyword) !== -1;
        });
        res.send(sendAllReview);
        console.log(sendAllReview);
      }
    }
  );
});

app.post("/city", (req, res) => {
  const city = req.body.city;
  console.log(city);
  connection.query(
    "SELECT distinct temp_gu FROM hospital WHERE city_code =" +
      city +
      " order by temp_gu",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
      } else {
        res.send(rows);
      }
    }
  );
});

app.post("/gu", (req, res) => {
  const gu = req.body.gu;
  console.log(gu);
  connection.query(
    "SELECT distinct temp_dong FROM hospital WHERE temp_gu ='" +
      gu +
      "' and temp_dong <> '' order by temp_dong",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
      } else {
        res.send(rows);
        console.log(rows);
      }
    }
  );
});

app.post("/address", (req, res) => {
  const city = req.body.city;
  const gu = req.body.gu;
  const dong = req.body.dong;
  console.log(city, gu, dong);
  connection.query(
    "select * from hospital where city_code='" +
      city +
      "' and temp_gu='" +
      gu +
      "' and temp_dong='" +
      dong +
      "' limit 100",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
      } else {
        res.send(rows);
      }
    }
  );
});

app.post("/review", (req, res) => {
  const hospital_id = req.body.hospital_id;
  console.log(hospital_id);
  connection.query(
    "SELECT * FROM review WHERE hospital_id LIKE '%" + hospital_id + "%'",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
      } else {
        // const sendAllReview = rows.filter((row) => {
        //   return row.hospital_id.indexOf() !== -1;
        // });
        // res.send(sendAllReview);
        // console.log(sendAllReview);
        res.send(rows);
        console.log(rows);
      }
    }
  );
});

app.post("/write", (req, res) => {
  res.cookie("cookie", "cookie");
  console.log(req.cookies);
  const hospital_id = req.body.hospital_id;
  const content = req.body.content;
  const today = req.body.today;
  // console.log(hospital_id);
  // console.log(content);
  // console.log(today);
  connection.query(
    "insert into review(user_id, hospital_id, content, review_date) values(?,?,?,?)",
    [1, hospital_id, content, today],
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
      } else {
        console.log(rows);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
