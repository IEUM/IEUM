const path = require("path");
const express = require("express");
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

//"../src/pages/FindHospital"

var connection = mysql.createConnection({
  host: "localhost",
  user: "root", //mysql의 id
  password: "dlsrksro50^^", //mysql의 password
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

// app.get("/key", (req, res) =>
//   res.sendFile(path.join(__dirname, "../src/pages/", "FindHospital.js"))
// );
// app.post("/key", (req, res) => res.send(req.body));

app.post("/keyword", (req, res) => {
  const keyword = req.body.keyword;
  console.log(keyword);
  connection.query(
    "SELECT hospital_name FROM hospital WHERE hospital_name LIKE '%" +
      keyword +
      "%' LIMIT 100",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        // console.log(err);
      } else {
        //console.log("성공");
        res.send(rows);
        console.log(rows);
      }
    }
  );

  // 보내는 데이터
  // const sendText = {
  //   text: "express 데이터",
  // };
  // res.send(sendText);
});

app.post("/callbody", (req, res) => {
  connection.query(
    "SELECT * FROM hospital LIMIT 10",
    function (err, rows, fields) {
      if (err) {
        console.log("불러오기 실패");
      } else {
        console.log("불러오기 성공");
        res.send(rows[0]);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
