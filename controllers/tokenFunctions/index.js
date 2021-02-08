require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
//
module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "15d" });
  },
  sendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken }, message: "ok" });
  },
  resendAccessToken: (res, accessToken, data) => {
    res.json({ data: { accessToken, userInfo: data }, message: "ok" });
  },
  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return "req.headers 에 토큰이 없습니다";
    }
    const token = authorization.split(" ")[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      // return null if invalid token
      return "검증되지 않은 토큰입니다";
    }
  }
};
