require("dotenv").config();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const controllers = require("./controllers");

app.use(express.json());

app.use(express.urlencoded({ extended: false })); // extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 다는 의미이다.

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(cookieParser());
app.post("/login", controllers.login);
app.post("/logout", controllers.logOut);
app.post("/postComment", controllers.postComment);
app.post("/postContent", controllers.postContent);
app.post("/signUp", controllers.signUp);
app.post("/signOut", controllers.signOut);
app.post("/deleteComment", controllers.deleteComment);
app.post("/deleteContent", controllers.deleteContent);
app.get("/getUserInfo", controllers.getUserInfo);
app.get("/getComment", controllers.getComment);
app.get("/getContent", controllers.getContent);
app.get("/accesstokenrequest", controllers.accessTokenRequest);



const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다. 
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.

const server = https
    .createServer(
        {
          key: fs.readFileSync("/Users/yuJaeWu" + "/key.pem"),
          cert: fs.readFileSync("/Users/yuJaeWu" + "/cert.pem"),
        },
        app
    )
    .listen(HTTPS_PORT, () => {
      console.log(`server listen in ${HTTPS_PORT}`);
    });

module.exports = server;

