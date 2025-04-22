import express from "express";
import fs from "fs";
import ejs from "ejs";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});

app.get("/result", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(`id: ${userid}, pw: ${userpw}`);

  //   const filePath = path.join(__dirname, "views", "result.html");
  //   ejs.renderFile(filePath, (err, data) => {
  //     if (err) {
  //       res.writeHead(500, { "Content-Type": "text/plain" });
  //       res.end("rendering error2");
  //       return;
  //     } else {
  //       res.writeHead(404, { "Content-Type": "text/plain" });
  //       res.end("page not found");
  //     }
  //   });
});

app.get("/login", (req, res) => {
  console.log("login 호출!(GET)");
  console.log(req.query);
  console.log("아이디: ", req.query.userid);
  console.log("비밀번호: ", req.query.userpw);
});

app.listen(3000, () => {
  console.log("서버 실행중");
});
